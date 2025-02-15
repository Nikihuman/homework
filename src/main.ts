import { RandomValues } from "./random-values/random-values.class";

function bootstrap() {
  try {
    const from = 100;
    const to = 200;

    const randomValueFirst = new RandomValues({
      from,
      to,
    }).getRandomValue();

    console.log(`First random value: ${randomValueFirst}`);
  } catch (error) {
    console.log(`Error while execution 'bootstrap' ${error}`);
  }
}

bootstrap();
