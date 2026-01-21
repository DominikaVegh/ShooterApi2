using System;

namespace ShooterApi.Models
{
    public class Shooter
    {
        public int Id { get; set; }

        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;

        public string Nationality { get; set; } = string.Empty;

        public DateTime DateOfBirth { get; set; }

        public string Discipline { get; set; } = string.Empty;
    }
}
