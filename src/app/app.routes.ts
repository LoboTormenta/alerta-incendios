import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

// import { AppComponent } from './app.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './shared/about/about.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { ErrorComponent } from './components/error/error.component';

import { CategoryNewComponent } from './components/category-new/category-new.component';





// Archivo con los compoentes de Angular y las rutas en el panel de navegación


// Componente para la subida de fotos al servidor firebase y visualicación en el frontend

import { PhotouploadComponent } from './components/photoupload/photoupload.component';

// TODO  mejorar los nombres de los componentes
// simplificar el nuero de componentes




import { UserEditComponent } from './components/user-edit/user-edit.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { IdentityGuard } from './services/identity.guard';
import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'logout/:sure', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent},
    // { path: 'registro', component: RegisterComponent, canActivate: [IdentityGuard] },
    // { path: 'ajustes', component: UserEditComponent, canActivate: [IdentityGuard]},
    // { path: 'crearcategoria', component: CategoryNewComponent, canActivate: [IdentityGuard] },
    // { path: 'photos', component: PhotouploadComponent, canActivate: [IdentityGuard] },
    // { path: 'editar-entrada/:id', component: PostEditComponent, canActivate: [IdentityGuard] },



     { path: 'registro', component: RegisterComponent },
    { path: 'ajustes', component: UserEditComponent},
    { path: 'crearcategoria', component: CategoryNewComponent },
    { path: 'photos', component: PhotouploadComponent},
    { path: 'editar-entrada/:id', component: PostEditComponent },


    { path: 'categoria/:id', component: CategoryDetailComponent },
    { path: 'entrada/:id', component: PostDetailComponent },
    { path: 'perfil/:id', component: ProfileComponent },

    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true} )],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
