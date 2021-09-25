using Microsoft.AspNetCore.Mvc;

namespace Module1.Controllers
{
    [Area("Module1")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}