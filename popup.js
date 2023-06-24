chrome.storage.local.get(['trackedUrls'], function(result) {
    var trackedUrls = result.trackedUrls || [];
  
    var statsContainer = document.getElementById('statsContainer');
  
    if (trackedUrls.length > 0) {
      var list = document.createElement('ul');
      trackedUrls.forEach(function(url) {
        var listItem = document.createElement('li');
        listItem.textContent = url;
        list.appendChild(listItem);
      });
  
      statsContainer.appendChild(list);
    } else {
      statsContainer.textContent = 'No tracked URLs found.';
    }
  });
  