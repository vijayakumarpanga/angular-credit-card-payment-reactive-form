import { FormControl } from '@angular/forms'
import { ComponentFactoryResolver } from '@angular/core';
export class CardFormat extends FormControl {

    setValue(value: string, options: any) {
        if (value.match(/[^0-9|\-]/gi)) {

            super.setValue(this.value, { ...options, emitModelToViewChange: true })

            return;
        }

        if (value.length > 19) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true })
            return;
        }
        if ((value.length === 4 && this.value.length === 5) || (value.length === 9 && this.value.length === 10) || (value.length === 14 && this.value.length === 15)) {
            super.setValue(value, { ...options, emitModelToViewChange: true })
            return;
        }
        if (value.length === 4) {
            super.setValue(value + '-', { ...options, emitModelToViewChange: true })
            return;
        }
        if (value.length === 5 && this.value.length === 4) {
            alert(value)
            super.setValue(value.substring(0, 4) + '-' + value.substring(4), { ...options, emitModelToViewChange: true })
            return;
        }
        if (value.length === 9) {
            super.setValue(value + '-', { ...options, emitModelToViewChange: true })
            return;
        }
        if (value.length === 10 && this.value.length === 9) {
            alert(value)
            super.setValue(value.substring(0, 9) + '-' + value.substring(9), { ...options, emitModelToViewChange: true })
            return;
        }
        if (value.length === 14) {
            super.setValue(value + '-', { ...options, emitModelToViewChange: true })
            return;

        }
        if (value.length === 15 && this.value.length === 14) {
            alert(value)
            super.setValue(value.substring(0, 14) + '-' + value.substring(14), { ...options, emitModelToViewChange: true })
            return;
        }

        super.setValue(value, { ...options, emitModelToViewChange: true })
    }
}
