import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {CrimLibFedMenuComponent} from "./crim-lib-fed-menu.component";


@NgModule({
  declarations: [
    CrimLibFedMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  exports: [
    CrimLibFedMenuComponent
  ]
})
export class CrimLibFedMenuModule {
}
