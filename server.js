const express = require( 'express' );
let bodyParser = require( 'body-parser' );
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static( 'public' ) );
app.use(bodyParser.urlencoded( {extended: true } ));
app.set( 'view engine', 'ejs' );

const homeController = require( './controllers/home.js' );
const pictureController = require( './controllers/pictures.js' );
const aboutController = require( './controllers/about.js' );
const termsController = require( './controllers/terms.js' );
const bookController = require( './controllers/book.js' );
const contactController = require( './controllers/contact.js' );
const attractionsController = require( './controllers/attractions.js' );

app.get( '/', homeController.index );
app.get( '/pictures', pictureController.pictureIndex );
app.get( '/about', aboutController.aboutIndex );
app.get( '/terms-and-conditions', termsController.termsIndex );
app.get( '/book', bookController.bookIndex );
app.get( '/contact', contactController.contactIndex );
app.get( '/image', pictureController.pictureView );
app.get( '/attractions', attractionsController.attractionsIndex );

//post requests
app.post( '/customerContact', contactController.contactForm );

app.listen( port, () => {
	console.log( `App is listening on port:${port}` );
});