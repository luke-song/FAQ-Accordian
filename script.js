const showP = (num) => {
  const showPara = document.getElementById(`para${num}`);
  const plusIcon = document.getElementById(`icon${num}`);

  if (showPara.style.display === "none" || showPara.style.display === "") {
    // just to verify if showPara is empty
    showPara.style.display = "block"; //set =
    plusIcon.src = "./assets/images/icon-minus.svg"; // look for my boy
  } else {
    showPara.style.display = "none";
    plusIcon.src = "./assets/images/icon-plus.svg";
  }
};
