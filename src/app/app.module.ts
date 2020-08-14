import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

import { NgxDocViewerModule } from 'ngx-doc-viewer';

// Rutas
import { FeatureRoutingModule } from './app.routes';



// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EncabezadoComponent } from './shared/encabezado/encabezado.component';
import { FooterComponent } from './shared/footer/footer.component';


import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './shared/about/about.component';

import { LoginComponent } from './shared/login/login.component';
import { PhotouploadComponent } from './components/photoupload/photoupload.component';


import { AngularFireStorageModule } from 'angularfire2/storage';


import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';



import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserEditComponent } from './components/user-edit/user-edit.component';



// Import all Froala Editor plugins.
// import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
// import 'froala-editor/js/plugins/align.min.js';

// Import a Froala Editor language file.
// import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
// import 'froala-editor/js/third_party/font_awesome.min';
// import 'froala-editor/js/third_party/image_tui.min';
// import 'froala-editor/js/third_party/spell_checker.min';
// import 'froala-editor/js/third_party/embedly.min';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { IdentityGuard } from './services/identity.guard';
import { UserService } from './services/user.service';
import { ProfileComponent } from './components/profile/profile.component';

import { AngularFileUploaderModule } from 'angular-file-uploader';

// Import the library
import { NgxImageZoomModule } from 'ngx-image-zoom';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncabezadoComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    PhotouploadComponent,
    RegisterComponent,
    ErrorComponent,
    UserEditComponent,
    CategoryNewComponent,
    PostDetailComponent,
    PostEditComponent,
    CategoryDetailComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule, FeatureRoutingModule,
    FormsModule,
    AngularFireStorageModule,
    HttpClientModule,
    AngularFileUploaderModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    NgxImageZoomModule,


  ],
  providers: [IdentityGuard, UserService],
  bootstrap: [AppComponent],
  exports: [ FroalaEditorModule, FroalaViewModule, NgxImageZoomModule]
})
export class AppModule { 


}
