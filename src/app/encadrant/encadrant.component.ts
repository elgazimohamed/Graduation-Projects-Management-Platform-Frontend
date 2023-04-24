import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EncadrantModel } from './encadrant.module';
import { EncadrantService } from '../_services/encadrant.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-encadrant',
  templateUrl: './encadrant.component.html',
  styleUrls: ['./encadrant.component.css'],
})
export class EncadrantComponent implements OnInit {
  formValue!: FormGroup;
  pfeobj: EncadrantModel = new EncadrantModel();
  id: number;
  allpfe: any;
  allSujets: any;
  btnUpdateShow: boolean = false;

  btnSaveShow: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private encadrantService: EncadrantService,
    private userAuthService: UserAuthService
  ) {
    this.id = parseInt(this.userAuthService.getId());
  }

  ngOnInit(): void {
    // Refrech the page
    // const isRefreshed = localStorage.getItem('id');
    // if (!isRefreshed) {
    //   location.reload();
    //   console.log('that work');
    // }
    this.formValue = this.formBuilder.group({
      titre: [''],
      description: [''],
      nombreMembres: [''],
      idEncadrant: [''],
    });

    this.encadrantService.getMySujets(this.id).subscribe(
      (response: any) => {
        console.log(response);
        this.allSujets = response.filter(
          (sujet: any) => sujet.choisie == 'non'
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ajouterSujet() {
    this.pfeobj.titre = this.formValue.value.titre;
    this.pfeobj.description = this.formValue.value.description;
    this.pfeobj.nombreMembres = this.formValue.value.nombreMembres;
    this.pfeobj.idEncadrant = parseInt(this.userAuthService.getId());

    this.encadrantService.ajouterSujet(this.pfeobj).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    location.reload();
  }

  deleteSujet(data: any) {
    if (window.confirm('Voulez-vous vraiment supprimer ce sujet ?')) {
      this.encadrantService.deleteSujet(data, this.id).subscribe(
        (response) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    location.reload();
  }

  // AddPFE() {
  //   this.pfeobj.titre = this.formValue.value.titre;
  //   this.pfeobj.description = this.formValue.value.description;
  //   this.pfeobj.nb = this.formValue.value.nb;

  //   this.api.postPFE(this.pfeobj).subscribe({
  //     next: (v) => {
  //       console.log(v);
  //     },
  //     error: (e) => {
  //       alert('Error');
  //       console.log(e);
  //     },
  //     complete: () => {
  //       console.log('complete');
  //       alert('Data Saved');
  //       this.allpfe();
  //       this.formValue.reset();
  //     },
  //   });
  //   this.Allpfe();
  // }
  // Allpfe() {
  //   this.api.getPFE().subscribe((res) => {
  //     this.allpfe = res;
  //   });
  // }
  // EditPFE(data: any) {
  //   this.formValue.controls['titre'].setValue(data.titre);
  //   this.formValue.controls['desc'].setValue(data.desc);
  //   this.formValue.controls['nb'].setValue(data.nb);

  //   this.pfeobj.id = data.id;
  //   this.UpdateShowBtn();
  // }
  // UpdatePFE() {
  //   this.pfeobj.titre = this.formValue.value.titre;
  //   this.pfeobj.description = this.formValue.value.desc;
  //   this.pfeobj.nb = this.formValue.value.nb;

  //   this.api.putPFE(this.pfeobj, this.pfeobj.id).subscribe((res) => {
  //     alert('Data Updated');
  //     this.Allpfe();
  //     this.SaveShowBtn();
  //   });
  // }

  // UpdateShowBtn() {
  //   this.btnUpdateShow = true;
  //   this.btnSaveShow = false;
  // }
  // SaveShowBtn() {
  //   this.btnUpdateShow = false;
  //   this.btnSaveShow = true;
  // }
}
