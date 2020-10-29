import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddUser } from "../actions/user.actions";
import { User } from "../models/user.model";

export class UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: "users",
  defaults: {
    users: []
  }
})
export class UserState {
  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Action(AddUser)
  add(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: AddUser
  ) {
    const state = getState();
    patchState({
      users: [...state.users, payload]
    });
  }
}
