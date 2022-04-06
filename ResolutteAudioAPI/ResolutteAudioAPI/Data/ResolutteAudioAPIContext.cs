using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ResolutteAudioAPI.Models;

namespace ResolutteAudioAPI.Data
{
    public class ResolutteAudioAPIContext : DbContext
    {
        public ResolutteAudioAPIContext (DbContextOptions<ResolutteAudioAPIContext> options)
            : base(options)
        {
        }

        public DbSet<ResolutteAudioAPI.Models.Audio> Audio { get; set; }
    }
}
