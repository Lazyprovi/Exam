// Simple modal controller
const modalBackdrop = document.getElementById('modalBackdrop');
const modalContent = document.getElementById('modalContent');

function openModal(id){
    // Handle lab activities
    if (typeof id === 'string' && id.startsWith('lab')) {
        const labData = {
            'lab1': {
        title: 'Activity 1: CSS Hover Effects & Transitions',
        text: 'This activity demonstrates fundamental CSS concepts including hover effects, transitions, and basic card component styling. The activity focuses on creating interactive UI elements     that respond to user interactions.',
        details: [
        'Implemented CSS hover effects for interactive feedback',
        'Used CSS transitions for smooth animations',
        'Created a card component with proper styling',
        'Applied object-fit for responsive image handling',
        'Utilized flexbox for centering elements',
        'Worked with opacity and max-height transitions for text reveal'
    ]
},
            'lab2': {
        title: 'Activity 2: Modern Navigation & Sticky Header Design',
        text: 'This activity focuses on creating a modern, visually appealing navigation system with sticky header functionality, glassmorphism effects, and interactive hover states. It demonstrates advanced CSS techniques for contemporary web design.',
        details: [
        'Implemented sticky navigation with backdrop blur effects',
        'Created glassmorphism design using backdrop-filter',
        'Added smooth hover transitions and color changes',
        'Used Flexbox for responsive navigation layout',
        'Applied CSS shadows and border-radius for modern aesthetics',
        'Integrated profile image with hover scaling effects'
    ]
},
            'lab3': {
        title: 'Activity 3: Interactive JavaScript & DOM Manipulation',
        text: 'This activity demonstrates fundamental JavaScript DOM manipulation, event handling, and interactive UI components. It showcases how to create dynamic content that responds to user     interactions through button clicks.',
        details: [
        'Implemented JavaScript event listeners for button clicks',
        'Used DOM manipulation to show/hide content dynamically',
        'Applied CSS classes for state management',
        'Created interactive toggle functionality',
        'Integrated JavaScript with HTML/CSS for dynamic behavior',
        'Implemented text content updates based on user interaction'
    ]
},
            'lab4': {
        title: 'Activity 4: Dark/Light Mode Toggle with JavaScript',
        text: 'This activity demonstrates theme switching functionality using JavaScript class manipulation. It showcases how to implement a dark/light mode toggle that dynamically changes the appearance of the entire webpage through CSS class toggling.',
        details: [
        'Implemented JavaScript function for theme toggling',
        'Used CSS class manipulation with classList.toggle()',
        'Created separate CSS rules for dark and light modes',
        'Applied inline event handling with onclick attribute',
        'Demonstrated real-time theme switching without page reload',
        'Used CSS specificity for theme-based styling'
    ]
},
            'lab5': {
        title: 'Activity 5: Dynamic List Management with JavaScript',
        text: 'This activity demonstrates advanced DOM manipulation by creating a fully interactive list management system. It showcases dynamic element creation, batch operations, and comprehensive event handling for a complete CRUD-like interface.',
        details: [
        'Implemented dynamic list item creation from user input',
        'Used event listeners for multiple button interactions',
        'Applied batch operations to manipulate multiple elements',
        'Created DOM elements programmatically with createElement()',
        'Implemented input validation and trimming',
        'Used querySelectorAll() for element collection manipulation'
    ]
},
            'lab6': {
        title: 'Activity 6: Interactive Calculator with Form Handling',
        text: 'This activity demonstrates a fully functional web-based calculator that handles user input, performs mathematical operations, and includes error handling. It showcases form processing, conditional logic, and dynamic result display.',
        details: [
        'Implemented arithmetic operations (addition, subtraction, multiplication, division)',
        'Used HTML form elements with proper input types',
        'Applied conditional logic for operation selection',
        'Added error handling for division by zero',
        'Implemented real-time result calculation and display',
        'Used parseFloat() for proper number conversion'
    ]
}
        };
        
        const item = labData[id] || {title:'Activity Details', text:'No details available for this activity.'};
        document.getElementById('modalTitle').textContent = item.title;
        
        let html = '<div class="modal-text">' + (item.text || '') + '</div>';
        
        if (item.details && Array.isArray(item.details)) {
            html += '<div style="margin-top: 16px;">';
            html += '<h4 style="color: var(--accent); margin-bottom: 8px;">Key Learning Objectives:</h4>';
            html += '<ul style="color: var(--muted); padding-left: 20px;">';
            item.details.forEach(detail => {
                html += '<li style="margin-bottom: 6px;">' + detail + '</li>';
            });
            html += '</ul>';
            html += '</div>';
        }
        
        modalContent.innerHTML = html;
    } 
    // Handle projects (your existing code)
    else if (typeof id === 'number') {
        const data = {
            1: {
                title: 'Point of Sales System',
                text: 'This project is a Point of Sales (POS) system. Below are photos/screenshots related to the project.',
                images: [
                    'Photos/pos1.png',
                    'Photos/pos2.png',
                    'Photos/pos3.png',
                    'Photos/pos4.png',
                    'Photos/pos5.png',
                    'Photos/pos6.png'
                ]
            },
            2: {
                title: 'Jail System',
                text: 'This project is a Jail Management System. Below are photos/screenshots related to the project.',
                images: [
                    'Photos/jail1.png',
                    'Photos/jail2.png',
                    'Photos/jail3.png',
                    'Photos/jail4.png',
                    'Photos/jail5.png',
                    'Photos/jail6.png'
                ]
            },
            3: {
                title: 'Snake Game',
                text: 'This is a classic Snake game built with vanilla JavaScript. Features include: smooth controls, increasing difficulty, score tracking, and local high score storage.',
                images: [
                    'Photos/snake1.png',
                    'Photos/snake2.png',
                    'Photos/snake3.png'
                ]
            }
        };
        
        const item = data[id] || {title:'Unknown', text:'No details available.'};
        document.getElementById('modalTitle').textContent = item.title;
        
        // If the project has images, render a small gallery inside the modal
        if(item.images && Array.isArray(item.images) && item.images.length){
            let html = '<div class="modal-text">' + (item.text || '') + '</div>';
            html += '<div class="gallery">';
            item.images.forEach((src, i) => {
                // Use a figure for semantics and include alt text
                const alt = item.title + ' image ' + (i+1);
                html += '<figure><img src="' + src + '" alt="' + alt + '"><figcaption class="sr-only">' + alt + '</figcaption></figure>';
            });
            html += '</div>';
            modalContent.innerHTML = html;
            // Attach click-to-enlarge (lightbox) handlers to each thumbnail
            const thumbs = modalContent.querySelectorAll('.gallery img');
            thumbs.forEach((img, idx) => {
                img.style.cursor = 'zoom-in';
                img.addEventListener('click', (e) => {
                    openLightboxWithList(item.images, idx);
                });
            });
        } else {
            modalContent.textContent = item.text;
        }
    }
    
    modalBackdrop.style.display = 'flex';
    modalBackdrop.setAttribute('aria-hidden','false');
    
    // Add close button to modal if not already present
    const modal = modalBackdrop.querySelector('.modal');
    if (!modal.querySelector('.close-btn')) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '×';
        closeBtn.setAttribute('aria-label', 'Close modal');
        closeBtn.onclick = closeModal;
        modal.appendChild(closeBtn);
    }
    
    requestAnimationFrame(()=> requestAnimationFrame(()=> modalBackdrop.classList.add('open')));
}

// LIGHTBOX: open a fullscreen overlay showing the clicked image with prev/next support
let _lightboxEl = null;
let _lightboxKeyHandler = null;
let _lightboxImages = [];
let _lightboxIndex = 0;

function openLightboxWithList(images, index){
    if(!Array.isArray(images) || images.length === 0) return;
    // Prevent multiple lightboxes
    if(_lightboxEl) return;
    _lightboxImages = images.slice();
    _lightboxIndex = Math.max(0, Math.min(index, _lightboxImages.length - 1));

    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = `
        <button class="lightbox-close" aria-label="Close image">×</button>
        <button class="lightbox-prev" aria-label="Previous image">‹</button>
        <div class="lightbox-inner">
            <img src="${_lightboxImages[_lightboxIndex]}" alt="">
            <div class="lightbox-caption"></div>
        </div>
        <button class="lightbox-next" aria-label="Next image">›</button>
    `;

    // click handlers for overlay and controls
    overlay.addEventListener('click', (e)=>{
        if(e.target === overlay || e.target.classList.contains('lightbox-close')) closeLightbox();
    });

    document.body.appendChild(overlay);
    _lightboxEl = overlay;

    const imgEl = _lightboxEl.querySelector('.lightbox-inner img');
    const captionEl = _lightboxEl.querySelector('.lightbox-caption');
    const prevBtn = _lightboxEl.querySelector('.lightbox-prev');
    const nextBtn = _lightboxEl.querySelector('.lightbox-next');

    // touch swipe support variables
    let touchStartX = 0;
    let touchEndX = 0;
    function handleTouchStart(e){ touchStartX = e.touches[0].clientX; }
    function handleTouchMove(e){ touchEndX = e.touches[0].clientX; }
    function handleTouchEnd(){
        const dx = touchEndX - touchStartX;
        if(Math.abs(dx) > 40){
            if(dx < 0) { _lightboxIndex = (_lightboxIndex + 1) % _lightboxImages.length; update(); }
            else { _lightboxIndex = (_lightboxIndex - 1 + _lightboxImages.length) % _lightboxImages.length; update(); }
        }
    }
    _lightboxEl.addEventListener('touchstart', handleTouchStart, {passive:true});
    _lightboxEl.addEventListener('touchmove', handleTouchMove, {passive:true});
    _lightboxEl.addEventListener('touchend', handleTouchEnd);

    function update(){
        // fade transition
        imgEl.classList.add('fade-out');
        setTimeout(()=>{
            imgEl.src = _lightboxImages[_lightboxIndex];
            captionEl.textContent = `Image ${_lightboxIndex + 1} of ${_lightboxImages.length}`;
            imgEl.classList.remove('fade-out');
            imgEl.classList.add('fade-in');
            setTimeout(()=> imgEl.classList.remove('fade-in'), 300);
        }, 160);
    }

    prevBtn.addEventListener('click', (e)=>{ e.stopPropagation(); _lightboxIndex = (_lightboxIndex - 1 + _lightboxImages.length) % _lightboxImages.length; update(); });
    nextBtn.addEventListener('click', (e)=>{ e.stopPropagation(); _lightboxIndex = (_lightboxIndex + 1) % _lightboxImages.length; update(); });

    // trap keys: Esc to close, left/right to navigate
    _lightboxKeyHandler = function(ev){
        if(ev.key === 'Escape') { closeLightbox(); }
        else if(ev.key === 'ArrowLeft') { _lightboxIndex = (_lightboxIndex - 1 + _lightboxImages.length) % _lightboxImages.length; update(); }
        else if(ev.key === 'ArrowRight') { _lightboxIndex = (_lightboxIndex + 1) % _lightboxImages.length; update(); }
    };
    document.addEventListener('keydown', _lightboxKeyHandler);

    update();
}

function closeLightbox(){
    if(!_lightboxEl) return;
    // remove touch listeners if present
    try{
        _lightboxEl.removeEventListener('touchstart', handleTouchStart);
        _lightboxEl.removeEventListener('touchmove', handleTouchMove);
        _lightboxEl.removeEventListener('touchend', handleTouchEnd);
    }catch(e){}
    _lightboxEl.remove();
    _lightboxEl = null;
    _lightboxImages = [];
    _lightboxIndex = 0;
    if(_lightboxKeyHandler) document.removeEventListener('keydown', _lightboxKeyHandler);
    _lightboxKeyHandler = null;
}

function closeModal(){
    // remove open class to play reverse animation then hide after transition
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden','true');
    
    // Remove close button
    const closeBtn = modalBackdrop.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.remove();
    }
    
    // wait for CSS transition to complete (match duration in CSS ~260ms)
    setTimeout(()=>{
        modalBackdrop.style.display = 'none';
        // clear modal content so images/free resources are removed if needed
        modalContent.innerHTML = '';
    }, 320);
}

// Close modal when clicking backdrop (but not when clicking inside the modal)
modalBackdrop.addEventListener('click', function(e){
    if(e.target === modalBackdrop) closeModal();
});

// Basic contact form validation (client-side only)
function submitContact(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const err = document.getElementById('formError');
    err.style.display = 'none';

    if(!name || !email || !message){
        err.textContent = 'Please complete all fields before sending.';
        err.style.display = 'block';
        return false;
    }
    // simple email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        err.textContent = 'Please enter a valid email address.';
        err.style.display = 'block';
        return false;
    }

    // For this placeholder we won't actually send the message.
    err.style.display = 'block';
    err.style.color = '#b6f2c9';
    err.textContent = 'Message ready to send (placeholder). Replace this client-side stub with a real submission endpoint.';
    // Reset after a short pause to simulate send
    setTimeout(()=>{
        document.getElementById('contactForm').reset();
        err.style.display = 'none';
        err.style.color = '#ffb4c7';
    },2000);
    return false;
}

// Resume Modal Functions
let resumeZoomLevel = 0.7; // Start more zoomed out
const MAX_ZOOM = 3;
const MIN_ZOOM = 0.3; // Allow even more zoom out
const ZOOM_STEP = 0.25;

function openResumeModal() {
    const resumeModal = document.getElementById('resumeModal');
    const resumeImage = document.getElementById('resumeImage');
    
    // Start zoomed out to show full resume
    resumeZoomLevel = 0.7;
    resumeImage.style.transform = `scale(${resumeZoomLevel})`;
    resumeImage.classList.remove('zoomed');
    
    resumeModal.style.display = 'flex';
    resumeModal.setAttribute('aria-hidden', 'false');
    
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            resumeModal.classList.add('open');
        });
    });
}

function closeResumeModal() {
    const resumeModal = document.getElementById('resumeModal');
    
    resumeModal.classList.remove('open');
    resumeModal.setAttribute('aria-hidden', 'true');
    
    setTimeout(() => {
        resumeModal.style.display = 'none';
    }, 320);
}

function zoomInResume() {
    const resumeImage = document.getElementById('resumeImage');
    
    if (resumeZoomLevel < MAX_ZOOM) {
        resumeZoomLevel += ZOOM_STEP;
        resumeImage.style.transform = `scale(${resumeZoomLevel})`;
        
        if (resumeZoomLevel > 1) {
            resumeImage.classList.add('zoomed');
        }
    }
}

function zoomOutResume() {
    const resumeImage = document.getElementById('resumeImage');
    
    if (resumeZoomLevel > MIN_ZOOM) {
        resumeZoomLevel -= ZOOM_STEP;
        resumeImage.style.transform = `scale(${resumeZoomLevel})`;
        
        if (resumeZoomLevel <= 1) {
            resumeImage.classList.remove('zoomed');
        }
    }
}

// Click to zoom functionality
document.addEventListener('DOMContentLoaded', function() {
    const resumeImage = document.getElementById('resumeImage');
    if (resumeImage) {
        resumeImage.addEventListener('click', function() {
            if (resumeZoomLevel <= 1) {
                // If zoomed out, zoom to readable level
                resumeZoomLevel = 1.5;
                resumeImage.style.transform = `scale(${resumeZoomLevel})`;
                resumeImage.classList.add('zoomed');
            } else {
                // If zoomed in, reset to default zoomed out view
                resumeZoomLevel = 0.7;
                resumeImage.style.transform = `scale(${resumeZoomLevel})`;
                resumeImage.classList.remove('zoomed');
            }
        });
    }
});

// Close modal when clicking backdrop
document.getElementById('resumeModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeResumeModal();
    }
});

// Keyboard controls for resume modal
document.addEventListener('keydown', function(e) {
    const resumeModal = document.getElementById('resumeModal');
    if (resumeModal.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeResumeModal();
        } else if (e.key === '+' || e.key === '=') {
            e.preventDefault();
            zoomInResume();
        } else if (e.key === '-' || e.key === '_') {
            e.preventDefault();
            zoomOutResume();
        } else if (e.key === '0') {
            e.preventDefault();
            // Reset to default zoomed out view
            resumeZoomLevel = 0.7;
            document.getElementById('resumeImage').style.transform = `scale(${resumeZoomLevel})`;
            document.getElementById('resumeImage').classList.remove('zoomed');
        }
    }
});

// Mouse wheel zoom
document.addEventListener('DOMContentLoaded', function() {
    const resumeImage = document.getElementById('resumeImage');
    if (resumeImage) {
        resumeImage.addEventListener('wheel', function(e) {
            e.preventDefault();
            if (e.deltaY < 0) {
                // Scroll up - zoom in
                zoomInResume();
            } else {
                // Scroll down - zoom out
                zoomOutResume();
            }
        });
    }
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileMenuOverlay');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');

function openMobileMenu() {
    mobileNav.classList.add('open');
    mobileOverlay.classList.add('open');
    mobileMenuBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileNav.classList.remove('open');
    mobileOverlay.classList.remove('open');
    mobileMenuBtn.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
}

if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMobileMenu();
    }
});

// Close menu when window is resized to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobileNav.classList.contains('open')) {
        closeMobileMenu();
    }
});m