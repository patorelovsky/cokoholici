import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { PoskytnutaSluzba } from '../models/poskytnuta-sluzba';
import { PoskytnutaSluzbaService } from '../services/poskytnuta-sluzba.service';
import { Sluzba } from '../models/sluzba';
import { SluzbaService } from '../services/sluzba.service';
import { PoskytovatelService } from '../services/poskytovatel.service';
import { ClenService } from '../services/clen.service';

@Component({
  selector: 'app-fakturovat-sluzbu',
  templateUrl: './fakturovat-sluzbu.component.html',
  styleUrls: ['./fakturovat-sluzbu.component.css']
})
export class FakturovatSluzbuComponent implements OnInit, OnDestroy {

  isPoskytovatel: Boolean = false;
  isClen: Boolean = false;
  statusClen: String;
  private poskytnutaSluzba: PoskytnutaSluzba;
  sluzby: Sluzba[];
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  fakturovatForm = this.fb.group({
    kodPoskytovatela: [''],
    kodClena: [''],
    aktualnyDatum: [new Date()],
    datumPoskytnutia: [new Date()],
    kodSluzby: [''],
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
    private router: Router
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {

    this.getSluzby();
  }

  onSubmit() {

    this.poskytnutaSluzba = this.fakturovatForm.value;

    this.poskytnutaSluzbaService.addPoskytnutaSluzba(this.poskytnutaSluzba)
      .subscribe(() => this.router.navigate(['/sluzby']));
  }

  ngOnDestroy(): void {

    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private getSluzby(): void {

    this.sluzbaService.getSluzba().subscribe(json =>
      this.sluzby = json._embedded.sluzby);
  }

  existsPoskytovatela(): void {

    const kodPoskytovatela: String = this.fakturovatForm.controls['kodPoskytovatela'].value;
    if (kodPoskytovatela.length > 0) {
      this.poskytovatelService.existsByIdPoskytovatel(kodPoskytovatela).subscribe(isPoskytovatel =>
        this.isPoskytovatel = isPoskytovatel
      );
    }
  }

  getStatusClen(): void {

    const kodClena: String = this.fakturovatForm.controls['kodClena'].value;
    if (kodClena.length > 0) {
      this.clenService.getStatusClen(kodClena).subscribe(isClen => {
        this.isClen = isClen;
        switch (this.isClen) {
          case true: this.statusClen = 'Validované'; break;
          case false: this.statusClen = 'Pozastavené členstvo'; break;
          default: this.statusClen = 'Neplatné číslo';
        }
      });
    }
  }
}

