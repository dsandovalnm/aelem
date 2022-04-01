import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/interfaces/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-registro-plataforma',
  templateUrl: './registro-plataforma.component.html',
  styleUrls: ['./registro-plataforma.component.css']
})
export class RegistroPlataformaComponent implements OnInit {

  registroForm: FormGroup;
  countries: Country[] = [];

  constructor(  private _FormBuilder: FormBuilder,
                private _CountriesService: CountriesService
                ) {
    this.registroForm = this._FormBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required, Validators.pattern(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)],
      verifyEmail: ['', Validators.required, Validators.pattern(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)],
      password: ['', Validators.required, Validators.pattern(/^(?=.*\w*\d)(?=.*\w*[A-Z])(?=.*\w*[a-z])\S{8,}$/)],
      repeatPassword: ['', Validators.required, Validators.pattern(/^(?=.*\w*\d)(?=.*\w*[A-Z])(?=.*\w*[a-z])\S{8,}$/)]
    });
  }

  async ngOnInit() {
    let countriesP = new Promise((resolve, reject) => {
      this._CountriesService.getCountries()
        .subscribe(countries => {
          if(countries.error) {
            reject(new Error(countries.error));
          }

          console.log(countries);
          resolve(true);
        });
    });
  }

  registro() {
    console.log(this.registroForm.controls);
  }

}
