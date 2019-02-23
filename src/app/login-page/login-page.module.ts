import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { LoginRoutingModule } from './login-page.routing.module';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, IonicModule, LoginRoutingModule],
  entryComponents: [LoginPageComponent],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {}
