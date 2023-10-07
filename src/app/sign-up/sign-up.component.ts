import { Component, OnInit } from '@angular/core';
import { User } from '../login/login.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private snackBar:MatSnackBar) { }


  //variables
  UserData: User | undefined;
  username: string = '';
  password: string = '';
  surname: string = '';
  idNumber: number;
  schoolName: string = '';
  email: string = '';
  cellNumber: number;
  password_confirmation: string = '';
  studentNo: number;
  schoolId: number;



  ngOnInit(): void {

    console.log(`Login was initialized Now.`);

  }


  onUserSignUPSubmit_Func(username: string,surname: string, idNumber:number,schoolName:string,email:string,cellNumber: number,password: string, password_confirmation: string,studentNo:number,schoolId:number) {
      // Assuming your API endpoint for login is 'https://example.com/api/login'
      this.http.post('https://api-annconnect.com/api/register',{ username,surname, idNumber,schoolName,email,cellNumber,password, password_confirmation,studentNo,schoolId})
      .subscribe(
        (response: any) => {
          // If the response status is 200 (OK), redirect to the home component
          if (response.status === 200) {
            this.snackBar.open(`Registration Successful - Username: ${username}, Password: ${studentNo}`, 'Close', {
              duration: 5000 // 5 seconds duration for the snackbar
            });

            this.router.navigate(['/login']); // Navigate to your home component route
          } else {
            console.error('Registration Failed'); // Log an error if the response status is not 200
            this.snackBar.open(`Registration was Unsuccessful - Username: ${username}, Password: ${studentNo}`, 'Close', {
              duration: 5000 // 5 seconds duration for the snackbar
            });
          }
        },
        error => {
          console.error('Login Error', error); // Log an error if the HTTP request fails
          this.snackBar.open(`A Registration request Error has Occured - Username: ${username}, Password: ${password}`, 'Close', {
            duration: 5000 // 5 seconds duration for the snackbar
          });
        }
      );

    }


}
