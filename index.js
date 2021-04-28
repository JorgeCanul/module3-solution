// if items not showing then show else remove
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
  });