import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './patients/listing-patient/patient.component';
import { ConsultationComponent } from './consultations/consultation/consultation.component';
import { MedecinComponent } from './medecins/medecin/medecin.component';
import { RdvComponent } from './meeting/rdv/rdv.component';
import { CaisseComponent } from './caisse/caisse.component';
import { CreatePatientComponent } from './patients/create-patient/create-patient.component';
import { EditPatientComponent } from './patients/edit-patient/edit-patient.component';
import { CreateUtilisateurComponent } from './utilisateurs/create-utilisateur/create-utilisateur.component';
import { EditUtilisateurComponent } from './utilisateurs/edit-utilisateur/edit-utilisateur.component';
import { ListingUtilisateurComponent } from './utilisateurs/listing-utilisateur/listing-utilisateur.component';
import { AproposComponent } from './apropos/apropos.component';
import { ListingConsultationComponent } from './consultations/listing-consultation/listing-consultation.component';
import { UpdateConsultationComponent } from './consultations/update-consultation/update-consultation.component';
import { UpdateMedecinComponent } from './medecins/update-medecin/update-medecin.component';
import { ListingMedecinComponent } from './medecins/listing-medecin/listing-medecin.component';
import { ListingRdvComponent } from './meeting/listing-rdv/listing-rdv.component';
import { UpdateRdvComponent } from './meeting/update-rdv/update-rdv.component';
import { CalendrierComponent } from './meeting/calendrier/calendrier.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    PatientComponent,
    ConsultationComponent,
    MedecinComponent,
    RdvComponent,
    CaisseComponent,
    CreatePatientComponent,
    EditPatientComponent,
    CreateUtilisateurComponent,
    EditUtilisateurComponent,
    ListingUtilisateurComponent,
    AproposComponent,
    ListingConsultationComponent,
    UpdateConsultationComponent,
    UpdateMedecinComponent,
    ListingMedecinComponent,
    ListingRdvComponent,
    UpdateRdvComponent,
    CalendrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
