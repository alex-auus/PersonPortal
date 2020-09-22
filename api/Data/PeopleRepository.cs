using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using PeoplePortal.Api;

namespace PeoplePortal.Data.PeopleRepository
{
    public interface IPeopleRepository
    {
        IEnumerable<Person> GetAll();
        Person Find(int id);

        Person CreatePerson(Person person);
    }
    public class PeopleRepository : IPeopleRepository
    {
        static List<Person> people;
        public PeopleRepository()
        {
            var jsonData = File.ReadAllText(@"Data\MOCK_DATA.json");
            people = JsonConvert.DeserializeObject<List<Person>>(jsonData);
        }

        public Person CreatePerson(Person person)
        {
            var latestId = people.OrderBy(p => p.Id).Last().Id;

            latestId += 1;

            person.Id = latestId;

            people.Add(person);

            return person;
        }

        public Person Find(int id)
        {
            return people.SingleOrDefault(p => p.Id == id);
        }

        public IEnumerable<Person> GetAll()
        {
            return people;
        }
    }
}