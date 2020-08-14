import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';
import { Post } from './../../models/post';
import { PostService } from '../../services/post.service';
import { global } from './../../services/global';
import { UserService } from '../../services/user.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService, UserService]
})



export class HomeComponent implements OnInit {


  public page_title: string;
  public readonly url = environment.apiUrl;
  public posts: Array<Post>;
  public status;
  public identity;
  public token;


  constructor(

    private _postService : PostService,
    private _userService : UserService,
  ) {
    this.page_title ='Incio';
    // this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

ngOnInit(){

  this.getPosts();
}




getPosts(){
  this._postService.getPosts().subscribe(
    response => {


      if (response.status == 'success') {
        this.posts = response.posts;


        console.log(this.posts);
        console.log('Da bien la entrada de home posts');


      }


    }, error => {

      console.log(error);
    }

  );
}







  downloadFile(){
    let link = document.createElement("a");
    // link.download = "filename";
    link.href = "../../../assets/06 - Pronóstico de Incendios/CURVA_EFECTIVIDAD_SEM_8.pdf";
    link.click();

  }

  downloadFile1(){
    let link = document.createElement("a");
    // link.download = "filename";
    link.href = "../../../assets/consolidado/CONSOLIDADO_SEMANAL AL 01.03.2020.xlsx";
    link.click();

  }



  deletePost(id) {
    this._postService.delete(this.token, id).subscribe(
      response => {
        this.getPosts();

      },
      error => {
console.log(error);


      }
    );

  }


}
