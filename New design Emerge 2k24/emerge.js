const checkboxes = document.querySelectorAll('.event-selection input[type="checkbox"]');
checkboxes.forEach(checkbox => {
checkbox.addEventListener('click', () => {
   const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
   if (checkedCount > 2) {
       checkbox.checked = false;
       alert('Please select only 2 events.');
   }
});
});

const scriptURL ="https://script.google.com/macros/s/AKfycbzy1kG_mHB0ef0PGMbLzw2RQDucEbuwl6V50pVPNHDsR6x0bwBPnhdVeTsO4TOOZ0fNQg/exec"
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => alert("Thank you! your form is submitted successfully." ))
   .then(() => { window.location.reload(); })
   .catch(error => console.error('Error!', error.message))
});


const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
nav.classList.remove('active');
});

const countdownDate = new Date("oct 05, 2024 23:59:59").getTime();
const countdown = setInterval(function() {
   const now = new Date().getTime();
   const timeLeft = countdownDate - now;
   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
     document.getElementById("days").innerHTML= days;
     document.getElementById("hours").innerHTML= hours;
     document.getElementById("minutes").innerHTML= minutes;
     document.getElementById("seconds").innerHTML= seconds;
if (timeLeft < 0) {
       clearInterval(countdown);
       document.getElementById("days").innerHTML= "00";
       document.getElementById("hours").innerHTML= "00";
       document.getElementById("minutes").innerHTML= "00";
       document.getElementById("seconds").innerHTML= "00";                     
   }
}, 1000);