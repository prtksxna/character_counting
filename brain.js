fitText = function ( text, $el, height ) {
	var words = text.split( ' ' );
	var gap = 0;
	var prevHeight = 0;

	for( var i = 0; i < words.length; i++ ) {
		gap = ( $el.outerHeight() - prevHeight === 0 ) ? gap : $el.outerHeight() - prevHeight;
		prevHeight = $el.outerHeight();
		$el.append( words[ i ] );
		if ( $el.outerHeight() > height-gap ) break;
		$el.append( ' ' );
	}

	$el
		.outerHeight( height )
		.append( '&hellip;' );
};

$( function () {
	var text = $( '#test_text' ).text().trim();
	fitText( text, $( '#small_box' ), 200);
	fitText( text, $( '#medium_box' ), 300);
	fitText( text, $( '#landscape_box' ), 100);
} );