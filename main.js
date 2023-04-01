// lear
// Age Calculator

window.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.querySelector(".check-btn");
  const daysText = document.querySelector(".days");
  const monthsText = document.querySelector(".months");
  const yearsText = document.querySelector(".years");
  const dayInput = document.querySelector("#day");
  const monthInput = document.querySelector("#month");
  const yearInput = document.querySelector("#year");
  let today = new Date();

  checkBtn.addEventListener("click", () => {
    let days = today.getDate();
    let months = today.getMonth() + 1;
    let years = today.getFullYear();

    const dayNumber = Number(dayInput.value);
    const monthNumber = Number(monthInput.value);
    const yearNumber = Number(yearInput.value);

    if (dayNumber <= 0 || dayNumber > 31 || isNaN(dayNumber)) {
      return alert("Days Input Is Invalid, Try Again Please!");
    }

    if (monthNumber <= 0 || monthNumber > 12 || isNaN(monthNumber)) {
      return alert("Months Input Is Invalid, Please Try Again!");
    }

    if (yearNumber <= 1850 || yearNumber > 2023 || isNaN(yearNumber)) {
      return alert("Years Input Is Invalid, Please Try Again!");
    }

    if (days < dayNumber) {
      daysText.innerHTML = days - dayNumber + 30;
      months -= 1;
    } else {
      daysText.innerHTML = days - dayNumber;
    }

    if (months < monthNumber) {
      monthsText.innerHTML = months - monthNumber + 12;
      years -= 1;
    } else {
      monthsText.innerHTML = months - monthNumber;
    }

    yearsText.innerHTML = years - yearNumber;
  });
});
