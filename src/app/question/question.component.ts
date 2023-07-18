import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import SimpleBar from 'simplebar';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements AfterViewInit {
  isAnswerVisible: boolean[] = [];
  @ViewChild('chatbox') chatboxRef!: ElementRef;

  toggleAnswerBox(index: number) {
    this.isAnswerVisible[index] = !this.isAnswerVisible[index];
  }

  ngAfterViewInit() {
    new SimpleBar(this.chatboxRef.nativeElement);
  }
}


