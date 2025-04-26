package com.hrms.communicationservice.service;

import com.hrms.communicationservice.entity.Survey;
import java.util.List;

public interface SurveyService {
    Survey createSurvey(Survey survey);
    List<Survey> getAllSurveys();
    Survey getSurveyById(Long id);
}
