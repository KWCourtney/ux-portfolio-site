document.addEventListener('DOMContentLoaded', function() {
    // --- Global Error Handler for Debugging ---
    window.addEventListener('error', function(event) {
        console.error('Unhandled runtime error on page:', event.error || event.message, event);
    });

    // --- Return to Top Button Logic ---
    const backToTopButton = document.querySelector('.back-to-top');
    function toggleBackToTop() {
        if (window.scrollY > 300) { // Show button after 300px of scroll
            if (backToTopButton) backToTopButton.classList.add('show');
        } else {
            if (backToTopButton) backToTopButton.classList.remove('show');
        }
    }
    if (backToTopButton) {
        window.addEventListener('scroll', toggleBackToTop);
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            const tabsNav = document.getElementById('case-study-tabs-nav');

            // Scroll the window to the top smoothly.
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Manually and immediately reset the sticky state for robustness.
            if (tabsNav && tabsNav.classList.contains('sticky')) {
                tabsNav.classList.remove('sticky');
                tabsNav.style.top = ''; // Reset the dynamic top position
                document.body.classList.remove('body-sticky-nav-padding');
                document.body.style.removeProperty('--sticky-nav-height');
            }
        });
        toggleBackToTop(); // Initial check on page load
    }

    // --- Mobile Navigation Panel Logic ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNavPanel = document.getElementById('mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileAccordionButtons = document.querySelectorAll('.mobile-nav-panel .has-accordion > button');
    const body = document.body;
    function closeAllMobileAccordions() {
        mobileAccordionButtons.forEach(button => {
            const accordionContent = document.getElementById(button.getAttribute('aria-controls'));
            if (accordionContent) {
                button.setAttribute('aria-expanded', 'false');
                accordionContent.dataset.visible = 'false';
                accordionContent.style.maxHeight = null;
            }
        });
    }
    let toggleMobileNav = null;
    if (mobileNavToggle && mobileNavPanel && mobileNavClose) {
        toggleMobileNav = function(state) {
            if (state === 'open') {
                mobileNavPanel.dataset.visible = 'true';
                mobileNavToggle.setAttribute('aria-expanded', 'true');
                body.classList.add('no-scroll');
                closeAllMobileAccordions();
            } else {
                mobileNavPanel.dataset.visible = 'false';
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                body.classList.remove('no-scroll');
            }
        };
        mobileNavToggle.addEventListener('click', () => toggleMobileNav('open'));
        mobileNavClose.addEventListener('click', () => toggleMobileNav('close'));
        mobileNavPanel.querySelectorAll('ul > li > a:not([aria-controls])').forEach(link => {
            if (!link.closest('.has-accordion')) {
                link.addEventListener('click', () => {
                    if (typeof toggleMobileNav === 'function') toggleMobileNav('close');
                });
            }
        });
        mobileNavPanel.querySelectorAll('.accordion-content a').forEach(link => {
            link.addEventListener('click', () => {
                if (typeof toggleMobileNav === 'function') toggleMobileNav('close');
            });
        });
        if (mobileAccordionButtons.length > 0) {
            mobileAccordionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const accordionContent = document.getElementById(this.getAttribute('aria-controls'));
                    if (!accordionContent) return;
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
                    accordionContent.dataset.visible = isExpanded ? 'false' : 'true';
                    if (isExpanded) {
                        accordionContent.style.maxHeight = null;
                    } else {
                        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                    }
                });
            });
        }
    }

    // --- Desktop Dropdown Logic ---
    const desktopDropdownTrigger = document.querySelector('.main-navigation .has-dropdown > a');
    const desktopDropdownPanel = document.getElementById('work-dropdown');
    if (desktopDropdownTrigger && desktopDropdownPanel) {
        desktopDropdownTrigger.addEventListener('click', function(e) {
            if (window.innerWidth >= 768) {
                e.preventDefault();
                const isExpanded = desktopDropdownTrigger.getAttribute('aria-expanded') === 'true';
                desktopDropdownPanel.dataset.visible = isExpanded ? 'false' : 'true';
                desktopDropdownTrigger.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
            }
        });
        document.addEventListener('click', function(e) {
            if (window.innerWidth >= 768) {
                const target = e.target;
                const isClickInsideDropdown = desktopDropdownPanel.contains(target) || desktopDropdownTrigger.contains(target);
                if (!isClickInsideDropdown && desktopDropdownPanel.dataset.visible === 'true') {
                    desktopDropdownPanel.dataset.visible = 'false';
                    desktopDropdownTrigger.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    // --- Global fResize Listener for Nav State Management ---
    let isDesktopView = window.innerWidth >= 768;
    window.addEventListener('resize', function() {
        const newIsDesktopView = window.innerWidth >= 768;
        if (newIsDesktopView !== isDesktopView) {
            if (newIsDesktopView) {
                if (mobileNavPanel && mobileNavPanel.dataset.visible === 'true') {
                    if (typeof toggleMobileNav === 'function') toggleMobileNav('close');
                }
                if (typeof closeAllMobileAccordions === 'function') closeAllMobileAccordions();
                if (desktopDropdownPanel && desktopDropdownPanel.dataset.visible === 'true') {
                    desktopDropdownPanel.dataset.visible = 'false';
                    if (desktopDropdownTrigger) desktopDropdownTrigger.setAttribute('aria-expanded', 'false');
                }
            } else {
                if (desktopDropdownPanel && desktopDropdownPanel.dataset.visible === 'true') {
                    desktopDropdownPanel.dataset.visible = 'false';
                    if (desktopDropdownTrigger) desktopDropdownTrigger.setAttribute('aria-expanded', 'false');
                }
            }
            isDesktopView = newIsDesktopView;
        }
    });
    if (window.innerWidth < 768 && typeof closeAllMobileAccordions === 'function') {
        closeAllMobileAccordions();
    }

    // --- Case Study Tab Navigation Logic ---
    const caseStudyTabsNav = document.getElementById('case-study-tabs-nav');
    const caseStudyBodyContent = document.querySelector('.case-study-body-content');
    const tabsList = caseStudyTabsNav ? caseStudyTabsNav.querySelector('.case-study-tabs-list') : null;
    const siteHeader = document.querySelector('.site-header');

    if (caseStudyTabsNav && caseStudyBodyContent && tabsList) {
        let sectionHeadings = [];
        let headerOffset = siteHeader ? siteHeader.offsetHeight : 0;
        let initialTabNavOffsetTop = 0;

        function populateCaseStudyTabs() {
            tabsList.innerHTML = '';
            sectionHeadings = [];
            const sections = caseStudyBodyContent.querySelectorAll('div.text-content-block');
            sections.forEach((sectionDiv) => {
                const sectionId = sectionDiv.id;
                const customLabel = sectionDiv.dataset.tabLabel;
                if (sectionId && customLabel) {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = `#${sectionId}`;
                    a.textContent = customLabel.trim();
                    a.dataset.sectionId = sectionId;
                    li.appendChild(a);
                    tabsList.appendChild(li);
                    sectionHeadings.push(sectionDiv);
                }
            });
        }

        tabsList.addEventListener('click', function(e) {
            const targetAnchor = e.target.closest('a');
            if (targetAnchor && targetAnchor.dataset.sectionId) {
                e.preventDefault();
                const targetElement = document.getElementById(targetAnchor.dataset.sectionId);
                if (targetElement) {
                    headerOffset = siteHeader ? siteHeader.offsetHeight : 0;
                    const tabsNavHeight = caseStudyTabsNav.offsetHeight;
                    const targetElementRect = targetElement.getBoundingClientRect();
                    const targetElementOffsetTop = targetElementRect.top + window.scrollY;
                   let scrollToPosition = targetElementOffsetTop - headerOffset - tabsNavHeight - 5;
                    window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
                }
            }
        });

        function calculateInitialTabNavOffset() {
            headerOffset = siteHeader ? siteHeader.offsetHeight : 0;
            if (caseStudyTabsNav.offsetParent) {
                initialTabNavOffsetTop = caseStudyTabsNav.offsetTop;
            } else {
                initialTabNavOffsetTop = 0;
            }
        }

        function updateActiveTabAndStickyNav() {
            if (!caseStudyTabsNav || !document.body.contains(caseStudyTabsNav) || sectionHeadings.length === 0) {
                return;
            }
            headerOffset = siteHeader ? siteHeader.offsetHeight : 0;
            const currentTabsNavHeight = caseStudyTabsNav.offsetHeight;
            if (initialTabNavOffsetTop === 0 && caseStudyTabsNav.offsetParent) calculateInitialTabNavOffset();
            const scrollThreshold = initialTabNavOffsetTop - headerOffset;

            if (window.scrollY >= scrollThreshold) {
                if (!caseStudyTabsNav.classList.contains('sticky')) {
                    caseStudyTabsNav.classList.add('sticky');
                    caseStudyTabsNav.style.top = `${headerOffset}px`;
                    document.body.classList.add('body-sticky-nav-padding');
                    document.body.style.setProperty('--sticky-nav-height', `${currentTabsNavHeight}px`);
                }
            } else {
                if (caseStudyTabsNav.classList.contains('sticky')) {
                    caseStudyTabsNav.classList.remove('sticky');
                    caseStudyTabsNav.style.top = '';
                    document.body.classList.remove('body-sticky-nav-padding');
                    document.body.style.removeProperty('--sticky-nav-height');
                }
            }
            
            let currentActiveTabId = null;
            const activationLineInViewport = headerOffset + currentTabsNavHeight + 20;

            for (let i = 0; i < sectionHeadings.length; i++) {
                const sectionDiv = sectionHeadings[i];
                const sectionRect = sectionDiv.getBoundingClientRect();
                if (sectionRect.top <= activationLineInViewport) {
                    currentActiveTabId = sectionDiv.id;
                }
            }
            
            tabsList.querySelectorAll('a').forEach(tabLink => {
                tabLink.classList.toggle('active', tabLink.dataset.sectionId === currentActiveTabId);
            });

            const activeTab = tabsList.querySelector('a.active');
            const caseStudyTabsContainer = caseStudyTabsNav.querySelector('.case-study-tabs-container');
            if (activeTab && caseStudyTabsContainer) {
                if (window.innerWidth < 768) {
                    activeTab.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'center',
                        block: 'nearest'
                    });
                }
            }
        }

        populateCaseStudyTabs();
        setTimeout(() => {
            calculateInitialTabNavOffset();
            updateActiveTabAndStickyNav();
        }, 100);
        window.addEventListener('scroll', updateActiveTabAndStickyNav, { passive: true });
        window.addEventListener('resize', () => {
            calculateInitialTabNavOffset();
            updateActiveTabAndStickyNav();
        });
    }

    // --- Work Carousel Logic ---
    const carouselContainer = document.querySelector('.work-grid-container');
    const leftArrow = document.querySelector('.carousel-arrow--left');
    const rightArrow = document.querySelector('.carousel-arrow--right');

    if (carouselContainer && leftArrow && rightArrow) {
        const updateArrowState = () => {
            // Use a small buffer to account for rounding errors
            const scrollEnd = carouselContainer.scrollWidth - carouselContainer.clientWidth;
            
            // Hide left arrow if at the beginning
            if (carouselContainer.scrollLeft <= 1) {
                leftArrow.classList.add('hidden');
            } else {
                leftArrow.classList.remove('hidden');
            }

            // Hide right arrow if at the end
            if (carouselContainer.scrollLeft >= scrollEnd - 1) {
                rightArrow.classList.add('hidden');
            } else {
                rightArrow.classList.remove('hidden');
            }
        };

        leftArrow.addEventListener('click', () => {
            const card = carouselContainer.querySelector('.work-item-card-wrapper-link');
            if (card) {
                const cardWidth = card.offsetWidth;
                const gap = 24; // This is the '1.5rem' gap from your CSS
                carouselContainer.scrollBy({
                    left: -(cardWidth + gap),
                    behavior: 'smooth'
                });
            }
        });

        rightArrow.addEventListener('click', () => {
            const card = carouselContainer.querySelector('.work-item-card-wrapper-link');
            if (card) {
                const cardWidth = card.offsetWidth;
                const gap = 24; // This is the '1.5rem' gap from your CSS
                carouselContainer.scrollBy({
                    left: cardWidth + gap,
                    behavior: 'smooth'
                });
            }
        });

        // Use a ResizeObserver to update arrows when the container size changes
        const resizeObserver = new ResizeObserver(() => {
            updateArrowState();
        });
        resizeObserver.observe(carouselContainer);

        carouselContainer.addEventListener('scroll', updateArrowState);
        
        // Initial check on page load
        updateArrowState();
    }
});

// --- Case Study Image Carousel Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Find ALL carousels on the page instead of just the first one.
    const carousels = document.querySelectorAll('.cs-carousel-container');

    // Loop through each carousel and set it up individually.
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.cs-carousel__track');
        // If a carousel has no track, skip it.
        if (!track) return;

        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.cs-carousel__button--right');
        const prevButton = carousel.querySelector('.cs-carousel__button--left');
        const dotsNav = carousel.querySelector('.cs-carousel__nav');
        const dots = Array.from(dotsNav.children);

        const moveToSlide = (targetIndex) => {
            const currentSlide = track.querySelector('.current-slide');
            const currentDot = dotsNav.querySelector('.current-dot');
            
            // Exit if the target doesn't exist (can happen with bad data)
            if (!slides[targetIndex] || !dots[targetIndex]) return;

            const targetSlide = slides[targetIndex];
            const targetDot = dots[targetIndex];

            // Move the track
            track.style.transform = `translateX(-${targetIndex * 100}%)`;

            // Update slide classes
            if (currentSlide) {
                currentSlide.classList.remove('current-slide');
            }
            targetSlide.classList.add('current-slide');

            // Update dot classes
            if (currentDot) {
                currentDot.classList.remove('current-dot');
            }
            targetDot.classList.add('current-dot');

            // Update arrow visibility
            if (targetIndex === 0) {
                prevButton.classList.add('is-hidden');
                nextButton.classList.remove('is-hidden');
            } else if (targetIndex === slides.length - 1) {
                prevButton.classList.remove('is-hidden');
                nextButton.classList.add('is-hidden');
            } else {
                prevButton.classList.remove('is-hidden');
                nextButton.classList.remove('is-hidden');
            }
        };

        // Right arrow click
        nextButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current-slide');
            const currentIndex = slides.findIndex(slide => slide === currentSlide);
            const nextIndex = currentIndex + 1;
            if (nextIndex < slides.length) {
                moveToSlide(nextIndex);
            }
        });

        // Left arrow click
        prevButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current-slide');
            const currentIndex = slides.findIndex(slide => slide === currentSlide);
            const prevIndex = currentIndex - 1;
            if (prevIndex >= 0) {
                moveToSlide(prevIndex);
            }
        });

        // Dot navigation click
        dotsNav.addEventListener('click', e => {
            const targetDot = e.target.closest('button');
            if (!targetDot) return;

            const targetIndex = dots.findIndex(dot => dot === targetDot);
            moveToSlide(targetIndex);
        });

        // Initialize first slide state
        const initialSlide = track.querySelector('.cs-carousel__slide');
        const initialDot = dotsNav.querySelector('.cs-carousel__dot');
        if (initialSlide) initialSlide.classList.add('current-slide');
        if (initialDot) initialDot.classList.add('current-dot');

    });
});