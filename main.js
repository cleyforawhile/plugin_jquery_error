$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true, 
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle(); // slide.Toggle() se o nosso 'nav' não estiver sido exibido
        //ele vai executar um slideDown para exibi-lo e depois na segunda vez que for clicado
        //no menu, ele vai verificar se o slideDown já foi executado, se sim ele vai execu
        //tar o slideUP, através do slideToggle, ele fará tudo isso para nós
    })



    //$('#telefone').mask('(00) 00000-0000') //Serve pra limitar os numeros no tel
    // $('#telefone') aqui colocamos o ID do elemento do html
    // e se fosse data de nascimento? seria assim: $('#telefone').mask('00/00/0000')
    //E caso quisermos usar o placeholder podemos fazer isso também, mas dessa forma:
    // $('#telefone').mask('(00) 00000-0000', { placeholder: '_/_/___' })
    
    $('#telefone').mask('(00) 00000-0000')

//Para adicionarmos letras e numeros (ex: se fosse uma placa) usamos dessa forma:
// $('#telefone').mask('SSS-0000', { placeholder: 'ABC-1234'})
    // é só ir testando

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
        },
            telefone: {
                required: true
        },
        mensagem: {
            required: true,
        },
        veiculoDeInteresse: {
            required: false;
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposInconrretos = validador.numberOfInvalids();
        if (camposInconrretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

       const nomeVeiculo =  alert $(this)parent().find('h3').text();

       $('#veiculo-interesse').val(nomeVeiculo); 

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})