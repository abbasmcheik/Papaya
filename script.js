document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const result = document.getElementById('result');
    
    const funnyResponses = [
        "🎉 Congratulations! You've successfully signed up for nothing. Your dedication to pointlessness is admirable.",
        "✅ Mission accomplished! You are now officially a member of the 'Nothing Club'. Your membership card is invisible.",
        "🚀 Welcome aboard the Nothing Express! Next stop: Nowhere. Estimated arrival: Never.",
        "🏆 Achievement Unlocked: Professional Procrastinator! You've mastered the art of doing nothing productive.",
        "💫 Your information has been carefully stored in our premium nothing database, located in the void.",
        "🎯 Success! You've joined thousands of others in the pursuit of absolutely nothing. What an achievement!",
        "🌟 Breaking news: Another person has courageously signed up for nothing! The world continues to spin.",
        "🎪 Step right up! You're now part of the greatest show that never was! Admission: free. Value: priceless(ly pointless)."
    ];
    
    const motivationResponses = {
        'bored': "Perfect! Boredom is the mother of all pointless inventions.",
        'curious': "Curiosity may have killed the cat, but it won't kill your time here.",
        'procrastinating': "Ah, a fellow professional procrastinator! You've come to the right place.",
        'collecting': "Your collection just got exponentially more meaningless. Congratulations!",
        'testing': "Testing successful! This demo is working exactly as intended (which is not at all)."
    };
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const motivation = formData.get('motivation');
        
        setTimeout(() => {
            result.classList.remove('hidden', 'error');
            
            let response = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
            
            if (name) {
                response += `\n\nHello ${name}! `;
            }
            
            if (motivation && motivationResponses[motivation]) {
                response += motivationResponses[motivation];
            }
            
            if (email) {
                response += `\n\nP.S. Don't worry, ${email} is safe with us. By safe, we mean we've already forgotten it.`;
            }
            
            result.textContent = response;
            
            form.reset();
            
            setTimeout(() => {
                result.classList.add('hidden');
            }, 8000);
            
        }, 1000);
    });
    
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    const button = document.querySelector('.signup-btn');
    let originalText = button.textContent;
    
    button.addEventListener('mouseenter', function() {
        const hoverTexts = [
            "Click to Join the Void",
            "Press for Peak Pointlessness",
            "Submit to Nothingness",
            "Enter the Nothing Zone",
            "Activate Meaninglessness Mode"
        ];
        this.textContent = hoverTexts[Math.floor(Math.random() * hoverTexts.length)];
    });
    
    button.addEventListener('mouseleave', function() {
        this.textContent = originalText;
    });
    
    console.log("🎭 Welcome to the Sign Up For Nothing console! Here you can observe... absolutely nothing happening.");
    console.log("💡 Pro tip: This website does exactly what it promises - nothing!");
});