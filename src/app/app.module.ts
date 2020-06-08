import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { ModalCreateProposalComponent } from './home/component/modal-create-proposal/modal-create-proposal.component';
import { ModalUpdateProgressComponent } from './home/component/modal-update-progress/modal-update-progress.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { AppRoutingModule } from './app-routing.module';
import { appRoutingModule } from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        DataTablesModule,
        ModalModule.forRoot(),
        BrowserAnimationsModule,
        MglTimelineModule,
        AgGridModule.withComponents([]),
        NgbModule,
        // appRoutingModule
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        ModalCreateProposalComponent,
        ModalUpdateProgressComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        BsModalRef
    ],
    entryComponents: [
        ModalCreateProposalComponent,
        ModalUpdateProgressComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }