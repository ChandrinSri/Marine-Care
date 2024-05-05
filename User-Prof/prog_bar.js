function updateProgress_1(num) {
    var progressBar = document.getElementById('stepBar_1');
    var inputs = 12 / num;
    var progress = 100 / inputs;
    inputs -= 1;
    progressBar.style.width = progress + '%';
    progressBar.innerHTML = Math.round(progress)+'%';}

function updateProgress_2(num) {
      var progressBar = document.getElementById('stepBar_2');
      var inputs = 12 / num;
      var progress = 100 / inputs;
      inputs -= 1;
      progressBar.style.width = progress + '%';
      progressBar.innerHTML = Math.round(progress)+'%';}

function updateProgress_3(num) {
       var progressBar = document.getElementById('stepBar_3');
       var inputs = 12/num;
       var progress = 100 / inputs;
       inputs -= 1;
       progressBar.style.width = progress + '%';
       progressBar.innerHTML = Math.round(progress)+'%';}
       