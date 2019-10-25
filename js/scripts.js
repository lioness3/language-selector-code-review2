$(document).ready(function() {

$(".quiz").submit(function(event){
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
var puzzle = $("#puzzle;checked").val();
//question4
var martini = $("#martini:checked").val();
var coffee = $("#coffee:checked").val();
var tea = $("#tea:checked").val();
//question5
var office = $("#office:checked").val();
var jokers = $("#jokers:checked").val();
var thrones = $("#thrones:checked").val();


if (noLight) {
  $("#vampire").show();
}
if(light && purple && alien && coffee && office ){
alert("JAVASCRIPT");

}else {
  alert("NO!");
}

event.preventDefault();
});
});
