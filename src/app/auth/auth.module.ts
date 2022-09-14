import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [SharedModule],
  providers: [AuthService]
})
export class AuthModule { }
