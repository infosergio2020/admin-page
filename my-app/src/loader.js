import { Workbox } from 'workbox-window';

$(function() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('service-worker.js');
    wb.addEventListener('waiting', (event) => {
      var shouldUpdate = confirm('A new version of RecipeRadar is available.  Would you like to update to the latest version?');
      if (shouldUpdate) {
        wb.addEventListener('controlling', (event) => {
          window.location.reload();
        });
        wb.messageservice-worker({type: 'skipWaiting'});
      }
    });
    wb.register();
  }
});