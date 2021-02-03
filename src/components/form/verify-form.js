// export function createVerifyForm() {
//   const form = document.createElement("form");
//   form.className = "form";

//   const otpOne = document.createElement("input");
//   otpOne.type = "password";
//   otpOne.placeholder = "*";
//   otpOne.className = "input";
//   const otpTwo = document.createElement("input");
//   otpTwo.type = "password";
//   otpTwo.placeholder = "*";
//   otpTwo.className = "input";
//   const otpThree = document.createElement("input");
//   otpThree.type = "password";
//   otpThree.placeholder = "*";
//   otpThree.className = "input";
//   const otpFour = document.createElement("input");
//   otpFour.type = "password";
//   otpFour.placeholder = "*";
//   otpFour.className = "input";

function createOTPInput() {
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "*";

  return input;
}
export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your mobile";

  const text = document.createElement("p");
  text.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const otpOne = createOTPInput();
  const otpTwo = createOTPInput();
  const otpThree = createOTPInput();
  const otpFour = createOTPInput();

  const passswordContainer = document.createElement("div");
  passswordContainer.className = "form__otp";
  passswordContainer.append(otpOne, otpTwo, otpThree, otpFour);

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  const hint = document.createElement("p");
  hint.innerText = "Didn´t receive?";
  hint.className = "form__hint";

  const resendLinK = document.createElement("a");
  resendLinK.innerText = "Click Here";
  resendLinK.href = "#";
  resendLinK.className = "resend";

  hint.append(resendLinK);

  form.append(title, text, passswordContainer, button, hint);
  return form;
}
