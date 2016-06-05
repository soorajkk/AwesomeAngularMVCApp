using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using AwesomeAngularMVCApp.Models;
using Microsoft.AspNet.Identity.Owin;
using System.Web.Script.Serialization;
using System;

namespace AwesomeAngularMVCApp.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        private ApplicationUserManager _userManager;
        private ApplicationSignInManager _signInManager;

        public AccountController() { }

        public AccountController(ApplicationUserManager userManager, ApplicationSignInManager signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        public ApplicationUserManager UserManager
        {
            get { return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>(); }
            private set { _userManager = value; }
        }

        public ApplicationSignInManager SignInManager
        {
            get { return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>(); }
            private set { _signInManager = value; }
        }

        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<bool> Login(LoginViewModel model)
        {
            var result = await SignInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, false);
            switch (result)
            {
                case SignInStatus.Success:
                    return true;
                default:
                    ModelState.AddModelError("", "Invalid login attempt.");
                    return false;
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<JsonResult> Register(RegisterViewModel model)
        {
            log.Debug("BEfore CountToAsync, RequestID :::: "+model.ResqustIdentifier);         
            var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            //var result = await UserManager.CreateAsync(user, model.Password);
            //if (!result.Succeeded) return false;
            //await SignInManager.SignInAsync(user, false, false);
            var result =await CountToAsync(Convert.ToInt32(model.ResqustIdentifier));
            log.Debug("After CountToAsync RequestID :::: " + model.ResqustIdentifier);
            return Json(model);
        }

        //public async Task<string> RandomAsync()
        //{

        //}
       
        private static async Task<bool> CountToAsync(int counerStat)
        {            
            if (counerStat % 2 == 0)
            {
                log.Debug("inside %2 ::::counerStat == " + counerStat);
                Random waitTime = new Random();
                double seconds = waitTime.Next(3 * 1000, 11 * 1000);
                int jaba = waitTime.Next(3 * 1000, 11 * 1000);
                // System.Threading.Thread.Sleep(jaba);
                await Task.Delay(5000);

            //   ;
                
            }
            ++counerStat;
            return true;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> RegisterWithIdentifier(RegisterViewModel model)
        {
            var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            // var result = await UserManager.CreateAsync(user, model.Password);
            //if (!result.Succeeded) return false;
            //await SignInManager.SignInAsync(user, false, false);                     
            // var result = await CountToAsync();     
            //return true;
            //return new RegisterViewModel()
            //{
            //    ResqustIdentifier = model.ResqustIdentifier
            //};
            return true;
        }


        [HttpPost]
        [AllowAnonymous]
        public bool xxx(RegisterViewModel model)
        {
            var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            // var result = await UserManager.CreateAsync(user, model.Password);
            //if (!result.Succeeded) return false;
            //await SignInManager.SignInAsync(user, false, false);                     
            // var result = await CountToAsync();     
            //return true;
            //return new RegisterViewModel()
            //{
            //    ResqustIdentifier = model.ResqustIdentifier
            //};
            return true;
        }
    }
}