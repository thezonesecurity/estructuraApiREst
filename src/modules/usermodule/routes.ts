import RoutesController from "./routeController/RoutesController";
import { Express } from "express";
class Routes {
    private routesController: RoutesController;
    private routeparent: string;
    constructor(routeparent: string, app: Express) {
        this.routesController = new RoutesController();
        this.routeparent = routeparent;
        this.configureRoutes(app);
    }
    private configureRoutes(app: Express) {
        app.route(`${this.routeparent}/users`).post(this.routesController.createUsers);//creara un usuario nuevo
        app.route(`${this.routeparent}/usersG`).get(this.routesController.getUsers);//lee a un user
        app.route(`${this.routeparent}/isprime`).post(this.routesController.isPrime);//ve si un nro es primo
    }
}
export default Routes;