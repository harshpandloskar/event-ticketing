
/**Since the Api did not have any image in it, the images were put on cloudinary account and then fetched  */
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

/**
 * 
 *  This function splits the url parameter in URL for showing synopsis data.
 */
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

/**
 * 
 * This function capitalize the first letter of any string. 
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(function() {

    /**
         * Set movie synopsis title.
         */
        document.title = capitalizeFirstLetter(getURLParameter("movie"))+ ' - DBS Movie synopsis';


        /**
         * Getting data from the local storage.
         */
        var data = JSON.parse(localStorage.getItem('moviesData'));
        /**
         * I have used this loop to list informations related to movies, 
         * if my url parameter is matched then synopsis page will list only that only movies related information.
         */
        $(".loader").hide();
        $(".movies-data").show();
        for(var i=0; i<data.length; i++) {

            /**
             * If URL parameter matches with existing API data title.
             */
            if(data[i].title === getURLParameter("movie")) {

                $("._img-poster").append("<img src='"+eval(data[i].title.replace(/\s+/g, '').replace(':', '').toLowerCase())+"' alt='"+capitalizeFirstLetter(data[i].title)+"' />")
                $("._movie_name").append("<h2 class='_movie-name-text'>"+capitalizeFirstLetter(data[i].title)+"</h2>");
                $("._director-name").append("<span>"+data[i].director+"</span>");
                $("._genre").append("<span>"+data[i].genre+"</span>");
                $("._cast").append("<span>"+data[i].cast+"</span>");
                $("._notes").append("<span>"+data[i].notes+"</span>");
                $("._year").append("<span>"+data[i].year+"</span>");

                /**
                 * This is for calculating showtimes on monday
                 */
                for(var j=0; j<data[i].runningTimes.mon.length; j++) {
                    $("#monday ._time-available").append("<a href='check_ticket.php?event="+encodeURIComponent(data[i].title)+"&day=monday&time="+encodeURIComponent(data[i].runningTimes.mon[j])+"'>"+data[i].runningTimes.mon[j]+"</a>&nbsp;&nbsp;|&nbsp;&nbsp;");
                }

                /**
                 * This is for calculating showtimes on tuesday
                 */
                for(var j=0; j<data[i].runningTimes.tue.length; j++) {
                    $("#tuesday ._time-available").append("<a href='check_ticket.php?event="+encodeURIComponent(data[i].title)+"&day=tuesday&time="+encodeURIComponent(data[i].runningTimes.tue[j])+"'>"+data[i].runningTimes.tue[j]+"</a>&nbsp;&nbsp;|&nbsp;&nbsp;");
                }

                /**
                 * This is for calculating showtimes on wednesday
                 */
                for(var j=0; j<data[i].runningTimes.wed.length; j++) {
                    $("#wednesday ._time-available").append("<a href='check_ticket.php?event="+encodeURIComponent(data[i].title)+"&day=wednesday&time="+encodeURIComponent(data[i].runningTimes.wed[j])+"'>"+data[i].runningTimes.wed[j]+"</a>&nbsp;&nbsp;|&nbsp;&nbsp;");
                }

                /**
                 * This is for calculating showtimes on thursday
                 */
                for(var j=0; j<data[i].runningTimes.thu.length; j++) {
                    $("#thursday ._time-available").append("<a href='check_ticket.php?event="+encodeURIComponent(data[i].title)+"&day=thursday&time="+encodeURIComponent(data[i].runningTimes.thu[j])+"'>"+data[i].runningTimes.thu[j]+"</a>&nbsp;&nbsp;|&nbsp;&nbsp;");
                }

                /**
                 * This is for calculating showtimes on friday
                 */
                for(var j=0; j<data[i].runningTimes.fri.length; j++) {
                    $("#friday ._time-available").append("<a href='check_ticket.php?event="+encodeURIComponent(data[i].title)+"&day=friday&time="+encodeURIComponent(data[i].runningTimes.fri[j])+"'>"+data[i].runningTimes.fri[j]+"</a>&nbsp;&nbsp;|&nbsp;&nbsp;");
                }

                /**
                 * This is for calculating showtimes on saturday
                 */
                for(var j=0; j<data[i].runningTimes.sat.length; j++) {
                    $("#saturday ._time-available").append("<a href='check_ticket.php?event="+encodeURIComponent(data[i].title)+"&day=saturday&time="+encodeURIComponent(data[i].runningTimes.sat[j])+"'>"+data[i].runningTimes.sat[j]+"</a>&nbsp;&nbsp;|&nbsp;&nbsp;");
                }
                
                /**
                 * This is for calculating showtimes on sunday
                 */
                for(var j=0; j<data[i].runningTimes.sun.length; j++) {
                    $("#sunday ._time-available").append("<a href='check_ticket.php?event="+encodeURIComponent(data[i].title)+"&day=sunday&time="+encodeURIComponent(data[i].runningTimes.sun[j])+"'>"+data[i].runningTimes.sun[j]+"</a>&nbsp;&nbsp;|&nbsp;&nbsp;");
                }
                break;
            }
        }
});

