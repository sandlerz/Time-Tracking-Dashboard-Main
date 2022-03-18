const actual = document.getElementsByClassName("actual");
const previous = document.getElementsByClassName("previous");

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

let handleDisplay = "daily";

dailyBtn.onclick = () => {
  handleDisplay = "daily";
  getData();
};
weeklyBtn.onclick = () => {
  handleDisplay = "weekly";
  getData();
};
monthlyBtn.onclick = () => {
  handleDisplay = "monthly";
  getData();
};

const addData = (data) => {
  for (let i = 0; i < actual.length; i++) {
    let actualData = data[i].timeframes[handleDisplay].current;
    let previousData = data[i].timeframes[handleDisplay].previous;
    actual[i].innerHTML = `${actualData}hrs`;
    previous[i].innerHTML = `Last ${handleDisplay} - ${previousData}`;
  }
};

const getData = async () => {
  const response = await fetch("app/data.json");
  if (response.status === 200) {
    const data = await response.json();
    addData(data);
  } else {
    console.log("Houston!, Houston!... We have a problem");
  }
};

getData();
