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
  button.innerText = "Register";
  button.className = "btn";
  function register() {
    alert("Registered");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "Reset Password";

  const text = document.createElement("p");
  text.innerText =
    "Please enter your email to receive a link to create a new password via email";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Email";

  form.append(title, text, input, button);

  return form;
}
