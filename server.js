const express = require( 'express' );
let bodyParser = require( 'body-parser' );
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static( 'public' ) );
app.set( 'view engine', 'ejs' );

const homeController = require( './controllers/home.js' );
const pictureController = require( './controllers/pictures.js' );

app.get( '/', homeController.index );
app.get( '/pictures', pictureController.pictureIndex );

app.listen( port, () => {
	console.log( `App is listening on port:${port}` );
});