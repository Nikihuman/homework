export interface IRandomValuesConstructorPayload {
  from: number;
  to: number;
}

export interface IRandomValues {
  getRandomValue(min: number, max: number): number;
}
