if( 'jQuery' in window ) {

  $(function(){

    jQuery.fn.addAccount = function(target) {
      return this.each((index,obj)=>{
        $(target).find('.close-card').click( (ev)=>{
          $(target).fadeOut('normal', function() {
            $(obj).parent().css("cssText", "");
            $(obj).fadeIn('normal');
          });
        });

        $(obj).click( (ev)=>{
          $(ev.currentTarget).fadeOut('normal', function() {
            $(ev.currentTarget).parent().css("cssText", "display: none !important");

            $(target).fadeIn('normal');

          });
        });

      });
    }

  })

} else {
  //Coming soon
}
