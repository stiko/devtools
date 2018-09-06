import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
