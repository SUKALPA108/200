package com.hrms.communicationservice.service.impl;

import com.hrms.communicationservice.entity.Survey;
import com.hrms.communicationservice.repository.SurveyRepository;
import com.hrms.communicationservice.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurveyServiceImpl implements SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    @Override
    public Survey createSurvey(Survey survey) {
        return surveyRepository.save(survey);
    }

    @Override
    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    @Override
    public Survey getSurveyById(Long id) {
        return surveyRepository.findById(id).orElse(null);
    }
}
