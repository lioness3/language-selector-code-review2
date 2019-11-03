$(document).ready(function() {
  $(".quiz").submit(function(event){

    event.preventDefault();
//question1
    var light = $("#light:checked").val();
    var noLight = $("#noLight:checked").val();
    var sunglasses = $("#sunglasses:checked").val();
//question2
    var orange = $("#orange1:checked").val();
    var purple = $("#purple2:checked").val();
    var green = $("#green3:checked").val();
//question3
    var alien = $("#alien:checked").val();
    var money = $("#money:checked").val();
    var puzzle = $("#puzzle:checked").val();
//question4
    var martini = $("#martini:checked").val();
    var coffee = $("#coffee:checked").val();
    var tea = $("#tea:checked").val();
//question5
    var office = $("#office:checked").val();
    var jokers = $("#jokers:checked").val();
    var thrones = $("#thrones:checked").val();
//directs webpage what to alert user.
    // var python = $("#hiddenPython").show();
    // var javaScript = $("#hiddenJavascript").show();
    // var ruby = $("#hiddenRuby").show();
    // var hideQuiz = $(".quiz").hide();

    $(".quiz").toggle();
    $('body').removeClass();

      if (noLight) {
        $("#vampire").slideDown();
      }
      else if (money && coffee) {
        $("#hiddenPython").fadeToggle();
        $('body').addClass('python');
      }
      else if (light && purple && alien && coffee && office || thrones ){
        $("#hiddenJavascript").fadeToggle();
        $('body').addClass('javascript');
      }
      else if (light || sunglasses && green || orange && alien || puzzle && martini || coffee || tea && office || thrones || jokers) {
        $("#hiddenRuby").fadeToggle();
        $('body').addClass('ruby');
      }else {
        alert("You might want to consider following instructions or choosing a different website to view!!!");
        $('body').addClass('followDirections');
      };
    });

    $('button.btn-return').on('click', function() {
      $('#resultsContainer > div').hide();
      $(".quiz").toggle();
    });
  });
