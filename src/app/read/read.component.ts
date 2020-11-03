import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { UserState } from "../state/user.state";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  @Select(UserState.getUsers) users: Observable<User[]>;

  constructor(private store: Store) {
    // this.users = this.store.select(state => state.users.users);
  }

  ngOnInit() {}
}
