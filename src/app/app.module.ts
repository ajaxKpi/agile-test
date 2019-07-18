import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TextEditorComponent} from './components/text-editor/text-editor.component';
import {AddSpanPipe} from './pipes/add-span.pipe';
import {ContextMenuModule} from 'ngx-contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    AddSpanPipe,
  ],
  imports: [
    BrowserModule,
    ContextMenuModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
