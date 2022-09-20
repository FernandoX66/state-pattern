import { Person } from "./Person";

export abstract class State {
  public abstract hug: () => void;
  public abstract talk: () => void;
  public abstract hit: () => void;

  public abstract setPerson: (person: Person) => void;
}
