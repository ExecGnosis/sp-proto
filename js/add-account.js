if( 'jQuery' in window ) {

  $(function(){

    jQuery.fn.addAccount = function(target) {
      return this.each((index,obj)=>{
        // Cancel button
        $(target).find('.close-card').click( (ev)=>{
          $(target).fadeOut('normal', function() {
            $(obj).parent().css("cssText", "");
            $(obj).fadeIn('normal');
          });
        });

        // Submit button

        $(target).find('.submit-new-account').click( (ev)=>{

          console.log($(target).parent().hasClass('was-validated'));
          // $(target).fadeOut('normal', function() {
          //   $(obj).parent().css("cssText", "");
          //   $(obj).fadeIn('normal');
          // });
        });

        // Animation

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
