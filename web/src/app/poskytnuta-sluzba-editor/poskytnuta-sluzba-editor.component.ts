import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';

import { PoskytnutaSluzba } from '../models/poskytnuta-sluzba';
import { PoskytnutaSluzbaService } from '../services/poskytnuta-sluzba.service';
import { Sluzba } from '../models/sluzba';
import { SluzbaService } from '../services/sluzba.service';
import { Poskytovatel } from '../models/poskytovatel';
import { PoskytovatelService } from '../services/poskytovatel.service';
import { Clen } from '../models/clen';
import { ClenService } from '../services/clen.service';

@Component({
  selector: 'app-poskytnuta-sluzba-editor',
  templateUrl: './poskytnuta-sluzba-editor.component.html',
  styleUrls: ['./poskytnuta-sluzba-editor.component.css']
})
export class PoskytnutaSluzbaEditorComponent implements OnInit, OnDestroy {

  isNew: Boolean = true;
  private idActual: Number;
  private poskytnutaSluzba: PoskytnutaSluzba;
  sluzby: Sluzba[];
  poskytovatelia: Poskytovatel[];
  clenovia: Clen[];
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  poskytnutaSluzbaForm = this.fb.group({
    aktualnyDatum: [new Date()],
    datumPoskytnutia: [new Date()],
    kodSluzby: [''],
    kodPoskytovatela: [''],
    kodClena: [''],
    komentar: ['']
  });

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private poskytnutaSluzbaService: PoskytnutaSluzbaService,
    private sluzbaService: SluzbaService,
    private poskytovatelService: PoskytovatelService,
    private clenService: ClenService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.getSluzby();
    this.getPoskytovatelia();
    this.getClenovia();

    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.isNew = id ? false : true;

      if (id) {
        this.poskytnutaSluzbaService.findPoskytnutaSluzbaById(id).subscribe(poskytnutaSluzba => {

          this.idActual = poskytnutaSluzba.id;

          this.poskytnutaSluzbaForm.setValue({
            aktualnyDatum: poskytnutaSluzba.aktualnyDatum,
            datumPoskytnutia: poskytnutaSluzba.datumPoskytnutia,
            kodPoskytovatela: poskytnutaSluzba.kodPoskytovatela,
            kodClena: poskytnutaSluzba.kodClena,
            kodSluzby: poskytnutaSluzba.kodSluzby,
            komentar: poskytnutaSluzba.komentar
          });
        });
      }
    }
    );
  }

  onSubmit() {
    this.poskytnutaSluzba = this.poskytnutaSluzbaForm.value;
    this.poskytnutaSluzba.id = this.idActual;

    this.poskytnutaSluzbaService.addPoskytnutaSluzba(this.poskytnutaSluzba)
      .subscribe(() => this.router.navigate(['/poskytnute-sluzby']));
  }

  private getSluzby(): void {
    this.sluzbaService.getSluzba().subscribe(json =>
      this.sluzby = json._embedded.sluzby);
  }

  private getPoskytovatelia(): void {
    this.poskytovatelService.getPoskytovatel().subscribe(json =>
      this.poskytovatelia = json._embedded.poskytovatelia);
  }

  private getClenovia(): void {
    this.clenService.getClen().subscribe(json =>
      this.clenovia = json._embedded.clenovia);
  }
}
