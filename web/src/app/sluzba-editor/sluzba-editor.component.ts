import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Sluzba } from '../models/sluzba';
import { SluzbaService } from '../services/sluzba.service';

@Component({
  selector: 'app-sluzba-editor',
  templateUrl: './sluzba-editor.component.html',
  styleUrls: ['./sluzba-editor.component.css']
})
export class SluzbaEditorComponent implements OnInit {

  isNew: Boolean = true;
  private sluzba: Sluzba;
  sluzbaForm = this.fb.group({
    kodSluzby: [''],
    nazovSluzby: [''],
    poplatokZaSluzbu: ['']
  });

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private sluzbaService: SluzbaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const kodSluzby = params['kodSluzby'];
      this.isNew = kodSluzby ? false : true;

      if (kodSluzby) {
        this.sluzbaService.findSluzbaById(kodSluzby).subscribe(sluzba => {
          this.sluzbaForm.setValue({
            kodSluzby: sluzba.kodSluzby,
            nazovSluzby: sluzba.nazovSluzby,
            poplatokZaSluzbu: sluzba.poplatokZaSluzbu
          });
        });
      }
    }
    );
  }

  onSubmit() {
    this.sluzba = this.sluzbaForm.value;

    this.sluzbaService.addSluzba(this.sluzba)
      .subscribe(() => this.router.navigate(['/sluzby']));
  }

}
