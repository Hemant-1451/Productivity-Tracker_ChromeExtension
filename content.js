window.addEventListener('load', function() {
    chrome.runtime.sendMessage({ type: 'pageLoad' });
  });
  
  window.addEventListener('beforeunload', function() {
    chrome.runtime.sendMessage({ type: 'pageUnload' });
  });
  