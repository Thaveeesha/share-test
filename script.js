  document.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX / window.innerWidth) * 100;
            const mouseY = (e.clientY / window.innerHeight) * 100;
            document.documentElement.style.setProperty('--mouse-x', `${mouseX}%`);
            document.documentElement.style.setProperty('--mouse-y', `${mouseY}%`);
        });

        function generateParticles() {
            const particles = document.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                const randomX = Math.random() * 100;
                const randomDelay = Math.random() * 12;
                const randomDuration = 10 + Math.random() * 15;
                
                particle.style.left = randomX + '%';
                particle.style.animationDelay = randomDelay + 's';
                particle.style.animationDuration = randomDuration + 's';
            });
        }

        generateParticles();

        document.getElementById("myForm").addEventListener("submit", function(e) {
            e.preventDefault();
        
            let uname = document.getElementById("uname").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let age = document.getElementById("age").value.trim();
            let password = document.getElementById("password").value.trim();
            let confirmPassword = document.getElementById("confirmPassword").value.trim();
            let dob = document.getElementById("dob").value;
            let genderSelected = document.querySelector('input[name="gender"]:checked');
            let eduSelected = document.querySelectorAll('input[name="edu"]:checked');
            let country = document.getElementById("country").value;
            let city = document.getElementById("city").value.trim();
            let terms = document.getElementById("terms").checked;
        
            if (uname === "") return alert("Username is required");
            if (email === "") return alert("Email is required");
            if (!email.includes("@") || !email.includes(".")) return alert("Enter a valid email");
            if (password === "") return alert("Password is required");
            if (password.length < 8) return alert("Password must be at least 8 characters");
            if (confirmPassword === "") return alert("Please confirm your password");
            if (password !== confirmPassword) return alert("Passwords do not match");
            if (phone === "") return alert("Phone number is required");
            if (age === "") return alert("Age is required");
            if (isNaN(age) || age <= 0) return alert("Please enter a valid age");
            if (parseInt(age) < 15) return alert("You must be at least 15 years old to register");
            if (!dob) return alert("Please select your Date of Birth");
            if (!genderSelected) return alert("Please select your gender");
            if (eduSelected.length === 0) return alert("Please select at least one educational qualification");
            if (country === "") return alert("Please select your country");
            if (!terms) return alert("You must agree to the terms and privacy policy");
        
            alert("Form submitted successfully!");
        });

        let lastChecked = null;
        document.querySelectorAll('input[name="gender"]').forEach(radio => {
            radio.addEventListener('click', function() {
                if (this === lastChecked) {
                    this.checked = false;
                    lastChecked = null;
                } else {
                    lastChecked = this;
                }
            });
        });