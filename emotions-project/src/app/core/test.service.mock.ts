import { Observable, of } from "rxjs";
import { resultMock } from "../mocks/result-mock";
import { testMock } from "../mocks/tests-mock";
import { IQuestion } from "../models/question";

export class TestServiceMock {
    getAll():Observable<IQuestion[]>{
        return of(testMock);
    }

    postTest(){
        return 'ok'
    }

    getResult(){
        return of(resultMock);
    }
}