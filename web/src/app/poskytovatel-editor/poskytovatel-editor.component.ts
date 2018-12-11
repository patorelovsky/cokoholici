import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Poskytovatel } from '../models/poskytovatel';
import { PoskytovatelService } from '../services/poskytovatel.service';

@Component({
  selector: 'app-poskytovatel-editor',
  templateUrl: './poskytovatel-editor.component.html',
  styleUrls: ['./poskytovatel-editor.component.css']
})
export class PoskytovatelEditorComponent implements OnInit {

  isNew: Boolean = true;
  private poskytovatel: Poskytovatel;
  poskytovatelForm = this.fb.group({
    kodPoskytovatela: [''],
    menoPoskytovatela: [''],
    ulicaAdresyPoskytovatela: [''],
    mestoAdresyPoskytovatela: [''],
    pscAdresyPoskytovatela: ['']
  });

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private poskytovatelService: PoskytovatelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const kodPoskytovatela = params['kodPoskytovatela'];
      this.isNew = kodPoskytovatela ? false : true;

      if (kodPoskytovatela) {
        this.poskytovatelService.findPoskytovatelById(kodPoskytovatela).subscribe(poskytovatel => {
          this.poskytovatelForm.setValue({
            kodPoskytovatela: poskytovatel.kodPoskytovatela,
            menoPoskytovatela: poskytovatel.menoPoskytovatela,
            ulicaAdresyPoskytovatela: poskytovatel.ulicaAdresyPoskytovatela,
            mestoAdresyPoskytovatela: poskytovatel.mestoAdresyPoskytovatela,
            pscAdresyPoskytovatela: poskytovatel.pscAdresyPoskytovatela
          });
        });
      }
    }
    );
  }

  onSubmit() {
    this.poskytovatel = this.poskytovatelForm.value;

    this.poskytovatelService.addPoskytovatel(this.poskytovatel)
      .subscribe(() => this.router.navigate(['/poskytovatelia']));
  }

}
