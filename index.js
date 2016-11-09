var turn = 1;
var TS = 0;
var icon = '1';
var player = 'Player 1'
var player1 = [1, 5, 9, 13, 17, 21, 25]
var player2 = [2, 6, 10, 14, 18, 22]
var player3 = [3, 7, 11, 15, 19, 23]
var player4 = [4, 8, 12, 16, 20, 24]
var i1 = 0
var i2 = 0
var i3 = 0
var i4 = 0
var playerTurn = [player1, player2, player3, player4];
var p1 = [0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1]
var p2 = [1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2]
var p3 = [2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3]
var p4 = [3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0]
var n1 = "1"
var n2 = "2"
var n3 = "3"
var n4 = "4"
var count = 0;
var win1 = 0;
var win2 = 0;
var win3 = 0;
var win4 = 0;

$('.piece').click(function(){
  if($(this).html()==""){
    if (turn==(playerTurn[p1[TS]])[i1])
    {
      icon = n1;
      player = 'Player 1';
      $(this).addClass('player1');
      i1++;
    } 
    else if (turn==(playerTurn[p2[TS]])[i2]) 
    {
      icon = n2;
      player = 'Player 2';
      $(this).addClass('player2');
      i2++;
    } 
    else if (turn==(playerTurn[p3[TS]])[i3]) 
    {
      icon = n3;
      player = 'Player 3';
      $(this).addClass('player3');
      i3++;
    } 
    else if (turn==(playerTurn[p4[TS]])[i4]) 
    {
      icon = n4;
      player = 'Player 4';
      $(this).addClass('player4');
      i4++;
    } 
    $(this).html(icon);
    checkWin();
    turn++;
  }
});

$('#restart').click(function(){
  $('.piece').html('');
  $('.piece').removeClass('won');
  $('.piece').removeClass('player1');
  $('.piece').removeClass('player2');
  $('.piece').removeClass('player3');
  $('.piece').removeClass('player4');
  TS++;
  turn = 1;
  i1 = 0;
  i2 = 0;
  i3 = 0;
  i4 = 0;
});

function checkWin(){

// 5 Rows,
// 5 Columns,
// 2 Mid Diagonals 
// (going in two directions - top left to bottom right and top right to bottom left)
// with 3 win conditions each
// = 36 win conditions
// 4 triangles of base four wtih 3 win coditions each
// = 12 win conditions
// Total: 48 win conditions

//row 1

  if ($('#p1').html()===icon && $('#p2').html()===icon && $('#p3').html()===icon ) {
    $('#p1, #p2, #p3').addClass('won');
    alert(player + ' won!');

  } else if ($('#p2').html()===icon && $('#p3').html()===icon && $('#p4').html()===icon ) {
    $('#p2, #p3, #p4').addClass('won');
    alert(player + ' won!');

  } else if ($('#p3').html()===icon && $('#p4').html()===icon && $('#p5').html()===icon ) {
    $('#p3, #p4, #p5').addClass('won');
    alert(player + ' won!');

//row 2

  } else if ($('#p6').html()===icon && $('#p7').html()===icon && $('#p8').html()===icon ) {
    $('#p6, #p7, #p8').addClass('won');
    alert(player + ' won!');

  } else if ($('#p7').html()===icon && $('#p8').html()===icon && $('#p9').html()===icon ) {
    $('#p7, #p8, #p9').addClass('won');
    alert(player + ' won!');

  } else if ($('#p8').html()===icon && $('#p9').html()===icon && $('#p10').html()===icon ) {
    $('#p8, #p9, #p10').addClass('won');
    alert(player + ' won!');

//row 3

  } else if ($('#p11').html()===icon && $('#p12').html()===icon && $('#p13').html()===icon ) {
    $('#p11, #p12, #p13').addClass('won');
    alert(player + ' won!');

  } else if ($('#p12').html()===icon && $('#p13').html()===icon && $('#p14').html()===icon ) {
    $('#p12, #p13, #p14').addClass('won');
    alert(player + ' won!');

  } else if ($('#p13').html()===icon && $('#p14').html()===icon && $('#p15').html()===icon ) {
    $('#p13, #p14, #p15').addClass('won');
    alert(player + ' won!');

//row 4

  } else if ($('#p16').html()===icon && $('#p17').html()===icon && $('#p18').html()===icon ) {
    $('#p16, #p17, #p18').addClass('won');
    alert(player + ' won!');

  } else if ($('#p17').html()===icon && $('#p18').html()===icon && $('#p19').html()===icon ) {
    $('#p17, #p18, #p19').addClass('won');
    alert(player + ' won!');

  } else if ($('#p18').html()===icon && $('#p19').html()===icon && $('#p20').html()===icon ) {
    $('#p18, #p19, #p20').addClass('won');
    alert(player + ' won!');

//row 5

  } else if ($('#p21').html()===icon && $('#p22').html()===icon && $('#p23').html()===icon ) {
    $('#p21, #p22, #p23').addClass('won');
    alert(player + ' won!');

  } else if ($('#p22').html()===icon && $('#p23').html()===icon && $('#p24').html()===icon ) {
    $('#p22, #p23, #p24').addClass('won');
    alert(player + ' won!');

  } else if ($('#p23').html()===icon && $('#p24').html()===icon && $('#p25').html()===icon ) {
    $('#p23, #p24, #p25').addClass('won');
    alert(player + ' won!');

//column 1

  } else if ($('#p1').html()===icon && $('#p6').html()===icon && $('#p11').html()===icon ) {
    $('#p1, #p6, #p11').addClass('won');
    alert(player + ' won!');

  } else if ($('#p6').html()===icon && $('#p11').html()===icon && $('#p16').html()===icon ) {
    $('#p6, #p11, #p16').addClass('won');
    alert(player + ' won!');

  } else if ($('#p11').html()===icon && $('#p16').html()===icon && $('#p21').html()===icon ) {
    $('#p11, #p16, #p21').addClass('won');
    alert(player + ' won!');

//column 2

  } else if ($('#p2').html()===icon && $('#p7').html()===icon && $('#p12').html()===icon ) {
    $('#p2, #p7, #p12').addClass('won');
    alert(player + ' won!');

  } else if ($('#p7').html()===icon && $('#p12').html()===icon && $('#p17').html()===icon ) {
    $('#p7, #p12, #p17').addClass('won');
    alert(player + ' won!');

  } else if ($('#p12').html()===icon && $('#p17').html()===icon && $('#p22').html()===icon ) {
    $('#p12, #p17, #p22').addClass('won');
    alert(player + ' won!');

//column 3

  } else if ($('#p3').html()===icon && $('#p8').html()===icon && $('#p13').html()===icon ) {
    $('#p3, #p8, #p13').addClass('won');
    alert(player + ' won!');

  } else if ($('#p8').html()===icon && $('#p13').html()===icon && $('#p18').html()===icon ) {
    $('#p8, #p13, #p18').addClass('won');
    alert(player + ' won!');

  } else if ($('#p13').html()===icon && $('#p18').html()===icon && $('#p23').html()===icon ) {
    $('#p13, #p18, #p23').addClass('won');
    alert(player + ' won!');

//column 4

  } else if ($('#p4').html()===icon && $('#p9').html()===icon && $('#p14').html()===icon ) {
    $('#p4, #p9, #p14').addClass('won');
    alert(player + ' won!');

  } else if ($('#p9').html()===icon && $('#p14').html()===icon && $('#p19').html()===icon ) {
    $('#p9, #p14, #p19').addClass('won');
    alert(player + ' won!');

  } else if ($('#p14').html()===icon && $('#p19').html()===icon && $('#p24').html()===icon ) {
    $('#p14, #p19, #p24').addClass('won');
    alert(player + ' won!');

//column 5

  } else if ($('#p5').html()===icon && $('#p10').html()===icon && $('#p15').html()===icon ) {
    $('#p5, #p10, #p15').addClass('won');
    alert(player + ' won!');

  } else if ($('#p10').html()===icon && $('#p15').html()===icon && $('#p20').html()===icon ) {
    $('#p10, #p15, #p20').addClass('won');
    alert(player + ' won!');

  } else if ($('#p15').html()===icon && $('#p20').html()===icon && $('#p25').html()===icon ) {
    $('#p15, #p20, #p25').addClass('won');
    alert(player + ' won!');

//dia 1 diagonal above mid (top right to bottom left)

  } else if ($('#p3').html()===icon && $('#p7').html()===icon && $('#p11').html()===icon ) {
    $('#p3, #p7, #p11').addClass('won');
    alert(player + ' won!');

  } else if ($('#p4').html()===icon && $('#p8').html()===icon && $('#p12').html()===icon ) {
    $('#p4, #p8, #p12').addClass('won');
    alert(player + ' won!');

  } else if ($('#p8').html()===icon && $('#p12').html()===icon && $('#p16').html()===icon ) {
    $('#p8, #p12, #p16').addClass('won');
    alert(player + ' won!');

//dia 2 mid diagonal (top right to bottom left)

  } else if ($('#p5').html()===icon && $('#p9').html()===icon && $('#p13').html()===icon ) {
    $('#p5, #p9, #p13').addClass('won');
    alert(player + ' won!');

  } else if ($('#p9').html()===icon && $('#p13').html()===icon && $('#p17').html()===icon ) {
    $('#p9, #p13, #p17').addClass('won');
    alert(player + ' won!');

  } else if ($('#p13').html()===icon && $('#p17').html()===icon && $('#p21').html()===icon ) {
    $('#p13, #p17, #p21').addClass('won');
    alert(player + ' won!');

//dia 3 diagonal below mid (top right to bottom left)

  } else if ($('#p10').html()===icon && $('#p14').html()===icon && $('#p18').html()===icon ) {
    $('#p10, #p14, #p18').addClass('won');
    alert(player + ' won!');

  } else if ($('#p14').html()===icon && $('#p18').html()===icon && $('#p22').html()===icon ) {
    $('#p14, #p18, #p22').addClass('won');
    alert(player + ' won!');

  } else if ($('#p15').html()===icon && $('#p19').html()===icon && $('#p23').html()===icon ) {
    $('#p15, #p19, #p23').addClass('won');
    alert(player + ' won!');

//dia 4 diagonal above mid (top left to bottom right)

  } else if ($('#p3').html()===icon && $('#p9').html()===icon && $('#p15').html()===icon ) {
    $('#p3, #p9, #p15').addClass('won');
    alert(player + ' won!');

  } else if ($('#p2').html()===icon && $('#p8').html()===icon && $('#p14').html()===icon ) {
    $('#p2, #p8, #p14').addClass('won');
    alert(player + ' won!');

  } else if ($('#p8').html()===icon && $('#p14').html()===icon && $('#p20').html()===icon ) {
    $('#p8, #p14, #p20').addClass('won');
    alert(player + ' won!');

//dia 5 mid diagonal (top left to bottom right)

  } else if ($('#p1').html()===icon && $('#p7').html()===icon && $('#p13').html()===icon ) {
    $('#p1, #p7, #p13').addClass('won');
    alert(player + ' won!');

  } else if ($('#p7').html()===icon && $('#p13').html()===icon && $('#p19').html()===icon ) {
    $('#p7, #p13, #p19').addClass('won');
    alert(player + ' won!');

  } else if ($('#p13').html()===icon && $('#p19').html()===icon && $('#p25').html()===icon ) {
    $('#p13, #p19, #p25').addClass('won');
    alert(player + ' won!');

//dia 6 diagonal below mid (top left to bottom right)

  } else if ($('#p6').html()===icon && $('#p12').html()===icon && $('#p18').html()===icon ) {
    $('#p6, #p12, #p18').addClass('won');
    alert(player + ' won!');

  } else if ($('#p12').html()===icon && $('#p18').html()===icon && $('#p24').html()===icon ) {
    $('#p12, #p18, #p24').addClass('won');
    alert(player + ' won!');

  } else if ($('#p11').html()===icon && $('#p17').html()===icon && $('#p23').html()===icon ) {
    $('#p11, #p17, #p23').addClass('won');
    alert(player + ' won!');
  }

//check if all the squares are taken
  else if (turn === 25) {
    alert("It's a draw!")
  }
}