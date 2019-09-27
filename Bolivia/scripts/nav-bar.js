$(function(){
    $('#header').load('../nav-bar.html', function() {
    const $body = $('body');
    const $btn = $('#btn-menu');

    $btn.click(function(){
        $body.toggleClass('show');
    })
    });


});
