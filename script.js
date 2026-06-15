function openMap() {
  window.open("https://map.naver.com/p/search/%EB%9D%BC%ED%8F%AC%EC%97%90%ED%8A%B8%20%EC%9B%A8%EB%94%A9%ED%99%80/place/36841824?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202606151406&locale=ko&svcName=map_pcv5&searchText=%EB%9D%BC%ED%8F%AC%EC%97%90%ED%8A%B8%20%EC%9B%A8%EB%94%A9%ED%99%80", "_blank");
}

function copyAccount() {
  navigator.clipboard.writeText("국민은행 123456-78-123456 신랑이름");
  alert("계좌번호가 복사되었습니다.");
}

const photos = [
  "photo01.JPG",
  "photo02.JPG",
  "photo03.JPG",
  "photo04.JPG",
  "photo05.JPG"
];

let currentPhoto = 0;

function showPhoto() {
  const image = document.getElementById("galleryImage");
  const number = document.getElementById("photoNumber");

  image.src = photos[currentPhoto];
  number.innerText = `${currentPhoto + 1} / ${photos.length}`;
}

function nextPhoto() {
  currentPhoto = currentPhoto + 1;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  showPhoto();
}

function prevPhoto() {
  currentPhoto = currentPhoto - 1;

  if (currentPhoto < 0) {
    currentPhoto = photos.length - 1;
  }

  showPhoto();
}

function submitRSVP() {
  alert("버튼 클릭은 됩니다.");

  const name = document.getElementById("guestName").value;
  const attendance = document.getElementById("attendance").value;
  const count = document.getElementById("guestCount").value;
  const meal = document.getElementById("meal").value;
  const message = document.getElementById("message").value;

  if (!name || !attendance) {
    alert("성함과 참석 여부를 입력해주세요.");
    return;
  }

  alert("fetch 실행 직전");

  fetch("https://script.google.com/macros/s/AKfycbzuNXTCW-POyR5ppHTZ39wUlDwrZbrAihLInMPKrv5XIXs-dJLwTAp-rxD7JCi_ypdZqA/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      name: name,
      attendance: attendance,
      count: count,
      meal: meal,
      message: message
    })
  });

  alert("참석 여부가 전달되었습니다 😊");

  document.getElementById("guestName").value = "";
  document.getElementById("attendance").value = "";
  document.getElementById("guestCount").value = "";
  document.getElementById("meal").value = "";
  document.getElementById("message").value = "";
}