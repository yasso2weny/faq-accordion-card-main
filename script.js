document.addEventListener('DOMContentLoaded', function () {
    const questionHeaders = document.querySelectorAll('.question-header');
    const questionAnswers = document.querySelectorAll('.question-answer');
    const questionTitles = document.querySelectorAll('.question-title');
    const arrowIcons = document.querySelectorAll('.arrow-icon');

    questionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // First close all other questions
            questionAnswers.forEach(answer => {
                if (answer !== this.nextElementSibling) {
                    answer.classList.remove('active');
                }
            });

            questionTitles.forEach(title => {
                if (title !== this.querySelector('.question-title')) {
                    title.classList.remove('active-title');
                }
            });

            arrowIcons.forEach(arrow => {
                if (arrow !== this.querySelector('.arrow-icon')) {
                    arrow.classList.remove('active-arrow');
                }
            });

            // Then toggle the current question
            const answer = this.nextElementSibling;
            const title = this.querySelector('.question-title');
            const arrow = this.querySelector('.arrow-icon');

            answer.classList.toggle('active');
            title.classList.toggle('active-title');
            arrow.classList.toggle('active-arrow');
        });
    });
});
