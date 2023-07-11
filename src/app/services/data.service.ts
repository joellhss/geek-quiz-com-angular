import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private dadosAtualizados = new Subject<any>();

  dadosAtualizados$ = this.dadosAtualizados.asObservable();

  atualizarDados(quiz: any, index:number, answers:string[], finished: boolean): void {
    this.dadosAtualizados.next({
      quiz: quiz,
      index: index,
      answers: answers,
      finished: finished
    });
  }
}
