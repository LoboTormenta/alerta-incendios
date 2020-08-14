import { environment } from './../../../environments/environment';
import { PostService } from './../../services/post.service';
import { global } from './../../services/global';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';
import { Post } from '../../models/post';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';





@Component({
  selector: 'app-photoupload',
  templateUrl: './photoupload.component.html',
  styleUrls: ['./photoupload.component.css'],
  providers: [UserService, CategoryService, PostService],

})
export class PhotouploadComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public post: Post;
  public categories;
  public readonly apiUrl = environment.apiUrl;
  public status;
  public is_edit: boolean;
  public url;

public froala_options : Object ={
charCount: true,
languaje: 'es',

}


  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.jpeg,.png,.gif",
    maxSize: "50",
    uploadAPI: {
      url: this.apiUrl + 'post/upload',
      method: 'POST',
      headers: {
        'Authorization': this._userService.getToken()
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    attachPinText: 'Sube las imágenes o archvos para los componentes'
  };
  

  constructor(

    //public _cargaImagenes: CargaImagenesService
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _categoryService: CategoryService,
    private _postService: PostService

  ) {

    this.page_title = 'Crea poblicaciones a la WebApp';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.is_edit = true;
    this.url = global.url;
  }


  ngOnInit(): void {


    this.getCateogories();
    this.post = new Post(1, this.identity.sub, 1, '','', '', '', '', '', null, null);
    console.log(this.post);

  }

  getCateogories() {

    this._categoryService.getCategories().subscribe(
      response => {
        if (response.status == 'success') {
          this.categories = response.categories;
        }
      },
      error => {
        console.log(error);

      }
    );
  }




   getPost() {
    //Cacar el psot de la url

    this._route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);

      //Peticion Ajax para sacar los datos


      this._postService.getPost(id).subscribe(

        response => {
          if (response.status == 'success') {

            this.post = response.posts;
            console.log(this.post);
          } else {

            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );

    });
  }



  imageUpload(data) {
    console.log(JSON.parse(data.response));
    let image_data = JSON.parse(data.response);
    this.post.image = image_data.image;

  }

  onSubmit(form) {
    this._postService.create(this.token, this.post).subscribe(
response => {

  if(response.status == 'success'){
    this.post = response.post;
    this.status = 'success';
    this._router.navigate(['/semana1']);
  } else{
    this.status = 'error';
  }
},
error => {
  console.log(error);
  this.status = 'error';
}
    );

  }

}
