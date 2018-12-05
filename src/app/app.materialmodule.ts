import { NgModule } from '@angular/core';
import { MatListModule, MatInputModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
  ],
  exports : [
    MatInputModule ,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
  ]
})
export class MaterialModule { }
