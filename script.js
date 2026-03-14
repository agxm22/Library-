        // ========================================
        // Falling Particles Animation
        // ========================================
        function createFallingParticle() {
            const particlesContainer = document.getElementById('particlesContainer');
            const particle = document.createElement('div');
            particle.classList.add('falling-particle');
            
            const particles = ['💖', '💕', '🌹', '💝', '✨', '💗', '💘', '🌸', '💜', '🧸'];
            particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
            
            particle.style.left = Math.random() * 100 + '%';
            const duration = Math.random() * 10 + 12;
            particle.style.animationDuration = duration + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            const size = Math.random() * 10 + 16;
            particle.style.fontSize = size + 'px';
            
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, (duration + 2) * 1000);
        }

        function initializeFallingParticles() {
            const initialParticles = 15;
            for (let i = 0; i < initialParticles; i++) {
                setTimeout(() => {
                    createFallingParticle();
                }, i * 300);
            }
        }

        function continuousFallingParticles() {
            setInterval(() => {
                createFallingParticle();
            }, 2000);
        }

        // ========================================
        // Card Hover Effects
        // ========================================
        function setupCardEffects() {
            const cards = document.querySelectorAll('.day-card');
            
            cards.forEach((card, index) => {
                // Stagger animation on load
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease-out';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 + (index * 80));
                
                // Add sparkle effect on hover
                card.addEventListener('mouseenter', function() {
                    createCardSparkles(this);
                });
            });
        }

        // ========================================
        // Card Sparkles Effect
        // ========================================
        function createCardSparkles(card) {
            const rect = card.getBoundingClientRect();
            const sparkles = ['✨', '💫', '⭐'];
            
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
                    sparkle.style.position = 'fixed';
                    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                    sparkle.style.fontSize = '18px';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.zIndex = '9999';
                    sparkle.style.opacity = '1';
                    
                    document.body.appendChild(sparkle);
                    
                    sparkle.animate([
                        { 
                            transform: 'translateY(0) scale(0)',
                            opacity: 1
                        },
                        { 
                            transform: 'translateY(-40px) scale(1.5)',
                            opacity: 0
                        }
                    ], {
                        duration: 800,
                        easing: 'ease-out'
                    });
                    
                    setTimeout(() => sparkle.remove(), 800);
                }, i * 100);
            }
        }

        // ========================================
        // Initialize Everything
        // ========================================
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize falling particles
            initializeFallingParticles();
            continuousFallingParticles();
            
            // Setup card effects
            setupCardEffects();
            
            console.log('💝 Navigation Hub loaded with love!');
        });

        // ========================================
        // Random Floating Hearts on Scroll
        // ========================================
        let scrollTimeout;
        function createScrollHearts() {
            clearTimeout(scrollTimeout);
            
            scrollTimeout = setTimeout(() => {
                const heart = document.createElement('div');
                const hearts = ['💕', '💖', '💗', '💝'];
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.bottom = '0px';
                heart.style.fontSize = (Math.random() * 15 + 18) + 'px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '1';
                heart.style.opacity = '0.6';
                
                document.body.appendChild(heart);
                
                const duration = Math.random() * 2000 + 2000;
                heart.animate([
                    {
                        transform: 'translateY(0) rotate(0deg)',
                        opacity: 0.6
                    },
                    {
                        transform: `translateY(-${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
                        opacity: 0
                    }
                ], {
                    duration: duration,
                    easing: 'linear'
                });
                
                setTimeout(() => heart.remove(), duration);
            }, 50);
        }

        window.addEventListener('scroll', createScrollHearts