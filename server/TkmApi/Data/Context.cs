using TkmApi.Model;
using Microsoft.EntityFrameworkCore;

namespace TkmApi.Data
{
    public class Context:DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            Database.Migrate();
        }
     
        public DbSet<Users> users { get; set; }
    }
}
