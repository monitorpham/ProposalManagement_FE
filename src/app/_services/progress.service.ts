import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(
    private httpClient: HttpClient
  ) { }

  completeProgress(id){
    const url = `${environment.apiUrl}/progess-detaill-stage?idProgressDetail=${id}`
    return this.httpClient.put<any>(url, null)
  }
}
