fitText = function ( text, $el, height ) {
	$el
		.css('height', '' )
		.html( '' );

	var words = text.split( ' ' );
	var gap = 0;
	var prevHeight = 0;
	var now = new Date().getTime();

	for( var i = 0; i < words.length; i++ ) {
		gap = ( $el.outerHeight() - prevHeight === 0 ) ? gap : $el.outerHeight() - prevHeight;
		prevHeight = $el.outerHeight();
		$el.append( words[ i ] );
		if ( $el.outerHeight() > height-gap ) {
			if ( i < (words.length - 1 ) ){
				$el.append( '&hellip;' );
			}
			break;
		}
		$el.append( ' ' );
	}

	var then = now;
	now = new Date().getTime();
	var duration = now - then;

	$el.prev().text( 'Fit ' + i + ' words in ' + $el.outerHeight() + 'px in ' + duration + 'ms');

	$el.outerHeight( height );
};

$( function () {
	var text = $( '#test_text' ).text().trim();
	fitText( text, $( '#small_box' ), 200);
	fitText( text, $( '#medium_box' ), 300);
	fitText( text, $( '#landscape_box' ), 100);

	$( '#run_tests' ).click( function () {
		var text = $( '#test_text' ).val().trim();
		console.log( text );
		fitText( text, $( '#small_box' ), 200);
		fitText( text, $( '#medium_box' ), 300);
		fitText( text, $( '#landscape_box' ), 100);
	} );
} );
