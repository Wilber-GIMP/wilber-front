(function () {
    function init() {
        var speed = 250,
            easing = mina.easeinout;

        [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
            var s = Snap( el.querySelector( 'svg' ) );

            var p = "M 180,160 0,218 0,0 180,0 z";
            var rect="m 180,34.57627 -180,0 L 0,0 180,0 z"

            // path = s.select( 'path' ),
            //     pathConfig = {
            //         from : path.attr( 'd' ),
            //         to : el.getAttribute( 'data-path-hover' )
            //     };

            // el.addEventListener( 'mouseenter', function() {
            //     p.animate( { 'path' : 'M 180,160 0,218 0,0 180,0 z' }, speed, easing );
            // } );
            //
            // el.addEventListener( 'mouseleave', function() {
            //     p.animate(0, speed, easing );
            // } );
        } );
    }

    init();
})();