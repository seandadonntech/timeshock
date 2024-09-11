import { ZonedDateTime, ZoneId } from '@js-joda/core'
import '@js-joda/timezone'
import { Console } from 'console';

import * as readline from 'readline';
console.log();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter city: ', (answer) => {
  console.log(`You entered: ${answer}`);
  const zdt = ZonedDateTime.now(ZoneId.of(`${answer}`));
  console.log(zdt);
  rl.close();

});
