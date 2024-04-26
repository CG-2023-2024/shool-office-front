import { NgModule } from "@angular/core";
import { PersonsComponent } from "./persons/persons.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { TeachersComponent } from "./teachers/teachers.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        PersonsComponent,
        TeachersComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}