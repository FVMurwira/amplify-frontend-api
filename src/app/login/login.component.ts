import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingService } from '../loading.service';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';


// import { SharedService } from '../shared.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// export class User {

//   public email: string
//   public password: string
//   public Size_Range: { [key: string]: number } ;


// }


export class LoginResponseObj_1 {
  constructor(
    public token: string

  ) {}
}

export class LoginResponseObj<T> {
  constructor(public status: number, public message: string, public data: T) {}
}


export class User {
  constructor(
    public email: string,
    public password: string

  ) {}
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  // constructor(private service:SharedService,private router:Router) { }
  constructor(private router:Router,private http:HttpClient,private snackBar:MatSnackBar, private loadingService: LoadingService) { }


  //variables
  UserData: User | undefined;
   UserLoginRes: LoginResponseObj_1;
  email: string = '';
  password: string = '';

  postDataResult: any;
//initialisation of Login Comp
  ngOnInit(): void {

    console.log(`Login was initialized Now.`);

  }



  onUserLoginSubmit_Func(email: string, password: string) {



    // Simulate an API call (replace with your actual login logic)


  // this.LoaderIndication.setLoadingState(true);
 // Set loading state to true before redirecting
 this.loadingService.setLoadingState(true);

      // Assuming your API endpoint for login is 'https://example.com/api/login'
      this.http.post('https://api-annconnect.com/api/login',{ email, password })
      .subscribe(
        (response: LoginResponseObj_1) => {

          console.log(`Login initializing......... `);

          // If the response status is 200 (OK), redirect to the home component
          if (response.token.trim() === '') {
        

            console.error('Login Failed'); // Log an error if the response status is not 200
            this.snackBar.open(`Login for ${email} was Unsuccessful `, 'Close', {
              duration: 5000 // 5 seconds duration for the snackbar
            });

            // setTimeout(() => {
            //   // Redirect to home page after a delay (simulating API call)
            //   this.router.navigate(['/home']);
            //   // Set loading state back to false after redirection
            //   this.loadingService.setLoadingState(false);
            // }, 2000); // Simulated delay of 2 seconds




          } else {
         
            console.log(`Login Successful `, response.token.toString());

            this.snackBar.open(`Login Successful Welcome ${email}`, 'Close', {
              duration: 5000 // 5 seconds duration for the snackbar
            });

            this.router.navigate(['/home']);   // Navigate to your home component route


            // setTimeout(() => {
            //   // Redirect to home page after a delay (simulating API call)
            //   this.router.navigate(['/Login']);
            //   // Set loading state back to false after redirection
            //   this.loadingService.setLoadingState(false);
            // }, 2000); // Simulated delay of 2 seconds


          }
        },
        error => {
          console.error('Login Error', error); // Log an error if the HTTP request fails
          this.snackBar.open(`A Login request Error has Occured`, 'Close', {
            duration: 5000 // 5 seconds duration for the snackbar
          });

          // setTimeout(() => {
          //   // Redirect to home page after a delay (simulating API call)
          //   this.router.navigate(['/Login']);
          //   // Set loading state back to false after redirection
          //   this.loadingService.setLoadingState(false);
          // }, 2000); // Simulated delay of 2 seconds
        }
      );

    }

  }


 

//   getLoginDataResponse(email :string , password :string) {
//     // Make a POST request and return an observable 
//     return  this.http.post('https://api-annconnect.com/api/login',{ email, password })

//   }


  

//   onUserLoginSubmit_Func(email: string, password: string) {
//     // Simulate an API call (replace with your actual login logic)


//   // this.LoaderIndication.setLoadingState(true);
//  // Set loading state to true before redirecting
//  this.loadingService.setLoadingState(true);

//       // Assuming your API endpoint for login is 'https://example.com/api/login'

     

//       this.getLoginDataResponse(email,password).subscribe(
//         (response: HttpResponse<any>) => {

//           this.postDataResult = response;
//           console.log(`Login was Successful.`,response.body);
//           // If the response status is 200 (OK), redirect to the home component
//           if (this.postDataResult.status === 200) {

//             console.log(`Login was Successful.`,this.postDataResult.status);
//             this.router.navigate(['/home']);   // Navigate to your home component route
//             this.snackBar.open(`Login Successful Welcome ${email}`, 'Close', {
//               duration: 5000 // 5 seconds duration for the snackbar
//             });

//             // setTimeout(() => {
//             //   // Redirect to home page after a delay (simulating API call)
//             //   this.router.navigate(['/home']);
//             //   // Set loading state back to false after redirection
//             //   this.loadingService.setLoadingState(false);
//             // }, 2000); // Simulated delay of 2 seconds

//           } else if (response.status === 422) {
//             console.error('Login Failed'); // Log an error if the response status is not 200
//             this.snackBar.open(`Login for ${email} was Unsuccessful `, 'Close', {
//               duration: 5000 // 5 seconds duration for the snackbar
//             });


//             // setTimeout(() => {
//             //   // Redirect to home page after a delay (simulating API call)
//             //   this.router.navigate(['/Login']);
//             //   // Set loading state back to false after redirection
//             //   this.loadingService.setLoadingState(false);
//             // }, 2000); // Simulated delay of 2 seconds


//           }
//         },
//         error => {
//           console.error('Login Error', error); // Log an error if the HTTP request fails
//           this.snackBar.open(`A Login request Error has Occured`, 'Close', {
//             duration: 5000 // 5 seconds duration for the snackbar
//           });

//           // setTimeout(() => {
//           //   // Redirect to home page after a delay (simulating API call)
//           //   this.router.navigate(['/Login']);
//           //   // Set loading state back to false after redirection
//           //   this.loadingService.setLoadingState(false);
//           // }, 2000); // Simulated delay of 2 seconds
//         }
//       );

//     }

//   }

  


  // onLoginUser

  // onUserLoginSubmit_Func() {

  //   const loginResult = this.service.login(this.username, this.password);

  //   if (loginResult) {
  //     this.router.navigate(['/home']); // Navigate to your home component route
  //     // Redirect or perform actions for successful login
  //   } else {
  //     console.log('Login failed');
  //     // Handle failed login, show error message, etc.
  //   }
  // }



