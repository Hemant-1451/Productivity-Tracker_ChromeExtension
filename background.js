chrome.runtime.onInstalled.addListener(function() {
    // Clear storage when the extension is installed or updated
    chrome.storage.local.clear();
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'pageLoad') {
      // Get the current tab URL
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var url = tabs[0].url;
  
        // Check if the URL is already tracked
        chrome.storage.local.get(['trackedUrls'], function(result) {
          var trackedUrls = result.trackedUrls || [];
  
          if (!trackedUrls.includes(url)) {
            trackedUrls.push(url);
            chrome.storage.local.set({ trackedUrls: trackedUrls });
          }
        });
      });
    }
  });
  