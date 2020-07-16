import { Component, OnInit } from "@angular/core";
import { MessageService, IMessage } from "../message.service";

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Component({
  selector: "app-input-chatbox",
  templateUrl: "./input-chatbox.component.html",
  styleUrls: ["./input-chatbox.component.scss"],
})
export class InputChatboxComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}
  addMessage(message: HTMLInputElement) {
    console.log(message.value);
    var msg: IMessage = {
      id: generateId(),
      message: message.value,
      userName: "guest",
    };
    this.messageService.addMessage(msg);
    message.value = " ";
    return false;
  }
}
