import { Injectable } from "@angular/core";
import { Time } from "@angular/common";
import { BehaviorSubject } from "rxjs";

export class IMessage {
  id: number;
  message: string;
  userName: string;
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: "root",
})
export class MessageService {
  messages: IMessage[] = [
    {
      id: generateId(),
      message: "Hello, fellow Marauder",
      userName: "SiriusBot",
    },
    {
      id: generateId(),
      message: "I solemnly swear I am up to no good 😜",
      userName: "SiriusBot",
    },
  ];
  message$ = new BehaviorSubject<IMessage[]>(this.messages);
  constructor() {}
  addMessage(message: IMessage) {
    this.messages.push(message);
    if (message.message == "I solemnly swear I am up to no good") {
      this.messages.push({
        id: generateId(),
        message:
          "“Messers Moony, Wormtail, Padfoot and Prongs. Purveyors of Aids to magical Mischief-Makers. are proud to present. THE MARAUDER'S MAP”",
        userName: "SiriusBot",
      });
    }
  }
}
