import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent{
  private subscription: Subscription

  title: string = ""
  questionSelected: string = ""
  options: {}[] = []
  result: string = ""
  finished: boolean = false

  answers: string[] = []

  constructor(private serviceData: DataService, private cdRef: ChangeDetectorRef) {
    this.subscription = this.serviceData.dadosAtualizados$.subscribe((data) => {

      setTimeout(() => {
        this.title = data.quiz.title
        this.cdRef.detectChanges(); // Informa ao Angular para verificar as alterações
      }, 0);



      if (!data.finished) {
        this.questionSelected = data.quiz.questions[data.index].question
        this.options = data.quiz.questions[data.index].options
        this.answers = data.answers
      } else {
        const finalStep = this.checkResult(this.answers)
        this.finished = true
        this.result = data.quiz.results[finalStep]
      }
    })


  }


  checkResult(anwsers:string[]){

    const result = anwsers.reduce((previous, current, i, arr)=>{
        if(
          arr.filter(item => item === previous).length >
          arr.filter(item => item === current).length
        ){
          return previous
        }else{
          return current
        }
    })

    return result
  }


}
