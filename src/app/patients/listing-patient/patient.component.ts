import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePatientComponent } from '../create-patient/create-patient.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent {
   constructor (private router: Router,
    private modalService : NgbModal) {
    
   }

   redirectionNewPatient (){
     const modalRef = this.modalService.open(CreatePatientComponent)
     
   }
}
