$(document).ready(function () {
    $('.btn-new').click(function (e) { 
        e.preventDefault();
        
        $('.modal-title').append('Cadastro de um novo comprador')
        $('.modal-body').empty()
        $('.modal-body').load('src/comprador/view/form-comprador.html')
        
        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modal-comprador').modal('show')
    });
});