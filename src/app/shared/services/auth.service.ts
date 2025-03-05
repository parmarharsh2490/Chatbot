import { inject, Injectable } from '@angular/core';
import { User } from '../../interface/user';
import { HttpClient } from '@angular/common/http';
import { Toast } from './toast.service';
import { Statistics } from '../../interface/dashboard';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  user!: User;
  checkAuthUser(){
    // this.httpClient.get("").subscribe((data) => {
    //   console.log("User : ", this.user);
    //   this.user = data as User;
    //   console.log("Data : ", data);
    // })
    this.toastService.showErrorToast("Please Login");
    // this.router.navigateByUrl("auth/sign-up")
  }

  updateUser(){}
  getUserStatistics(statistics : Statistics){
    this.httpClient.get("/dashboard/statistics",{ params : { statistics } }).subscribe((data) => {
      console.log("Data : ", data);
    })
  }
  constructor(private httpClient : HttpClient,private toastService : Toast,private router : Router) {}

}
