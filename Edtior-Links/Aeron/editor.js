const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";//Created a and stored the aphabet in a string and a space element in case the text has 

let interval = null;
//below line selects the first <h1> element in the document
document.querySelector("h1").onmousedown = event => {  
    let iteration = 0;// declared to keep track of the animation iteration.
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")//splits the text into each character
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index]; 
          }                                                    //this function works each and every time the mouse button clicked
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ // checks if the animation iteration exceeds the length of the original text content 
        clearInterval(interval);                          //stored in the data-value
      }
      
      iteration += 1 / 3;
    }, 50);//sets up  animation interval that runs every 50 milliseconds.
  }
document.addEventListener("DOMContentLoaded", () => {
    let h1 = document.querySelector("h1");
    let iteration = 0;
  
    clearInterval(interval);
                                              //this is the same above logic but this execures everytime side loads
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

  //in the below lines of code tries to reveal out the releveant contents that already hidden after a certain time
  var splashDiv = document.querySelector('.splash');
  var contentDiv = document.querySelector('.content');
  var shopDiv = document.querySelector('.shop');//gets them classes
  function delayedAction() {
    splashDiv.style.display = 'block';//changes css styling -display none to block
    contentDiv.style.display= 'block';
    shopDiv.style.display='block';
  }
  setTimeout(delayedAction, 2000);