using Sieve.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI.Models
{
    public class BlogPost
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Content is required")]
        public string Contents { get; set; }

        [Sieve(CanSort = true, Name = "created")]
        public DateTime CreatedDate { get; set; }

        public BlogPost()
        {
            this.CreatedDate = DateTime.UtcNow;
        }
    }
}
