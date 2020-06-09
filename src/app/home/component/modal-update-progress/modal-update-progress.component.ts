import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MglTimelineModule } from 'angular-mgl-timeline';

@Component({
  selector: 'app-modal-update-progress',
  templateUrl: './modal-update-progress.component.html',
  styleUrls: ['./modal-update-progress.component.css']
})
export class ModalUpdateProgressComponent implements OnInit {
  proposal: any

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
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
      status: true
    },
    {
      title: 'Đề xuất',
      date: '1-1-2020',
      performBy: "Nguyễn A",
      status: true
    },
    {
      title: 'Dự toán',
      date: '1-1-2020',
      performBy: "Nguyễn A",
      status: true
    },
    {
      title: 'Các quyết định',
      date: '1-1-2020',
      performBy: "Nguyễn A",
      status: true
    },
    
    {
      title: 'Hợp đồng',
      date: '1-1-2020',
      performBy: "Nguyễn A",
      status: true
    },
    {
      title: 'Nghiệm thu',
      date: '1-1-2020',
      performBy: "Nguyễn A",
      status: true
    },
    {
      title: 'Thanh lý',
      date: '1-1-2020',
      performBy: "Nguyễn A",
      status: true
    }
  ]
  constructor(
    private bsModalRef: BsModalRef){ }

  ngOnInit(): void {
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

}