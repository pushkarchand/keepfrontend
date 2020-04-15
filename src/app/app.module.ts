import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// used to create fake backend

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { StoreNamePipe } from './pipes/productName.pipe';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { TextItemComponent } from './text-item/text-item.component';
import { LinkItemComponent } from './link-item/link-item.component';
import { LocationItemComponent } from './location-item/location-item.component';
import { ImageItemComponent } from './image-item/image-item.component';
import {AgmCoreModule} from '@agm/core';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        NgbModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey:'AIzaSyATigFIif9UssJ_hfFNC968_vEN-N8TQa4'
        })
    ],
    declarations: [
        AppComponent,
        StoreComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        StoreNamePipe,
        StoreDetailsComponent,
        TextItemComponent,
        LinkItemComponent,
        LocationItemComponent,
        ImageItemComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };