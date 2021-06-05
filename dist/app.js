"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const init_1 = __importDefault(require("./modules/usermodule/init")); //importamos todos los modulos
const mongoose_1 = __importDefault(require("mongoose")); //importacion de la bd
class App {
    constructor() {
        this.app = express_1.default();
        this.configuration();
        this.connectDatabase();
        this.initApp();
    }
    connectDatabase() {
        console.log("database okey...");
        let host = process.env.DBHOST || "mongodb://172.18.0.2:27017"; //hace referencia file docker-compose.yml
        let database = process.env.DATABASE || "seminario"; //hace referencia file docker-compose.yml
        let conenctionString = `${host}/${database}`; //para la adena de conexion
        mongoose_1.default.connect(conenctionString, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose_1.default.connection.on("Error...", err => {
            console.log("connection fail...");
            console.log(err);
        });
        mongoose_1.default.connection.on("open", () => {
            console.log("database connection success!...");
        });
        this.mongooseCLient = mongoose_1.default;
    }
    configuration() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    initApp() {
        console.log("LOAD MODULES");
        const usermodule = new init_1.default("/api", this.app);
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map