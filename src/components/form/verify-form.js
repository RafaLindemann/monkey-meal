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

import { createElement } from "../../utils/createElement";

// function createOTPInputElement() {
// const input = document.createElement("input");
// input.type = "password";
// input.placeholder = "*";
// const input = createElement("input", {
//   className: "input",
//   placeholder: "*",
//   type: "password",
//   maxLenght: 1,
// });

//   return input;
// }

function createInputElement() {
  return createElement("input", {
    className: "input",
    placeholder: "*",
    type: "number",
    maxLenght: 1,
    min: 0,
    max: 9,
  });
}

export function createVerifyForm() {
  const inputElement1 = createInputElement();
  const inputElement2 = createInputElement();
  const inputElement3 = createInputElement();
  const inputElement4 = createInputElement();

  const messsageElement = createElement("p", {
    className: "message",
  });
  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your mobile",
      }),
      createElement("p", {
        innerText:
          "Please check your mobile number 071*****12 continue to reset your password",
      }),
      messsageElement,
      createElement("div", {
        className: "form__otp",
        children: [inputElement1, inputElement2, inputElement3, inputElement4],
      }),
      createElement("input", {
        type: "submit",
        // innerText: "Next",
        value: "Next",
        className: "btn",
      }),
      createElement("p", {
        innerText: "Didn´t receive?",
        className: "form__hint",
        children: [
          createElement("a", {
            innerText: "Click here",
            className: "resend",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password =
        inputElement1.value +
        inputElement2.value +
        inputElement3.value +
        inputElement4.value;

      if (password === "3217") {
        // alert("You are right!");
        messsageElement.innerText = "";
      } else {
        // alert("Forget it!");
        messsageElement.innerText = "Wrong password!";
      }
    },
  });
}

// const form = document.createElement("form");
// form.className = "form";

// const title = document.createElement("h2");
// title.innerText = "We have sent an OTP to your mobile";

// const text = document.createElement("p");
// text.innerText =
//   "Please check your mobile number 071*****12 continue to reset your password";

// // function createPasswordContainer() {
// const OTPOne = createOTPInputElement();
// const OTPTwo = createOTPInputElement();
// const OTPThree = createOTPInputElement();
// const OTPFour = createOTPInputElement();
// const passwordContainer = createElement("div", {
//   className: "form__pin",
//   children: [OTPOne, OTPTwo, OTPThree, OTPFour],
// });

// return passsword;

// const button = document.createElement("button");
// button.innerText = "Next";
// button.className = "btn";

// const passwordContainer = createPasswordContainer();

//   const button = document.createElement("button");
//   button.innerText = "Next";
//   button.className = "btn";

//   const hint = document.createElement("p");
//   hint.innerText = "Didn´t receive?";
//   hint.className = "form__hint";

//   const resendLinK = document.createElement("a");
//   resendLinK.innerText = "Click Here";
//   resendLinK.href = "#";
//   resendLinK.className = "resend";

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const secretPassword = "3217";

//     if (
//       `${OTPOne.value}${OTPTwo.value}${OTPThree.value}${OTPFour.value}` ===
//       secretPassword
//     )
//       alert(
//         `Your OTP - ${OTPOne.value}${OTPTwo.value}${OTPThree.value}${OTPFour.value}- is correct`
//       );
//   });

//   hint.append(resendLinK);

//   form.append(title, text, passwordContainer, button, hint);
//   return form;
