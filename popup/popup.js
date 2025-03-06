document.getElementById("toggleExtension").addEventListener("click", () => {
    chrome.storage.local.get(["enabled"], (data) => {
      let newState = !data.enabled;
      chrome.storage.local.set({ enabled: newState });
    });
  });
  