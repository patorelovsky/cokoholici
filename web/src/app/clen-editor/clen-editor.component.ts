import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Clen } from '../models/clen';
import { ClenService } from '../services/clen.service';

@Component({
  selector: 'app-clen-editor',
  templateUrl: './clen-editor.component.html',
  styleUrls: ['./clen-editor.component.css']
})
export class ClenEditorComponent implements OnInit {

  isNew: Boolean = true;
  clenForm = this.fb.group({
    kodClena: [''],
    menoClena: [''],
    ulicaAdresyClena: [''],
    mestoAdresyClena: [''],
    pscAdresyClena: [''],
    statusClena: ['']
  });

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private clenService: ClenService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const kodClena = params['kodClena'];
      this.isNew = kodClena ? false : true;

      if (kodClena) {
        this.clenService.findClenById(kodClena).subscribe(clen => {
          this.clenForm.setValue({
            kodClena: clen.kodClena,
            menoClena: clen.menoClena,
            ulicaAdresyClena: clen.ulicaAdresyClena,
            mestoAdresyClena: clen.mestoAdresyClena,
            pscAdresyClena: clen.pscAdresyClena,
            statusClena: String(clen.statusClena)
          });
        });
      }
    }
    );
  }

  onSubmit() {
    const clen: Clen = this.clenForm.value;

    this.clenService.addClen(clen)
      .subscribe(() => this.router.navigate(['/clenovia']));
  }
}
