import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '../Modal/Modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valuesPopUp:FormGroup | any;
  constructor(    
    private modal: NgbModal,
    ) { }

    ngOnInit(){
      this.valuesPopUp = new FormGroup({
        tittle: new FormControl(),
        data: new FormControl(),
      })
    }
    
  GetPopUp() {

    const modalRef = this.modal.open(Modal);
      modalRef.componentInstance.tittle = (this.valuesPopUp.value.tittle==undefined)?'Your tittle':this.valuesPopUp?.value.tittle;
      modalRef.componentInstance.text = (this.valuesPopUp.value.data==undefined)?'Your data':this.valuesPopUp?.value.data;

    return false;
  }
}
