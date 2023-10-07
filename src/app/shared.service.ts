// import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })

// export class SharedService {

//   readonly ApiUrl ="http://localhost:5073/api/Character/GetMaleThangs" ;
//   readonly ImageUrl ="http://localhost:5073/images" ;
  
//   loginStatus: boolean | undefined;

//     constructor(private http:HttpClient) { }
  
//     // getMaleProdItemsList():Observable<any[]>{
//     //   return this.http.get<any[]>(this.ApiUrl)
//     // }

//     login(username: string, password: string) {
//       // Assuming your API endpoint for login is 'https://example.com/api/login'
//       this.http.post('http://ec2-13-48-190-41.eu-north-1.compute.amazonaws.com/api/login', { username, password })
//         .subscribe(
//           (response: any) => {
//             // If the response status is 200 (OK), redirect to the home component
//             if (response.status === 200) {
//               console.error('Login Successful'); // Log an error if the response status is not 200
//               this.loginStatus = true; // Login successful

//             } else {
//               console.error('Login Failed'); // Log an error if the response status is not 200
//               this.loginStatus = false; // Login failed

//             }
//           },
//           error => {
//             console.error('Login Error', error); // Log an error if the HTTP request fails
//           }
//         );

//         return this.loginStatus;
//     }

//   }
  
