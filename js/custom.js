const wr = document.querySelector(".word-rotate");

const words = wr.children;

let x = 0;
rotate(x);

setInterval(() => {
  x = ++x % words.length;
  rotate(x);
}, 1000);

function rotate(start) {
  for (let i = 0; i < words.length; ++i) {
    const j = (start + i) % words.length;
    let percent = j / words.length;
    let rad = percent * 2 * Math.PI;
    let ty = Math.sin(rad) * 200;
    let tz = 40 * Math.cos(rad) - 40;
    let op = (Math.cos(rad) + 1) / 2;
    words[
      i
    ].style.transform = `perspective(150px) translateZ(${tz}px) translateY(${ty}%)`;
    words[i].style.opacity = `${op}`;
  }
}

//emailjs
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('1ZsICsiMppQM_Hvqq');
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}

