
const timeNumber = process.argv.slice(2);

for (let i = 0; i < timeNumber.length; i ++) {
  const delay = Number(timeNumber[i]);
  if (delay && delay > 0) {
    setTimeout(() => {
      process.stdout.write('..');
      console.log(`Timer done after ${delay} second`);
      
    }, delay * 1000);
    console.log(`Timer set for ${delay} seconds. `);
  }

}