// function jalali_to_gregorian(jy, jm, jd) {
//   var sal_a, gy, gm, gd, days;
//   jy += 1595;
//   days =
//     -355668 +
//     365 * jy +
//     ~~(jy / 33) * 8 +
//     ~~(((jy % 33) + 3) / 4) +
//     jd +
//     (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
//   gy = 400 * ~~(days / 146097);
//   days %= 146097;
//   if (days > 36524) {
//     gy += 100 * ~~(--days / 36524);
//     days %= 36524;
//     if (days >= 365) days++;
//   }
//   gy += 4 * ~~(days / 1461);
//   days %= 1461;
//   if (days > 365) {
//     gy += ~~((days - 1) / 365);
//     days = (days - 1) % 365;
//   }
//   gd = days + 1;
//   sal_a = [
//     0,
//     31,
//     (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
//     31,
//     30,
//     31,
//     30,
//     31,
//     31,
//     30,
//     31,
//     30,
//     31,
//   ];
//   for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
//   return [gy, gm, gd];
// }

// function daytoBirthday(by, bm, bd) {
//   const userBdate = jalali_to_gregorian(by, bm, bd);
//   const userDate = new Date(
//     `${userBdate[0]} ${userBdate[1] + 1} ${userBdate[2]}`
//   );
//   const difference = todayDate.getTime() - userDate.getTime();
//   const userAge = Math.floor(difference / (1000 * 60 * 60 * 24) / 365);
//   const daytoBirth = Math.round(
//     365 - ((difference / (1000 * 60 * 60 * 24)) % 365)
//   );
//   console.log(
//     `کاربر ${userAge} سال دارد و ${daytoBirth} روز دیگر ${
//       userAge + 1
//     } ساله میشود`
//   );
// }

// const userA = daytoBirthday(1370, 7, 16);
const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");
const ageBtn = document.querySelector(".age-btn");
const dayBtn = document.querySelector(".day-btn");
const dateBtn = document.querySelector(".date-btn");
const inputDate = document.getElementById("date-of-birth");
const currentTxt = document.querySelector(".current-text");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");

      if (
        btn.getAttribute("data-btn") === content.getAttribute("data-content")
      ) {
        content.classList.add("active");
      }
    });
    btn.classList.add("active");
  });
});

function calculateAge() {
  const dobInput = inputDate.value;
  if (!dobInput) {
    document.querySelector(".current-text").textContent =
      "لطفا تاریخ تولد رو وارد کن!";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // اگر هنوز ماه تولد نرسیده
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  // اگر روز تولد نرسیده
  if (days < 0) {
    months--;
    const lastDayOfPrevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days = lastDayOfPrevMonth + days;
    if (months < 0) {
      months += 12;
      years--;
    }
  }

  document.querySelector(
    ".current-text"
  ).textContent = `${years} سال, ${months} ماه, ${days} روز`;
}

function dayToBirthday() {
  const dobInput = inputDate.value;
  if (!dobInput) {
    document.querySelector(".current-text").textContent =
      "لطفا تاریخ تولد رو وارد کن!";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();
  const cleanToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const nextBirthDay = new Date(
    today.getFullYear(),
    dob.getMonth(),
    dob.getDay()
  );

  if (nextBirthDay < cleanToday) {
    nextBirthDay.setFullYear(cleanToday.getFullYear() + 1);
  }
  const diffInMs = nextBirthDay - cleanToday;
  const diffInDay = diffInMs / (1000 * 60 * 60 * 24);
  if (diffInDay === 0) {
    document.querySelector(".current-text").textContent = "🎉 تولدت مبارک 🎂";
  } else {
    document.querySelector(".current-text").textContent = diffInDay;
  }
}
ageBtn.addEventListener("click", calculateAge);
dayBtn.addEventListener("click", dayToBirthday);
