var section = $ ('.board section');
var tab = $('.tab');

tab.on('click', function(e){
    e.preventdefault();
    section.removeClass('tab-act')   
    $(this).parent().parent().addclass('tab-act');

})