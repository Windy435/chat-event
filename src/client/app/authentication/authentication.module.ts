import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AuthenticationComponent],
  exports: [AuthenticationComponent],
  providers: []
})
export class AuthenticationModule { }
