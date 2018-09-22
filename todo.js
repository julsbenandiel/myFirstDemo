//NOTES:

//stopPropagation: get rid of event bubbling


$('document').ready(function(){
    //$('.remove').css('display','none');


    $('.parent-ul').on('click','li',function(){
        $(this).toggleClass('clicked');
    })

    //REMOVE ITEMS OF UL
    $('ul').on('click','.remove',function(e){
        $(this).parent().fadeOut(300,function(){
            $(this).remove();
        });
        console.log('item removed');
        e.stopPropagation();
    })

    //ADD LI TO UL
    $('input[type="text"]').keypress(function(e){
        if (e.which === 13){
            var todoText = $(this).val();
            $(this).val("");
            $('.parent-ul').append(`<li><span class="remove"><i class="far fa-trash-alt bg-danger mr-3"></i></span>${todoText}</li`);
        }       
    });

 }) 



