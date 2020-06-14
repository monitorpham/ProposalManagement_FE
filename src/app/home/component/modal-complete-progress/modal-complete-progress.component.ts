import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProposalService } from 'src/app/_services/proposal.service';
import { ProgressService } from 'src/app/_services/progress.service';

@Component({
  selector: 'app-modal-complete-progress',
  templateUrl: './modal-complete-progress.component.html',
  styleUrls: ['./modal-complete-progress.component.scss']
})
export class ModalCompleteProgressComponent implements OnInit {

  progress: any

  constructor(
    private bsModalRef2: BsModalRef,
    private propsalService: ProposalService,
    private progressService: ProgressService
  ) { }

  ngOnInit(): void {
    console.log(this.progress)
  }

  onFinish(){
    this.progressService.completeProgress(this.progress.id).subscribe(res =>{
      console.log(res)
    }, err =>{
      console.log(err)
    })
    this.bsModalRef2.hide()
    
  }

  onCancel(){
    this.bsModalRef2.hide()
  }

  

}
