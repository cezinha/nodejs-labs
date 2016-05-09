var options = {
  "to": {
    "email": "celina.uemura@gmail.com",
    "name": "Celina",
    "surname": "Uemura",
    "subject": "Test send email",
    "template": "invite"
  }
};

var data = {
  "name": "Celina",
  "surname": "Uemura",
  "id": "3434_invite_id"
};

var Emailer = require("./lib/emailer");
var emailer = new Emailer(options, data);
emailer.send(function(err, result) {
  if (err) console.log(err);
});