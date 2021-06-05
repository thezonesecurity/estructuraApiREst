import { Request, Response } from "express";
class RoutesController {
    constructor() {

    }
    public async createUsers(request: Request, response: Response) {
       return response.status(201).json({ server: "hola mundo- meethod post" });
    }
    public async getUsers(request: Request, response: Response) {
        return response.status(201).json({ server: "hola mundo- meethod get" });
    }
    //ejemplo
    public async isPrime(request: Request, response: Response) {
        const data = request.body;
        var number = Number(data.number);
        for (var i = 2; i < number / 2; i++) {
            if (number % i == 0) {
                return response.status(200).json({ number, msn: "No es primo" });
            }
        }
        return response.status(200).json({ number, msn: "Es primo" })
    }
}
export default RoutesController;