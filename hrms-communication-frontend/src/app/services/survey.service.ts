import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SurveyService {
  private baseUrl = 'http://localhost:8087/api/surveys';

  constructor(private http: HttpClient) {}

  getSurveys() {
    return this.http.get<any[]>(this.baseUrl);
  }

  createSurvey(survey: any) {
    return this.http.post(this.baseUrl, survey);
  }
}
