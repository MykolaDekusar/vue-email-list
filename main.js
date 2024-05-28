"use strict";
const uList = document.getElementById("mails");
const mailList = [];
for (let i = 0; i < 10; i++) {
  //implementing axios
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((info) => {
      //adding random email to list
      mailList.push(info.data.response);
    });
}

for (let i = 0; i < 10; i++) {
  uList.innerHTML += `<li>${mailList}</li>`;
  console.log(mailList[i]);
}
