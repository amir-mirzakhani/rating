const buttons = document.querySelectorAll(".rating-btn button");
const submitBtn = document.querySelector(".sub-btn");
let ratingNum = 0;
buttons.forEach((b) => {
  b.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    b.classList.add("active");
    ratingNum = b.value;
  });
});
submitBtn.addEventListener("click", () => {
  if (ratingNum > 0) {
    location.href = `./thanks.html?rating=${ratingNum}`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
number.innerText = `You selected ${ratingNum} out of 5 `;
