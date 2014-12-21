/**
 * Created by Simone on 12/15/14.
 */


$(document).ready(function() {
    var $btnSets = $('#responsive'),
        $btnLinks = $btnSets.find('a');

    $btnLinks.click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.user-menu>div.user-menu-content").removeClass("active");
        $("div.user-menu>div.user-menu-content").eq(index).addClass("active");
    });
});

// Need to fix this - just added:
$(document).ready(function() {
    var $btnSets = $('#responsiveSm'),
        $btnLinks = $btnSets.find('a');

    $btnLinks.click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.user-menu>div.user-menu-content").removeClass("active");
        $("div.user-menu>div.user-menu-content").eq(index).addClass("active");
    });
});

$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();

    $('.view').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
});

/* Image section */
// Stop carousel
$('.carousel').carousel({
    interval: false
});

/* Rate slider */
$(document).ready(function() {
    $("#slider").slider({
        animate: 1,
        value:3,
        min: 1,
        max: 5,
        step: 1,
        slide: function(event, ui) {
            update(1,ui.value); //changed
        }

    });

    $("#sliderSmall").slider({
        animate: 1,
        value:3,
        min: 1,
        max: 5,
        step: 1,
        slide: function(event, ui) {
            update(2,ui.value); //changed
        }
    });

    //Added, set initial value.
    $("#amount").val(3);
    $("#amountSmall").val(3);
    $("#amount-label").text(0);
    $("#amountSmall-label").text(0);
    update();
});


//changed. now with parameter
function update(slider,val) {
    //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
    var $amount = slider == 1?val:$("#amount").val();
    var $amountSmall = slider == 2?val:$("#amount").val();

    /* commented
     $amount = $( "#slider" ).slider( "value" );
     $duration = $( "#slider2" ).slider( "value" );
     */


    $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
    $('#sliderSmall a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amountSmall+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

/*Might want to get rid of this at some point after testing on iPhone*/
$('.ui-slider-handle').draggable();