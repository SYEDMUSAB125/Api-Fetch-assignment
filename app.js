const button = document.getElementById("loadBtn");
const usersDiv = document.getElementById("users");
const loader = document.getElementById("loader");

// Function to fetch users (returns a Promise)
function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}

// Button click event
button.addEventListener("click", () => {
  usersDiv.innerHTML = "";   // clear previous data
  loader.classList.remove("hidden"); // show loader

  fetchUsers()
    .then(users => {
      loader.classList.add("hidden"); // hide loader

      users.forEach(user => {
        const div = document.createElement("div");
        div.classList.add("user-card");

        div.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
        `;

        usersDiv.appendChild(div);
      });
    })
    .catch(error => {
      loader.classList.add("hidden");
      usersDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
});