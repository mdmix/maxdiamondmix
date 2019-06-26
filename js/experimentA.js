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


      // <p><button src="' + workV[i].modal + '" type="button" class="btn btn-primary video-details" data-toggle="modal" data-target=".bs-example-modal-lg" data-keyboard="false">MORE DETAILS &raquo;</button></p>\
