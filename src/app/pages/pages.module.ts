import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
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
import { CartComponent } from './cart/cart.component';
import { CursosComponent } from './cursos/cursos.component';
import { CategoriasDescargasComponent } from './descargas/categoria-descargas/categoria-descargas.component';
import { DescargasComponent } from './descargas/descargas.component';
import { FormularioDescargasComponent } from './descargas/formulario-descargas/formulario-descargas.component';
import { HomeComponent } from './home/home.component';
import { InscribirmeComponent } from './inscribirme/inscribirme.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPandemiaComponent } from './pandemia/main-pandemia/main-pandemia.component';
import { PandemiaComponent } from './pandemia/pandemia.component';
import { VerArticuloPandemiaComponent } from './pandemia/ver-articulo-pandemia/ver-articulo-pandemia.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginPlataformaComponent } from './plataforma/login-plataforma/login-plataforma.component';
import { MainPlataformaComponent } from './plataforma/main-plataforma/main-plataforma.component';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { RegistroPlataformaComponent } from './plataforma/registro-plataforma/registro-plataforma.component';
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
    CategoriasDescargasComponent,
    PreciosSeminarioLiveComponent,
    VerArticuloPandemiaComponent,
    MainPandemiaComponent,
    FormularioDescargasComponent,
    CartComponent,
    MainPlataformaComponent,
    LoginPlataformaComponent,
    RegistroPlataformaComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    SwiperModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
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
    CategoriasDescargasComponent,
    PreciosSeminarioLiveComponent,
    VerArticuloPandemiaComponent,
    MainPandemiaComponent,
    FormularioDescargasComponent,
    CartComponent,
    MainPlataformaComponent,
    LoginPlataformaComponent,
    RegistroPlataformaComponent,
    PaymentComponent
  ]
})
export class PagesModule { }
