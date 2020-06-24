import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from '../../../_services/user.service';
import { EquipmentGroupService} from '../../../_services/equipment-group.service';
import { EquipmentGroup } from 'src/app/_models/equipment-group';
import { User } from '../../../_models/user';
import { HttpParams } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create-user',
  templateUrl: './modal-create-user.component.html',
  styleUrls: ['./modal-create-user.component.scss']
})
export class ModalCreateUserComponent implements OnInit {
  user!: User;
  isSaving = false;
  loading = false;

  error = '';
  authorities: string[] = [];
  // login: string = ''
  // firstName: string = ''
  // lastName: string = ''
  // phone: string = ''
  // email: string = ''
  // authority: string = ''

  groups: EquipmentGroup[] = [];
  selectedGroup: EquipmentGroup;
  // users: User[]| null = null;

  constructor(
    private bsModalRef: BsModalRef,
    private userService: UserService,
    private equipmentGroupService: EquipmentGroupService,
    private fb: FormBuilder
  ) { }

  
  ngOnInit(): void {
    this.userService.authorities().subscribe(authorities => {
      this.authorities = authorities;
    }, err =>{
      console.log(err)
    });
    this.equipmentGroupService.groups().subscribe(res=>{
      this.groups = res.map(item =>{
        let hospitalDepartment = item as EquipmentGroup;
        return hospitalDepartment
      })
      // console.log(this.departments)
    }, err =>{
      console.log(err)
    })
  }

  createUserForm = this.fb.group({
    login: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
      ],
    ],
    firstName: ['', [Validators.maxLength(50)]],
    lastName: ['', [Validators.maxLength(50)]],
    email: ['', [Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    phone: ['',[Validators.required]],
    selectedGroup: ['',[Validators.required]],
    authorities: ['',[Validators.required]],
  });

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.bsModalRef.hide()
  }

  private onSaveError(): void {
    this.isSaving = false;
  }


  save(): void {
    // console.log(this.createUserForm)
    this.isSaving = true;
    const options = {
      params: new HttpParams().append("phone",this.createUserForm.value.phone)
                              .append("idGroup",this.createUserForm.value.selectedGroup.id)
    }
    
    // console.log(options)
    this.loading = true;
    this.userService.createUser(this.createUserForm.value,options).subscribe
      (res =>{
        console.log(res)
        this.onSaveSuccess()
      },error => {
        if(error="error.validation")
        this.error = "Xin vui lòng nhập lại.";
        this.loading = false;
    })

  //     (
  //       () => 
  //       () => this.onSaveError()
  //     );
  //   }
   }
   onCancel(){
    this.bsModalRef.hide()
  }
  refresh(){
    window.location.reload();
  }









  // onSave(){
  //   const options = {

  //     params: new HttpParams().append("phone",this.phone)
  //                             .append("group",this.selectedGroup.id)
  //   }
  //   let formData = {
  //     "login" :this.login,
  //     "firstName": this.firstName,
  //     "lastName": this.lastName,
  //     "email": this.email,
  //     "authority": this.authority
  //   }
  //   console.log(formData)
    
  //   this.userService.createUser(formData,options).subscribe(res =>{
  //     console.log(res)
  //   },error => {
  //     if(error="error.validation")
  //     this.error = "Xin vui lòng nhập lại.";
  // })
  //   this.bsModalRef.hide()
  // }
  

}
