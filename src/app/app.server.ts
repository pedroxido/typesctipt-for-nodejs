import express, { Express } from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app: Express = express();


const port: String = process.env.SERVER_PORT; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello worldcito!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );