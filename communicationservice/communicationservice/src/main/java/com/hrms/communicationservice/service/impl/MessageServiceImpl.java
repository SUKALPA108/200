package com.hrms.communicationservice.service.impl;

import com.hrms.communicationservice.entity.Message;
import com.hrms.communicationservice.repository.MessageRepository;
import com.hrms.communicationservice.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public Message sendMessage(Message message) {
        return messageRepository.save(message);
    }

    @Override
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }
}
