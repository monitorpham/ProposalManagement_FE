import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../../../_models/user';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.scss']
})
export class ModalEditUserComponent implements OnInit {

  user!: User;
  authorities: string[] = [];
  isSaving = false;

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private bsModalRef: BsModalRef
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ user }) => {
      console.log(user)
      if (user) {
        this.user = user;
        if (this.user.id === undefined) {
          this.user.activated = true;
        }
        this.updateForm(user);
      }
    });
    this.userService.authorities().subscribe(authorities => {
      this.authorities = authorities;
    });
  }

  editForm = this.fb.group({
    id: [],
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
    activated: [],
    authorities: [],
  });

  save(): void {
    this.isSaving = true;
    this.updateUser(this.user);
    this.userService.update(this.user).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  private updateForm(user: User): void {
    this.editForm.patchValue({
      // id: user.id,
      login: user.login,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      activated: user.activated,
      authorities: user.authorities,
    });
  }

  private updateUser(user: User): void {
    user.login = this.editForm.get(['login'])!.value;
    user.firstName = this.editForm.get(['firstName'])!.value;
    user.lastName = this.editForm.get(['lastName'])!.value;
    user.email = this.editForm.get(['email'])!.value;
    user.activated = this.editForm.get(['activated'])!.value;
    user.authorities = this.editForm.get(['authorities'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.bsModalRef.hide()
  }

  private onSaveError(): void {
    this.isSaving = false;
  }

  onCancel(){
    this.bsModalRef.hide()
  }

}
