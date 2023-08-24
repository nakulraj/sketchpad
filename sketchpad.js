initializeGrid();


function newGrid(){
    var x = parseInt(prompt('How big do you want your squares? The default is set to 15 across this 600px by 600px grid. Please enter a value between 0 and 100.'));
    if (x > 100){
      
    var x = parseInt(prompt('How big do you want your squares? The default is set to 15 across this 600px by 600px grid. Please enter a value between 0 and 100.'));

    newGrid(x);
 
    } else if (x < 100) {
    
    const boxes = document.querySelectorAll('.atom');
    boxes.forEach(atom =>{
      atom.remove();
    });

    var width = (600/x);


    for(var i = 0; i < x; i++){
       $(".main_Container").append("<div id="+i+" class='row'></div>")

    for (var j = 0; j < x; j++){
        $("#"+i).append("<div id ="+i+"."+j+" class='atom' style='width:"+width+"px; height:"+width+"px;'></div>");
    }
    }
    hoverFX();}
}

function initializeGrid(){
  // location.reload();
     var x = 15;
     var width = (600/x);
     for(var i = 0; i < x; i++){
        $(".main_Container").append("<div id="+i+" class='row'></div>")
 
     for (var j = 0; j < x; j++){
         $("#"+i).append("<div id ="+i+"."+j+" class='atom' style='width:"+width+"px; height:"+width+"px;'></div>");
     }
     }
     hoverFX();
 }

function hoverFX(){

    
    $(".atom").hover(function(){
      var x = Math.floor(Math.random() * 10);
      console.log(x);
      var t = "";

        if (x === 0){
          t = "black"
          console.log(t);
        } else if (x === 1){
          t = "blue";
          console.log(t);
        } else if (x === 2){
          t = "red";
          console.log(t);
        } else if (x === 3){
          t = "yellow";
          console.log(t);
        } else if (x === 4){
          t = "green";
          console.log(t);
        } else if (x === 5) {
          t = "purple";
          console.log(t);
        } else if (x === 6) {
          t = "HotPink";
          console.log(t);
        } else if (x === 7) {
          t = "indigo";
          console.log(t);
        } else if (x === 8) {
          t = "LightGreen";
          console.log (t);
        } else if (x === 9) {
          t = "Maroon";
          console.log(t);
        }else if (x === 10) {
          t = "Olive";
          console.log(t);
        }

        $(this).css("background-color", t);}, 
        function(){
            $(this).css("background-color", t);})
        }

hoverFX();

    $(document).ready(function() {});
