/**
 * First Names, Lasting Impressions
 * Names Background Animation
 * 
 * This script creates and animates the floating names background
 * on the title screen, illustrating the diversity of names that
 * influence our perceptions and biases.
 * 
 * @authors Namira Haris and Marian Siljeholm
 */

window.addEventListener('load', () => {
  // ======================================
  // CONFIG AND INITIALIZATION
  // ======================================
  
  /**
   * Array of diverse names to display in the background
   * Representing a wide variety of cultural backgrounds
   */
  const names = [
    "Emily", "Mohammed", "Mei", "Carlos", "Priya", "Ahmed", "Jin", "Tariq",
    "Aisha", "Miguel", "Sophia", "Kwame", "Evelyn", "Rajesh", "Anika", "Liu",
    "Fatima", "Jacob", "Antonio", "Maria", "Kevin", "Yusuf", "Yuki", "Zara",
    "Amara", "Santiago", "David", "Chen", "Ali", "Nadia", "Leo", "Ines",
    "Marian", "Diego", "Hana", "Marcus", "Tomoko", "Kofi", "Laila", "Ibrahim",
    "Danae", "Wenqi", "Suyu", "Vivica", "Shuyu", "Peiyao", "Haolong", "Jiarui",
    "Maricarmen", "Jingxuan", "Namira", "Jacky", "Yuanlang"
  ];
  
  // Get the container element
  const nameOverlay = document.getElementById('name-overlay');
  if (!nameOverlay) {
    console.error("Name overlay element not found!");
    return;
  }
  
  // Responsive configuration
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;
  const nameLimit = isSmallMobile ? 20 : (isMobile ? 30 : names.length);
  const minSpacing = isSmallMobile ? 12 : (isMobile ? 10 : 8);
  
  // Track used positions to prevent overlaps
  const usedPositions = [];
  
  // ======================================
  // HELPER FUNCTIONS
  // ======================================
  
  /**
   * Checks if a position is in the restricted center area
   * (to avoid overlapping with the main title)
   * @param {number} topPos - Top position in viewport height percentage
   * @param {number} leftPos - Left position in viewport width percentage
   * @return {boolean} True if position is in restricted area
   */
  function isInRestrictedArea(topPos, leftPos) {
    const verticalBuffer = isMobile ? 25 : 20;
    const horizontalBuffer = isMobile ? 35 : 30;
    
    return (topPos > (50 - verticalBuffer) && topPos < (50 + verticalBuffer) && 
            leftPos > (50 - horizontalBuffer) && leftPos < (50 + horizontalBuffer));
  }
  
  /**
   * Creates a floating name element and adds it to the overlay
   * @param {string} name - The name to display
   * @param {number} index - The index of the name in the array
   */
  function createNameElement(name, index) {
    const nameElement = document.createElement('div');
    nameElement.innerText = name;
    nameElement.className = 'name-fade';
    
    // Apply style variation (4 different animation styles)
    const styleNum = (index % 4) + 1;
    nameElement.classList.add(`style${styleNum}`);
    
    // Adjust size based on screen size
    const baseSize = isSmallMobile ? 14 : (isMobile ? 16 : 18);
    const sizeFactor = 1.0 + Math.random() * (isMobile ? 0.4 : 0.7);
    nameElement.style.fontSize = `${Math.floor(baseSize * sizeFactor)}px`;
    
    // Add slight rotation for visual interest
    const maxRotation = isMobile ? 2 : 3;
    const rotation = Math.random() * (maxRotation * 2) - maxRotation;
    nameElement.style.transform = `rotate(${rotation}deg)`;
    nameElement.dataset.rotation = rotation;
    
    // Find non-overlapping position
    positionElementWithoutOverlap(nameElement);
  }
  
  /**
   * Positions an element to avoid overlapping with other elements
   * @param {HTMLElement} element - The element to position
   */
  function positionElementWithoutOverlap(element) {
    let topPos, leftPos;
    let attempts = 0;
    const maxAttempts = 50;
    
    do {
      topPos = Math.random() * 90;
      leftPos = Math.random() * 90;
      
      const isOverlapping = usedPositions.some(pos => 
        Math.abs(pos[0] - topPos) < minSpacing && Math.abs(pos[1] - leftPos) < minSpacing
      );
      
      if (!isInRestrictedArea(topPos, leftPos) && !isOverlapping) {
        usedPositions.push([topPos, leftPos]);
        element.style.top = `${topPos}vh`;
        element.style.left = `${leftPos}vw`;
        element.style.animationDelay = `${Math.random() * 6}s`;
        nameOverlay.appendChild(element);
        break;
      }
      
      attempts++;
    } while (attempts < maxAttempts);
  }
  
  /**
   * Creates decorative particle elements in the background
   */
  function createParticles() {
    const titleSection = document.getElementById('title-section');
    if (!titleSection) return;
    
    const fragment = document.createDocumentFragment();
    const particleCount = isMobile ? 8 : 15;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random particle size
      const size = 2 + Math.random() * 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position (avoiding the center)
      let topPos, leftPos;
      do {
        topPos = Math.random() * 100;
        leftPos = Math.random() * 100;
      } while (isInRestrictedArea(topPos, leftPos));
      
      particle.style.top = `${topPos}vh`;
      particle.style.left = `${leftPos}vw`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      
      fragment.appendChild(particle);
    }
    
    titleSection.appendChild(fragment);
  }
  
  // ======================================
  // INTERACTIVE EFFECTS
  // ======================================
  
  /**
   * Sets up interactive hover effects for desktop devices
   */
  function setupInteractiveEffects() {
    if (isMobile) return; // Skip for mobile devices
    
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      document.querySelectorAll('.name-fade').forEach(name => {
        const rect = name.getBoundingClientRect();
        const nameX = rect.left + rect.width / 2;
        const nameY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to name
        const distance = Math.sqrt(
          Math.pow(mouseX - nameX, 2) + 
          Math.pow(mouseY - nameY, 2)
        );
        
        // Apply effect based on distance
        if (distance < 180) {
          const intensity = 1 - distance / 180;
          name.style.textShadow = `0 0 ${12 * intensity}px rgba(138, 43, 226, ${0.7 + 0.3 * intensity})`;
          name.style.color = `rgba(255, 255, 255, ${0.7 + 0.3 * intensity})`;
          name.style.transform = `rotate(${name.dataset.rotation || 0}deg) scale(${1 + 0.1 * intensity})`;
        } else {
          name.style.textShadow = '';
          name.style.color = '';
          name.style.transform = `rotate(${name.dataset.rotation || 0}deg) scale(1)`;
        }
      });
    });
  }
  
  /**
   * Sets up window resize handling
   */
  function setupResizeHandling() {
    window.addEventListener('resize', () => {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        // Reload page on significant size changes to adjust layout
        location.reload();
      }
    });
  }
  
  // ======================================
  // INITIALIZATION
  // ======================================
  
  /**
   * Initialize the names background
   */
  function init() {
    // Create floating name elements
    names.slice(0, nameLimit).forEach((name, index) => createNameElement(name, index));
    
    // Add decorative particles
    createParticles();
    
    // Set up interactive effects for desktop
    setupInteractiveEffects();
    
    // Make name overlay visible
    nameOverlay.style.opacity = '1';
    
    // Handle window resizing
    setupResizeHandling();
  }
  
  // Start the initialization
  init();
});