// <form class="form">
//     <h2>Reset Password</h2>
//     <p>Please enter your email to receive a link to create a new password via email</p>
//     <input placeholder="email" />
//     <input type="submit" />
//     </form>
//     `;

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "Interesting Content";
  button.className = "btn-border";
  function register() {
    alert("Juhuuu");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "Awesome below:";
  title.className = "btn-filled";
  form.append(title, button);

  return form;
}