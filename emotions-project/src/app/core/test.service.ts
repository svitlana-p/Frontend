import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ITest } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  tests:ITest[] = [];

  constructor(private http: HttpClient) { }

  getAll():Observable<ITest[]>{
    return this.http.get<ITest[]>('http://localhost:8080/getAll')
      .pipe(
        tap((tests:ITest[])=>{
          this.tests = tests;
        })
      )
  }


  postTest(){

  };

  getResult(){

  }
}
