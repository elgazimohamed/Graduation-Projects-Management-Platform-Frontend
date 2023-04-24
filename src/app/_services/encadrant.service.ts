import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import httpHeader from './HeaderToken';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class EncadrantService {
  PATH_OF_API = 'http://localhost:8080';
  constructor(
    private http: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  addEncadrant(data: any) {
    return this.http.post<any>(this.PATH_OF_API + '/registerEncadrant', data);
  }

  getEncadrant(id: number) {
    return this.http.get<any>(
      this.PATH_OF_API + '/encadrants/' + id,
      httpHeader
    );
  }

  getMySujets(idEncadrant: number) {
    return this.http.get<any>(
      this.PATH_OF_API + '/mes-sujets/' + idEncadrant,
      httpHeader
    );
  }

  ajouterSujet(data: any) {
    return this.http.post<any>(
      this.PATH_OF_API + '/mes-sujets',
      data,
      httpHeader
    );
  }
  deleteSujet(data: any, idEncadrant: number) {
    return this.http.delete<any>(
      this.PATH_OF_API + '/mes-sujets/' + idEncadrant + '/' + data.id,
      httpHeader
    );
  }

  getEtudiantsSujetAccepte(idSujet: number) {
    return this.http.get<any>(
      this.PATH_OF_API + '/etudiantsGroupeAccepter/' + idSujet,
      httpHeader
    );
  }

  accepterGroupe(data: any) {
    return this.http.post<any>(
      this.PATH_OF_API + '/sujets/accepter',
      data,
      httpHeader
    );
  }

  getAllDepartements() {
    return this.http.get<any>(this.PATH_OF_API + '/departements');
  }
}
