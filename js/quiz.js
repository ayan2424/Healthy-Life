$(document).ready(function() {
    let currentQuestion = 0;
    const questions = $('.quiz-card');
    const totalQuestions = questions.length;

    function showQuestion(questionIndex) {
        questions.removeClass('current-question');
        $(questions[questionIndex]).addClass('current-question');
        updateProgressBar();
    }

    function updateProgressBar() {
        const progress = ((currentQuestion + 1) / totalQuestions) * 100;
        $('.progress-bar').css('width', progress + '%').attr('aria-valuenow', progress);
    }

    $('#next-question').click(function() {
        if (currentQuestion < totalQuestions - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        } 
        if (currentQuestion === totalQuestions - 1) {
            $('#next-question').hide();
            $('#submit-quiz').show();
        }
    });

    $('#submit-quiz').click(function() {
        const q1 = $('input[name=q1]:checked').val();
        const q2 = $('input[name=q2]:checked').val();
        const q3 = $('input[name=q3]:checked').val();
        let recommendation = '';
        let link = '#';

        if (q1 === 'cardio') {
            if (q3 === 'beginner') {
                recommendation = 'Based on your goal to improve cardiovascular health and your beginner fitness level, we recommend starting with our Cardio for Beginners course.';
                link = 'courses.html?course=cardio-beginners';
            } else {
                recommendation = 'Based on your goal to improve cardiovascular health, we recommend our Cardio Blast course.';
                link = 'courses.html?course=cardio-blast';
            }
        } else if (q1 === 'flexibility') {
            recommendation = 'To increase flexibility and reduce stress, we suggest you explore our Meditation and Yoga course.';
            link = 'courses.html?course=meditation-yoga';
        } else if (q1 === 'strength') {
            if (q3 === 'beginner') {
                recommendation = 'For building strength and toning your body as a beginner, our Bodyweight Basics course is a great starting point.';
                link = 'courses.html?course=bodyweight-basics';
            } else {
                recommendation = 'For building strength and toning your body, our Strength and Conditioning course is the perfect fit.';
                link = 'courses.html?course=strength-conditioning';
            }
        } else {
            recommendation = 'Please answer all questions to get a recommendation.';
        }

        $('#recommendation').text(recommendation);
        $('#recommendation-link').attr('href', link);
        $('#quiz-container').hide();
        $('#results-container').show();
    });

    showQuestion(currentQuestion);
});