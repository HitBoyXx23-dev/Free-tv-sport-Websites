// Simple interactivity example
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Visited: ${link.textContent}`);
    });
  });
});
