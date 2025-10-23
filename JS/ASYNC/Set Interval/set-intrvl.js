// const intervalId = setInterval(() => {
//   console.log('Repeating every 1s');
// }, 1000);

// // stop it after 3 seconds
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log('Interval cleared');
// }, 3000);


let count = 0;
const interval = setInterval(() => {
  console.log('Tick', ++count);
  if (count === 5) {
    clearInterval(interval);
    console.log('Stopped!');
  }
}, 1000);

