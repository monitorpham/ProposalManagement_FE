import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-complete-progress',
  templateUrl: './modal-complete-progress.component.html',
  styleUrls: ['./modal-complete-progress.component.scss']
})
export class ModalCompleteProgressComponent implements OnInit {

  progress: any

  constructor(
    private bsModalRef2: BsModalRef,
  ) { }

  ngOnInit(): void {
    console.log(this.progress)
  }

  onFinish(){
    this.bsModalRef2.hide()
    
  }

  onCancel(){
    this.bsModalRef2.hide()
  }

  

}
