$( document ).ready(function(){
    var Random=Math.floor(Math.random()*102+19)
    
    $('#Match').text(Random);
    $('#wins').text(wins);
    $('#losses').text(losses);
    
    
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    var player= 0; 
    var wins= 0;
    var losses = 0;
    
 
  function yay(){
  alert("Congratssss dudeee! You won this round!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
   
  function loser(){
    alert ("whoop, sorry! You lost!");
      losses++;
      $('#losses').text(losses);
      reset()
    }
 //////////////////reset//////////////////////
  function reset(){
    Random=Math.floor(Math.random()*102+19);
    console.log(Random)
    $('#Match').text(Random);
    num1= Math.floor(Math.random()*12+1);
    num2= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    num4= Math.floor(Math.random()*12+1);
    player= 0;
    $('#Score').text(player);
    } 
///////////////////////////////////////////////
    $('.crystal1').on ('click', function(){
      player = player + num1;
      console.log("New player= " + player);
      $('#Score').text(player); 
          if (player == Random){
            yay();
          }
          else if ( player > Random){
            loser();
          }   
    })  
    $('.crystal2').on ('click', function(){
      player = player + num2;
      console.log("New player= " + player);
      $('#Score').text(player); 
          if (player == Random){
            yay();
          }
          else if ( player > Random){
            loser();
          } 
    })  
    $('.crystal3').on ('click', function(){
      player = player + num3;
      console.log("New player= " + player);
      $('#Score').text(player);
  
            if (player == Random){
            yay();
          }
          else if ( player > Random){
            loser();
          } 
    })  
    $('.crystal4').on ('click', function(){
      player = player + num4;
      console.log("New player= " + player);
      $('#Score').text(player); 
        
            if (player == Random){
            yay();
          }
          else if ( player > Random){
            loser();
          }
    });   
  }); 
  