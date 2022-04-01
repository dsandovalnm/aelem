import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/interfaces/country';
import { DescargaCategoria } from 'src/app/interfaces/descargas';
import { Download } from 'src/app/interfaces/downloads';
import { CountriesService } from 'src/app/services/countries.service';
import { DescargasService } from 'src/app/services/descargas.service';

@Component({
  selector: 'app-formulario-descargas',
  templateUrl: './formulario-descargas.component.html',
  styleUrls: ['./formulario-descargas.component.css']
})
export class FormularioDescargasComponent implements OnInit {

  descarga: DescargaCategoria = {} as DescargaCategoria;
  addDescargaForm: FormGroup;
  downloads: Download[] = [];
  codigoDescarga: number = 0;
  countries: Country[] = [];

  constructor(  private _DescargasService: DescargasService,
                private _CountriesService: CountriesService,
                private _FormBuilder: FormBuilder,
                private _ToastrService: ToastrService,
                private _Router: Router,
                private _ActivatedRoute: ActivatedRoute) {

                  this.addDescargaForm = this._FormBuilder.group({
                    nombre: ['', Validators.required],
                    apellido: ['', Validators.required],
                    pais: ['', Validators.required],
                    numero_telefono: ['', Validators.required],
                    email: ['', Validators.required],
                    nombre_descarga: [''],
                    categoria: ['']
                  });
                }

  async ngOnInit() {
    this._ActivatedRoute.params.subscribe(params => {
      this.codigoDescarga = params.codigo;
    });
    await this.getDescarga(this.codigoDescarga);
    await this.getCountries();
    await this.getDownloads(this.descarga.nombre_descarga);

    this.addDescargaForm.patchValue({nombre_descarga:this.descarga.nombre_descarga});
    this.addDescargaForm.patchValue({categoria:this.descarga.categoria});
  }

  async getCountries() {
    let countriesP = new Promise((resolve, reject) => {
      this._CountriesService.getCountries()
        .subscribe((countries: Country[]) => {
          if(countries.length <= 0) {
            reject(new Error('No se pudieron obtener paises'));
          }

          countries.map(country => this.countries.push(country));
          resolve(true);
        });
    });

    let result = await countriesP;
    return result;
  }

  async getDownloads(nombre: string) {
    let downloadsP = new Promise((resolve, reject) => {
      this._DescargasService.getDownloadsByName(nombre)
        .subscribe(downloads => {
          if(!downloads.status) reject(downloads);

          downloads.response.map((download: Download) => this.downloads.push(download));
          resolve(downloads.status);
        });
    });

    let result = await downloadsP;
    return result;
  }

  async addDescarga() {

    if(this.addDescargaForm.invalid) {
      this._ToastrService.error('Formulario Inválido', 'DEBE COMPLETAR TODOS LOS CAMPOS DEL FORMULARIO',
                                {
                                  closeButton: true,
                                  positionClass: 'toast-bottom-center'
                                });
      return;
    }

    this._DescargasService.addDownload(this.addDescargaForm.value)
      .subscribe(downloadAdded => {
        if(!downloadAdded.status) {
          console.log(downloadAdded);
          return;
        }

        this._ToastrService.success('Descarga Lista', 'EL ARCHIVO ESTÁ LISTO PARA SU DESCARGA');
        window.open(this.descarga.ruta);

        this._Router.navigate(['/descargas']);
      });
  }

  async getDescarga(codigo: number) {
    let descargaP = new Promise((resolve, reject) => {
      this._DescargasService.getByCode(codigo)
        .subscribe(descargaRes => {
          if(!descargaRes.status) {
            reject(descargaRes);
          }

          descargaRes.response.map((descarga: DescargaCategoria) => this.descarga = descarga);
          resolve(descargaRes.status);
        });
    });

    let result = await descargaP;
    return result;
  }

}
