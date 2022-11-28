import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { TestService } from './test.service';
import { testMock } from '../mocks/tests-mock'

describe('TestService', () => {
  let service: TestService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new TestService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all questions', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(testMock));

    service.getAll().subscribe({
      next: data => {
        expect(data).toEqual(testMock);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should be truthy', (done: DoneFn) => {
    const questions = [
      {
        'emotionId': 3,
        'value': 5
      },
      {
        'emotionId': 1,
        'value': 2
      }]
    httpClientSpy.post.and.returnValue(of([]));

    service.postTest(questions).subscribe({
      next: data => {
        expect(data).toBeTruthy();
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.post.calls.count()).toBe(1);
  })
});
