using Microsoft.AspNetCore.Mvc;
using TkmApi.Data;
using TkmApi.Model;

namespace TkmApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly Context _context;

        public UserController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var scoreList = _context.users.ToList();
            return Ok(scoreList);
        }

        [HttpPost]
        public IActionResult AddUsers(Users users)
        {
            _context.Add(users);
            _context.SaveChanges();
            return Ok();
        }
        [HttpGet("{id}")]
        public IActionResult GetUserById(int id)
        {
            var user = _context.users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(user);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult UserDelete(int id)
        {
            var user = _context.users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            else
            {
                _context.Remove(user);
                _context.SaveChanges();
                return Ok();
            }
        }
    
    }
}
