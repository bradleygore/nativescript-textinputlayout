import { Directive, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { TextValueAccessor } from "nativescript-angular/forms/value-accessors/text-value-accessor";

const MASKED_TEXT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputLayoutValueAccessor), multi: true
};

/**
 * The accessor for setting a selectedIndex and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <TextInputLayout [(ngModel)]="model.test">
 *  ```
 */
@Directive({
    selector:
    "TextInputLayout[ngModel], TextInputLayout[formControlName], TextInputLayout[formControl]," +
    "textInputLayout[ngModel], textInputLayout[formControlName], textInputLayout[formControl]," +
    "text-input-layout[ngModel], text-input-layout[formControlName], text-input-layout[formControl]," +
    "TextInputLayoutWithIcon[ngModel], TextInputLayoutWithIcon[formControlName], TextInputLayoutWithIcon[formControl]," +
    "textInputLayoutWithIcon[ngModel], textInputLayoutWithIcon[formControlName], textInputLayoutWithIcon[formControl]," +
    "text-input-layout-with-icon[ngModel], text-input-layout-with-icon[formControlName], text-input-layout-with-icon[formControl]",
    providers: [MASKED_TEXT_VALUE_ACCESSOR],
    host: {
        "(touch)": "onTouched()",
        "(textChange)": "onChange($event.value)"
    }
})
export class TextInputLayoutValueAccessor extends TextValueAccessor {
    // Empty as we will use the same logic as the TextValueAccessor 
}