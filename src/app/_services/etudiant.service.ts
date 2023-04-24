import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import httpHeader from './HeaderToken';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  httpClient: any;
  constructor(
    private http: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  addEtudiant(data: any) {
    return this.http.post<any>(this.PATH_OF_API + '/registerEtudiant', data);
  }

  getAllFilieres() {
    return this.http.get<any>(this.PATH_OF_API + '/filieres');
  }

  getEtudiant(id: number) {
    return this.http.get<any>(
      this.PATH_OF_API + '/etudiants/' + id,
      httpHeader
    );
  }

  getAllSujet() {
    return this.http.get<any>(this.PATH_OF_API + '/sujets');
  }

  getSujet(idSujet: number) {
    return this.http.get<any>(
      this.PATH_OF_API + '/sujets/' + idSujet,
      httpHeader
    );
  }

  getAllEtudiantsParGroupes(idSujet: number) {
    return this.http.get<any>(
      this.PATH_OF_API + '/etudiantsParGroupe/' + idSujet,
      httpHeader
    );
  }
  creerGroupe(groupeData: any) {
    return this.http.post<any>(
      this.PATH_OF_API + '/groupes',
      groupeData,
      httpHeader
    );
  }
  rejoindreGroupe(data: any) {
    return this.http.post<any>(
      this.PATH_OF_API + '/groupes/RejoindreGroupe',
      data,
      httpHeader
    );
  }
  getAllEtudiantsInGroupe(idEtudiant: number) {
    return this.http.get<any>(
      this.PATH_OF_API + '/groupes/groupe/EtudiantsByGroupe/' + idEtudiant,
      httpHeader
    );
  }
  getSujetAccepte(idEtudiant: number) {
    return this.http.get<any>(
      this.PATH_OF_API + '/sujets/sujet/sujetAccepte/' + idEtudiant,
      httpHeader
    );
  }
  addLienDrive(data: any) {
    return this.http.post<any>(
      this.PATH_OF_API + '/groupes/groupe/ajouterLienDrive',
      data,
      httpHeader
    );
  }
}
