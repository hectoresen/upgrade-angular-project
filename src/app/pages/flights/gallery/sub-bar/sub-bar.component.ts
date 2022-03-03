import { FormService } from './../../../../shared/services/form.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-bar',
  templateUrl: './sub-bar.component.html',
  styleUrls: ['./sub-bar.component.scss']
})
export class SubBarComponent implements OnInit {

  panelOpenState = false;

  hide = true;

  formRegister : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formRegister = this.formBuilder.group(
      {
        email: ["", [Validators.required]],
        password: ["", [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }


}
