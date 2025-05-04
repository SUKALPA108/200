import { Component } from '@angular/core';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html'
})
export class SurveyFormComponent {
  survey = { question: '', options: '', createdBy: '' };
  submitted = false;

  constructor(private surveyService: SurveyService) {}

  submitSurvey() {
    this.surveyService.createSurvey(this.survey).subscribe(() => {
      this.submitted = true;
    });
  }
}
