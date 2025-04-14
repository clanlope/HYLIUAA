// Function to toggle the PDF viewer
function togglePDF() {
  const pdfViewer = document.getElementById('pdfViewer');
  const content = document.getElementById('content');
  const buttonContainer = document.querySelector('.button-container');
  const pdfFrame = document.getElementById('pdfFrame');

  if (pdfViewer.classList.contains('show')) {
    pdfViewer.classList.remove('show');
    content.classList.remove('move');
    buttonContainer.classList.remove('move');
    pdfFrame.removeAttribute('src'); // Unload the PDF when hiding
  } else {
    pdfFrame.setAttribute('src', 'HYLIUAA.pdf#toolbar=0&navpanes=0&scrollbar=0');
    pdfViewer.classList.add('show');
    content.classList.add('move');
    buttonContainer.classList.add('move');
  }
}

const knowMoreButton = document.getElementById('knowMoreButton');

knowMoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = knowMoreButton.href;
  }, 300); // Match the fade-out animation duration
});

document.addEventListener('DOMContentLoaded', () => {
  const kmBackButton = document.getElementById('kmBackButton');
  if (kmBackButton) {
    kmBackButton.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = kmBackButton.href;
      }, 300); // Match the fade-out animation duration
    });
  }
});

function openContactModal() {
  const modal = document.getElementById('contactModal');
  modal.style.display = 'block';
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  modal.style.display = 'none';
}

window.addEventListener('click', (event) => {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Clear cookies and local storage when the user closes the website
window.addEventListener('unload', () => {
  // Clear all cookies
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  });

  // Clear local storage
  localStorage.clear();

  // Clear session storage
  sessionStorage.clear();
});