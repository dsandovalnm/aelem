import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoParaLeerComponent } from './pages/algo-para-leer/algo-para-leer.component';
import { MainAlgoParaLeerComponent } from './pages/algo-para-leer/main-algo-para-leer/main-algo-para-leer.component';
import { VerAlgoParaLeerComponent } from './pages/algo-para-leer/ver-algo-para-leer/ver-algo-para-leer.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { MainArticulosComponent } from './pages/articulos/main-articulos/main-articulos.component';
import { VerArticuloComponent } from './pages/articulos/ver-articulo/ver-articulo.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CategoriaDescargasComponent } from './pages/descargas/categoria-descargas/categoria-descargas.component';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PandemiaComponent } from './pages/pandemia/pandemia.component';
import { PlataformaComponent } from './pages/plataforma/plataforma.component';
import { InfoSeminarioLiveComponent } from './pages/seminario-live/info-seminario-live/info-seminario-live.component';
import { NoCodeSeminarioLiveComponent } from './pages/seminario-live/no-code-seminario-live/no-code-seminario-live.component';
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
      { path: 'registro/:codigo', component: RegistroSeminarioLiveComponent }
    ]
  },
  { path: 'pandemia', component: PandemiaComponent },
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
  { path: 'plataforma', component: PlataformaComponent },
  { path: 'descargas', component: DescargasComponent,
    children: [
      { path: '', redirectTo: '/descargas/all', pathMatch: 'full' },
      { path: ':categoria', component: CategoriaDescargasComponent }
    ]  
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
