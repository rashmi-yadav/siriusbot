import { Component, OnInit } from "@angular/core";
import { IMessage, MessageService } from "../message.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-message",
  templateUrl: "./user-message.component.html",
  styleUrls: ["./user-message.component.scss"],
})
export class UserMessageComponent implements OnInit {
  messages$: Observable<IMessage[]> = this.messageService.message$;

  constructor(private messageService: MessageService) {
    this.messages$.forEach((ele) => {
      console.log(ele);
    });
  }
  trackById(index, item) {
    return item.id;
  }
  ngOnInit() {}
}
