import { Person } from "./Person";
import { SadState } from "./Sad";
import { State } from "./state";

export class HappyState implements State {
  private person: Person;

  public hug(): void {
    console.log("Awwww, thank you! :D");
  }

  public talk(): void {
    console.log("Hello! How are you?");
  }

  public hit(): void {
    console.log("Ouch!");
    this.person.setState(new SadState());
  }

  public setPerson(person: Person): void {
    this.person = person;
  }
}
