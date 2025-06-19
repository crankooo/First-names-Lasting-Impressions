/**
 * First Names, Lasting Impressions
 * Intro Sequence Animation
 * 
 * Handles the animations on the title screen, including quote-to-title transition,
 * scroll button, and animated elements in instructions section.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log("Intro sequence loaded");
  
  // Element references
  const introQuote = document.getElementById('intro-quote');
  const mainTitle = document.getElementById('main-title');
  const nameOverlay = document.getElementById('name-overlay');
  const scrollButton = document.querySelector('.scroll-down-button');
  const instructionsContainer = document.querySelector('.instructions-container');
  const animatedElements = document.querySelectorAll('.animated-element');
  const startButton = document.getElementById('start-button');
  
  // Initialize floating names background
  if (nameOverlay) {
    nameOverlay.style.opacity = '1';
  }
  
  // Animation sequence: quote → title transition
  if (introQuote) {
    // First show the quote
    introQuote.style.opacity = '1';
    introQuote.style.visibility = 'visible';
    
    // After 4 seconds, fade out quote and show title
    setTimeout(() => {
      introQuote.style.opacity = '0';
      
      // Wait 1.5 seconds for quote to fade before showing title
      setTimeout(() => {
        if (mainTitle) {
          mainTitle.style.opacity = '1';
          mainTitle.style.visibility = 'visible';
        }
      }, 1500);
    }, 4000);
  }
  
  // Scroll button functionality
  if (scrollButton) {
    scrollButton.addEventListener('click', () => {
      document.getElementById('instructions-section').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
  
  /**
   * Checks if an element is in the viewport
   * @param {HTMLElement} element - Element to check visibility
   * @return {boolean} True if element is in viewport
   */
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  /**
   * Handles animation of elements when they scroll into view
   */
  function handleScrollAnimation() {
    if (instructionsContainer && isInViewport(instructionsContainer)) {
      animatedElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('visible');
        }, 200 * index);
      });
      // Remove event listener once animation is triggered
      window.removeEventListener('scroll', handleScrollAnimation);
    }
  }
  
  // Check if elements are in view when page loads and on scroll
  handleScrollAnimation();
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Setup button to go to quiz section
  if (startButton) {
    startButton.addEventListener('click', () => {
      document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth' });
    });
  }
});