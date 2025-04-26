package com.hrms.communicationservice.service;

import com.hrms.communicationservice.entity.Message;
import java.util.List;

public interface MessageService {
    Message sendMessage(Message message);
    List<Message> getAllMessages();
}
