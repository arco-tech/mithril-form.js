"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = void 0;
var m = require("mithril");
var error_message_1 = require("./error_message");
exports.FormField = {
    view: function (_a) {
        var _b = _a.attrs, changeset = _b.changeset, name = _b.name, label = _b.label, className = _b.className, input = _b.input, _c = _b.inputAttrs, inputAttrs = _c === void 0 ? {} : _c;
        return m(".form__field", { class: className }, [
            label && m(".form__field__label", label),
            m(".form__field__input", [
                m(input, __assign({ changeset: changeset, name: name }, inputAttrs)),
            ]),
            changeset.hasErrors(name) && m(".form__field__errors", [
                m(error_message_1.ErrorMessage, { error: changeset.getErrors(name) }),
            ]),
        ]);
    },
};
