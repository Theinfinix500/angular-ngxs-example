import { Tutorial } from "../models/tutorial.model.ts";

export class AddTutorial {
  static readonly type = "[TUTORIAL] Add";
}

export class RemoveTutorial {
  static readonly type = "[TUTORIAL] Remove";

  constructor(public payload: string) {}
}
