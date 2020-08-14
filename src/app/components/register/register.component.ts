import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public page_title: string;
  public user: User;
  public status: any;

  constructor(

    private _userService: UserService
  ) {

    this.page_title = 'Registrate';

    this.user = new User( 1, '', '', 'User_Role', '', '', '', '');


   }

   ngOnInit() {
    console.log(this._userService.test());
  }

onSubmit(form) {


this._userService.register(this.user).subscribe(
  response => {
  
    if (response.status == 'success') {
        this.status = response.status;
        form.reset();


      } else {
        this.status = 404;
      }
  }, 
  
  error => {
    console.log(error as any);

  }
);


}

}
