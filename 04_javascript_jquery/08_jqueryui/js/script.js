//location
$( "#location" ).selectmenu();


//category
$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
      "HTML"
    ];
    $( "#category" ).autocomplete({
      source: availableTags
    });
  } );


//experience
var spinner = $( "#experience" ).spinner({
    step:2,
    min:0,
    max:20
});

//출근
$( function() {
  $( "#startDate" ).datepicker({
    minDate: new Date(2022, 8 - 1, 12),
    maxDate: "+1w"
  });
} );

$( "#startDate" ).datepicker('setDate',new Date());

//지원동기
$( "input[type='radio']" ).checkboxradio();

//progress
$('#submit').button({
  disabled:true
})
$('#progress').progressbar({
  value:0
})
$('input').change(function(){
  updateProgress()
})
updateProgress()
function updateProgress(){
  let progress=0,
      itemCount=5,
      itemCompleted=0,
      $location=$('#location option:selected').val(),
      $category=$('#category').val(),
      $experience=$('#experience').val(),
      $startDate=$('#startDate').val(),
      $referrer=$('input[type="radio"]:checked').val();

  if($location) itemCompleted++;
  if($category) itemCompleted++;
  if($experience) itemCompleted++;
  if($startDate) itemCompleted++;
  if($referrer) itemCompleted++;

  progress=itemCompleted/itemCount*100;
  $('#progress').progressbar("option","value",progress);
  $('.pct span').text(progress);

  if(progress==100){
    $('#submit').button({
      disabled:false
    })
  }

}