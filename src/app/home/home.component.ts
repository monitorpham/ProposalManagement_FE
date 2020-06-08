import { Component } from '@angular/core';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { Proposal } from '../_models/proposal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalCreateProposalComponent } from './component/modal-create-proposal/modal-create-proposal.component';
import { ModalUpdateProgressComponent } from './component/modal-update-progress/modal-update-progress.component';
import { ProposalService } from '../_services/proposal.service';



@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
    proposals: Proposal[] = [];

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private modalService: BsModalService,
        private bsModalRef: BsModalRef,
        private proposalService: ProposalService,
    ) {
    }

    ngOnInit() {
        this.loadData()
    }

    loadData() {
        this.proposalService.getAllProposals().subscribe(res =>{
            this.proposals = res.map(item =>{
                let proposal = new Proposal()
                proposal.id = item.id
                proposal.contentProposal = item.contentProposal
                proposal.startDate = item.startDate
                proposal.endDate = item.endDate
                proposal.currentProgressName = item.currentProgressName
                proposal.hospitalDepartment = item.hospitalDepartment.hospitalDepartmentName
                proposal.registerBy = item.userExtra.User.firstName
                proposal.Group = item.equiqmentGroup.nameGroup
            }, err =>{
                console.log(err)
            })
        })
    }

    OpenCreateProposalModal() {
        // const initialState = {
        //     title: 'Modal with component'
        //   };
        this.bsModalRef = this.modalService.show(ModalCreateProposalComponent,{class: "modal-lg"});
    }

    OpenUpdateProgressModal() {
        this.bsModalRef = this.modalService.show(ModalUpdateProgressComponent,{class: "modal-lg"});
        this.bsModalRef.content.proposal = null;
    }

}