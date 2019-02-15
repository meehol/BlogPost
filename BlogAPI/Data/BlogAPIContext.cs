using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BlogAPI.Models
{
    public class BlogAPIContext : DbContext
    {
        public BlogAPIContext (DbContextOptions<BlogAPIContext> options)
            : base(options)
        {
        }

        public DbSet<BlogAPI.Models.BlogPost> BlogPost { get; set; }
    }
}
