$(document).ready(function(){
    $('.btn-save').click(function(e){
        e.preventDefault();

        let dados = $('#form-comprador').serialize()
        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: "POST",
            url: "src/comprador/model/save-comprador.php",
            data: "dados",
            dataType: "json",
            assync: true,
            success: function (response) {
                Swal.fire({
                    title: 'Sistema Para Gerenciamento de sorteios',
                    text: response.mensagem,
                    icon: response.tipo,
                    confirmButtonText: 'OK'
                })
                $('#modal-comprador').modal('hide')
                $('#table-comprador').DataTable().ajax.reload() 
            }
        })
    })
})