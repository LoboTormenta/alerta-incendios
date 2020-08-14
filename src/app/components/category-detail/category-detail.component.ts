import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from './../../services/global';
import { Post } from './../../models/post';
import { PostService } from '../../services/post.service';
import { Category } from '../../models/category';
import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';





@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [CategoryService, UserService, PostService]
})
export class CategoryDetailComponent implements OnInit {

  public page_title: string;
  public url: string;
  public category: Category;
  public posts: any;
  public status;
  public identity;
  public token;
  

  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _categoryService: CategoryService,
    private _userService: UserService,
    private _postService: PostService,

  ) { 
    
    this.url=global.url;
    this.identity = this._userService.getIdentity();
    this.identity = this._userService.getToken();
  
  }

  ngOnInit(): void {

    this.getPostsByCategory();
    this.getPosts();
  }


  // getPostByCategory() {

  //   this._route.params.subscribe(params => {
  //     let id = +params['id'];

  //     this._categoryService.getCategoy(id).subscribe(
  //       response => {

  //         if (response.status == 'success') {
  //           console.log(response);
  //           this.category = response.category;

  //           this._categoryService.getPosts(id).subscribe(
  //             response => {

  //               if (response.status == 'success') {

  //                 this.posts = response.post;

  //               }else {
  //                 this._router.navigate(['/home']);
  //               }
  //             },
  //             error => {
  //               console.log(error);

  //             }
  //           )

  //         } else {
  //           this._router.navigate(['/home']);
  //         }

  //       },
  //       error => {
  //         console.log(error);

  //       }
  //     )
  //   })
  // }


  getPostsByCategory() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
 
      this._categoryService.getCategoy(id).subscribe(
        response => {
            if (response.status == 'success') {
              this.category = response.category;
              console.log(response);
 
              this._categoryService.getPosts(id).subscribe(
                response => {
                  if (response.status == 'success') {
                    this.posts = response.posts;
                    console.log('response de Posts '+ response);
                    
                  } else {
                    this._router.navigate(['/home']);
                  }
 
                },
                error => {
                  console.log(error);
                }
              );
 
            } else {
              this._router.navigate(['/home']);
            }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  getPosts(){
    this._postService.getPosts().subscribe(
      response => {
  
  
        if (response.status == 'success') {
          this.posts = response.posts;
  
  
          console.log(this.posts);
          console.log('Da bien la entrada de category-detail');
  
  
        }
  
  
      }, error => {
  
        console.log(error);
      }
  
    );
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
