import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ModalCommentsComponent } from './modals/modal-comments/modal-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalCommentsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [
    ModalCommentsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
