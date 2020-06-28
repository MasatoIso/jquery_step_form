$(function(){

    var step_nav = $('.step_nav');

    step_nav.css('list-style', 'none');
    step_nav.css('float', 'left');
    step_nav.css('padding-right', '40px');
    step_nav.eq(0).css('color', '#ff0000');

    var step = $('.step');
    step.eq(1).hide();
    step.eq(2).hide();

    var current_step_count = 0;

    $('.back').hide();
    $('.submit').hide();

    $('.next').on('click', function(){
        current_step_count += 1;
        step.eq(current_step_count).fadeIn();
        step.eq(current_step_count -1 ).hide();

        console.log(current_step_count);
        step_nav.eq(current_step_count).css('color', '#ff0000');

        if (current_step_count == step.length -1) {
            $('.next').hide();
        } else {
            $('.next').show();
        }

        if (current_step_count <= 1) {
            $('.back').show();
        }

        if (current_step_count == step.length - 1) {
            $('.submit').show();
        }
    })

    $('.back').on('click', function(){
        current_step_count -= 1;
        step.eq(current_step_count).fadeIn();
        step.eq(current_step_count + 1 ).hide();

        step_nav.eq(current_step_count + 1 ).css('color', '#000000');

        if (current_step_count < step.length) {
            $('.next').show();
        }

        if (current_step_count == 0) {
            $('.back').hide();
        }

        if (current_step_count < step.length) {
            $('.submit').hide();
        }
    })
})