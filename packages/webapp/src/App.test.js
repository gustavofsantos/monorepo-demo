"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var App_1 = __importDefault(require("./App"));
describe("index", function () {
    test("should render the hello message", function () {
        var getByText = react_2.render(<App_1.default />).getByText;
        expect(getByText(/hello/i)).toBeInTheDocument();
    });
});
