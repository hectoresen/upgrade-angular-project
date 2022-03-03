import { FormService } from './../../../../shared/services/form.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formGestion: FormGroup;

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
    )
    {
    this.formGestion = this.formBuilder.group(
      {
        id: ["", [Validators.required, Validators.maxLength(8), Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
        price: [,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/) ]],
        origin: ["", [Validators.required]],
        destination: ["", [Validators.required]],
        company: [""],
        directFlight: ["", ],
        flightData: [],
        departureTime: [],
        arrivalTime: [],
        cityImg: [],
        handLugagge: [],
      }
    )
  }

  ngOnInit(): void {
  }

  submitFunction(): void{
    console.log('Formulario', this.formGestion);
    console.log('Valor del formulario->',this.formGestion.value);
    this.submitted=true;
    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    const newDate = this.formGestion.value.flightData
    const formattedDate = formatDate(newDate, format, locale);
    this.formGestion.value.flightData = formattedDate;
    this.formService.setInformationObservable(this.formGestion.value);
    console.log(this.formGestion.value);
  };

}
