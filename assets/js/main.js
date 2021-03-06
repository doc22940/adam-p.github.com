
(function(global) {
  'use strict';

  $(function() {
    $.fn.socialSharePrivacy.settings.order = ['twitter', 'gplus', 'hackernews', 'facebook', 'linkedin', 'stumbleupon'];
    $.fn.socialSharePrivacy.settings.path_prefix = '/assets/js/socialshareprivacy/';

    $('.share-panel').socialSharePrivacy();

    // If we're tracking scroll position, set it up.
    if ($('.scrollspy-nav').length) {
      // See here for why we're doing ths on the body: http://stackoverflow.com/a/15685500/729729
      $('body').scrollspy({offset: 60});
    }

    /*
    // Set the navbar active element to the current page
    var pagefile = location.pathname.split('/').pop() || 'index.html';
    $('.nav').find('a[href="'+pagefile+'"]').parent().addClass('active');
    */
  });
})(window);
