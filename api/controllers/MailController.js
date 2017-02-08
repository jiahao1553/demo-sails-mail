/**
 * MailController
 *
 * @description :: Server-side logic for managing mails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var directTransport = require('nodemailer-direct-transport');
var nodemailer = require('nodemailer');
var options = {};
var transporter = nodemailer.createTransport(directTransport(options));

module.exports = {
	send: function(req, res) {
    let mailOptions = {
			from: 'ess-notify@test.com',
        to: req.param('to'),
        subject: 'Test Success',
        html: '<p><b>Passed:</b><br>Email is sent successfully.</p>'
		};
		transporter.sendMail(mailOptions, function(error, response) {
			if (error) {
					res.end("Error");
			} else {
					res.end("Sent");
			}
	});
  }
};
