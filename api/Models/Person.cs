
using Newtonsoft.Json;

namespace PeoplePortal.Api.Person
{
    public class Person
    {
        public string Id { get; set; }

        [JsonProperty("first_name")]
        public string FirstName { get; set; }

        [JsonProperty("last_name")]
        public string LastName { get; set; }
    }
}