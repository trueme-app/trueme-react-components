"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = __importDefault(require("styled-components/native"));
var react_native_1 = require("react-native");
var shared_1 = __importDefault(require("../shared"));
var styles_1 = require("../shared/styles");
var StyledButton = native_1.default(react_native_1.TouchableHighlight).attrs(styles_1.attrStyles)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), styles_1.baseStyles);
exports.default = shared_1.default(StyledButton);
var templateObject_1;
