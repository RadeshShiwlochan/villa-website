exports.pictureIndex = ( req, res ) => {
  res.render( 'pictures' );
}; 

exports.pictureView = ( req, res ) => {
  const pictureId = req.query.id + '.jpg';
  res.render( 'picture', { id: pictureId } );
}