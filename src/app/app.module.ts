import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EncadrantComponent } from './encadrant/encadrant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { PostulerComponent } from './postuler/postuler.component';
import { PostulationComponent } from './postulation/postulation.component';
import { CommonModule } from '@angular/common';
import { GroupeDeTravailComponent } from './groupe-de-travail/groupe-de-travail.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import { RegisterEncadrantComponent } from './register-encadrant/register-encadrant.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjetsPfeComponent } from './projets-pfe/projets-pfe.component';
import { GroupesPostulesComponent } from './groupes-postules/groupes-postules.component';
import { GroupesAcceptesComponent } from './groupes-acceptes/groupes-acceptes.component';
import { DeatilsEncadComponent } from './deatils-encad/deatils-encad.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    EncadrantComponent,
    EtudiantComponent,
    PostulerComponent,
    PostulationComponent,
    GroupeDeTravailComponent,
    RegisterEtudiantComponent,
    RegisterEncadrantComponent,
    ForbiddenComponent,
    NavbarComponent,
    ProjetsPfeComponent,
    GroupesPostulesComponent,
    GroupesAcceptesComponent,
    DeatilsEncadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
