
using Newtonsoft.Json;

namespace PeoplePortal.Api
{
    public class Person
    {
        public int? Id { get; set; }

        [JsonProperty("first_name")]
        public string FirstName { get; set; }

        [JsonProperty("last_name")]
        public string LastName { get; set; }

        public string Email { get; set; }

        public bool Status { get; set; }

        public string Gender { get; set; }
    }
}