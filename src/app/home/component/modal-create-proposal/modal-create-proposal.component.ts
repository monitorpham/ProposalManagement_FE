import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-create-proposal',
  templateUrl: './modal-create-proposal.component.html',
  styleUrls: ['./modal-create-proposal.component.css']
})
export class ModalCreateProposalComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef){ }

  ngOnInit(): void {
  }

  onSave(){
    this.bsModalRef.hide()
  }

  onCancel(){
    this.bsModalRef.hide()
  }

}
