function jalali_to_gregorian(jy, jm, jd) {
  var sal_a, gy, gm, gd, days;
  jy += 1595;
  days =
    -355668 +
    365 * jy +
    ~~(jy / 33) * 8 +
    ~~(((jy % 33) + 3) / 4) +
    jd +
    (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
  gy = 400 * ~~(days / 146097);
  days %= 146097;
  if (days > 36524) {
    gy += 100 * ~~(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }
  gy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    gy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  gd = days + 1;
  sal_a = [
    0,
    31,
    (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
  return [gy, gm, gd];
}

const todayDate = new Date();
function daytoBirthday(by, bm, bd) {
  const userBdate = jalali_to_gregorian(by, bm, bd);
  const userDate = new Date(
    `${userBdate[0]} ${userBdate[1] + 1} ${userBdate[2]}`
  );
  const difference = todayDate.getTime() - userDate.getTime();
  const userAge = Math.floor(difference / (1000 * 60 * 60 * 24) / 365);
  const daytoBirth = Math.round(
    365 - ((difference / (1000 * 60 * 60 * 24)) % 365)
  );
  console.log(
    `کاربر ${userAge} سال دارد و ${daytoBirth} روز دیگر ${
      userAge + 1
    } ساله میشود`
  );
}

const userA = daytoBirthday(1370, 7, 16);
