/* Interactive Logic for Pizzeria Criscemunno Website */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case of page refresh mid-page
    
    
    // ==========================================
    // 2. MOBILE MENU TOGGLE
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });
    
    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
    
    
    // ==========================================
    // 3. MENU TABS SWITCHER
    // ==========================================
    const tabButtons = document.querySelectorAll('.menu-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Toggle buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Toggle content panes
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.getAttribute('id') === targetTab) {
                    pane.classList.add('active');
                }
            });
        });
    });
    
    

    // ==========================================
    // 5. GOOGLE REVIEWS SLIDER
    // ==========================================
    const reviewsWrapper = document.getElementById('reviewsWrapper');
    const reviewCards = document.querySelectorAll('.review-card');
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');
    const dotIndicators = document.querySelectorAll('.slider-dots .dot');
    
    let currentSlide = 0;
    const totalSlides = reviewCards.length;
    let autoSlideInterval;
    
    const goToSlide = (slideIndex) => {
        currentSlide = slideIndex;
        // Shift container
        reviewsWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dotIndicators.forEach(dot => dot.classList.remove('active'));
        dotIndicators[currentSlide].classList.add('active');
    };
    
    const nextSlide = () => {
        let targetSlide = (currentSlide + 1) % totalSlides;
        goToSlide(targetSlide);
    };
    
    const prevSlide = () => {
        let targetSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(targetSlide);
    };
    
    // Control Buttons
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    
    // Dots click events
    dotIndicators.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
            goToSlide(slideIdx);
            resetAutoSlide();
        });
    });
    
    // Automatic sliding (every 8 seconds)
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 8000);
    };
    
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };
    
    startAutoSlide();
    
    
    // ==========================================
    // 6. LIVE OPENING HOURS STATUS INDICATOR
    // ==========================================
    // Opening Hours definition (in minutes from midnight)
    // 0: Sunday, 1: Monday, ... 6: Saturday
    const weeklyHours = {
        0: null, // Sunday Closed
        1: { start: 19 * 60, end: 23 * 60 + 30, label: "19:00 – 23:30" }, // Mon
        2: { start: 19 * 60 + 15, end: 23 * 60 + 30, label: "19:15 – 23:30" }, // Tue
        3: { start: 19 * 60, end: 23 * 60 + 30, label: "19:00 – 23:30" }, // Wed
        4: { start: 19 * 60, end: 23 * 60 + 30, label: "19:00 – 23:30" }, // Thu
        5: { start: 19 * 60, end: 23 * 60 + 30, label: "19:00 – 23:30" }, // Fri
        6: { start: 19 * 60 + 15, end: 24 * 60, label: "19:15 – 00:00" }  // Sat
    };
    
    const daysItalian = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    
    const checkOpeningStatus = () => {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const min = now.getMinutes();
        const timeInMins = hour * 60 + min;
        
        // Highlight active day in list
        const activeDayLi = document.getElementById(`day-${day}`);
        if (activeDayLi) {
            activeDayLi.classList.add('active-day');
        }
        
        const statusDot = document.getElementById('statusDot');
        const statusText = document.getElementById('statusText');
        const statusDetails = document.getElementById('statusDetails');
        
        const todayHours = weeklyHours[day];
        
        if (!todayHours) {
            // Closed today (Sunday)
            statusDot.className = 'status-dot closed';
            statusText.textContent = "Chiuso Ora";
            statusText.style.color = '#ff3b30';
            statusDetails.textContent = "Domenica siamo chiusi. Ti aspettiamo domani alle 19:00!";
            return;
        }
        
        const isOpen = timeInMins >= todayHours.start && timeInMins < todayHours.end;
        
        if (isOpen) {
            statusDot.className = 'status-dot open';
            statusText.textContent = "Aperto Ora";
            statusText.style.color = '#25d366';
            
            // Format closing time
            let closeLabel = todayHours.label.split(' – ')[1];
            statusDetails.textContent = `Siamo aperti stasera! Cucina attiva fino alle ${closeLabel}. Passa a trovarci o prenota su WhatsApp.`;
        } else {
            statusDot.className = 'status-dot closed';
            statusText.textContent = "Chiuso Ora";
            statusText.style.color = '#ff3b30';
            
            // Check if open later today
            if (timeInMins < todayHours.start) {
                let openLabel = todayHours.label.split(' – ')[0];
                statusDetails.textContent = `Oggi riapriamo alle ore ${openLabel}. A stasera!`;
            } else {
                // Determine next day open time
                let nextDay = (day + 1) % 7;
                let nextOpenHours = weeklyHours[nextDay];
                while (!nextOpenHours) {
                    nextDay = (nextDay + 1) % 7;
                    nextOpenHours = weeklyHours[nextDay];
                }
                
                let nextDayName = (nextDay === (day + 1) % 7) ? "domani" : daysItalian[nextDay];
                let openLabel = nextOpenHours.label.split(' – ')[0];
                
                statusDetails.textContent = `Al momento siamo chiusi. Riapriamo ${nextDayName} alle ore ${openLabel}.`;
            }
        }
    };
    
    checkOpeningStatus();
    // Refresh status check every 30 seconds
    setInterval(checkOpeningStatus, 30000);
});
