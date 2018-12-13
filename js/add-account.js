if( 'jQuery' in window ) {

  $(function(){

    jQuery.fn.addAccount = function(target) {
      return this.each((index,obj)=>{
        $(obj).click( (ev)=>{
          $(ev.currentTarget).fadeOut('normal', function() {
            $(ev.currentTarget).parent().css("cssText", "display: none !important;");

            $(target).fadeIn('normal', (ev)=>{
              $(target).css("cssText", "display: flex !important;");
            });

          });
        });

      });
    }

  })

} else {
  //Coming soon
}
