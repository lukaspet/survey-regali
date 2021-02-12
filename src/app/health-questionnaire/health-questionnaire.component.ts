import { FilialiService } from './../services/filiali.service';
import { Filiale } from './../filiale/filiale';
import { ResponseService } from './../services/response.service';
import { Response } from './../filiale/response';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-questionnaire',
  templateUrl: './health-questionnaire.component.html',
  styleUrls: ['./health-questionnaire.component.css']
})
export class HealthQuestionnaireComponent implements OnInit {

  filialeForm: FormGroup;
  regaloForm: FormGroup;
  regaloStepForm: FormGroup;
  filiali: Filiale[];
  response: Response = {filialeId: null, nomeFiliale: null, ombrello: 0, giubbotto: 0, vino_zanutta: 0, vino_magnum: 0,
     branzino: 0, altro: null };

  constructor(private fb: FormBuilder, private rservice: ResponseService, private fservice: FilialiService, private router: Router) {
    this.createFormGroup();
  }

  ngOnInit() {
    this.getFiliali();
  }

  getFiliali(): void {
    this.fservice.getFiliale()
    .subscribe(filiali => this.filiali = filiali);
  }

  createFormGroup() {
      this.filialeForm = this.fb.group({
        filialeId: ['', [Validators.required]]
    });
      this.regaloForm = this.fb.group({
        selectAtLeastOne: ['', [Validators.required]],
        ombrello: [''],
        giubbotto: [''],
        vino_zanutta: [''],
        vino_magnum: [''],
        branzino: [''],
        altro: ['']
    });
    //   this.regaloStepForm = this.fb.group({
    //     selectAtLeastOne: ['', [Validators.required]],
    // });
  }

  onClick(): void {
    const result: Response = Object.assign({}, this.filialeForm.value, this.regaloForm.value);
    this.response.filialeId = result.filialeId;
    this.response.nomeFiliale = this.filiali.find(x => x.id === result.filialeId).nomeFiliale;
    this.response.altro = result.altro;
    if (!result.branzino) {
      this.response.branzino = 0;
    } else {
      this.response.branzino = result.branzino;
    }
    if (!result.giubbotto) {
      this.response.giubbotto = 0;
    } else {
      this.response.giubbotto = result.giubbotto;
    }
    if (!result.vino_magnum) {
      this.response.vino_magnum = 0;
    } else {
      this.response.vino_magnum = result.vino_magnum;
    }
    if (!result.vino_zanutta) {
      this.response.vino_zanutta = 0;
    } else {
      this.response.vino_zanutta = result.vino_zanutta;
    }
    if (!result.ombrello) {
      this.response.ombrello = 0;
    } else {
      this.response.ombrello = result.ombrello;
    }
    this.rservice.addResponse(this.response )// result) can be send only result and no nomeFiliale included
    .subscribe((res) => {
      this.router.navigate(['/thanks']);
    },
    (err) => {
      this.router.navigate(['/error']);
    });
  }
}
