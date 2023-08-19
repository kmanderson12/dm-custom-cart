let PhotoBtn = document.getElementById('Plan-Photo');
let VideoBtn = document.getElementById('Plan-Video');

PhotoBtn.addEventListener('click', (event) => {
  // event occurs before selected attr is updated
  if (event.target.dataset.selected === 'false') {
    window.lintrk('track', { conversion_id: 8231954 });
  }
});

VideoBtn.addEventListener('click', (event) => {
  // event occurs before selected attr is updated
  if (event.target.dataset.selected === 'false') {
    window.lintrk('track', { conversion_id: 8231962 });
  }
});

// Foxy Checkout Submit

let PurchaseBtn = document.querySelector(`[data-fc-id='submit-button']`);
PurchaseBtn.addEventListener('click', (event) => {});

document.addEventListener('DOMContentLoaded', function (event) {
  if (typeof window.lintrk !== 'undefined') {
    window.lintrk('track', { conversion_id: 8231946 });
  }
});
