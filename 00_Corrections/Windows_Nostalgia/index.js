document.addEventListener('DOMContentLoaded', () => {
  const cancelButton = document.getElementById('cancel-btn');

  cancelButton.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - cancelButton.clientWidth;
    const maxY = window.innerHeight - cancelButton.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    cancelButton.style.position = 'absolute';
    cancelButton.style.left = `${randomX}px`;
    cancelButton.style.top = `${randomY}px`;
  });
});
