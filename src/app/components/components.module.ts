import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../pipes/pipes.module';
import { CursosSeminariosContentComponent } from './cursos-seminarios-content/cursos-seminarios-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { SidebarPlataformaComponent } from './sidebar-plataforma/sidebar-plataforma.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TopbarPlataformaComponent } from './topbar-plataforma/topbar-plataforma.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PreLoaderComponent,
    CursosSeminariosContentComponent,
    SpinnerComponent,
    PaginationComponent,
    TopbarPlataformaComponent,
    SidebarPlataformaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PreLoaderComponent,
    CursosSeminariosContentComponent,
    SpinnerComponent,
    PaginationComponent,
    TopbarPlataformaComponent,
    SidebarPlataformaComponent
  ]
})
export class ComponentsModule { }
