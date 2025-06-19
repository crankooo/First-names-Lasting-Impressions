/**
 * First Names, Lasting Impressions
 * Interactive Quiz Experience
 * 
 * This script handles the interactive quiz portion of the experience,
 * allowing users to match names with professions while learning about
 * demographic representation in various professional fields.
 * 
 * @authors Namira Haris and Marian Siljeholm
 */

document.addEventListener('DOMContentLoaded', () => {
  // ======================================
  // QUIZ DATA
  // ======================================
  
  /**
   * Array of quiz questions with name, profession, options and feedback
   * Each profile contains demographic information about representation
   * in their respective professional fields
   */
  const quizData = [
    {
      name: "Carlos",
      profession: "Lawyer",
      options: ["Landscaper", "Lawyer", "Accountant"],
      rightAnswer: `You're right! Carlos is a lawyer, licensed by the Massachusetts Board of Bar Examiners. He and other Latinos remain underrepresented in the legal system. Despite making up 19.4% of the U.S. adult workforce, <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">Latinos account for only 6.5% of all lawyers</a>. This gap isn't just a number — it means fewer Latino voices in courtrooms and a justice system that too often fails to reflect the people it serves.`,
      wrongAnswer: `You guessed '{selection},' but actually Carlos is a lawyer, licensed by the Massachusetts Board of Bar Examiners. He and other Latinos remain underrepresented in the legal system. Despite making up 19.4% of the U.S. adult workforce, <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">Latinos account for only 6.5% of all lawyers</a>. This gap isn't just a number — it means fewer Latino voices in courtrooms and a justice system that too often fails to reflect the people it serves.`
    },
    {
      name: "Thanh",
      profession: "Mental Health Counselor",
      options: ["Data Analyst", "Mental Health Counselor", "Piano Teacher"],
      rightAnswer: `You're right! Thanh is a licensed mental health counselor. And yet, she is in the minority. Stigma surrounding seeking counseling has long shadowed many Asian communities — and with <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">only 2.7% of U.S. mental health counselors identifying as Asian</a>, that has real consequences. When people can't see themselves in their care providers, they're less likely to seek help. Representation isn't just symbolic; it can be a bridge — or a barrier — to healing.`,
      wrongAnswer: `You guessed '{selection},' but Thanh is actually a licensed mental health counselor. And yet, she is in the minority. Stigma surrounding seeking counseling has long shadowed many Asian communities — and with <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">only 2.7% of U.S. mental health counselors identifying as Asian</a>, that has real consequences. When people can't see themselves in their care providers, they're less likely to seek help. Representation isn't just symbolic; it can be a bridge — or a barrier — to healing.`
    },
    {
      name: "Jermaine",
      profession: "Financial Analyst",
      options: ["Financial Analyst", "Civil Rights Attorney", "Security Guard"],
      rightAnswer: `You're right! Jermaine is a financial analyst — but he is one of the few. <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">Black professionals make up just 11.4% of the financial and investment analyst workforce</a>. According to <a href="https://www.epi.org/publication/racial-representation-prof-occ/" target="_blank">a 2019 Economic Policy Institute report</a>, the typical black worker earns 24.4% less per hour than the typical white worker, an even larger wage gap than in 1979, when it was 16.4%. This kind of inequity sends a loud message to future Black talent that their work won't be valued equally.`,
      wrongAnswer: `You guessed '{selection},' but Jermaine is actually a financial analyst — but he is one of the few. <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">Black professionals make up just 11.4% of the financial and investment analyst workforce</a>. According to <a href="https://www.epi.org/publication/racial-representation-prof-occ/" target="_blank">a 2019 Economic Policy Institute report</a>, the typical black worker earns 24.4% less per hour than the typical white worker, an even larger wage gap than in 1979, when it was 16.4%. This kind of inequity sends a loud message to future Black talent that their work won't be valued equally.`
    },
    {
      name: "Matthew",
      profession: "Probation Officer",
      options: ["Probation Officer", "Podcast Host", "Real Estate Agent"],
      rightAnswer: `You're right! Matthew is a probation officer. As a white male, he's in the majority in this field, where <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">65.4% are white</a>. In contrast, <a href="https://bjs.ojp.gov/content/pub/pdf/p20st.pdf?utm" target="_blank">2020 data shows that the incarceration rate for whites sits far below that of Blacks and Latinos. When the group least impacted by incarceration also holds the power in rehabilitation — it begs the question: who's shaping the path to reentry?`,
      wrongAnswer: `You guessed '{selection},' but Matthew is actually a probation officer. As a white male, he's in the majority in this field, where <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">65.4% are white</a>. In contrast, <a href="https://bjs.ojp.gov/content/pub/pdf/p20st.pdf?utm" target="_blank">2020 data shows that the incarceration rate for whites sits far below that of Blacks and Latinos. When the group least impacted by incarceration also holds the power in rehabilitation — it begs the question: who's shaping the path to reentry?`
    },
    {
      name: "Kate",
      profession: "Construction Manager",
      options: ["Interior Designer", "Construction Manager", "Lifestyle Blogger"],
      rightAnswer: `You're right! Kate is a construction manager and part of <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">just 11.2% women in the construction workforce</a>. This small percentage is rapidly growing, increasing 45% over the last decade</a>. Still, women remain substantially underrepresented in this male-dominated industry, and often face discrimination as a result. Kate works as a roofing construction manager. That means constantly navigating people's biases."There's the barrier to entry," she explains. "How are we supposed to learn if we aren't welcomed in? I look forward to the day I tell someone I own a roofing company and they don't ask, 'Wait, YOU go on the roof?' Yes. I do. Women belong in roofing—and we're just getting started."`,
      wrongAnswer: `You guessed '{selection},' but Kate is actually a construction manager and part of <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">just 11.2% women in the construction workforce</a>. This small percentage is rapidly growing, increasing 45% over the last decade</a>. Still, women remain substantially underrepresented in this male-dominated industry, and often face discrimination as a result. Kate works as a roofing construction manager. That means constantly navigating people's biases."There's the barrier to entry," she explains. "How are we supposed to learn if we aren't welcomed in? I look forward to the day I tell someone I own a roofing company and they don't ask, 'Wait, YOU go on the roof?' Yes. I do. Women belong in roofing—and we're just getting started."`
    },
    {
      name: "Hannah",
      profession: "Second-Grade Teacher",
      options: ["Speech-Language Pathologist", "Second-Grade Teacher", "Wedding Photographer"],
      rightAnswer: `You're right! Hannah is a second-grade teacher. Being a white female, she is in the majority. In the realm of elementary and middle school education, <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">women constitute approx. 78% of the workforce</a>. And yet, despite their dominance in numbers, <a href="https://narrowthegap.co/gap/elementary-and-middle-school-teachers/" target="_blank">female teachers earn 11% less than their male counterparts in similar roles</a>. As one second grade teacher, who asked to remain anonymous due to potential professional repercussions, said, "While the teachers are overwhelmingly female, the administration is overwhelmingly male. I've often seen that it can lead to a disconnect. Often it creates a power dynamic where the administration assumes to know better than the teachers that live the experience every day, and part of that is because of their gender."`,
      wrongAnswer: `You guessed '{selection},' but Hannah is actually a second-grade teacher. Being a white female, she is in the majority. In the realm of elementary and middle school education, <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">women constitute approx. 78% of the workforce</a>. And yet, despite their dominance in numbers, <a href="https://narrowthegap.co/gap/elementary-and-middle-school-teachers/" target="_blank">female teachers earn 11% less than their male counterparts in similar roles</a>. As one second grade teacher, who asked to remain anonymous due to potential professional repercussions, said, "While the teachers are overwhelmingly female, the administration is overwhelmingly male. I've often seen that it can lead to a disconnect. Often it creates a power dynamic where the administration assumes to know better than the teachers that live the experience every day, and part of that is because of their gender."`
    },
    {
      name: "Kevin",
      profession: "Social Worker",
      options: ["Social Worker", "IT Support Manager", "Store Manager"],
      rightAnswer: `You're right! Kevin is indeed a social worker. He is <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">one of only 15% of child, family, and school social workers who are Black</a>, despite their communities being disproportionately impacted by the issues these social workers address. This means fewer culturally informed advocates in critical support roles for Black children and families. In 1973, Kevin John McCarthy got into Boston College on a full ride — but he believes only because they didn't know he was Black. His personal and professional journey navigating the world as a Black man with a white sounding name is an example of the costs and privileges of name-based bias. <a href="#" id="kevin-story-link">Read his story</a>`,
      wrongAnswer: `You guessed '{selection},' but Kevin is actually a social worker. He is <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">one of only 15% of child, family, and school social workers who are Black</a>, despite their communities being disproportionately impacted by the issues these social workers address. This means fewer culturally informed advocates in critical support roles for Black children and families. In 1973, Kevin John McCarthy got into Boston College on a full ride — but he believes only because they didn't know he was Black. His personal and professional journey navigating the world as a Black man with a white sounding name is an example of the costs and privileges of name-based bias. <a href="#" id="kevin-story-link">Read his story</a>`
    },
    {
      name: "Maria",
      profession: "Journalist",
      options: ["Journalist", "Hair Stylist", "Receptionist"],
      rightAnswer: `You're right! Maria is a journalist. Being Latina though, she is in the minority. <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">Of all the news analysts, reporters, and journalists in US, just 7.7% are Latino, while 78% are White, 6.3% are Black, and 4.1% are Asian</a>. In a field built on accuracy, this imbalance isn't just a staffing issue — it means that diverse perspectives are missing from the shaping of narratives that shape public understanding.`,
      wrongAnswer: `You guessed '{selection},' but Maria is actually a journalist. Being Latina though, she is in the minority. <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">Of all the news analysts, reporters, and journalists in US, just 7.7% are Latino, while 78% are White, 6.3% are Black, and 4.1% are Asian</a>. In a field built on accuracy, this imbalance isn't just a staffing issue — it means that diverse perspectives are missing from the shaping of narratives that shape public understanding.`
    },
    {
      name: "Rebecca",
      profession: "Software Developer",
      options: ["Software Developer", "HR Manager", "Wedding Planner"],
      rightAnswer: `You're right! Rebecca is indeed a Software Developer. But as an Asian female, she is in the minority. <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">Women make up only about 1 in 5 of software developers. And the Asian workforce on the whole only makes up 36.8% of the industry</a>. This disparity isn't just a workforce imbalance—it's an isolating reality with consequences. For women from underrepresented communities, the burden of being the only one in the room doesn't just undermine their confidence. It can erode mental health and drive out talent.`,
      wrongAnswer: `You guessed '{selection},' but Rebecca is actually a Software Developer. But as an Asian female, she is in the minority. <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">Women make up only about 1 in 5 of software developers. And the Asian workforce on the whole only makes up 36.8% of the industry</a>. This disparity isn't just a workforce imbalance—it's an isolating reality with consequences. For women from underrepresented communities, the burden of being the only one in the room doesn't just undermine their confidence. It can erode mental health and drive out talent.`
    },
    {
      name: "Sofia",
      profession: "Nurse practitioner",
      options: ["Aspiring Actress", "Nurse practitioner", "PR Manager"],
      rightAnswer: `You're right! Sofia is a nurse practitioner—and as a Latina, she's part of the mere 6.8% of NPs in the U.S. who identify as Hispanic. But the underrepresentation runs deeper than statistics. As Sophia attests, "I've only met three Hispanic NPs in over a decade." Sophia is a California-based critical care nurse practitioner whom we are calling "Sofia" in this conversation as she elected to remain anonymous for fear of professional backlash.`,
      wrongAnswer: `You guessed '{selection},' but actually Sofia is a nurse practitioner—and as a Latina, she's in the minority, part of the mere 6.8% of NPs in the U.S. who identify as Hispanic. But the underrepresentation runs deeper than statistics. As Sophia attests, "I've only met three Hispanic NPs in over a decade." Sophia is a California-based critical care nurse practitioner whom we are calling "Sofia" in this conversation as she elected to remain anonymous for fear of professional backlash.`
    }
  ];

  // ======================================
  // STATE VARIABLES AND DOM ELEMENTS
  // ======================================

  const carouselTrack = document.getElementById('carousel-track');
  let currentIndex = 0;
  const userAnswers = Array(quizData.length).fill(null);
  const userAnswerStatus = Array(quizData.length).fill(false);
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  // ======================================
  // INITIALIZATION
  // ======================================

  /**
   * Initializes the quiz interface and sets up event handlers
   */
  function initQuiz() {
    createSlides();
    updateCarousel();
    createNavigationButtons();
    setupCarouselEvents();
    setupKevinStoryCloseButton();
  }

  /**
   * Sets up the close button for Kevin's story popup
   */
  function setupKevinStoryCloseButton() {
    const closeButton = document.querySelector('#kevin-story-container button');
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        document.getElementById('kevin-story-container').style.display = 'none';
      });
    }
  }

  /**
   * Creates all slides and adds them to the carousel
   */
  function createSlides() {
    const fragment = document.createDocumentFragment();
    quizData.forEach((question, index) => {
      const slide = createSlide(question, index);
      fragment.appendChild(slide);
    });
    carouselTrack.appendChild(fragment);
  }

  /**
   * Creates a single quiz slide
   * @param {Object} questionData - The data for a specific question
   * @param {number} index - The index of the question in the quiz
   * @return {HTMLElement} The created slide
   */
  function createSlide(questionData, index) {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.setAttribute('data-index', index);
    
    if (index === currentIndex) {
      slide.classList.add('active');
    }
    
    const container = document.createElement('div');
    container.className = 'quiz-container';
    
    // Progress bar
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.id = 'quiz-progress';
    progressBar.style.width = `${((index + 1) / quizData.length) * 100}%`;
    
    const progressText = document.createElement('div');
    progressText.className = 'progress-text';
    progressText.innerHTML = `Question <span id="current-question">${index + 1}</span>/<span id="total-questions">${quizData.length}</span>`;
    
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressText);
    container.appendChild(progressContainer);
    
    // Status indicator
    const statusIndicator = document.createElement('div');
    statusIndicator.className = 'answer-status unanswered';
    statusIndicator.id = `status-${index}`;
    container.appendChild(statusIndicator);
    
    // Person name heading
    const nameElement = document.createElement('h2');
    nameElement.id = `person-name-${index}`;
    nameElement.innerText = `Meet ${questionData.name}`;
    container.appendChild(nameElement);
    
    // Silhouette image
    const image = document.createElement('img');
    image.src = 'silhouette1.jpg';
    image.alt = 'Silhouette of a person';
    image.className = 'silhouette-image';
    container.appendChild(image);
    
    // Instructions
    const instructions = document.createElement('div');
    instructions.className = 'quiz-instructions';
    instructions.innerText = 'Guess their profession:';
    container.appendChild(instructions);
    
    // Profession options
    container.appendChild(createOptionsContainer(questionData, index));
    slide.appendChild(container);
    
    return slide;
  }

  /**
   * Creates the profession options container
   * @param {Object} questionData - The data for a specific question
   * @param {number} index - The index of the question in the quiz
   * @return {HTMLElement} The options container
   */
  function createOptionsContainer(questionData, index) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'quiz-options';
    optionsContainer.id = `quiz-options-${index}`;
    
    questionData.options.forEach(profession => {
      const button = document.createElement('button');
      button.innerText = profession;
      button.className = 'quiz-option';
      button.disabled = userAnswerStatus[index];
      button.onclick = () => checkAnswer(profession, index);
      optionsContainer.appendChild(button);
    });
    
    return optionsContainer;
  }

  /**
   * Creates navigation buttons for each slide
   */
  function createNavigationButtons() {
    document.querySelectorAll('.quiz-container').forEach((container, index) => {
      const navContainer = document.createElement('div');
      navContainer.className = 'carousel-nav';
      
      const prevButton = document.createElement('button');
      prevButton.className = 'nav-button';
      prevButton.id = `prev-button-${index}`;
      prevButton.textContent = '←';
      prevButton.disabled = index === 0;
      prevButton.onclick = prevSlide;
      
      const nextButton = document.createElement('button');
      nextButton.className = 'nav-button';
      nextButton.id = `next-button-${index}`;
      nextButton.textContent = '→';
      nextButton.disabled = index === quizData.length - 1;
      nextButton.onclick = nextSlide;
      
      navContainer.appendChild(prevButton);
      navContainer.appendChild(nextButton);
      container.appendChild(navContainer);
    });
  }

  // ======================================
  // QUIZ INTERACTION
  // ======================================

  /**
   * Handles user selecting an answer option
   * @param {string} selectedOption - The option the user selected
   * @param {number} slideIndex - The index of the current slide
   */
  function checkAnswer(selectedOption, slideIndex) {
    const currentQuestion = quizData[slideIndex];
    
    // Record user's answer
    userAnswers[slideIndex] = selectedOption;
    userAnswerStatus[slideIndex] = true;
    
    // Update status indicator
    const statusIndicator = document.getElementById(`status-${slideIndex}`);
    statusIndicator.className = 'answer-status answered';
    
    // Clear options container
    const optionsContainer = document.getElementById(`quiz-options-${slideIndex}`);
    optionsContainer.innerHTML = '';
    
    // Show feedback
    showFeedback(slideIndex, selectedOption);
  }
  
  /**
   * Displays feedback after user answers a question
   * @param {number} slideIndex - The index of the current slide
   * @param {string} selectedOption - The option the user selected
   */
  function showFeedback(slideIndex, selectedOption) {
    const currentQuestion = quizData[slideIndex];
    
    // Get appropriate feedback based on answer
    let feedbackContent = (selectedOption === currentQuestion.profession) 
      ? currentQuestion.rightAnswer 
      : currentQuestion.wrongAnswer;
    
    // Replace {selection} placeholder with the user's actual selection in quotes
    feedbackContent = feedbackContent.replace('{selection}', `"${selectedOption}"`);
    
    // Find the slide and check if feedback already exists
    const slide = document.querySelector(`.carousel-slide[data-index="${slideIndex}"]`);
    const quizContainer = slide.querySelector('.quiz-container');
    const existingFeedback = slide.querySelector('.stored-feedback');
    
    if (!existingFeedback) {
      // Create and add feedback
      const feedbackContainer = createFeedbackContainer(feedbackContent);
      quizContainer.appendChild(feedbackContainer);
      
      // Handle special cases
      if (currentQuestion.name === "Kevin") {
        setupKevinStoryLink(slide);
      }
      
      if (currentQuestion.name === "Sofia") {
        addFinishButton(quizContainer);
      }
    }
  }
  
  /**
   * Creates the feedback container element
   * @param {string} content - The HTML content for the feedback
   * @return {HTMLElement} The feedback container
   */
  function createFeedbackContainer(content) {
    const feedbackContainer = document.createElement('div');
    feedbackContainer.className = 'stored-feedback';
    feedbackContainer.innerHTML = content;
    return feedbackContainer;
  }
  
  /**
   * Sets up the event listener for Kevin's story link
   * @param {HTMLElement} slide - The slide containing Kevin's profile
   */
  function setupKevinStoryLink(slide) {
    setTimeout(() => {
      const kevinLink = slide.querySelector('#kevin-story-link');
      if (kevinLink) {
        kevinLink.addEventListener('click', function(e) {
          e.preventDefault();
          document.getElementById('kevin-story-container').style.display = 'block';
        });
      }
    }, 100);
  }
  
  /**
   * Adds the finish button to Sofia's slide (the last profile)
   * @param {HTMLElement} container - The container to add the button to
   */
  function addFinishButton(container) {
    // Create finish button container
    const finishButtonContainer = document.createElement('div');
    finishButtonContainer.className = 'inline-finish-button-container';
    
    // Create the finish button
    const finishButton = document.createElement('button');
    finishButton.id = 'inline-finish-button';
    finishButton.className = 'finish-button';
    finishButton.textContent = 'Finish Quiz';
    
    // Add click event to scroll to results section
    finishButton.addEventListener('click', function() {
      document.getElementById('results-landing-section').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
    
    // Append button to container
    finishButtonContainer.appendChild(finishButton);
    
    // Add container after the feedback
    container.appendChild(finishButtonContainer);
  }

  /**
   * Updates the carousel display, progress indicators and navigation state
   */
  function updateCarousel() {
    const newTranslate = -currentIndex * 100;
    carouselTrack.style.transform = `translateX(${newTranslate}%)`;
    
    // Update all slides
    document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
      updateSlideProgress(slide, index);
      updateSlideActiveState(slide, index);
      updateNavigationButtons(slide, index);
      checkForExistingAnswer(slide, index);
    });
  }
  
  /**
   * Updates the progress indicators for a slide
   * @param {HTMLElement} slide - The slide to update
   * @param {number} index - The index of the slide
   */
  function updateSlideProgress(slide, index) {
    // Update progress bar
    const progressBar = slide.querySelector('#quiz-progress');
    if (progressBar) {
      progressBar.style.width = `${((currentIndex + 1) / quizData.length) * 100}%`;
    }
    
    // Update current question display
    const currentQuestionElement = slide.querySelector('#current-question');
    if (currentQuestionElement) {
      currentQuestionElement.textContent = currentIndex + 1;
    }
  }
  
  /**
   * Updates the active state of a slide
   * @param {HTMLElement} slide - The slide to update
   * @param {number} index - The index of the slide
   */
  function updateSlideActiveState(slide, index) {
    if (index === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  }
  
  /**
   * Updates the navigation buttons for a slide
   * @param {HTMLElement} slide - The slide to update
   * @param {number} index - The index of the slide
   */
  function updateNavigationButtons(slide, index) {
    const prevButton = slide.querySelector(`#prev-button-${index}`);
    const nextButton = slide.querySelector(`#next-button-${index}`);
    
    if (prevButton) prevButton.disabled = currentIndex === 0;
    if (nextButton) nextButton.disabled = index === quizData.length - 1;
  }
  
  /**
   * Checks if a slide has already been answered and restores feedback if needed
   * @param {HTMLElement} slide - The slide to check
   * @param {number} index - The index of the slide
   */
  function checkForExistingAnswer(slide, index) {
    if (userAnswerStatus[index]) {
      const optionsContainer = document.getElementById(`quiz-options-${index}`);
      if (optionsContainer) {
        optionsContainer.innerHTML = '';
      }
      
      // Make sure feedback is showing
      const existingFeedback = slide.querySelector('.stored-feedback');
      if (!existingFeedback) {
        showFeedback(index, userAnswers[index]);
      }
    }
  }

  // ======================================
  // NAVIGATION
  // ======================================
  
  /**
   * Navigate to the next slide
   */
  function nextSlide() {
    if (currentIndex < quizData.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  }

  /**
   * Navigate to the previous slide
   */
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // ======================================
  // TOUCH INTERACTION
  // ======================================

  /**
   * Sets up touch and mouse events for carousel interaction
   */
  function setupCarouselEvents() {
    const carousel = document.querySelector('.carousel-container');
    
    // Mouse events for desktop
    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mouseup', dragEnd);
    carousel.addEventListener('mouseleave', dragEnd);
    carousel.addEventListener('mousemove', drag);
    
    // Touch events for mobile
    carousel.addEventListener('touchstart', dragStart);
    carousel.addEventListener('touchend', dragEnd);
    carousel.addEventListener('touchmove', drag);
  }

  /**
   * Handles the start of a drag/touch interaction
   * @param {Event} e - The event object
   */
  function dragStart(e) {
    if (e.type === 'mousedown') {
      e.preventDefault();
    }
    startPos = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    isDragging = true;
  }

  /**
   * Handles drag/touch movement
   * @param {Event} e - The event object
   */
  function drag(e) {
    if (!isDragging) return;
    
    const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentPosition - startPos;
    
    // Add resistance at the edges
    if ((currentIndex === 0 && diff > 0) || 
        (currentIndex === quizData.length - 1 && diff < 0)) {
      currentTranslate = prevTranslate + (diff / 4); // Reduced movement at edges
    } else {
      currentTranslate = prevTranslate + diff;
    }
    
    carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
  }

  /**
   * Handles the end of a drag/touch interaction
   */
  function dragEnd() {
    if (!isDragging) return;
    
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    
    // If moved significantly, navigate
    if (movedBy < -100 && currentIndex < quizData.length - 1) {
      nextSlide();
    } else if (movedBy > 100 && currentIndex > 0) {
      prevSlide();
    } else {
      // Reset position if not enough movement
      updateCarousel();
    }
    
    prevTranslate = currentTranslate;
  }

  // Initialize the quiz when the document is ready
  initQuiz();
});