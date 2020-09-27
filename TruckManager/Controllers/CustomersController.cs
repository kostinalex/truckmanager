using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TruckManager.Persistence;

namespace TruckManager.Controllers
{
    [Route("/api/getcustomers/")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly TruckManagerDbContext db;

        public CustomersController(TruckManagerDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public IActionResult getCustomers()
        {
            var customers = db.Customers.ToList();

            return Ok(new
            {
                customers
            });
        }

    }
}
