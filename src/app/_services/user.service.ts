import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User,IUser } from '../_models/user';
import { Observable } from 'rxjs';
import { UserExtras } from '../_models/user-extras';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUsers(){
    const url =`${environment.apiUrl}/users`
    return this.httpClient.get<any>(url);
  }

  // update(user : IUser): Observable<IUser>{
  //   const url =`${environment.apiUrl}/users`
  //   return this.httpClient.put<any>(url,user);
  // }
  update(user: IUser): Observable<IUser> {
    const url =`${environment.apiUrl}/users`
    return this.httpClient.put<IUser>(url, user);
  }

  getUserById(id) {
    const url =`${environment.apiUrl}/users?id=${id}`
    return this.httpClient.get<User>(url);
  }


  createUser(userExtras,param) {
    const url =`${environment.apiUrl}/users`
    return this.httpClient.post<any>(url, userExtras,param);
  }

  authorities(): Observable<string[]> {
    const url =`${environment.apiUrl}/users/authorities`
    return this.httpClient.get<string[]>(url);
  }


}
