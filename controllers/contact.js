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
       from: `${req.body.email}`,
       to: 'mintrasvilla@gmail.com',
       subject: `${req.body.firstName} ${req.body.lastName} Inquiry for Villa Rental`,
       text: `Name: ${req.body.firstName} ${req.body.lastName}
              Email: ${req.body.email}
              PhoneNumber:${req.body.phoneNum}
              Country: ${req.body.county}
              Arrival Time: ${req.body.arriveTime}
              Departure Time: ${req.body.departTime}
              Number of Adults: ${req.body.adults}
              Number of Children: ${req.body.children}
              Travel Time Flexible: ${req.body.isSameAddress}
              Message: ${req.body.message}`
    }  
  transporter.sendMail(mailOptions, function(err, response) {
    if ( err )
      console.log( "ERROR SENDING EMAIL", err );
    else 
      console.log( "EMAIL SENT" );  
  })
  res.render( 'home' );   
}