$( document ).ready( function( ) {
		CreateTOC( );
	}
);

// Создаёт содержание
function CreateTOC( ){
	var html = '';
	var last = '2';
	html = '<ol>';

	$( 'h2, h3' ).each( function( ) {
		var tag = $( this ).get(0).tagName[ 1 ];

		if( tag !== last ) { // уровень заголовка сменился
			if( tag > last ) {
				html += '<ol>';
			} else {
				html += '</ol>';
			}
		}
		html += '<li><a href="#">' + $( this ).html( ) + '</a></li>';

		last = tag;
	} );

	html += '</ol>';
	$( '#toc' ).html( html );
}
