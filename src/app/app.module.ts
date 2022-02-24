import { ContainerComponent } from './_container/container/container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/firestore';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';

import { NavbarComponent } from './_component/nav/navbar/navbar.component';
import { HomeComponent } from './_view/home/home.component';
import { LoginComponent } from './_page/login/login.component';
import { environment } from 'src/environments/environment';
import { CommodityComponent } from './_view/commodity/commodity.component';
import { ContactComponent } from './_view/contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContainerComponent,
    LoginComponent,
    CommodityComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MdbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    MessageService, ConfirmationService,
    {
      provide: FIRESTORE_SETTINGS,
      useValue: environment.emulator ? {
        host: 'localhost:8080',
        ssl: false
      } : undefined
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
