import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodService {

  constructor(private httpClient: HttpClient) {
  }

  getAllDonor(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1/blood/?api=base/donor');
  }
}
