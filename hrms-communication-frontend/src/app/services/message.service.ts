import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private baseUrl = 'http://localhost:8087/api/messages';

  constructor(private http: HttpClient) {}

  getMessages() {
    return this.http.get<any[]>(this.baseUrl);
  }

  sendMessage(message: any) {
    return this.http.post(this.baseUrl, message);
  }
}
