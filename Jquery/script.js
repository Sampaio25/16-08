//Aula 16-08

$(document).ready(function() {

    //Monitorar o click do botão #send do formulário
    $('#send').click(function(e) {
        e.preventDefault()

        //Criar as variáveis que guardarão os dados digitados
        var nome = $('#NOME').val()
        var idade = $('#IDADE').val()

        var frase = 'Olá ' + nome + ', sua idade é: ' + idade

        $('#NOME').val('')
        $('#IDADE').val('')

        $('#mensagem').append(frase)

    })

    //Monitorar quando o cursor estiver dentro do campo #NOME
    $('#NOME').focusin(function() {
        $('#mensagem').empty()
    })

})

//Aula 23-08

$(document).ready(function() {

    $('p').hide()

    $('#btn-resumo').click(function(e) {
        e.preventDefault()

        //Criar uma variável para receber status 
        let status = $(this).attr('data-status')

        $('#btn-resumo').empty()

        if (status == '1') {
            $('#btn-resumo').append('Esconder resumo')
            $('#btn-resumo').attr('data-status', '2')
        } else {
            $('#btn-resumo').append('Ver resumo')
            $('#btn-resumo').attr('data-status', '1')
        }

        $('p').toggle(2000)
    })
})