"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var forms_2 = require("nativescript-angular/forms");
var valueacessor_directive_1 = require("./valueacessor.directive");
nativescript_angular_1.registerElement("TextInputLayout", function () { return require("../textInputLayout").TextInputLayout; });
nativescript_angular_1.registerElement("TextInputLayoutWithIcon", function () { return require("../textInputLayout").TextInputLayoutWithIcon; });
var TextInputLayoutModule = (function () {
    function TextInputLayoutModule() {
    }
    TextInputLayoutModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        valueacessor_directive_1.TextInputLayoutValueAccessor
                    ],
                    providers: [],
                    imports: [
                        forms_1.FormsModule,
                        forms_2.NativeScriptFormsModule
                    ],
                    exports: [
                        forms_1.FormsModule,
                        valueacessor_directive_1.TextInputLayoutValueAccessor
                    ]
                },] },
    ];
    return TextInputLayoutModule;
}());
exports.TextInputLayoutModule = TextInputLayoutModule;
