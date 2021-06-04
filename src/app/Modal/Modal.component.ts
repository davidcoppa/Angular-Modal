import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-Modal',
  templateUrl: './Modal.component.html',
  styleUrls: ['./Modal.component.css']
})
export class Modal implements OnInit {
  @Input() tittle: string | undefined;
  @Input() text: string| undefined;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
