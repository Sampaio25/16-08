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