function setDateAndTime() {
  const dateWidget = document.getElementById("date-widget");

  const currentDate = new Date().toLocaleDateString("eng", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  dateWidget.innerHTML = currentDate;

  const timeWidget = document.getElementById("time-widget");
  const currentTime = new Date().toLocaleTimeString("eng");
  timeWidget.innerHTML = currentTime;
}

function refreshDateAndTime() {
  setDateAndTime();
  setTimeout(refreshDateAndTime, 1000);
}
refreshDateAndTime();
