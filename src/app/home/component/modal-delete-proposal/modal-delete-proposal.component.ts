import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProposalService } from 'src/app/_services/proposal.service';

@Component({
  selector: 'app-modal-delete-proposal',
  templateUrl: './modal-delete-proposal.component.html',
  styleUrls: ['./modal-delete-proposal.component.scss']
})
export class ModalDeleteProposalComponent implements OnInit {
  proposal: any;

  constructor(
    private bsModalRef: BsModalRef,
    private proposalService: ProposalService
  ) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.bsModalRef.hide()
    this.proposalService.deleteProposal(this.proposal.id).subscribe(res =>{
      console.log(res)
    }, err =>{
      console.log(err)
    })
  }

  onCancel(){
    this.bsModalRef.hide()
  }

}
