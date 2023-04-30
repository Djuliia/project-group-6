const btns = document.querySelectorAll('.card-btn');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.style.fill === 'red') {
      btn.style.fill = 'white';
    } else {
      btn.style.fill = 'red';
    }
  });
});