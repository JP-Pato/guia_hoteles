$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });
    $("#contacto").on("show.bs.modal", function (e){
        console.log("el modal se esta mostrando");
    
        $("#contactoBtn").removeClass("btn-success");
        $("#contactoBtn").addClass("btn-primary");
    
        $("#contactoBtn").prop('disabled', true);
    });
        
    $("#contacto").on("hidden.bs.modal", function (e){
        console.log("el modal se esta mostrando");
        $("#contactoBtn").addClass("btn-success");
        $("#contactoBtn").prop('disabled', false);
    });
    
});