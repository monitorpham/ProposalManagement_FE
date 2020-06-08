import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProposals(){
    const url =`${environment.apiUrl}/api/proposals-data-table`
    return this.httpClient.get<any>(url);
  }
}
