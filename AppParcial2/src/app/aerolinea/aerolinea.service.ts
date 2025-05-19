import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment.development';
import { AerolineaDetail} from './aerolineaDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

  private apiUrl: string = environment.baseUrl + 'aerolineas';

  constructor(private http: HttpClient){}
 getAerolineas(): Observable<AerolineaDetail[]>
 {
    return this.http.get<AerolineaDetail[]>(this.apiUrl);

 }

}
