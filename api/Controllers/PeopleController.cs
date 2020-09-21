using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PeoplePortal.Data.PeopleRepository;

namespace PeoplePortal.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PeopleController : ControllerBase
    {
        static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        readonly ILogger<PeopleController> _logger;
        IPeopleRepository peopleRepository;
        public PeopleController(ILogger<PeopleController> logger, IPeopleRepository peopleRepository)
        {
            _logger = logger;
            this.peopleRepository = peopleRepository;

        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var people = peopleRepository.GetAll();
            
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
