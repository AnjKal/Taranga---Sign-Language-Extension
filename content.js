// Wait for YouTube video to load
setInterval(() => {
  let player = document.querySelector("video");
  if (player && !document.getElementById("signLangButton")) {
      let button = document.createElement("button");
      button.innerText = "Enable Sign Language";
      button.id = "signLangButton";
      button.style.position = "absolute";
      button.style.bottom = "20px";
      button.style.right = "20px";
      button.style.padding = "10px";
      button.style.backgroundColor = "#ff9800";
      button.style.color = "white";
      button.style.border = "none";
      button.style.cursor = "pointer";
      button.style.zIndex = "1000";
      document.body.appendChild(button);
      
      button.addEventListener("click", () => {
          chrome.runtime.sendMessage({ action: "openPopup" });
      });
  }
}, 2000);
