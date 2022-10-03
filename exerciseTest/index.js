let array = [];
let displayEl = document.getElementById("pEl");

const opertaion = () => {
  let inValue = document.getElementById("input").value;
  document.getElementById("input").value = "";
  inValue = parseInt(inValue);
  if (inValue % 3 === 0 && inValue % 5 === 0) {
    array.push(
      `<span style = "color: blue; text-align: center;"> ${inValue}   -- Divisible by both numbers </span>`
    );

    for (let index = 0; index < array.length; index++) {
      display();
    }
  }
};

const display = () => {
  for (let j = 0; j < array.length; j++) {
    displayEl.innerHTML += "<br>" + array[j];
  }
};

// ---------------------------------------------------------------------------------
//         U input se unose brojevi, nakon svakog klika
//         na dugme, broj se upisuje u niz, a trenutna vrednost
//         input-a nakon upisane vrednosti u niz se brise.
//         Ako se u input unese vrednost deljiva sa 3 i 5 (15, 45, ...)
//         tada program treba da prodje kroz ceo niz i da ukoliko je vrednost
//         deljiva samo sa 3 ispise pored te vrednost Fizz a ukoliko
//         je deljiva samo sa 5 ispise Buzz pored te vrednosti
//         (3 - Fizz, 20 - Buzz, 45 - FizzBuzz). U slucaju da vrednost
//         nije deljiva ni sa 3 ni sa 5 onda ispisati samu tu vrednost
//         bez dodataka.
// ---------------------------------------------------------------------------------
//         Napredni deo: Obojiti i boldirati tekst koji prikazuje Fizz broj
//         (deljiv sa 3) crvenom bojom, plavom tekst koji prikazuje
//         Buzz broj (deljiv sa 5), crnom tekst koji prikazuje
//         obicni broj (nije deljiv ni sa 3 ni sa 5) i zelenom tekst koji prikazuje
//         FizzBuzz broj (deljiv i sa 3 i sa 5).
// ---------------------------------------------------------------------------------
