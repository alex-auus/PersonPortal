using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using PeoplePortal.Api.Person;

namespace PeoplePortal.Data.PeopleRepository
{
    public interface IPeopleRepository
    {
        List<Person> GetAll();
    }
    public class PeopleRepository : IPeopleRepository
    {
        static List<Person> people;
        public PeopleRepository()
        {
            var jsonData = File.ReadAllText(@"Data\MOCK_DATA.json");
            people = JsonConvert.DeserializeObject<List<Person>>(jsonData);
        }

        public List<Person> GetAll()
        {
            return people;
        }
    }
}