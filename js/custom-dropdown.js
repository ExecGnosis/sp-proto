/*
  Exemplo de estrutura:
    <div class="container">
      <button class="custom-dropdown">
        Clique em mim!
      </button>

      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">
          Item 1
        </a>
        <a class="dropdown-item" href="#">
          Item 2
        </a>
        <a class="dropdown-item" href="#">
          Item 3
        </a>
      </div>
    </div>
*/

if( 'jQuery' in window ) {

  $(function(){

    jQuery.fn.customDropdown = function(param) {
      return this.each(function(index,obj) {
        var itens = $(obj).siblings('.dropdown-menu').find('.dropdown-item');

        if(itens.length){
          $(obj).click(function(ev) {
            var dropdown = $(ev.currentTarget).siblings('.dropdown-menu');
            console.log(dropdown[0].classList);
            if(dropdown[0].classList.contains('active')) {
              dropdown.blur();
            } else {
              dropdown.addClass('active');
            }
          });

          $(obj).siblings('.dropdown-menu').blur((ev)=>{
            $(ev.currentTarget).removeClass('active');
          });

          itens.each( (i,item) => {

            $(item).click( ()=>{
              // Fecha o dropdown após selecionar um item
              $(item).parent().blur();
            });
          });
        } else {
          throw new Error(`No sibling element with 'dropdown-menu' class detected!\n Current Element: ${obj.outerHTML.trim().split('\n')[0]}`);
        }

      });
    }

  })

} else {
  //Coming soon
}
