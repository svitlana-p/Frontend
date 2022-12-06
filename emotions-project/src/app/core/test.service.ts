import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Emotion } from '../models/emotion-enum';
import { IEmotions } from '../models/emotions';
import { IQuestion } from '../models/question';
import { QuestionnareRes } from '../models/questionnare-res';


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
//@ts-ignore
  apiURL = environment?.apiURL || ''

  constructor(private http: HttpClient) { }

  getAll(): Observable<IQuestion[]> {
    return this.http.get<QuestionnareRes>(`${this.apiURL}/v1/questions`)
      .pipe(
        map(res => res.content)
      )
  }

  postTest(questions: (Partial<IQuestion>[])): Observable<IEmotions> {
    
    return this.http.post<IEmotions>(`${this.apiURL}/v1/results`, questions)
      .pipe(
        tap((res: IEmotions) => {
          if (res[Emotion.joy] >= 4) this.emotionJoy = true;
          if (res[Emotion.fear] >= 4) this.emotionFear = true;
          if (res[Emotion.sadness] >= 4) this.emotionSadness = true;
          if (res[Emotion.disgust] >= 4) this.emotionDisgust = true;
          if (res[Emotion.surprise] >= 4) this.emotionSurprise = true;
          if (res[Emotion.anger] >= 4) this.emotionAnger = true;
        })
      )
  };


  getResult() {

  }
}
