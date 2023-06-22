var addFildsPost = '<div class="row user-form-post cf"><div class="form-group col"><label for="nameuserModal" class="lb">Имя <sup>*</sup></label><input type="text" class="form-control" id="nameuserModal"></div><div class="form-group error col"><label for="lastnameuserModal" class="lb">Фамилия <sup>*</sup></label><input type="text" class="form-control" id="lastnameuserModal"><div class="error-txt">Заполните поле!</div></div><div class="form-group col"><label for="phoneuserModal" class="lb">Телефон <sup>*</sup></label><input type="text" class="form-control" id="phoneuserModal"></div><div class="form-group col"><label for="emailuserModal" class="lb">Электронная почта</label><input type="text" class="form-control" id="emailuserModal"></div><span class="remove-user-post"><i class="fa fa-close"></i></span></div>';

var addFildsModal = '<div class="user-form-modal"><div class="form-group"><label for="nameuser" class="lb">Имя <sup>*</sup></label><input type="text" class="form-control" id="nameuser"></div><div class="form-group"><label for="lastnameuser" class="lb">Фамилия <sup>*</sup></label><input type="text" class="form-control" id="lastnameuser"></div><div class="form-group"><label for="emailuser" class="lb">Электронная почта</label><input type="text" class="form-control" id="emailuser"></div><span class="remove-user-modal"><i class="fa fa-close"></i></span></div>';
var removeFile = function() {
    var context = $(this).closest('.re-form-file');
    var input = context.find('input[type="file"]');

    input.replaceWith(input.val('').clone(true));

    context.find('.re-form-file__text').empty();
}

var viewFileName = function() {
    if (this.files[0].name != undefined) {
        $(this).closest('.re-form-file').find('.re-form-file__text').html('<span class="txt-file__text">' + this.files[0].name + '<small>.' + this.files[0].name.split('.').pop() + ' (' + this.files[0].size + ' Кб)</small><span class="re-form-file__remove"></span></span>');

        $('.re-form-file__remove', $(this).closest('.re-form-file')).one('click', function() {
            removeFile.apply(this, []);
        })
    }
}

$('input[type="file"]').not('.re-modal input[type="file"]').on('change', function(e) {
    e.preventDefault();

    viewFileName.apply(this, []);
});

/* fixed header */
$(window).scroll(function() {
    var navigation = $("body");

    if ($(window).scrollTop() > 1) {
        navigation.addClass("fix");
    } else {
        navigation.removeClass("fix");
    }
});

function rightMarginSlider() {
    var widthWin = $(window).width();
    var widthBox = $('.center-box').width();
    var rightMargin = (widthWin - widthBox) / 2;
    $('.carousel').css('margin-right', -rightMargin);
}
$(document).ready(function() {
    
    try {
        $(".anchor").click(function () {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top - 95;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
            return false;
        });

        /* menu mob ver */
        $(".btn-menu").click(function() {
            var scrollVar = $(window).scrollTop();
            $('.modal-overlay._menu').toggleClass('open');
            $('._menu .modal-right').css('top', scrollVar);
            $(".main-menu a").click(function() {
                $('.modal-overlay._menu').removeClass('open');
            });
        });

        $(".btn-form").click(function() {
            var scrollVar = $(window).scrollTop();
            $('.modal-overlay._form').toggleClass('open');
            $('._form .modal-right').css('top', scrollVar);
        });

        $(".btn-form-evet").click(function() {
            var scrollVar = $(window).scrollTop();
            $('.modal-overlay._form-event').toggleClass('open');
            $('._form-event .modal-right').css('top', scrollVar);
        });

        $(".btn-close-modal").click(function() {
            $(this).parents('.modal-overlay').removeClass('open');
        });

        $(".btn-more").click(function() {
            $(this).parents('.content-sort-program').toggleClass('open');
            $(this).toggleClass("clicked");
            if ($(this).hasClass("clicked")) {
            $(this).html("<span class='dot'></span>Свернуть");
            } else {
                $(this).html("<span class='dot'></span>ПОКАЗАТЬ ВСЁ СОДЕРЖАНИЕ");
            }
        });

        $('.news-list._more').hide();
        $(".btn-view-more").click(function() {
            var box = $(this).parents('.reports-box');
            $(box).find('.news-list._more').slideDown();
        });

        $(".add-user-post").click(function(event) {
            $(this).closest('.submit').prepend(addFildsPost);
            $(".remove-user-post").click(function() {
                $(this).parent('.user-form-post').remove();
                return false;
            });
        });

        $(".add-user-modal").click(function() {
            $(this).closest('.submit').prepend(addFildsModal);
            $(".remove-user-modal").click(function() {
                $(this).parent('.user-form-modal').remove();
                return false;
            });
        });

        $(document).on('click', function(e) {
            var over = $('.modal-overlay');
            if (over.is(e.target) && over.has(e.target).length === 0) {
                $('.modal-overlay').removeClass('open');
            }
            e.stopPropagation();
        })

        $('._bg-img').each(function(i, el) {
            var img = $(el).find('img');
            $(el).css('background-image', 'url(' + img.attr('src') + ')');
            img.hide();
        });

        var $status = $('.reviews-slid-number');

        $('.reviews-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.html(i + '/' + slick.slideCount);

        });

        $('.reviews-slider._page').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            cssEase: 'linear',
            dots: false,
            arrows: true
        });

        $('.carousel').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 766,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false
                }
            }, {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            }]
        });

        var reviewsColbox = function() {
            $(".reviews-slider._modal").not('.slick-initialized').slick({
                autoplay: true,
                autoplaySpeed: 2000,
                fade: true,
                cssEase: 'linear',
                dots: false,
                arrows: true
            });
        };
        $(function() {
            $('._height').matchHeight({
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            });
        });

        $(".accordion-box").accordion({
            heightStyle: "content"
        });

        $(".colorbox").colorbox({
            inline: true,
            opacity: 0.9,
            onComplete : function(){
                reviewsColbox();
            }
        });

        $(".reviews-colorbox").colorbox({
            className: '_ver2',
            rel: 'reviews',
            previous: "ПРЕДЫДУЩИЙ ОТЗЫВ",
            next: "СЛЕДУЮЩИЙ ОТЗЫВ",
            inline: true,
            opacity: 1
        });

        rightMarginSlider();

        $('._grey-img img').addClass('grayscale');



    } catch (e) {
        console.log(e);
    }

      $('#mainform').submit(function(e) {
        var $form = $(this);
	var data1 = {name: $("#firstnameform").val(), phone: $("#phoneform").val(), email: $("#emailform").val(), mess: $("#massageform").val(), type: 'fos'};
        $.ajax({
	  method: 'POST',
          url: 'form.php',
          data: data1
        }).done(function(msg) {
          console.log('success: '+msg);
          console.log(data1);
        }).fail(function(msg) {
          console.log('fail: '+msg);
          console.log(data1);
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault();
	$("#mainform").trigger('reset');
	$("#mainform #submitform").val("ОТПРАВЛЕНО!");
	window.setTimeout( $('.modal-overlay').removeClass('open') , 5000 ); 
	
      });


});

$(window).resize(function() {

    rightMarginSlider();
});
