import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseurl + "/movies/", { headers: this.httpHeaders });
  }

  getMovies(value: string): Observable<any> {
    const body = { Question: value }; 
    return this.http.post(this.baseurl + "/demo/question/", body, { headers: this.httpHeaders });

  }
  
  
}