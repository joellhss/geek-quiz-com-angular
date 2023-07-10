import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { QuestionComponent } from './components/quizz/question/question.component';
import { OptionComponent } from './components/quizz/option/option.component';
import { ResultComponent } from './components/quizz/result/result.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizzComponent,
    QuestionComponent,
    OptionComponent,
    ResultComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
