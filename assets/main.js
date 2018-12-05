

/**
 * It has all css related to Home JS.
 */


var geostorm = "https://res.cloudinary.com/harsh16/image/upload/v1523683069/Geostorm.jpg",
thejunglebook = "https://res.cloudinary.com/harsh16/image/upload/v1523684880/the-jungle-book.jpg",
dirtygrandpa = "https://res.cloudinary.com/harsh16/image/upload/v1523687283/tumblr_static_tumblr_static_6j2vias80fgow8c00k8sog0kc_focused_v3.jpg",
angrybirds = "https://res.cloudinary.com/harsh16/image/upload/v1523687378/912806583115c2ece8c45514b4381af7.png",
findingdory = "https://res.cloudinary.com/harsh16/image/upload/v1523687463/12963512_1730531960495553_1845715565725784190_n.jpg",
aliceinwonderlandthroughthelookingglass = "https://res.cloudinary.com/harsh16/image/upload/v1523687611/alice_through_the_looking_glass_lead.jpg",
batmanvsupermandawnofjustice = "https://res.cloudinary.com/harsh16/image/upload/c_scale,h_464,w_825/v1523687752/landscape-1458061707-batman-v-superman-dawn-of-justice-poster.jpg",
kungfupanda3 = "https://res.cloudinary.com/harsh16/image/upload/v1523687889/Kung-Fu-Panda-3-Hollywood-Upcoming-Movies-Poster.jpg",
thefreestateofjones = "https://res.cloudinary.com/harsh16/image/upload/v1523687964/Free-State-of-Jones-teaser.jpg",
zootopia = "https://res.cloudinary.com/harsh16/image/upload/v1523688083/zootopia-movie-poster-2048x1152.jpg";

htmlCards = [];

$(function() {

    /**
     * ----------------------------------------------
     */
        
        /**
         * If data is not stored then call ajax function.
         */
        if(localStorage.getItem('moviesData') === null) {

            $.ajax({
                async: false,
                url: 'https://college-movies.herokuapp.com',
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function(){
                    $(".loader").show();
                },
                complete : function() {
                    $(".loader").hide();
                    $(".movies-data").show();
                },
                success: function(response) {
                    console.log(response)
                    
                    var limit=10
                    var resp = response.slice(0, limit);
                    /**
                     * Storing this object in local storage on browser.
                     */
                    localStorage.setItem('moviesData', JSON.stringify(resp));
                    /**
                     * ---------------------------------------------------------
                     */
                }
            });
        }else{

            $(".loader").hide();
            $(".movies-data").show();
        }

        /**
         * Getting the data from the local storage in browser.
        */
        var data = JSON.parse(localStorage.getItem('moviesData'));
    

        for(var i=0; i<data.length; i++) {

            htmlCards.push("<div class='col-sm-4'><img class='movie-selection' onclick='window.location=\"synopsis.php?movie="+encodeURIComponent(data[i].title)+"\"' src="+eval(data[i].title.replace(/\s+/g, '').replace(':', '').toLowerCase())+" class='img-responsive' style='width:100%'><p class='movie-selection' >"+data[i].title+"</p></div>");
        }

        for (var i = 0; i < htmlCards.length; i++) {
            var appendDiv = $(htmlCards[i]);
            if (i % 3 === 0) {
            appendDiv = $('<div class="row row' + (i /3) + '">').append(appendDiv);
            $('#movie-listing-main').append(appendDiv);
            } else {
            console.log(Math.floor(i/3));
            $('#movie-listing-main').find('.row' + Math.floor(i/3)).append(appendDiv);
            }

        }
})

function redirect(link) {
    document.location = link;
}
