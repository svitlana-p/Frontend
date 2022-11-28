import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IEmotions } from '../models/emotions';
import { Emotion } from '../models/emotion-enum';
import { IQuestion } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  emotionJoy = false;
  emotionFear = false;
  emotionSadness = false;
  emotionDisgust = false;
  emotionSurprise = false;
  emotionAnger = false;  

  constructor(private http: HttpClient) { }

  getAll(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>('http://localhost:8080/getAll')
  }


  postTest(questions: (Partial<IQuestion>[])): Observable<IEmotions[]> {
    return this.http.post<IEmotions[]>('http://localhost:8080/v1/results', questions)
      .pipe(
        tap((answer: IEmotions[]) => {
          answer.forEach(element => {           
            if (element[Emotion.joy] > 50) this.emotionJoy = true;
            if (element[Emotion.fear] > 50) this.emotionFear = true;
            if (element[Emotion.sadness] > 50) this.emotionSadness = true;
            if (element[Emotion.disgust] > 50) this.emotionDisgust = true;
            if (element[Emotion.surprise] > 50) this.emotionSurprise = true;
            if (element[Emotion.anger] > 50) this.emotionAnger = true;
          })
        })
      )
  };

}
