import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {BaseEncodingComponent} from './base-encoding/base-encoding.component';
import {FormsModule} from '@angular/forms';
import { HashComponent } from './hash/hash.component';
import { StringComponent } from './string/string.component';
import { BinaryComponent } from './binary/binary.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'base64', component: BaseEncodingComponent},
    {path: 'hash', component: HashComponent},
    {path: 'string', component: StringComponent},
    {path: 'binary', component: BinaryComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BaseEncodingComponent,
        HashComponent,
        StringComponent,
        BinaryComponent,
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
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        FormsModule,
        MatTooltipModule,


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
