exports.contactIndex = ( req, res ) => {
  res.render( 'contact' );
}

exports.contactForm = ( req, res ) => {
  console.log( "This is res.body" );
  console.log( req.body );
  res.render( 'home' );   
}