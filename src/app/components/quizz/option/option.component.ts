import { Component, Input } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {
  @Input()
  options: any = []

  constructor(private service:QuizService){}

  playerChoose(value: string) {
    this.service.nextQuestion(value)
  }


}
