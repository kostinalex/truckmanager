using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TruckManager.Models;
using TruckManager.Persistence;

namespace TruckManager.Controllers
{

    public class EntryDataController : Controller
    {
        private readonly TruckManagerDbContext db;

        public EntryDataController(TruckManagerDbContext db)
        {          
            this.db = db;            
        }

        [HttpGet("/api/getmovies")]
        public async Task<IActionResult> GM()
        {
            var movies = db.Movies.ToList();

            return Ok(new {
                movies
            });
        }

    }
}
