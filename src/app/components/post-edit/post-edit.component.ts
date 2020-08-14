import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from './../../../environments/environment';
import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';
import { PostService } from './../../services/post.service';
import { Post } from '../../models/post';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@Component({
  selector: 'app-post-edit',
  templateUrl: '../post-edit/post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
  providers: [UserService, CategoryService, PostService],
})
export class PostEditComponent implements OnInit {



  public page_title: string;
  public identity;
  public token;
  public post: Post;
  public categories;
  public readonly apiUrl = environment.apiUrl;
  public status;
  public is_edit: boolean;
  public url: string;


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

    this.page_title = 'Editar entradadas de los compoentes';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.is_edit = true;
    

  }



  ngOnInit(): void {

    this.getCateogories();
    this.post = new Post(1, this.identity.sub, 1, '', '', '', '', '', '', null, null);
    this.getPost();
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
      let id = +params['id'];
      console.log(id);

      //Peticion Ajax para sacar los datos


      this._postService.getPost(id).subscribe(

        response => {
          if (response.status == 'success') {

            this.post = response.posts;


            if (this.post.user.id != this.identity.sub) {

              this._router.navigate(['/home']);

            }




            console.log(this.post);
          } else {

            this._router.navigate(['/inicio']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['home']);
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

    this._postService.update(this.token, this.post, this.post.id).subscribe(
      response => {

        if (response.status == 'success') {

          this.status = 'success';


          // this.post = response.post

          //redirigir a la pagina del psot

          this._router.navigate(['/home', this.post.id]);

        } else {
          this.status = 'error';
        }

      },
      error => {

      }
    )

  }



}
