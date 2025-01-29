const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great you are reading a heading');

  h1.removeEventListener('mouseenter', alertH1); // By removing event listener we make sure, we can only listen to an event only once.
};

h1.addEventListener('mouseenter', alertH1);

//setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// ----OR--------
h1.onmouseenter = function (e) {
  alert('Great you are reading a heading');
};
