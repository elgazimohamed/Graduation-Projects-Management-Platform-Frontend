import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeatilsEncadComponent } from './deatils-encad/deatils-encad.component';
import { EncadrantComponent } from './encadrant/encadrant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GroupeDeTravailComponent } from './groupe-de-travail/groupe-de-travail.component';
import { GroupesAcceptesComponent } from './groupes-acceptes/groupes-acceptes.component';
import { GroupesPostulesComponent } from './groupes-postules/groupes-postules.component';
import { AuthGuard } from './guards/authguard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostulationComponent } from './postulation/postulation.component';
import { PostulerComponent } from './postuler/postuler.component';
import { ProjetsPfeComponent } from './projets-pfe/projets-pfe.component';
import { RegisterEncadrantComponent } from './register-encadrant/register-encadrant.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'encadrant',
    component: EncadrantComponent,
    canActivate: [AuthGuard],
    data: { roles: ['encadrant'] },
  },
  {
    path: 'etudiant',
    component: EtudiantComponent,
    canActivate: [AuthGuard],
    data: { roles: ['etudiant'] },
  },
  {
    path: 'postuler/:id',
    component: PostulerComponent,
    canActivate: [AuthGuard],
    data: { roles: ['etudiant'] },
  },
  {
    path: 'postulation',
    component: PostulationComponent,
    canActivate: [AuthGuard],
    data: { roles: ['encadrant'] },
  },
  {
    path: 'groupedetravail',
    component: GroupeDeTravailComponent,
  },
  { path: 'register-etudiant', component: RegisterEtudiantComponent },
  { path: 'register-encadrant', component: RegisterEncadrantComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'navbar', component: NavbarComponent, canActivate: [AuthGuard] },
  { path: 'header', component: HeaderComponent },
  { path: 'projets-pfe', component: ProjetsPfeComponent },
  {
    path: 'groupes-postules/:id',
    component: GroupesPostulesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['encadrant'] },
  },
  {
    path: 'groupes-acceptes',
    component: GroupesAcceptesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['encadrant'] },
  },
  {
    path: 'etat-de-progression/:id',
    component: DeatilsEncadComponent,
    canActivate: [AuthGuard],
    data: { roles: ['encadrant'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
