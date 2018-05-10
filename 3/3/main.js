$(window).resize(function() {
    var pos = $('.center').position(),
    radiusSat = $('.sat1').width() * 0.5,
    radius = $('.center').width() * 0.5,
    cx = pos.left + radius,
    cy = pos.top + radius,
    x, y, angle = 0, angles = [],
    spc = 360 / 10,
    deg2rad = Math.PI / 180,
    i = 0;

for(;i < 10; i++) {
    angles.push(angle);
    angle += spc;
}

/// space out radius
radius += (radiusSat + 10);

loop();

function loop() {

    for(var i = 0; i < angles.length; i++) {

        angle = angles[i];
        
        x = cx + radius * Math.cos(angle * deg2rad);
        y = cy + radius * Math.sin(angle * deg2rad);

        $('.sat' + i).css({left:x - radiusSat, top:y - radiusSat});
    
        angles[i] = angles[i] + 1;
        if (angles[i] > 360) angles[i] = 0;
    }
    
    requestAnimationFrame(loop);
}

//Second Circle

var pos2 = $('.center2').position(),
radiusSat2 = $('.satZ1').width() * 0.5,
radius2 = $('.center2').width() * 0.5,
cx2 = pos2.left + radius2,
cy2 = pos2.top + radius2,
x2, y2, angle2 = 0, angles2 = [],
spc2 = 360 / 10,
deg2rad2 = Math.PI / 180,
i2 = 0;

for(;i2 < 10; i2++) {
    angles2.push(angle2);
    angle2 += spc2;
}

/// space out radius
radius2 += (radiusSat2 + 10);

loop2();

function loop2() {

    for(var i = 0; i < angles.length; i++) {

        angle2 = angles2[i];
        
        x2 = cx2 + radius2 * Math.cos(angle2 * deg2rad2);
        y2 = cy2 + radius2 * Math.sin(angle2 * deg2rad2);

        $('.satZ' + i).css({left:x2 - radiusSat2, top:y2 - radiusSat2});
    
        angles2[i] = angles2[i] + 1;
        if (angles2[i] > 360) angles2[i] = 0;
    }
    
    requestAnimationFrame(loop2);
}

});

//End Resize

var pos = $('.center').position(),
radiusSat = $('.sat1').width() * 0.5,
radius = $('.center').width() * 0.5,
cx = pos.left + radius,
cy = pos.top + radius,
x, y, angle = 0, angles = [],
spc = 360 / 10,
deg2rad = Math.PI / 180,
i = 0;

for(;i < 10; i++) {
    angles.push(angle);
    angle += spc;
}

/// space out radius
radius += (radiusSat + 10);

loop();

function loop() {

    for(var i = 0; i < angles.length; i++) {

        angle = angles[i];
        
        x = cx + radius * Math.cos(angle * deg2rad);
        y = cy + radius * Math.sin(angle * deg2rad);

        $('.sat' + i).css({left:x - radiusSat, top:y - radiusSat});
    
        angles[i] = angles[i] + 1;
        if (angles[i] > 360) angles[i] = 0;
    }
    
    requestAnimationFrame(loop);
}

//Second Circle

var pos2 = $('.center2').position(),
radiusSat2 = $('.satZ1').width() * 0.5,
radius2 = $('.center2').width() * 0.5,
cx2 = pos2.left + radius2,
cy2 = pos2.top + radius2,
x2, y2, angle2 = 0, angles2 = [],
spc2 = 360 / 10,
deg2rad2 = Math.PI / 180,
i2 = 0;

for(;i2 < 10; i2++) {
    angles2.push(angle2);
    angle2 += spc2;
}

/// space out radius
radius2 += (radiusSat2 + 10);

loop2();

function loop2() {

    for(var i = 0; i < angles.length; i++) {

        angle2 = angles2[i];
        
        x2 = cx2 + radius2 * Math.cos(angle2 * -deg2rad2);
        y2 = cy2 + radius2 * Math.sin(angle2 * -deg2rad2);

        $('.satZ' + i).css({left:x2 - radiusSat2, top:y2 - radiusSat2});
    
        angles2[i] = angles2[i] + 1;
        if (angles2[i] > 360) angles2[i] = 0;
    }
    
    requestAnimationFrame(loop2);
}


$('.sat0').hover(function() {
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/1.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
});
$('.sat1').hover(function() {
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/2.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
});
$('.sat2').hover(function() {
    // console.log("Sat 2 Function is Running");
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/3.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
});
$('.sat3').hover(function() {
    // console.log("Sat 2 Function is Running");
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/4.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
});
$('.sat4').hover(function() {
    // console.log("Sat 2 Function is Running");
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/5.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
});
$('.sat5').hover(function() {
    // console.log("Sat 2 Function is Running");
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/6.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
});
$('.sat6').hover(function() {
    // console.log("Sat 2 Function is Running");
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/7.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
});
$('.sat7').hover(function() {
    // console.log("Sat 2 Function is Running");
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/8.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
});
$('.sat8').hover(function() {
    // console.log("Sat 2 Function is Running");
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/9.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
}, function(){
    $('#videoID').get(0).pause();
    $('#videoID').attr('src', 'video/1.MOV');
    $('#videoID').get(0).load();
    $('#videoID').get(0).play();
});

$('.satZ0').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/1.gif');
});
$('.satZ1').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/2.gif');
});
$('.satZ2').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/3.gif');
});
$('.satZ3').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/4.gif');
});
$('.satZ4').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/10.gif');
});
$('.satZ5').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/6.gif');
});
$('.satZ6').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/7.gif');
});
$('.satZ7').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/8.gif');
});
$('.satZ8').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/9.gif');
});
$('.satZ9').hover(function() {
    $('.bg-gif').css('background-image', 'url(gif/0.gif');
});

$(function () {
  $(document).mousemove(function (e) {
    $(".cursor").show().css({
      "left": e.clientX -25 ,
      "top": e.clientY -25
    });
  }).mouseout(function () {
    $(".cursor").hide();
  });
});



// var pos = $('#center2').position(),
//     radiusSat = $('#sat12').width() * 0.5,
//     radius = $('#center2').width() * 0.5,
//     cx = pos.left + radius,
//     cy = pos.top + radius,
//     x, y, angle = 0, angles = [],
//     spc = 360 / 10,
//     deg2rad = Math.PI / 180,
//     i = 0;

// for(;i < 10; i++) {
//     angles.push(angle);
//     angle += spc;
// }

// /// space out radius
// radius += (radiusSat + 10);

// loop();

// function loop() {

//     for(var i = 0; i < angles.length; i++) {

//         angle = angles[i];
        
//         x = cx + radius * Math.cos(angle * deg2rad);
//         y = cy + radius * Math.sin(angle * deg2rad);

//         $('#sat' + i).css({left:x - radiusSat, top:y - radiusSat});
    
//         angles[i] = angles[i] + 1;
//         if (angles[i] > 360) angles[i] = 0;
//     }
    
//     requestAnimationFrame(loop);
// }

// $('#sat012').on('hover', function() {
//     $(this).css('background-image', "gif/0.gif);
// });