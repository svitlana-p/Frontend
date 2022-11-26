import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TestService } from 'src/app/core/test.service';
import { IQuestion } from 'src/app/models/question';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  isVisible = false;
  sub!: Subscription;
  questions: IQuestion[] = [];

  testForm = new FormGroup({
    questions: new FormArray([])
  });


  constructor(private testService: TestService,
    private router: Router) { }

  get questionsArr(): FormArray {
    return this.testForm.get('questions') as FormArray
  }

  ngOnInit(): void {
   this.sub = this.testService.getAll().subscribe(questions => {
      this.questions = questions;
      this.setFormData();
    })
  }

  private setFormData() {
    this.questions.forEach(question => this.addQuestion(question));
  }

  private addQuestion({ id, rate }: IQuestion) {
    this.questionsArr.push(
      new FormGroup({
        id: new FormControl(id),
        rate: new FormControl(rate)
      })
    )
  }
  
  radioOptions(question: IQuestion) {
    return new Array(5);
  }

  onSubmit() { 
    console.log(this.testForm.value)
    this.testService.postTest(this.testForm.value)
    this.router.navigate(['/result'])
  }
  ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }
}