import { HappyState } from "./Happy";
import { State } from "./state";

export class Person {
  private state: State;

  constructor() {
    this.setState(new HappyState());
  }

  public setState(state: State): void {
    this.state = state;
    this.state.setPerson(this);
  }

  public hug(): void {
    this.state.hug();
  }

  public talk(): void {
    this.state.talk();
  }

  public hit(): void {
    this.state.hit();
  }
}
