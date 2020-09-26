using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruckManager.Models;

namespace TruckManager.Persistence
{
    public class TruckManagerDbContext : DbContext
    {

        public DbSet<Movie> Movies { get; set; }

        public TruckManagerDbContext(DbContextOptions<TruckManagerDbContext> options)
            : base(options)
        {

        }

    }
}
