const questions = document.querySelectorAll('.faq-question');
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            });
        });

        function toggleNav(){
            navbar.classList.toggle('active');
        }
        const burgerMenu = document.querySelector('.burger-menu');
        const navbar = document.querySelector('.navbar'); 
    
        burgerMenu.addEventListener('click',toggleNav);
        
    
    