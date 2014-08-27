$( document ).ready( 
  function ()
  {
      $( '#compoundSearch' ).click( function()
	  {
	      $('#ctvInfo').hide();
		  $('#result').hide();
	      $('#spinner').show();
	      $.post( "compoundSearch.php" , 
		      {
			    compoundName : $( '#compoundNames' ).val()
			  } ,
              function( data )
			  {
			     $('#spinner').hide(),
			     $('#ctvInfo').replaceWith(data),
				 $('#select_check').css("display", "block");
				 //$('#select_check').css("visibility", "visible");
			  }
          );

	   });
	   
	   


	   
      

$( '#enable_check' ).click( function()
{
  $('#steptwo').css("display", "block");
  $('#steptwoinstructions').css("display", "none"),
  $('#Ref_dose').removeAttr("disabled"),
   $('#Ref_conc').removeAttr("disabled"),
   $('#Oral_slope').removeAttr("disabled"),
   $('#Ihal_unit').removeAttr("disabled"),
   $('#Canc_pot').removeAttr("disabled");
   //$('#NOAEL').removeAttr("disabled"),
   //$('#ONBD').removeAttr("disabled"),
   //$('#OCBD').removeAttr("disabled");	  
  });

$( '#enable_model' ).click( function()
{
  $('#steptwo').css("display", "block");
  $('#steptwoinstructions').css("display", "none"),
  $('#Ref_dose').removeAttr("disabled"),
   $('#Ref_conc').removeAttr("disabled"),
   $('#Oral_slope').removeAttr("disabled"),
   $('#Ihal_unit').removeAttr("disabled"),
   $('#Canc_pot').removeAttr("disabled");
   //$('#NOAEL').removeAttr("disabled"),
   //$('#ONBD').removeAttr("disabled"),
   //$('#OCBD').removeAttr("disabled");	  
  });
  
$( '#multi_compounds' ).click( function()
{
  $('#draw_structure').hide();
  $('#single_compound').replaceWith('');
  $('#inputfile').show();
  
  });
  
  
$( '#cancel_search' ).click( function()
{
  location.reload(true);
});
$( '#cancel_file' ).click( function()
{
  location.reload(true);
});

$( '#cancel_multiple' ).click( function()
{
  location.reload(true);
});
/*$( '#draw_compound' ).click( function()
{
  //$('#step2').css('visibility', 'hidden');
  //$('#jsmewrap').css("display", "block");
  //$('#stepone').css("display", "none");
  //$('#jsme_container').show();
});*/
$( '#reset_results' ).click( function()
{
  location.reload(true);
  //window.location.replace("http://comptox.unc.edu/ctvdemo");
});

$("#spinner").bind("ajaxSend", function() {
        $(this).show();
    }).bind("ajaxStop", function() {
        $(this).hide();
    }).bind("ajaxError", function() {
        $(this).hide();
    });

	
	   $( '#results' ).dialog({
	  autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "fade",
        duration: 1000
      },
	  height: 500,
	  width: 1000,
	  modal: true
    });
	

	 $( '#Run' ).click( function()
	  {
	      $('#result').hide();
		  $('#select_check').hide();
	      $('#spinner').show();
	
	      $.post( "results.php" , 
		      {
			     compoundName : $( '#compoundNamer' ).text(),
				 MolWeight: $( '#Molecularweight').text(),
			     refDose : $( '#Ref_dose' ).is(":checked"),
				 refConc : $('#Ref_conc').is(":checked"),
				 oralSlope : $('#Oral_slope').is(":checked"),
				 ihalUnit : $('#Ihal_unit').is(":checked"),
				 cancPot : $('#Canc_pot').is(":checked"),
				 noael : $('#NOAEL').is(":checked"),
				 onbd : $('#ONBD').is(":checked"),
				 ocbd : $('#ocbd').is(":checked"),
				 smilee : $('#smiles').text(),
				 CompoundImage : $('#compoundImage').text()
				 
				 //refConc.val()
			  } ,
              function( newdata )
			  {
			     $('#spinner').hide(),
				  $('#result').show();
				  $('#reset_check').css("display", "block");
				  //$('#reset_check').css("visibility", "visible");
			     $('#resultss').replaceWith(newdata);
				 $( '#results' ).dialog( "open" );
				 //$('#result').replaceWith(newdata);
			  }
          );

	   });
	   
	   
	   $("#btnExport").click(function(e) {
    window.open('data:application/vnd.ms-excel,' + $('#results').html());
    e.preventDefault();
});
	   
$( '#drawStructure' ).click( function()
{
  $("#dialog").load('marvin.html', function() {
        $("#dialog").dialog("open");
    });
  });	
	   

$("#dialog").dialog({
    	  autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "fade",
        duration: 1000
      },
	  height: 500,
	  width: 1000,
	  modal: true
});
	   
	   });
	   