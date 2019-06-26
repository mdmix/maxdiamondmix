// facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Google Maps JavaScript API
function initMap() {
  var myLatLng = {lat: 52.493909, lng: 13.3497053};

  var map = new google.maps.Map(document.getElementById('main-hub'), {
    zoom: 11,
    center: myLatLng
  });

  var icon = {
    url: 'img/face-music-online.png',
    scaledSize: new google.maps.Size(48, 27)
  };

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    icon: icon,
    title: 'Main Hub'
  });
  var circleBerlin = new google.maps.Circle({
      strokeColor: '#ff0',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#F77E14',
      fillOpacity: 0.25,
      map: map,
      center: map.center,
      radius: 3000
    });

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(12.5);
    map.setCenter(marker.getPosition());
    map.setMapTypeId('hybrid');
    map.setCenter(marker.getPosition());
    circleBerlin.setMap(null);
  });
}


// when doc fully loaded
$(document).ready(function(){
  // smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  $('#about').parallax({
    imageSrc: 'img/face-music-online.png',
    speed: 0.3
  });

  // $(function () {
  //   $('#about').css({"background-image": "url('img/face-music-online.png')", "background-repeat": "repeat"});
  // });


  // $(function () {
    // $('#about').stellar({
    //   horizontalScrolling: false,
    //   verticalScrolling: true,
    //   verticalOffset: 1540,
    //   parallaxBackgrounds: true
    // });
  // });

  // tooltips
  $(function () {
    $('#vimeo, #vimeo1').tooltip();
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // submit button – event listener
  $('#name').on('input', function() {
    $('#name').css("background-color", "yellow");
  });
  $('#phone').on('input', function() {
    $('#phone').css("background-color", "yellow");
  });
  $('#email').on('input', function() {
    $('#email').css("background-color", "yellow");
  });
  $('#message').on('input', function() {
    $('#message').css("background-color", "yellow");
  });
  $('#submit-button').on('click', function() {
    if($("#name").val() === "") {
      $("#name").css("border", "2px solid red");
    } else {
      var name = $('#name').val().replace(/\n/g, '<br/>');
      var visibleN = "<br><br><br>" + name.italics().fontcolor("#F77E14").fontsize(3);
      $('#visible-name').css("text-align", "left").html(visibleN);
      $('#name').hide();
      return false;
    };
  });
  $('#submit-button').on('click', function() {
    var phone = $('#phone').val().replace(/\n/g, '<br/>');
    var visibleP = "<br><br><br>" + phone.italics().fontcolor("#F77E14").fontsize(3);
    $('#visible-phone').css("text-align", "left").html(visibleP);
    $('#phone').hide();
    return false;
  });
  $('#submit-button').on('click', function() {
    // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // var emailInput = document.getElementById('email');
    // var atpos = $("#email").indexOf("@");
    // var dotpos = $("#email").lastIndexOf(".");
    var emailInput = document.getElementById("email").value;
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+.([a-zA-Z])+([a-zA-Z])+/;
    var isValid = pattern.test(emailInput);
    if($("#email").val() === "") {
      $("#email").css("border", "2px solid red");
    } else if(emailInput != null && isValid == false) {
      $("#email").css("border", "2px solid red");
    } else {
      var email = $('#email').val().replace(/\n/g, '<br/>');
      var visibleE = "<br><br><br>" + email.italics().fontcolor("#F77E14").fontsize(3);
      $('#visible-email').css("text-align", "left").html(visibleE);
      $('#email').hide();
      return false;
    };
  });
  $('#submit-button').on('click', function() {
    var charCount = $("#message").val().length;
    if($("#message").val() === "" || (charCount > 50)){
      $("#message").css("border", "2px solid red");
    } else if($("#message").val() === "" || (charCount < 10)){
      $("#message").css("border", "2px solid red");
    } else {
      var message = $('#message').val().replace(/\n/g, '<br/>');
      var confirmM = "<br><br><br>Message received!!".toUpperCase();
      var visibleM = confirmM.fontsize(4) + "<br>" + message.italics().fontcolor("#F77E14").fontsize(3);
      $('#visible-message').css("text-align", "left").html(visibleM);
      // $('#visible-message').html(visibleM);
      $('#message').hide();
      return false;
    };
  });
  $("#message").on("keyup", function() {
    console.log("keyup happened"); //here we make sure we're catching the keyup
    // in here is where the rest of our code for this Exercise will go
    var charCount = $("#message").val().length; //here we set the length of the content of the textarea to a variable
    var charCountPos = "<br><br>characters: " + charCount;
    console.log(charCount); //here we make sure we set it to the right value
    $("#char-count").html(charCountPos); //here we show a running character count to the user
    if(charCount > 50) {
      $("#char-count").css("color", "white").css({"background-color": "#F77E14", "display": "inline", "text-shadow": "none"});
    } else {
      $("#char-count").css("color", "black").css({"background-color": "yellow", "display": "inline", "text-shadow": "none"});
    };
  });
  $('#submit-button').on('click', function() {
    var charCount = $("#message").val().length;
    if($("#message").val() && $("#email").val() && $("#name").val() && (charCount < 51)) {
      $('#submit-button').hide();
    }
  });

  //
  // }
  // w.fn.init (button#submit-button.btn.btn-success)
  // work coding section
  for(var i = 0; i < work.length; ++i ) {
    $("#coding-snaps").append('\
    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 snaps">\
      <div>\
        <a href="' + work[i].url + '" class="work-img">\
          <img class="img-responsive" src="' + work[i].pic + '">\
            <span class="info"><p class="proj-type">'+work[i].type +'</p><p class="proj-title">'+ work[i].title +'</p></span>\
        </a>\
      </div>\
      <br>\
      <p><a class="btn btn-default" href="' + work[i].caseStudy +'" role="button">CASE STUDY &raquo;</a></p>\
    </div>\
    ');
    $(".work-img").mouseenter( function() {
      console.log(this);
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });
    var images = $("#coding-snaps img");
    // console.log(images [1]);
    if (i % 2 === 0) {
      $(images[i]).css("border", "0.5em solid #F77E14");
    } else {
      $(images[i]).css("border", "0.5em solid #F77E14");
    };
  };
  for(var i = 0; i < workV.length; ++i ) {
    $("#video-snaps").append('\
    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 snaps">\
      <div>\
        <a href="' + workV[i].url + '" class="vimeo-snaps">\
          <img class="img-responsive" src="' + workV[i].pic + '">\
            <span class="info info-videos"><p class="proj-type">'+ workV[i].type +'</p><p class="proj-title">'+ workV[i].title +'</p></span>\
        </a>\
      </div>\
      <br>\
        <p><button src="' + workV[i].modal + '" title="'+ workV[i].title +'" type="button" class="btn btn-primary video-details" data-toggle="modal" data-target=".bs-example-modal-lg" data-keyboard="false">DETAILS &raquo;</button></p>\
    </div>\
    ');
    $(".vimeo-snaps").mouseenter( function() {
      console.log(this);
      $(".info-videos", this).show();
    }).mouseleave(function(){
      $(".info-videos", this).hide();
    });
    var imagesV = $("#video-snaps img");
    // console.log(imagesV [1]);
    if (i % 2 === 0) {
      $(imagesV[i]).css("border", "0.5em solid #F77E14");
    } else {
      $(imagesV[i]).css("border", "0.5em solid #F77E14");
    };
  };
});

$(document).ready(function(){
    $(".vimeo-snaps").click(function(e) {
        e.preventDefault();

        $("#all-videos").attr("src", $(this).attr("href"));
    })
});

$(document).ready(function(){
    $(".video-details").click(function(e) {
        e.preventDefault();

        $("#modalembed").attr("src", $(this).attr("src"));
    })
});

$(document).ready(function(){
    $(".video-details").click(function(e) {
        e.preventDefault();

        $(".modal-header h4").text($(this).attr("title"));
    })
});

// $(document).ready(function(){
//   $("#summery-vibe").click(function () {
//     $("body, div, span, ul, label, nav, j").each(function () {
//         var color = $(this).css("background-color");
//         if (color == "rgb(0, 0, 0)") {
//             $(this).css("background-color", "#F2D7D5");
//         }
//       });
//     });
//     $("#summery-vibe").click(function () {
//       $("body, div, span, ul, label, nav, j, p, li").each(function () {
//           var color = $(this).css("color");
//           if (color == "rgb(255, 255, 0)") {
//               $(this).css("color", "white");
//           }
//         });
//       });
// });
