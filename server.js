const express = require( 'express' );
let bodyParser = require( 'body-parser' );
const port = process.env.PORT || 3000;

let app = express();

app.use(express.static( 'public' ) );
app.set( 'view engine', 'ejs' );

let homeController = require( './controllers/home.js' );

app.get( '/', homeController.index );

app.listen( port, () => {
	console.log( `App is listening on port:${port}` );
});