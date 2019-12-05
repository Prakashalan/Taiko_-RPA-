const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
(async () => {
     try {
          await openBrowser();
          await goto("google.com");
          await write("india post");
          await click("Google Search");
          await click("Government of India, Department of Post")
          var img = ("Enter characters as displayed in image");
          var FN = ("Enter the First number");
          var SN = ("Enter the Second number");
          var TD = ("Enter the Third number");
          var FO = ("Enter the Fourth number");
          var FV = ("Enter the Fifth number");
          var EVL = ("Evaluate the Expression");
          var text = await $('.required').text()
              
          if (text[0] == img) { // true
               var imgvalue = await $('.input-group').text()
               await write(imgvalue, into(textBox({ name: "ctl00$SPWebPartManager1$g_aa197fec_b38c_41a8_b14e_a11722636b37$ctl00$ucCaptcha1$txtCaptcha" })))  
          } else if (text[0] == FN) {
               var fnvalue = await $('.input-group').text()
               var res = fnvalue[0].split(",")[0];
               await write(res, into(textBox({ name: "ctl00$SPWebPartManager1$g_aa197fec_b38c_41a8_b14e_a11722636b37$ctl00$ucCaptcha1$txtCaptcha" })))
          } else if (text[0] == SN) {
               var snvalue = await $('.input-group').text()
               var res = snvalue[0].split(",")[1];
               await write(res, into(textBox({ name: "ctl00$SPWebPartManager1$g_aa197fec_b38c_41a8_b14e_a11722636b37$ctl00$ucCaptcha1$txtCaptcha" })))
          } else if (text[0] == TD) {
               var tdvalue = await $('.input-group').text()
               var res = tdvalue[0].split(",")[2];
               await write(res, into(textBox({ name: "ctl00$SPWebPartManager1$g_aa197fec_b38c_41a8_b14e_a11722636b37$ctl00$ucCaptcha1$txtCaptcha" })))
          } else if (text[0] == FO) {
               var fovalue = await $('.input-group').text()
               var res = fovalue[0].split(",")[3];
               await write(res, into(textBox({ name: "ctl00$SPWebPartManager1$g_aa197fec_b38c_41a8_b14e_a11722636b37$ctl00$ucCaptcha1$txtCaptcha" })))
          } else if (text[0] == FV) {
               var fvvalue = await $('.input-group').text()
               var res = fvvalue[0].split(",")[4];
               await write(res, into(textBox({ name: "ctl00$SPWebPartManager1$g_aa197fec_b38c_41a8_b14e_a11722636b37$ctl00$ucCaptcha1$txtCaptcha" })))
          } else if (text[0] == EVL) {
               var evlvalue = await $('.input-group').text()
               var res = evlvalue[0].substring(0, evlvalue[0].length - 1);
               var ans = eval(res)
               await write(ans, into(textBox({ name: "ctl00$SPWebPartManager1$g_aa197fec_b38c_41a8_b14e_a11722636b37$ctl00$ucCaptcha1$txtCaptcha" })))
          }

     } catch (error) {
          console.error(error);
     } finally {
          closeBrowser();
     }
})();


