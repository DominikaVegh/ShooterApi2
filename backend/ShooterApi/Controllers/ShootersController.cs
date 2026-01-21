using Microsoft.AspNetCore.Mvc;
using ShooterApi.Data;
using ShooterApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ShooterApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShootersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ShootersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetShooters()
        {
            var shooters = await _context.Shooters.ToListAsync();
            return Ok(shooters);
        }

        [HttpPost]
        public async Task<IActionResult> CreateShooter(Shooter shooter)
        {
            _context.Shooters.Add(shooter);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetShooters), shooter);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetShooterById(int id)
        {
            var shooter = await _context.Shooters.FindAsync(id);

            if (shooter == null)
            {
                return NotFound();
            }

            return Ok(shooter);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateShooter(int id, Shooter updatedShooter)
        {
            if (id != updatedShooter.Id)
            {
                return BadRequest();
            }

            var existingShooter = await _context.Shooters.FindAsync(id);

            if (existingShooter == null)
            {
                return NotFound();
            }

            existingShooter.FirstName = updatedShooter.FirstName;
            existingShooter.LastName = updatedShooter.LastName;
            existingShooter.Nationality = updatedShooter.Nationality;
            existingShooter.DateOfBirth = updatedShooter.DateOfBirth;
            existingShooter.Discipline = updatedShooter.Discipline;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShooter(int id)
        {
            var shooter = await _context.Shooters.FindAsync(id);

            if (shooter == null)
            {
                return NotFound();
            }

            _context.Shooters.Remove(shooter);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}