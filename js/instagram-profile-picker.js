if( 'jQuery' in window ) {

  $(function(){

    jQuery.fn.profilePicker = function(param) {
      return this.each((index,obj)=>{
        var itens = $(obj).find('.dropdown-item'),
            mainButton = $(obj).children('button');

        itens.each( (i,item) => {
          $(item).click( ()=>{
            let imgSrc = $(item).children('img').attr('src'),
                profileName = $(item).children('span').html();

            mainButton.children('img').attr('src',imgSrc);
            mainButton.children('span').html(profileName);
          });
        });

      });
    }

  })

} else {
  //Coming soon
}
