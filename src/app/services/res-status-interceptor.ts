// import { Injectable } from '@angular/core'
// import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Router } from '@angular/router';
// @Injectable({
//   providedIn: 'root'
// })
// export class ResStatusInterceptor implements HttpInterceptor {
//   constructor(
//     public router: Router,
//   ) { }
//   // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//   //   // return next.handle(req)
//   //   //   .pipe(
//   //   //     catchError(err => {
//   //   //       if (err instanceof HttpErrorResponse && err.status === 0) {
//   //   //         console.log('Check Your Internet Connection And Try again Later');
//   //   //       }
//   //   //       // else if (err instanceof HttpErrorResponse && err.status === 200) {

//   //   //       //   return throwError(err);
//   //   //       // }
//   //   //       // else if (err instanceof HttpErrorResponse && err.status === 401) {

//   //   //       //   this.router.navigateByUrl('/login');
//   //   //       //   return throwError(err);
//   //   //       // }
//   //   //       return throwError(err);

//   //   //     })

//   //   //   );

//   // }
// }  
