import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { registerElement } from "nativescript-angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { isIOS } from "tns-core-modules/platform";
import { TextInputLayoutValueAccessor } from "./valueacessor.directive";

registerElement("TextInputLayout", () => require("../textInputLayout").TextInputLayout);
registerElement("TextInputLayoutWithIcon", () => require("../textInputLayout").TextInputLayoutWithIcon);



@NgModule({
    declarations: [
        TextInputLayoutValueAccessor
    ],
    providers: [],
    imports: [
        FormsModule,
        NativeScriptFormsModule
    ],
    exports: [
        FormsModule,
        TextInputLayoutValueAccessor
    ]
})
export class TextInputLayoutModule {
}