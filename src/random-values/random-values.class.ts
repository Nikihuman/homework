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

    return this;
  }

  public getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
