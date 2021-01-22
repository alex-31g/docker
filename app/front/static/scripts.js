const nameInput = document.querySelector(".nameInput");
const commentInput = document.querySelector(".commentInput");
const donatInput = document.querySelector(".donatInput");

const addBtn = document.querySelector(".add");
const getBtn = document.querySelector(".get");

addBtn.onclick = function () {
  let fetchUrl = "";

  if (nameInput.value && !commentInput.value && donatInput.value) {
    fetchUrl = "http://localhost:5000/api/save/donat";
  } else if (nameInput.value && commentInput.value && !donatInput.value) {
    fetchUrl = "http://localhost:5000/api/save/user";
  }

  let fetchData = {};
  fetchData.name = nameInput.value;
  fetchData.comment = commentInput.value;
  fetchData.donat = donatInput.value;

  const fetchBody = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fetchData),
  };

  fetch(fetchUrl, fetchBody)
    .then((response) => response.json())
    .then((json) => console.log(json));
};

getBtn.onclick = function () {
  const fetchUrl = "http://localhost:5000/api/get-users";
  fetch(fetchUrl)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      displayAllUsers(json);
    });
};

function displayAllUsers(users) {
  const usersContainer = document.querySelector(".users-container");

  for (let i = 0; i < users.length; i++) {
    let tag = document.createElement("li");
    let data = document.createTextNode(
      `${users[i].name}: "${users[i].comment}"`
    );
    tag.appendChild(data);
    usersContainer.appendChild(tag);
  }
}
