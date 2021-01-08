"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var m = require("mithril");
var error_message_1 = require("./error_message");
var errorMessage = "There were issues with the data provided, please check the errors below.";
exports.Form = {
    view: function (_a) {
        var _b = _a.attrs, changeset = _b.changeset, onSubmit = _b.onSubmit, className = _b.className, children = _a.children;
        return m("form.form", {
            class: className,
            onsubmit: function (event) {
                event.preventDefault();
                onSubmit && onSubmit(changeset);
            },
        }, [
            changeset.hasAnyErrors() && m(error_message_1.ErrorMessage, { error: errorMessage }),
            children,
            m("input", { type: "submit", style: "display: none" }),
        ]);
    },
};
