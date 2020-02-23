import { NgModule } from '@angular/core';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { SingleDatePickerComponent } from './single-date-picker/single-date-picker.component';

@NgModule({
  declarations: [DateRangePickerComponent,SingleDatePickerComponent],
  imports: [
  ],
  exports: [DateRangePickerComponent,SingleDatePickerComponent]
})
export class AngularReactDatesModule { }
