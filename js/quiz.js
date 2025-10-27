$(document).ready(function() {
    $('#submit-quiz').click(function() {
        const q1 = $('input[name=q1]:checked').val();
        let recommendation = '';
        let link = '#';

        if (q1 === 'a') {
            recommendation = 'Based on your goal to improve cardiovascular health, we recommend starting with our Cardio Blast course. It is designed to get your heart rate up and improve your overall fitness.';
            link = 'courses.html?course=cardio-blast';
        } else if (q1 === 'b') {
            recommendation = 'To increase flexibility and reduce stress, we suggest you explore our Meditation and Yoga course. It combines gentle movements with mindfulness practices to help you relax and rejuvenate.';
            link = 'courses.html?course=meditation-yoga';
        } else if (q1 === 'c') {
            recommendation = 'For building strength and toning your body, our Strength and Conditioning course is the perfect fit. It focuses on resistance training and bodyweight exercises to help you achieve your goals.';
            link = 'courses.html?course=strength-conditioning';
        } else {
            recommendation = 'Please select an option to get a recommendation.';
        }

        $('#recommendation').text(recommendation);
        $('#recommendation-link').attr('href', link);
        $('#quiz-container').hide();
        $('#results-container').show();
    });
});