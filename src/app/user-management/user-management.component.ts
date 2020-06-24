import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Account } from '../_models/account'
import { AccountService } from '../_services/account.service';
import { UserService } from '../_services/user.service';
// import { UserService, AuthenticationService } from '../_services';
import { UserExtrasService} from '../_services/user-extras';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalCreateUserComponent } from '../user-management/component/modal-create-user/modal-create-user.component';
import { ModalEditUserComponent } from '../user-management/component/modal-edit-user/modal-edit-user.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users: User[]| null = null;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  currentAccount: Account | null = null;
  groups: string[] = [];

  constructor(
    private accountService: AccountService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private userService: UserService,
    private userExtrasService: UserExtrasService,
  ) { }

  ngOnInit(): void {
    // this.accountService.identity().subscribe(account => (this.currentAccount = account));
    this.accountService.identity().subscribe(account => (
      // console.log(account),
      this.currentAccount = account));

    this.userExtrasService.userExtras().subscribe(groups => {
      this.groups = groups;
    }, err =>{
      console.log(err)
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.loadData()
    // console.log(this.users)
  }

  loadData() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res.map(item => {
        let user = new User()
        user.id = item.id
        user.login = item.login
        user.firstName = item.firstName
        user.lastName = item.lastName
        user.email = item.email
        user.activated = item.activated
        user.authorities = item.authorities
        user.createdDate = item.createdDate
        user.lastModifiedBy = item.lastModifiedBy
        user.lastModifiedDate = item.lastModifiedDate
        return user
      }, err => {
        console.log(err)
      })
      this.dtTrigger.next();
    })
  }

  loadAll() {
    this.userService.getAllUsers().subscribe(res =>this.users )
  }

  setActive(user: User, isActivated: boolean): void{
    this.userService.update({...user, activated: isActivated }).subscribe(() => this.loadAll());
  }
  
  // private loadAll(): void {
  //   this.userService.subscribe((res: HttpResponse<User[]>) => this.onSuccess(res.body, res.headers));
  // }

  // private onSuccess(users: User[] | null, headers: HttpHeaders): void {
  //   this.users = users;
  // }
  
  OpenCreateUserModal() {
    // const initialState = {
    //     title: 'Modal with component'
    //   };
    this.bsModalRef = this.modalService.show(ModalCreateUserComponent, { class: "modal-lg" });
  }

  OpenEditUserModal(user) {
    const initialState = {
      user: user,
      
    };
    // console.log(user)
    this.bsModalRef = this.modalService.show(ModalEditUserComponent, { initialState, class: "modal-lg" });
    // this.bsModalRef.content.user = null;
  }

}

