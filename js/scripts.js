$(document).ready(function() {

$(".quiz").submit(function(event){

var light = $("#light:checked").val();
var noLight = $("#noLight:checked").val();
var sunglasses = $("#sunglasses:checked").val();
var orange = $("#orange1:checked").val();
var purple = $("#purple2:checked").val();
var green = $("#green3:checked").val();

var alien = $("#alien:checked").val();


var coffee = $("#coffee:checked").val();

var office = $("#office:checked").val();

if(light && purple && alien && coffee && office ){
prompt("JAVASCRIPT");

}else {
  alert("NO!")
}

event.preventDefault();
});
});
