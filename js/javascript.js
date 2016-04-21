//Code sources:
//1.  http://stackoverflow.com/questions/17658542/add-table-row-and-data-from-input-field-in-that-row
//2.  Week 1 homework solutions

//NOTE: don't need object for this to work. Created one anyways



$('#addData').on( 'click', addToTable );
$('#addData').on( 'click', reset );


$('#showForm').on( 'click', hideTableShowForm );
$('#done').on( 'click', hideForm ); 

var dBList = [];

//=============================================================================

function addToTable( evt ) {
  var date = $("#date").val();
  var time = $("#time").val();
  var lat = $("#lat").val();
  var long = $("#long").val();
  var db = $("#db").val();
  var comment = $("#comment").val();
 
  $(".table tr:last").after("<tr class='db-reading'><td>" + date + 
        "</td><td>" + time + "</td><td>" + lat + "</td><td>" + long + "</td><td>" + db + " dB" + "</td><td>" + comment + "</td>" 
  ); 
   //adding to object function
   addToObject(date, time, lat, long, db, comment);
 
   $("#sound-data").show();

}
        
//=================================================================

//even though I'm not directly using object or array I wanted to practice the code of adding to an object.

 function addToObject(  ) {
   var date = $("#date").val();
   var time = $("#time").val();
   var lat = $("#lat").val();
   var long = $("#long").val();
   var db = $("#db").val();
   var comment = $("#comment").val();
  
   dBList.push({"date" : date, "time" : time, "lat" : lat, "long" : long, "db" : db, "comment" : comment});
  
   console.log(dBList);   
 }



//================================================================
 function reset( ) {
   $('#form')[0].reset();
}
 
//=================================================================

function hideTableShowForm( evt ){
   $("#sound-data").hide();
   $("#showForm").hide();
   $("#FormSection").show();
}

//=================================================================

function hideForm( evt ){
   $("#FormSection").hide();
   $("#showForm").show();
 
}


                    


