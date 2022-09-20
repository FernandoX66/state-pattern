import { Person } from "./Person";
import { State } from "./state";

export class SadState implements State {
  private person: Person;

  public hug(): void {
    console.log("Thanks... I needed that...");
  }

  public talk(): void {
    console.log("Hello...");
  }

  public hit(): void {
    console.log("What is your problem?");
  }

  public setPerson(person: Person): void {
    this.person = person;
  }
}
