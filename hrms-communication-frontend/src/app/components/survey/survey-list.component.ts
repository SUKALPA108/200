import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html'
})
export class SurveyListComponent implements OnInit {
  surveys: any[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.surveyService.getSurveys().subscribe(data => {
      this.surveys = data;
    });
  }
}
