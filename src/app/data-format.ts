import { FormControl } from '@angular/forms'
export class DataFormat extends FormControl {

    setValue(value: string, options: any) {
        if (value.match(/[^0-9|\/]/gi)) {

            super.setValue(this.value, { ...options, emitModelToViewChange: true })

            return;
        }
        if (value.length > 5) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true })
            return;
        }
        if (value.length === 2 && this.value.length === 3) {
            super.setValue(value, { ...options, emitModelToViewChange: true })
            return;
        }
        if (value.length === 2) {
            super.setValue(value + '/', { ...options, emitModelToViewChange: true })
            return;
        }
        if (value.length === 3 && this.value.length === 2) {
            super.setValue(value.substring(0, 2) + '/' + value.substring(2), { ...options, emitModelToViewChange: true })
            return;
        }
        super.setValue(value, { ...options, emitModelToViewChange: true })

    }
}
