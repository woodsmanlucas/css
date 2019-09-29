$(function(){
    $('#header').load('./nav-bar.html', function() {
    console.log(jQuery)
    const $body = $('body');
    const $btn = $('#btn-menu');

    $btn.click(function(){
        $body.toggleClass('show');
    })
    });
});
