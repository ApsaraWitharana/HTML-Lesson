// $(document).ready(function(){
        
        $('#box').hover(

            function() {
                //    $(this).css('cursor', 'pointer');
                   $(this).css('background-color', 'lightgreen'); // Change background color to light green
                   
            },
            function() {
                //  $(this).css('cursor', 'default');
                 $(this).css('cursor', 'default','background-color', 'lightblue'); // Revert background color to light blue
            }
            
        );

//         $( "#box" ).on( "click", function() {
//         alert( "Handler for `click` called." );
// } );

  
 //   });