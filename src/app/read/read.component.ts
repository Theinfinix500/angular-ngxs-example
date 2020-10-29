import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private store: Store) {
    this.users = this.store.select(state => state.users.users);
  }

  ngOnInit() {}
}
