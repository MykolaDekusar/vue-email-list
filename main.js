"use strict";
const uList = document.getElementById("mails");
const mailList = [];
for (let i = 0; i < 10; i++) {
  //implementing axios and filling array
  mailList.push(
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  );
}
//waiting for the axios answer then creating new array with only mails
Promise.all(mailList).then((mails) => {
  const eMail = mails.map((response) => response.data.response);
  //email list
  console.log(eMail);
  //updating DOM with mails
  eMail.forEach((mail) => {
    uList.innerHTML += `<li>${mail}</li>`;
  });
});
