import { Component, OnInit } from '@angular/core';
import { Proposal } from '../_models/proposal';
import { AccountService } from '../_services/account.service';
import { ProposalService } from '../_services/proposal.service';
// import { UserService, AuthenticationService } from '../_services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalCreateProposalComponent } from './component/modal-create-proposal/modal-create-proposal.component';
import { ModalUpdateProgressComponent } from './component/modal-update-progress/modal-update-progress.component';
import { Subject } from 'rxjs';
import { ModalDeleteProposalComponent } from './component/modal-delete-proposal/modal-delete-proposal.component';
import { ModalViewProgressComponent } from './component/modal-view-progress/modal-view-progress.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  proposals: Proposal[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(
    // private userService: UserService,
    private accountService: AccountService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private proposalService: ProposalService,
  ) {
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.loadData()
    console.log(this.proposals)

    
  }

  loadData() {
    this.proposalService.getAllProposals().subscribe(res => {
      this.proposals = res.map(item => {
        let proposal = new Proposal()
        proposal.id = item.proposal.id
        proposal.note = item.proposal.note
        proposal.contentProposal = item.proposal.contentProposal
        proposal.startDate = proposal.convertDate(item.proposal.startDate)
        proposal.endDate = proposal.convertDate(item.proposal.startDate)
        proposal.currentProgressName = item.currentProgressName
        proposal.hospitalDepartment = item.proposal.hospitalDepartment.hospitalDepartmentName
        proposal.registerBy = item.proposal.userExtra.user.firstName
        proposal.Group = item.proposal.userExtra.equiqmentGroup.nameGroup
        return proposal
      }, err => {
        console.log(err)
      })
      this.dtTrigger.next();
    })
  }

  reloadData(){
    this.proposalService.getAllProposals().subscribe(res => {
      this.proposals = res.map(item => {
        let proposal = new Proposal()
        proposal.id = item.proposal.id
        proposal.note = item.proposal.note
        proposal.contentProposal = item.proposal.contentProposal
        proposal.startDate = proposal.convertDate(item.proposal.startDate)
        proposal.endDate = proposal.convertDate(item.proposal.startDate)
        proposal.currentProgressName = item.currentProgressName
        proposal.hospitalDepartment = item.proposal.hospitalDepartment.hospitalDepartmentName
        proposal.registerBy = item.proposal.userExtra.user.firstName
        proposal.Group = item.proposal.userExtra.equiqmentGroup.nameGroup
        return proposal
      }, err => {
        console.log(err)
      })
    })
  }

  OpenCreateProposalModal() {
    this.bsModalRef = this.modalService.show(ModalCreateProposalComponent, { class: "modal-lg" });
    this.modalService.onHide.subscribe((reason: string) => {
      this.reloadData()
    })
  }

  OpenUpdateProgressModal(proposal) {
    const initialState = {
      proposal: proposal,
    };
    this.bsModalRef = this.modalService.show(ModalUpdateProgressComponent, {initialState, class: "modal-lg"});
    this.modalService.onHide.subscribe((reason: string) => {
      this.reloadData()
    })
  }

  openDeleteProposalModal(proposal){
    const initialState = {
      proposal: proposal,
    };
    this.bsModalRef = this.modalService.show(ModalDeleteProposalComponent, {initialState})
    this.modalService.onHide.subscribe((reason: string) => {
      this.reloadData()
    })
  }


  OpenViewProgressModal(proposal){
    const initialState = {
      proposal: proposal,
    };
    this.bsModalRef = this.modalService.show(ModalViewProgressComponent, {initialState, class: "modal-lg"});
  }

}
