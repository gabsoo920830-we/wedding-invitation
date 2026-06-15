function openMap() {
  window.open("https://place.map.kakao.com/16488925", "_blank");
}

function openNaverMap() {
  window.open(
    "https://map.naver.com/p/search/%EB%9D%BC%ED%8F%AC%EC%97%90%ED%8A%B8%20%EC%9B%A8%EB%94%A9%ED%99%80/place/36841824?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202606151406&locale=ko&svcName=map_pcv5&searchText=%EB%9D%BC%ED%8F%AC%EC%97%90%ED%8A%B8%20%EC%9B%A8%EB%94%A9%ED%99%80",
    "_blank"
  );
}

function openTmap() {
  window.open(
    "https://apis.openapi.sk.com/tmap/app/routes?name=%EA%B4%91%EB%AA%85%EC%97%AD%EC%82%AC%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9B%A8%EB%94%A9%ED%99%80",
    "_blank"
  );
}

function copyAddress() {
  const address = document.getElementById("address").innerText;
  navigator.clipboard.writeText(address);
  alert("주소가 복사되었습니다.");
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("복사되었습니다.");
}

function toggleAccordion(id) {
  const content = document.getElementById(id);
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function openPhoto(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("photoModal").style.display = "flex";
}

function closePhoto() {
  document.getElementById("photoModal").style.display = "none";
}

/* D-DAY */
const weddingDate = new Date("2026-10-11T13:30:00").getTime();

function updateDday() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((distance / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((distance / 1000) % 60));

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("dday").innerText = `D-${days}`;
}

setInterval(updateDday, 1000);
updateDday();

/* MUSIC */
let isPlaying = false;
let hasStarted = false;

function startMusicFirstTouch() {
  if (hasStarted) return;

  hasStarted = true;

  const music = document.getElementById("bgMusic");
  const startScreen = document.getElementById("touchStart");
  const button = document.getElementById("musicButton");

  if (startScreen) {
    startScreen.classList.add("hide");
  }

  if (!music) return;

  music.play()
    .then(() => {
      isPlaying = true;
      button.innerText = "SOUND OFF";
    })
    .catch(() => {
      isPlaying = false;
      button.innerText = "SOUND ON";
    });
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const button = document.getElementById("musicButton");

  if (!music) return;

  if (isPlaying) {
    music.pause();
    isPlaying = false;
    button.innerText = "SOUND ON";
  } else {
    music.play()
      .then(() => {
        isPlaying = true;
        button.innerText = "SOUND OFF";
      })
      .catch(() => {
        alert("화면을 한 번 터치한 후 음악을 재생할 수 있습니다.");
      });
  }
}

/* SHARE */
function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: "THE WEDDING ISSUE",
      text: "박갑수 & 곽애리의 결혼식에 초대합니다.",
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다.");
  }
}

/* SCROLL REVEAL */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight - 80) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* RSVP */
function submitRSVP() {
  const name = document.getElementById("guestName").value;
  const attendance = document.getElementById("attendance").value;
  const count = document.getElementById("guestCount").value;
  const meal = document.getElementById("meal").value;
  const message = document.getElementById("messageBox").value;

  if (!name || !attendance) {
    alert("성함과 참석 여부를 입력해주세요.");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbzuNXTCW-POyR5ppHTZ39wUlDwrZbrAihLInMPKrv5XIXs-dJLwTAp-rxD7JCi_ypdZqA/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      name,
      attendance,
      count,
      meal,
      message
    })
  });

  alert("참석 여부가 전달되었습니다.");

  document.getElementById("guestName").value = "";
  document.getElementById("attendance").value = "";
  document.getElementById("guestCount").value = "";
  document.getElementById("meal").value = "";
  document.getElementById("messageBox").value = "";
}