"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rg_express_1 = __importDefault(require("rg-express"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
app.use(rg_express_1.default.routes(__dirname));
// Start the server
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
