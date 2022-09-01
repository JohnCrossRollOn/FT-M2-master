let button = false;
$('#boton').click(()=>{
    if (!button){
    $.get('http://localhost:5000/amigos',(response)=>{
        button = true;
        $('#lista').empty();
        for (const user of response) {
            $(`<li>${user.name}</li>`).appendTo("#lista")
        }
    })} else {
    $('#lista').empty();
    button = false;
    }
})

$('#search').click(()=>{
    $.get('http://localhost:5000/amigos',(response)=>{
        for (const user of response) {
            if($('#input').val() == user.id){return $("#amigo").html(user.name)}
            
        }
        $("#amigo").html('Not found')
    })
})

$('#delete').click(()=>{
    $.get('http://localhost:5000/amigos',(response)=>{
        for (const user of response) {
            if($('#inputDelete').val() == user.id){
                $.ajax({
                url: `http://localhost:5000/amigos/${user.id}`,
                type: 'DELETE',
                success: function(result) {
                    console.log(result)
                    }});
                $('#lista').empty();
                button = false;
                return $("#success").html('SuccesfullyRemoved')
            }
            
        }
        $("#success").html('Not removed')
    })
})


