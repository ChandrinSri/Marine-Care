// JavaScript
const header = document.getElementById('header');

function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// Section 2 JS //
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);
// Section 2 JS Ended//

//Mouse Effect //
document.addEventListener('mousemove', ripple);

function ripple(event) {
  const rippleEffect = document.createElement('span');
  rippleEffect.className = 'ripple';
  document.body.appendChild(rippleEffect);

  const x = event.pageX - rippleEffect.offsetWidth / 2;
  const y = event.pageY - rippleEffect.offsetHeight / 2;

  rippleEffect.style.left = `${x}px`;
  rippleEffect.style.top = `${y}px`;

  rippleEffect.addEventListener('animationend', () => {
    rippleEffect.remove();
  });
}
//Mouse Effect  End//

// Select the class bubble
time = document.getElementsByClassName('bubbles')[0];
