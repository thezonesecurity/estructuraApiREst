"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class RoutesController {
    constructor() {
    }
    createUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            return response.status(201).json({ server: "hola mundo- meethod post" });
        });
    }
    getUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            return response.status(201).json({ server: "hola mundo- meethod get" });
        });
    }
    //ejemplo
    isPrime(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = request.body;
            var number = Number(data.number);
            for (var i = 2; i < number / 2; i++) {
                if (number % i == 0) {
                    return response.status(200).json({ number, msn: "No es primo" });
                }
            }
            return response.status(200).json({ number, msn: "Es primo" });
        });
    }
}
exports.default = RoutesController;
//# sourceMappingURL=RoutesController.js.map