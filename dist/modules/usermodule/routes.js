"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RoutesController_1 = __importDefault(require("./routeController/RoutesController"));
class Routes {
    constructor(routeparent, app) {
        this.routesController = new RoutesController_1.default();
        this.routeparent = routeparent;
        this.configureRoutes(app);
    }
    configureRoutes(app) {
        app.route(`${this.routeparent}/users`).post(this.routesController.createUsers); //creara un usuario nuevo
        app.route(`${this.routeparent}/usersG`).get(this.routesController.getUsers); //lee a un user
        app.route(`${this.routeparent}/isprime`).post(this.routesController.isPrime); //ve si un nro es primo
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map