using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular_ASPNETCore_Seed.Models;

namespace Angular_ASPNETCore_Seed.Apis
{
    [Route("api/messages")]
    public class MessagesController : Controller
    {
        [HttpGet]
        [ProducesResponseType(typeof(Message), 200)]
        public async Task<ActionResult> Messages()
        {
            //Simulate async process
            return await Task.Run(() =>
            {
                var msg = new Message { Data = "Seed is Working!" };
                return Ok(msg);
            });
        }
    }
}