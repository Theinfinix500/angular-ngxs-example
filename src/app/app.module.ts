import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";

import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { UserState } from "./state/user.state";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forRoot([UserState])
  ],
  declarations: [AppComponent, HelloComponent, ReadComponent, CreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
