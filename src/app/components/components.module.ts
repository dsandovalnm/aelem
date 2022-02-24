import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../pipes/pipes.module';
import { CursosSeminariosContentComponent } from './cursos-seminarios-content/cursos-seminarios-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PreLoaderComponent,
    CursosSeminariosContentComponent,
    SpinnerComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PreLoaderComponent,
    CursosSeminariosContentComponent,
    SpinnerComponent,
    PaginationComponent
  ]
})
export class ComponentsModule { }
