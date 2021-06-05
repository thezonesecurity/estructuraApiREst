import express, { Express } from "express";
import * as bodyParser from "body-parser";
import UserModules from "./modules/usermodule/init";//importamos todos los modulos
import mongoose, { Mongoose } from "mongoose"; //importacion de la bd
class App {
    public app: Express = express();
    public mongooseCLient: Mongoose;
    constructor() {
        this.configuration();
        this.connectDatabase();
        this.initApp();
    }
    public connectDatabase() {
        console.log("database okey...");
        let host: string = process.env.DBHOST || "mongodb://172.18.0.2:27017"; //hace referencia file docker-compose.yml
        let database: string = process.env.DATABASE || "seminario";//hace referencia file docker-compose.yml
        let conenctionString: string = `${host}/${database}`;//para la adena de conexion
        mongoose.connect(conenctionString, {useNewUrlParser: true, useUnifiedTopology: true});
        mongoose.connection.on("Error...", err => { //para controlar un posible error ->evento
            console.log("connection fail...")
            console.log(err);
        });
        mongoose.connection.on("open", () => {//para ver si la conexion a sido exitosa ->evento
            console.log("database connection success!...")
        });
        this.mongooseCLient = mongoose;
    }
    public configuration() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    public initApp() {
        console.log("LOAD MODULES");
        const usermodule = new UserModules("/api",this.app);
    }
}
export default new App();