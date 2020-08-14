import { User } from '../../models/user';
import { environment } from './../../../environments/environment';
import { global } from './../../services/global';
import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Route } from '@angular/router';






@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService],
})
export class UserEditComponent implements OnInit, DoCheck {
  public page_title: string;
  public user: User;
  public identity;
  public token;
  public status: string;
  public readonly apiUrl = environment.apiUrl;


  public froala_options : Object ={
    charCount: true,
    languaje: 'es',
    
    }

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.jpeg,.png,.gif",
    maxSize: "50",
    uploadAPI: {
      url: this.apiUrl + 'user/upload',
      method: 'POST',
      headers: {
        'Authorization': this._userService.getToken()
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    attachPinText: 'Sube tu avatar de usuario'
  };





  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.page_title = 'Ajustes de Usuario';
    this.user = new User(1, '', '', 'User_Role', '', '', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();



    // Rellenar objeto usuario

    // this.user = this.identity;
    // this.user.sub = null;
    this.user = new User(
      this.identity.sub,
      this.identity.name,
      this.identity.surname,
      this.identity.role,
      this.identity.email,
      this.identity.password,
      this.identity.description,
      this.identity.image);


  }

  ngOnInit() {
  }

   ngDoCheck() {
    this.loadUser();
    // this.getCategories();
  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }


  onSubmit(form) {
    this._userService.update(this.token, this.user).subscribe(
      response => {
        if (response && response.status) {

          console.log(response.changes);
          this.status == 'success';


          // Actuializar usuario en sesión
          this.identity = this.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));

          this._router.navigate(['/inicio']);


        } else {
          this.status = 'error';
        }


      },
      error => {

        this.status = 'error';
        console.log(error);
      }
    );
  }

  DocUpload(datos) {
    console.log(JSON.parse(datos.response));
    let data = JSON.parse(datos.response);
    this.user.image = data.image;

  }




}

