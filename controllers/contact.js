const nodemailer = require( 'nodemailer' );
const xoauth2 = require( 'xoauth2' );

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'mintrasvilla@gmail.com',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN
    },
  });

exports.contactIndex = ( req, res ) => {
  res.render( 'contact' );
}

exports.contactForm = ( req, res ) => {
    const response = JSON.stringify(req.body);

    const mailOptions = {
       from:  'Radesh <radesh0430@gmail.com>',
       to: 'mintrasvilla@gmail.com',
       subject: 'Inquiry for renting the villa',
       text: `${response}`
    }  
  transporter.sendMail(mailOptions, function(err, response) {
    if ( err )
      console.log( "ERROR SENDING EMAIL", err );
    else 
      console.log( "EMAIL SENT" );  
  })
  res.render( 'home' );   
}