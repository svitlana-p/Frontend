import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/core/test.service';
import { ITest } from 'src/app/models/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tests$!:ITest[]

  constructor(public testService: TestService) { }

  ngOnInit(): void {
    this.testService.getAll().subscribe((tests)=>{
      this.tests$ = tests
    })
  }

}
