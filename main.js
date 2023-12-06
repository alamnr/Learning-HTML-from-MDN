/*
function generatePrimes(quota){
    function isPrime(n){
        for(let c=2;c<=Math.sqrt(n);++c){
            if(n % c === 0){
                return false;
            }
        }
        return true;
    }

    const primes = [] ; 
    const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}  */

// create a new worker , giving it the code in generate.js

const worker = new Worker("./generate.js");

// When the user clicks on generate button , send a message to the worker
// the message command is "generate" and also passes velue of "quota"
// which is the number to generate primes

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage(
    {
        command:"generate",
        quota,
    });
});

// when the worker sends a message back to the main thread 
// update the output box with a message for the user , including the number of 
// primes that were generated , taken from the message data
worker.addEventListener("message", msg => {
    document.querySelector("#output").textContent = `Finished generating ${msg.data} primes!`;
});

/*
document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    const primes = generatePrimes(quota);

    document.querySelector("#output").textContent= `Finished generated ${quota} primes`;


}); */


document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value =
      'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
  });