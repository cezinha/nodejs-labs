var emailer = require("nodemailer"),
    fs      = require("fs"),
    _       = require("underscore");

var Emailer = function (options, data){
  this.options = options;
  this.data = data;
  this.attachments = [
    {
      "fileName": "logo.png",
      "filePath": "./public/images/email/logo.png",
      "cid": "logo@myapp"
    }
  ];

  this.send = function(callback) {
    var html = this.getHTML(this.options.to.template, this.data);
    var attachments = this.getAttachments(html);
    var messageData = {
        "to": "'" + this.options.to.name + " " + this.options.to.surname + "' <" + this.options.to.email + ">",
        "from": "'Myapp.com'",
        "subject": this.options.subject,
        "html": html,
        "generateTextFromHTML": true,
        "attachments": attachments
      };

    var transport = this.getTransport();
    transport.sendMail(messageData, callback)
  };

  this.getTransport = function() {
    return emailer.createTransport({
      service: "Gmail",
      auth: {
        user: "user@gmail.com",
        pass: "pass"
      }
    });
  };

  this.getHTML = function(templateName, data) {
    var templatePath = "./views/emails/" + templateName + ".html";
    var templateContent = fs.readFileSync(templatePath, encoding="utf8");
    return _.template(templateContent, data, {interpolate: /\{\{(.+?)\}\}/g});
  };

  this.getAttachments = function(html) {
    var attachments = [];
    for (var attachment in this.attachments) {
      //if (html.search("cid:" + attachment.cid) > -1) {
        attachments.push(attachment);
      //}
    }
    return attachments;
  };

}

module.exports = Emailer;