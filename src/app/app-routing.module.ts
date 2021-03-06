import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoParaLeerComponent } from './pages/algo-para-leer/algo-para-leer.component';
import { MainAlgoParaLeerComponent } from './pages/algo-para-leer/main-algo-para-leer/main-algo-para-leer.component';
import { VerAlgoParaLeerComponent } from './pages/algo-para-leer/ver-algo-para-leer/ver-algo-para-leer.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { MainArticulosComponent } from './pages/articulos/main-articulos/main-articulos.component';
import { VerArticuloComponent } from './pages/articulos/ver-articulo/ver-articulo.component';
import { CartComponent } from './pages/cart/cart.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CategoriasDescargasComponent } from './pages/descargas/categoria-descargas/categoria-descargas.component';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { FormularioDescargasComponent } from './pages/descargas/formulario-descargas/formulario-descargas.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainPandemiaComponent } from './pages/pandemia/main-pandemia/main-pandemia.component';
import { PandemiaComponent } from './pages/pandemia/pandemia.component';
import { VerArticuloPandemiaComponent } from './pages/pandemia/ver-articulo-pandemia/ver-articulo-pandemia.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { LoginPlataformaComponent } from './pages/plataforma/login-plataforma/login-plataforma.component';
import { MainPlataformaComponent } from './pages/plataforma/main-plataforma/main-plataforma.component';
import { PlataformaComponent } from './pages/plataforma/plataforma.component';
import { RegistroPlataformaComponent } from './pages/plataforma/registro-plataforma/registro-plataforma.component';
import { InfoSeminarioLiveComponent } from './pages/seminario-live/info-seminario-live/info-seminario-live.component';
import { NoCodeSeminarioLiveComponent } from './pages/seminario-live/no-code-seminario-live/no-code-seminario-live.component';
import { PreciosSeminarioLiveComponent } from './pages/seminario-live/precios-seminario-live/precios-seminario-live.component';
import { RegistroSeminarioLiveComponent } from './pages/seminario-live/registro-seminario-live/registro-seminario-live.component';
import { SeminarioLiveComponent } from './pages/seminario-live/seminario-live.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'seminario_live', component: SeminarioLiveComponent,
    children: [
      { path: '', component: NoCodeSeminarioLiveComponent },
      { path: 'info', component: NoCodeSeminarioLiveComponent },
      { path: 'info/:codigo', component: InfoSeminarioLiveComponent },
      { path: 'registro', component: NoCodeSeminarioLiveComponent },
      { path: 'registro/:codigo', component: RegistroSeminarioLiveComponent },
      { path: 'precios', component: NoCodeSeminarioLiveComponent },
      { path: 'precios/:codigo', component: PreciosSeminarioLiveComponent },
    ]
  },
  { path: 'pandemia', component: PandemiaComponent,
    children: [
      { path: '', component: MainPandemiaComponent },
      { path: 'articulo/:codigo', component: VerArticuloPandemiaComponent }
    ]
  },
  { path: 'cursos', component: CursosComponent },
  { path: 'articulos', component: ArticulosComponent,
    children: [
      { path: '', redirectTo: '/articulos/page/1', pathMatch: 'full' },
      { path: 'buscar/art/:termino', component: MainArticulosComponent },
      { path: 'buscar/pro/:id_profesional', component: MainArticulosComponent },
      { path: 'ver/:codigo', component: VerArticuloComponent },
      { path: 'page/:page', component: MainArticulosComponent }
    ]
  },
  { path: 'algoparaleer', component: AlgoParaLeerComponent,
    children: [
      { path: '', redirectTo: '/algoparaleer/page/1', pathMatch: 'full' },
      { path: 'buscar/:termino', component: MainAlgoParaLeerComponent },
      { path: 'ver/:codigo', component: VerAlgoParaLeerComponent },
      { path: 'page/:page', component: MainAlgoParaLeerComponent },
    ]
  },
  { path: 'pagar', component: PaymentComponent,
    children: [
      { path: '', component: PaymentComponent }
    ]
  },
  { path: 'carrito', component: CartComponent },
  { path: 'plataforma', component: PlataformaComponent,
    children: [
      { path: '', component: MainPlataformaComponent },
      { path: 'home', component: MainPlataformaComponent },
      { path: 'login', component: LoginPlataformaComponent },
      { path: 'registro', component: RegistroPlataformaComponent }
    ]
  },
  { path: 'descargas', component: DescargasComponent,
    children: [
      { path: '', redirectTo: '/descargas/all', pathMatch: 'full' },
      { path: 'formulario/:codigo', component: FormularioDescargasComponent },
      { path: ':categoria', component: CategoriasDescargasComponent }
    ]  
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
