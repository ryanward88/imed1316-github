// A $( document ).ready() block.
$( document ).ready(function() {   
  //console.log( "ready!" );
  
  //alert('test')
  
  $(document).on("change", "#t-shirt", chkTshirt);
  
  //chkTshirt function
  function chkTshirt() {
    
    var tshirt = $('#t-shirt').val();
    //alert(tshirt);
    
    //if tshirt
    if (tshirt == 'CUSTOM') {
      //alert('works')
      $('#custom').removeAttr('disabled'); //remove diable
      $('#custom').attr('required', true); //disabled again

    }//end if tshirt
    else {
      $('#custom').attr('disabled', true); //disabled again
      $('#custom').val(''); //set value to empty
      $('#custom').removeAttr('required'); //remove diable

    }
    
  }// end of function
  
});