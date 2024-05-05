const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

let interval = null;
document.querySelector("h1").onmousedown = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 50);
  }
document.addEventListener("DOMContentLoaded", () => {
    let h1 = document.querySelector("h1");
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
      h1.innerText = h1.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return h1.dataset.value[index];
          }
  
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");
  
      if (iteration >= h1.dataset.value.length) {
        clearInterval(interval);
      }
  
      iteration += 1 / 3;
    }, 50);
  });
  
  var splashDiv = document.querySelector('.splash');
  var contentDiv = document.querySelector('.content');
  var shopDiv = document.querySelector('.shop');
  function delayedAction() {
    splashDiv.style.display = 'block';
    contentDiv.style.display= 'block';
    shopDiv.style.display='block';
  }
  setTimeout(delayedAction, 2000);