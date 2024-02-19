import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [ToastrModule.forRoot({
    timeOut:3000,
    positionClass:'toast-bottom-right',
    newestOnTop:false
  })],
  exports: [ToastrModule],
})
export class ToastrConfigModule {}
