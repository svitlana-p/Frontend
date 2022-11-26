import { Observable, of } from "rxjs";
import { testMock } from "../mocks/tests-mock";
import { IQuestion } from "../models/question";

export class TestServiceMock {
    getAll():Observable<IQuestion[]>{
        return of(testMock);
    }

    postTest(){
        return 'ok'
    }
}