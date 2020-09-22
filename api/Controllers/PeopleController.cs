using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PeoplePortal.Data.PeopleRepository;

namespace PeoplePortal.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PeopleController : ControllerBase
    {
        readonly ILogger<PeopleController> _logger;
        IPeopleRepository peopleRepository;
        public PeopleController(ILogger<PeopleController> logger, IPeopleRepository peopleRepository)
        {
            _logger = logger;
            this.peopleRepository = peopleRepository;

        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IEnumerable<Person> GetPeople()
        {
            // todo need to add pagination
            var result = peopleRepository.GetAll();
            return result;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Person> GetPerson(int id)
        {
            var person = peopleRepository.Find(id);

            if (person == null)
            {
                return NotFound();
            }

            return person;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult Post(Person person)
        {
            Thread.Sleep(1300); // to simulate processing time to be able to see busy indicator

            // TODO need to add validation possibly using action filter
            person = peopleRepository.CreatePerson(person);

            return CreatedAtAction(nameof(GetPerson), new { id = person.Id }, person);
        }
    }
}
