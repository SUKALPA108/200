package com.hrms.communicationservice.controller;

import com.hrms.communicationservice.entity.Survey;
import com.hrms.communicationservice.service.SurveyService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/surveys")
@Tag(name = "Survey Management APIs")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    @PostMapping
    public Survey createSurvey(@RequestBody Survey survey) {
        return surveyService.createSurvey(survey);
    }

    @GetMapping
    public List<Survey> getAllSurveys() {
        return surveyService.getAllSurveys();
    }

    @GetMapping("/{id}")
    public Survey getSurveyById(@PathVariable Long id) {
        return surveyService.getSurveyById(id);
    }
}
