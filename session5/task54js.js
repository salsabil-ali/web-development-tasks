 let counting = '' ||localStorage.getItem('counting');;
 displayCalculation();

 function updateCalculation(value) {
      counting += value;
      console.log(`${counting}`);
       displayCalculation();
     localStorage.setItem('counting',counting);
    }
     function displayCalculation() {
      document.querySelector('.js-calculation').innerHTML = counting;
    }