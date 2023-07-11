import { Injectable } from '@angular/core';
import quizz_questions from "src/assets/data/quizz_questions.json"
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quiz: any = quizz_questions
  answers: string[] = []

  index: number = 0
  maxIndex: number = this.quiz.questions.length

  constructor(private dataService: DataService) {
    this.dataService.atualizarDados(this.quiz, this.index, this.answers, false)
  }

  nextQuestion(value:string) {
    this.answers.push(value)
    this.index++

    if (this.maxIndex > this.index) {
      this.dataService.atualizarDados(this.quiz, this.index, this.answers, false)
    } else {
      this.dataService.atualizarDados(this.quiz, this.index, this.answers, true)
    }
  }



}
