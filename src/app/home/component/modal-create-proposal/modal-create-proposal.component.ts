import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HospitalDepartmentService } from 'src/app/_services/hospital-department.service';
import { ThrowStmt } from '@angular/compiler';
import { HospitalDepartment } from 'src/app/_models/hospital-department';
import { ProposalService } from 'src/app/_services/proposal.service';

@Component({
  selector: 'app-modal-create-proposal',
  templateUrl: './modal-create-proposal.component.html',
  styleUrls: ['./modal-create-proposal.component.css']
})
export class ModalCreateProposalComponent implements OnInit {
  departments: HospitalDepartment[] = []
  selectedDepartment: HospitalDepartment;
  proposalContent: string = ''


  constructor(
    private bsModalRef: BsModalRef,
    private hospitalDepartmentService: HospitalDepartmentService,
    private proposalService: ProposalService){ }


  ngOnInit(): void {
    this.hospitalDepartmentService.getAllDepartment().subscribe(res=>{
      this.departments = res.map(item =>{
        let hospitalDepartment = item as HospitalDepartment;
        return hospitalDepartment
      })
      // console.log(this.departments)
    }, err =>{
      console.log(err)
    })
  }

  onSave(){
    let formData = {
      "contentProposal": this.proposalContent,
      "hospitalDepartmentId": this.selectedDepartment.id,
    }
    this.proposalService.createProposal(formData).subscribe(res =>{
      console.log(res)
    }, err=>{
      console.log(err)
    })

    console.log(formData)
    this.bsModalRef.hide()
  }

  onCancel(){
    this.bsModalRef.hide()
  }

}