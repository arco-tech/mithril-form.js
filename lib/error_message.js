"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
var m = require("mithril");
exports.ErrorMessage = {
    view: function (_a) {
        var error = _a.attrs.error;
        if (typeof error === "string") {
            return m(".form__error-message", error);
        }
        else if (Array.isArray(error)) {
            return error.map(function (err) {
                return m(exports.ErrorMessage, { error: err });
            });
        }
        else if (typeof error === "object" &&
            error !== null &&
            typeof error.message === "string") {
            return m(".form__error-message", error.message);
        }
    },
};
