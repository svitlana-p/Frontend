import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestion } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getAll():Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>('http://localhost:8080/getAll')
  }


  postTest(questions:(Partial<IQuestion>[])){
    return this.http.post<any>('http://localhost:8080/v1/results', questions)
  };

  getResult(){

  }
}
