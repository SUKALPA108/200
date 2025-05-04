import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html'
})
export class MessageFormComponent {
  message = { subject: '', body: '', sender: '', receiver: '' };
  sent = false;

  constructor(private messageService: MessageService) {}

  sendMessage() {
    this.messageService.sendMessage(this.message).subscribe(() => {
      this.sent = true;
    });
  }
}
