import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ModalDeleteProposalComponent } from '../modal-delete-proposal/modal-delete-proposal.component';
import { ModalCompleteProgressComponent } from '../modal-complete-progress/modal-complete-progress.component';

@Component({
  selector: 'app-modal-update-progress',
  templateUrl: './modal-update-progress.component.html',
  styleUrls: ['./modal-update-progress.component.css']
})
export class ModalUpdateProgressComponent implements OnInit {
  proposal: any

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = true;
  size: number = 20;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';
  entries = [
    {
      title: 'Khảo sát yêu cầu',
      date: '1-1-2020',
      performBy: "Nguyễn A",
      note: "Hoành thfnh khảo sát yêu cầu",
    },
    {
      title: 'Đề xuất',
      date: '1-1-2020',
      performBy: "Nguyễn A",
      note: "Hoành thfnh khảo sát yêu cầu",
    },
    {
      title: 'Dự toán',
      date: '1-1-2020',
      performBy: "Nguyễn A",
      note: "Hoành thfnh khảo sát yêu cầu",
    },
    {
      title: 'Các quyết định',
      date: null,
      performBy: null,
    },
    
    {
      title: 'Hợp đồng',
      date: null,
      performBy: null,
    },
    {
      title: 'Nghiệm thu',
      date: null,
      performBy: null,
    },
    {
      title: 'Thanh lý',
      date: null,
      performBy: null,
    }
  ]
  constructor(
    private bsModalRef: BsModalRef,
    private bsModalRef2: BsModalRef,
    private modalService: BsModalService,
    ){ }

  ngOnInit(): void {
    console.log(this.proposal)
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }

  onSave(){
    this.bsModalRef.hide()
  }

  onCancel(){
    this.bsModalRef.hide()
  }

  openCompleteProgressModal(progress){
    this.bsModalRef2 = this.modalService.show(ModalCompleteProgressComponent)
    this.bsModalRef2.content.progress = progress
  }

  isCurrentProgress(i){
    if(this.entries[i].date == null && this.entries[i-1] !=null){
      return true;
    }
  }

}