using System;
using Microsoft.AspNetCore.Mvc;

namespace NewsPortal.Controllers
{
    [Route("")]
    [ApiController]
    public class HomeController : Controller
    {
        /// <summary>
        /// Method displays Home view
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }
    }
}
