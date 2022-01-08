import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
declare global {
  interface Window {
    Kakao: any
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  openSignUp: Boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    // console.log('카카오', window.Kakao);
    // console.log('카카오', window.Kakao.init('df2b5e44b6f27f905a5950551bd62103'));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.router.navigate(['./']);
  }

  openSignUpModal(): void {
    this.openSignUp = true;
  }

  closeModal(event: Boolean): void {
    this.openSignUp = event;
  }

  doKakaoLogin(): Observable<any> {
    return new Observable<any>((observer) => {
      
      this.http.get('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=df2b5e44b6f27f905a5950551bd62103&redirect_uri=http://localhost:4200/dashboard').subscribe(
        (reponse) => {
          console.log('observer.next(reponse)', observer.next(reponse));
        },
        (error) => {
          console.log('observer.next(error)', observer.next(error));
        }
      )
    });
  }
  // https://kauth.kakao.com/oauth/authorize
  // https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=df2b5e44b6f27f905a5950551bd62103&redirect_uri=http://localhost:4200/dashboard

  // get(url: string, params?: HttpParams): Observable<any> {
  //   return new Observable<any>(observer =>
  //     this.internalGet(url, { params })
  //       .subscribe(
  //         response => { observer.next(response.body ? response.body : response); },
  //         error => { observer.error(this.handleError(error)); }
  //       )
  //   );
  // }

  // private internalGet<R>(url: string, options?: any): Observable<HttpResponse<R>> {
  //   return this.http.get<R>(`${this.API_URL}/${url}`,
  //     {
  //       observe: 'response',
  //       params: options.params,
  //       responseType: 'json',
  //       withCredentials: false
  //     });
  // }
}
