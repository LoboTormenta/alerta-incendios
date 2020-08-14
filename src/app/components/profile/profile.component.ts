import { environment } from './../../../environments/environment';
import { global } from './../../services/global';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [PostService, UserService]
})
export class ProfileComponent implements OnInit, DoCheck {

  public readonly url = environment.apiUrl;
  public posts: Array<Post>;
  public status;
  public user: User;
  public identity;
  public token;



  constructor(

    private _postService: PostService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {

    this.getProfile();

  }

  ngDoCheck() {
    this.loadUser();
    // this.getCategories();
  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  getProfile() {

    //sACAR EL ID DEL POST
    this._route.params.subscribe(params => {
      let userId = +params['id'];
      console.log(userId);
      this.getUser(userId);
      this.getPost(userId);
    });




  }

  getUser(userId) {
    this._userService.getUser(userId).subscribe(
      response => {
        if (response.status == 'success') {
          this.user = response.user;

          console.log(this.user);
        }

      });
    }


  getPost(userId) {
    this._userService.getPost(userId).subscribe(
      response => {


        if (response.status == 'success') {
          this.posts = response.posts;
          console.log(this.posts);
          console.log('Da bien la entrada de profiles posts');
        }

      }, error => {
        console.log(error);
      }
    );
  }


  deletePost(id) {
    this._postService.delete(this.token, id).subscribe(
      response => {

        this.getProfile();

      },
      error => {
        console.log(error);


      }
    );

  }


  
}


