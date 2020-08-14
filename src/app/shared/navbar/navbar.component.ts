import { User } from '../../models/user';
import { global } from './../../services/global';
import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './../../services/user.service';
import { CategoryService } from '../../services/category.service';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/category';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService, CategoryService]
})
export class NavbarComponent implements OnInit, DoCheck {

  public identity;
  public token;
  public url;
  public categories;

  constructor(
    public _userService: UserService,
    public _categoryService: CategoryService,

  ) {
    this.loadUser();
    this.url = global.url;
  }

  ngOnInit() {
    console.log('Webapp cargada correctamente');
    this.getCategories();

  }

  ngDoCheck() {
    this.loadUser();
    // this.getCategories();
  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }


  getCategories() {
    this._categoryService.getCategories().subscribe(
      response => {

        if (response.status == 'success') {

          this.categories = response.categories;
          console.log('Este es el get de categories navbar '+ this.categories);
        }

      },
      error => {
        console.log(error);

      }
    )
  }

}

