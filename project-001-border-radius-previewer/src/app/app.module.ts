import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BorderRadiusPreviewerComponent } from './border-radius-previewer/border-radius-previewer.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderRadiusPreviewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
