import {
  IRandomValues,
  IRandomValuesConstructorPayload,
} from "./random-values.interface";

export class RandomValues implements IRandomValues {
  private from: number;
  private to: number;

  constructor({ from, to }: IRandomValuesConstructorPayload) {
    this.from = from;
    this.to = to;
  }

  public getRandomValue(): number {
    return Math.floor(Math.random() * (this.to - this.from + 1) + this.from);
  }
}
