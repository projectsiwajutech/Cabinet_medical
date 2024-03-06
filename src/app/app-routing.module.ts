import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { PatientComponent } from './patients/listing-patient/patient.component';
import { ListingUtilisateurComponent } from './utilisateurs/listing-utilisateur/listing-utilisateur.component';
import { AproposComponent } from './apropos/apropos.component';
import { CaisseComponent } from './caisse/caisse.component';
import { ListingConsultationComponent } from './consultations/listing-consultation/listing-consultation.component';
import { ListingRdvComponent } from './meeting/listing-rdv/listing-rdv.component';
import { CalendrierComponent } from './meeting/calendrier/calendrier.component';
import { ListingMedecinComponent } from './medecins/listing-medecin/listing-medecin.component';

const routes: Routes = [

  { path: '',redirectTo: 'login',pathMatch: 'full'},
  { path: 'login',  component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'menunav', component: MenuNavComponent },
  { path: 'menunav', 
     component:MenuNavComponent,
     children:[
       { path: 'dashboard', component: DashboardComponent },
       { path: 'patient', component: PatientComponent },
       { path: 'utilisateur', component: ListingUtilisateurComponent },
       { path: 'caisse', component: CaisseComponent },
       { path: 'consultation', component: ListingConsultationComponent },
       { path: 'rdv', component: ListingRdvComponent },
       { path: 'calendrier', component: CalendrierComponent },
       { path: 'medecin', component: ListingMedecinComponent }
     ]
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
