/*document.addEventListener('DOMContentLoaded',()=>{
    console.log('doc loaded');
    function createParagraph() {
        const para = document.createElement("p");
        para.textContent = "You clicked the button!";
        document.body.appendChild(para);
      }
      
      const buttons = document.querySelectorAll("button");
      
      for (const button of buttons) {
        button.addEventListener("click", createParagraph);
      }
}); */

/*

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random()*(number+1));
}*/

/*

function changeBackground(){
  const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}*/

//btn.addEventListener('click',changeBackground);

// btn.removeListener("click",changeBackground);


/*
const controller = new AbortController();

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}, {signal:controller.signal});
*/
//  controller.abort();  // removes any/all event handlers associated with this controller
/*
function dojoGo(){
  alert('Dojo go');
}  */

//btn.addEventListener("click",dojoGo);  // It is recomended to use addEventListener() to register multiple event handlers
/*
btn.onclick = () => { const rndColor = `rgb(${random(255)},${random(255)},${random(255)})`;
                      document.body.style.backgroundColor = rndColor;  };
*/
//btn.onclick = changeBackground;
/*
function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click",bgChange);

const form = document.querySelector("form");
const  fname = document.getElementById("fname");
const sname = document.getElementById("sname");
const para = document.querySelector("p");

form.addEventListener("submit",(e)=>{

  if(fname.value==="" && sname.value===""){
    e.preventDefault();
    para.textContent ="First and Second name field can't be empty";
  }
}); */

  const output = document.querySelector("#output");
  const button = document.querySelector("#set-alarm");

  const name1 = document.querySelector("#name");
  const delay = document.querySelector("#delay");
  /*
  function setAlarm(){
    setTimeout(() => {
      output.textContent="Wake up!";
    }, 1000);
  }  */

  //button.addEventListener("click",setAlarm);

  /*
  button.addEventListener("click",()=>{

    alarm(name1.value,delay.value)
    .then(message => output.textContent=message)
    .catch(error => output.textContent = `Could not set alrm, ${error}`);
  });  */

  button.addEventListener("click" , async () =>{
      try{
        const message = await alarm(name1.value,delay.value);
        output.textContent = message;
      }
      catch(error){
        output.textContent = ` Error setting alarm , ${error} `;
      }
  });


  function alarm(person,delay){
    return new Promise((resolve,reject)=>{
      if(delay<0){
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up ${person} !`)
      }, delay);

    });
  }

