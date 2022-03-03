import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { AlgoParaLeerComponent } from './algo-para-leer/algo-para-leer.component';
import { MainAlgoParaLeerComponent } from './algo-para-leer/main-algo-para-leer/main-algo-para-leer.component';
import { PageArticulosLeerComponent } from './algo-para-leer/page-articulos-leer/page-articulos-leer.component';
import { VerAlgoParaLeerComponent } from './algo-para-leer/ver-algo-para-leer/ver-algo-para-leer.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { MainArticulosComponent } from './articulos/main-articulos/main-articulos.component';
import { PageArticulosComponent } from './articulos/main-articulos/page-articulos/page-articulos.component';
import { VerArticuloComponent } from './articulos/ver-articulo/ver-articulo.component';
import { CursosComponent } from './cursos/cursos.component';
import { CategoriaDescargasComponent } from './descargas/categoria-descargas/categoria-descargas.component';
import { DescargasComponent } from './descargas/descargas.component';
import { HomeComponent } from './home/home.component';
import { InscribirmeComponent } from './inscribirme/inscribirme.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PandemiaComponent } from './pandemia/pandemia.component';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { InfoSeminarioLiveComponent } from './seminario-live/info-seminario-live/info-seminario-live.component';
import { NoCodeSeminarioLiveComponent } from './seminario-live/no-code-seminario-live/no-code-seminario-live.component';
import { PreciosSeminarioLiveComponent } from './seminario-live/precios-seminario-live/precios-seminario-live.component';
import { RegistroSeminarioLiveComponent } from './seminario-live/registro-seminario-live/registro-seminario-live.component';
import { SeminarioLiveComponent } from './seminario-live/seminario-live.component';

@NgModule({
  declarations: [
    HomeComponent,
    SeminarioLiveComponent,
    PandemiaComponent,
    CursosComponent,
    ArticulosComponent,
    AlgoParaLeerComponent,
    DescargasComponent,
    InscribirmeComponent,
    PlataformaComponent,
    InfoSeminarioLiveComponent,
    RegistroSeminarioLiveComponent,
    NoCodeSeminarioLiveComponent,
    PageNotFoundComponent,
    VerArticuloComponent,
    MainArticulosComponent,
    VerAlgoParaLeerComponent,
    MainAlgoParaLeerComponent,
    PageArticulosComponent,
    PageArticulosLeerComponent,
    CategoriaDescargasComponent,
    PreciosSeminarioLiveComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    SwiperModule,
    PipesModule
  ],
  exports: [
    HomeComponent,
    SeminarioLiveComponent,
    PandemiaComponent,
    CursosComponent,
    ArticulosComponent,
    AlgoParaLeerComponent,
    DescargasComponent,
    InscribirmeComponent,
    PlataformaComponent,
    InfoSeminarioLiveComponent,
    RegistroSeminarioLiveComponent,
    NoCodeSeminarioLiveComponent,
    PageNotFoundComponent,
    VerArticuloComponent,
    MainArticulosComponent,
    VerAlgoParaLeerComponent,
    MainAlgoParaLeerComponent,
    PageArticulosComponent,
    PageArticulosLeerComponent,
    CategoriaDescargasComponent,
    PreciosSeminarioLiveComponent
  ]
})
export class PagesModule { }
