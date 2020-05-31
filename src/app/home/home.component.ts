import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';


@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
    // home
    // private gridApi;
    // private gridColumnApi;
    // public columnDefs;
    // private sortingOrder;

    // user
    loading = false;
    currentUser: User;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        
        // this.columnDefs=[
        //     {
        //         headerName : "ID",
        //         field: "idproposal",
        //         width: 150,
        //         sortingOrder:["asc","desc"]
        //     },
        //     {
        //         headerName : "Nội dung",
        //         field : "contentproposal",
        //         width: 250,
        //         sortingOrder:["asc","desc"]
        //     },
        //     {
        //         headerName : "Khoa Bệnh Viện",
        //         field : "hospitaldepartment",
        //         width: 200,
        //         sortingOrder:["asc","desc"]
        //     }
            // ,
            // {
            //     headerName : "Ngày nhận",
            //     field : "contentproposal",
            //     width: 200,
            //     sortingOrder:["asc","desc"]
            // }
        // ]
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }

    // onGridReady(params){
    //     this.gridApi= params.api;
    //     this.gridColumnApi= params.columnApi;
    //     let dataValue = [{"idproposal":"1", "contentproposal": "Đề nghị sửa chữa máy TrueBeam", "hospitaldepartment": "A12"},{"idproposal":"2", "contentproposal": "Xin cấp mới máy khí dung", "hospitaldepartment": "A12B1"}]
    //     params.api.setRowData(dataValue);
    // }
    
    columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];
    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
}