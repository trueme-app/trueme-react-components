"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var react_1 = require("trueme-design-system/react");
var baseStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), react_1.colours.green.base, react_1.borders.radius.base, react_1.colours.green.dark);
exports.baseStyles = baseStyles;
var attrStyles = {
    underlayColor: react_1.colours.green.dark
};
exports.attrStyles = attrStyles;
var templateObject_1;
