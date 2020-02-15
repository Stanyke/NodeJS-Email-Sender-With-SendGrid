const express = require('express')
  , path = require('path')
  , app = express()
  ,cors = require('cors')
  ,sgMail = require('@sendgrid/mail');

app.use(cors());

sgMail.setApiKey(YOUR_SENDGRID_API);

const msg = {
  to: 'receivingemail@mail.com',
  from: 'sendingemail@example.com',
  subject: 'SendGrid Powered By Twilio',
  text: 'Hey, I am using Node.js',
  html: '<strong>To send this wonderful email</strong>',
};

const PORT = process.env.PORT || 3000;

app.set(`Server running on port: , ${PORT}`);

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req, res) =>
{
  sgMail.send(msg);
  res.send('Successfully! Sent mail');
});


app.listen(PORT, () =>
{
  console.log('Node.js server is running on port ' + PORT);
});