import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProposalService } from 'src/app/_services/proposal.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modal-delete-proposal',
  templateUrl: './modal-delete-proposal.component.html',
  styleUrls: ['./modal-delete-proposal.component.scss']
})
export class ModalDeleteProposalComponent implements OnInit {
  proposal: any;

  constructor(
    private bsModalRef: BsModalRef,
    private toastr : ToastrService,
    private proposalService: ProposalService
  ) { }

  ngOnInit(): void {
  }

  onDelete(){
    
    this.proposalService.deleteProposal(this.proposal.id).subscribe(res =>{
      console.log(res)
      this.toastr.success("Delete proposal successfully!")
    }, err =>{
      console.log(err)
      this.toastr.error(err.message? err.message:  "Delete proposal failed!")
    })
    this.bsModalRef.hide()
  }

  onCancel(){
    this.bsModalRef.hide()
  }

}
