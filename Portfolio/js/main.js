function initMain() {
    //smoth scroll
    $(document).ready(function(){
        
        $('a[href^=#]').click(function(){
            
            var linkHref = $.attr(this, 'href'); // "#home", "#about-me"
            var offsetTop = $( linkHref ).offset().top;
            
            $('html, body').animate({
                scrollTop: offsetTop
            }, 1000);
            
            return false;
        });

    });
    
    //end smoth scroll
    
    //parallax
    
    $(document).ready(function(){
        var parallaxBox = $(".parallax-box");
        var prevScroll = $(window).scrollTop();
        var initScroll = prevScroll;
        var scrollDivider = 4;
        var viewportHeight;
        
        
        parallaxBox.each(function(){
            var parallaxImg = $(".parallax-img", this);
            var parallaxBoxHeight = $(this).height();
            var parallaxImgHeight = parallaxImg.height();
            var clientRect = this.getBoundingClientRect();
           
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            
            //+initScroll/scrollDivider;
            if( clientRect.top > viewportHeight ){
                this.parallaxImgTop = parallaxBoxHeight - parallaxImgHeight; // -300

            }else if( clientRect.bottom < 0 ){
                this.parallaxImgTop = 0;

            }else{
                var pathLength = viewportHeight + parallaxBoxHeight;
                var pathCurrentPosition = clientRect.top + parallaxBoxHeight;

                //pathCurrentPosition = pathLength - pathCurrentPosition; // invert % position

                var pathRatio = pathCurrentPosition / pathLength;
                var pathLengthImg = parallaxImgHeight - parallaxBoxHeight; // 300

                this.parallaxImgTop = pathLengthImg * pathRatio * -1;
            }
            parallaxImg.css("top",this.parallaxImgTop + "px");
        });
        
        $(window).scroll(function(){
            var currentScroll = $(window).scrollTop();
            var deltaScroll = currentScroll - prevScroll;
            prevScroll = currentScroll;
            
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            
            parallaxBox.each(function(){
                var clientRect = this.getBoundingClientRect();
                
                if( clientRect.top <= viewportHeight && clientRect.bottom >= 0 ){
                    var parallaxImg = $(".parallax-img",this);
                    this.parallaxImgTop = this.parallaxImgTop + deltaScroll/scrollDivider;
                    parallaxImg.css( "top",  this.parallaxImgTop + "px" );
                }
            });           
        });    
    });
    
    /* End parallax */
    
    /* main menu scroll */
    $(window).scroll(function(){
       var scroll = $(window).scrollTop();
       
       if( scroll >= 600 ){
           $("#main").addClass("mainMenuScroll" , '#main');
       } else {
           $("#main").removeClass("mainMenuScroll" , '#main');
       }
    });
}