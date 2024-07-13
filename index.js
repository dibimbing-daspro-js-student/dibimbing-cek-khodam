let wordCount = 0;
let inWord = false; // Flag to track if we are inside a word
let countUserInputPassword = 1;

const user = {
  name: "",
  password: "12345",
  khodam: "",
};

alert("SELAMAT DATANG DI WEB KHODAM CEKK!!");
user.name = prompt("Masukkan nama kamu:");

// Loop through each character in the name
for (let i = 0; i < user.name.length; i++) {
  const char = user.name[i];

  // Check if the character is a space
  if (char === " ") {
    inWord = false; // We're no longer in a word
  } else {
    if (!inWord) {
      wordCount++; // We found the start of a new word
      inWord = true; // Set the flag to true
    }
  }
}

let userInputPassword = prompt("Masukkan Password:");
while (user.password !== userInputPassword) {
  userInputPassword = prompt("Password salah! coba lagi!");
  countUserInputPassword++;
}

let userInputBirthMonth = prompt("Masukkan hari apa kamu lahir!");
switch (userInputBirthMonth.toUpperCase()) {
  case "SENIN":
    user.khodam = "Macan Kocak";
    break;
  case "SELASA":
    user.khodam = "Saber Roam";
    break;
  case "RABU":
    user.khodam = "Kecoak Pincang";
    break;
  case "KAMIS":
    user.khodam = "Kera Buntung";
    break;
  case "JUMAT":
    user.khodam = "Badut Duffan";
    break;
  case "SABTU":
    user.khodam = "Topeng Monyet";
    break;
  case "MINGGU":
    user.khodam = "Bocil Kematian";
    break;
  default:
    user.khodam = "Kosong"
    break;
}

document.write(`<h2>SELAMAT DATANG ${user.name.toUpperCase()}!!</h2>`);
document.write(
  `<h3>Kamu telah mencoba memasukkan password sebanyak ${countUserInputPassword} kali</h3>`
);
document.write(`<h3>Jumlah kata pada nama kamu adalah ${wordCount}</h3>`);
document.write(`<h1>KHODAM KAMU ADALAH ${user.khodam.toUpperCase()}!!</h1>`);
