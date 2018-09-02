;(function(win, doc, $){
    var _headerHeight = $('.header').height();
   $('a[href*="#"]')
   .not('[href="#"]')
   .not('[href="#0"]')
   .on('click', function (e) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ){
        var _target = $(this.hash);
        _target = _target.length ? _target : $('[name=' + this.hash.slice(1) + ']');
        if(_target.length){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: _target.offset().top - _headerHeight
            }, 1000, function () { 
                
                _target.focus();
                if(_target.is(":focus")) return;
                else {
                    _target.attr('tabindex', '-1');
                    _target.focus();
                }
             });
        }
      }
    });
    $(win).on('scroll', function () { 
        var scrollPos = $(doc).scrollTop();
        $('.header .nav-bar__list-link').each(function () { 
            var self = $(this);
            var link = $(self.attr('href'));
            if(link.offset().top <= scrollPos){
                self.parent().siblings().children().removeClass("active");
                self.addClass('active');
            }else{
                link.removeClass('active');
            }
         });
     });
})(window, document, jQuery);