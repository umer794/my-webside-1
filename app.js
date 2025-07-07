function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  if (username === "MY LOVE STORY" && password === "ALISHBAUMER") {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    const message = `ALISHBA meri jaan,<br><br>
Jab se tum meri zindagi mein aayi ho, tab se meri har subah muskurahat se bhari hoti hai.<br>
Tum ne meri zindagi mein khushiyon ke rang bhar diye hain.<br>
Main har din tumhare sath khush rehna chahta hoon, hamesha.<br>
Main tumse bepanah mohabbat karta hoon, aur karta rahunga.<br>
Ek din humari shaadi hogi, aur hum apne pyaare bachon ke sath ek khoobsurat zindagi guzarenge.<br>
Tum meri zindagi ka sabse haseen hissa ho — meri rooh, mera pyaar.<br>
Tumhari muskurahat meri zindagi ka noor hai, aur tum ho meri duniya.`;

    typeWriterEffect("typewriter", message);
  } else {
    errorMsg.textContent = "Wrong username or password!";
    errorMsg.style.color = "red";
  }
}

function typeWriterEffect(id, text) {
  let i = 0;
  const speed = 50;
  const target = document.getElementById(id);
  target.innerHTML = ""; // Clear before typing

  function type() {
    if (i < text.length) {
      // Add one character at a time including HTML tags
      if (text.substr(i, 4) === "<br>") {
        target.innerHTML += "<br>";
        i += 4;
      } else {
        target.innerHTML += text.charAt(i);
        i++;
      }
      setTimeout(type, speed);
    }
  }

  type();
}

// Remove the animated heart after 5 seconds
setTimeout(() => {
  const entryHeart = document.getElementById("entryHeart");
  if (entryHeart) entryHeart.remove();
}, 5000);


