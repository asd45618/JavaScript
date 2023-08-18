const messageContainer = document.getElementById("d-day-message");
const container = document.getElementById("d-day-container");
const intervalIdArr = [];

// container.style.display = "none";
messageContainer.innerHTML = "<h3>D-day를 입력해 주세요.</h3>";
container.style.display = "none";

const dateFormMaker = function () {
  const inputYear = document.getElementById("target-year-input").value;
  const inputMonth = document.getElementById("target-month-input").value;
  const inputDate = document.getElementById("target-date-input").value;

  // const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
  // console.log(inputYear, inputMonth, inputDate);
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  // 만약 remaining이 0이라면, '타이머가 종료되었습니다.' 출력
  if (remaining <= 0) {
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style.display = "flex";
    container.style.display = "none";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    // 만약 잘못된 날짜가 들어왔다면, '유효한 시간대가 아닙니다.' 출력
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentArr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainingObj);

  let i = 0;
  for (let tag of documentArr) {
    document.getElementById(tag).innerText = remainingObj[timeKeys[i]];
    i++;
  }
};

const starter = function () {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  counterMaker();
  const intervalId = setInterval(counterMaker, 1000);
  intervalIdArr.push(intervalId);
};

const setClearInterval = function () {
  messageContainer.innerHTML = "<h3>D-day를 입력해 주세요.</h3>";
  container.style.display = "none";
  messageContainer.style.display = "flex";
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};
