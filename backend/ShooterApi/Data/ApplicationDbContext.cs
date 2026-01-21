using Microsoft.EntityFrameworkCore;
using ShooterApi.Models;

namespace ShooterApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Shooter> Shooters { get; set; }
    }
}
