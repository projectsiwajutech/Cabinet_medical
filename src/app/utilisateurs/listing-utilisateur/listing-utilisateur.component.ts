import { Component } from '@angular/core';
import { CreateUtilisateurComponent } from '../create-utilisateur/create-utilisateur.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { EditUtilisateurComponent } from '../edit-utilisateur/edit-utilisateur.component';

@Component({
  selector: 'app-listing-utilisateur',
  templateUrl: './listing-utilisateur.component.html',
  styleUrls: ['./listing-utilisateur.component.scss']
})
export class ListingUtilisateurComponent {

  constructor (private router: Router,
    private modalService : NgbModal) {
    
   }

   redirectionNewUsers (){
     const modalRef = this.modalService.open(CreateUtilisateurComponent)  
   }
   redirectionEditUsers (){
    const modalRef = this.modalService.open(EditUtilisateurComponent)  
  }
}
