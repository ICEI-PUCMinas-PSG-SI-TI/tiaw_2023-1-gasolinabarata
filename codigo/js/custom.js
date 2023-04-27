
$(function () {
  $(".main-layout").show().css({ "opacity": "0.5" });

  setTimeout(function () {
    $('.loader_bg').fadeToggle();
    $(".main-layout").show().css({ "opacity": "1.0" });
  }, 1500);
});

const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
allEventListners();

function allEventListners() {
  if (navToggler != null) {
    navToggler.addEventListener('click', togglerClick);
  }
  navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

let listaPostos = [
  {
    id: 1,
    logo: "images/PetrobrasLogo.png",
    nome: "Posto Zeppelin",
    rua: "Avenida Presidente Juscelino Kubitschek",
    bairro: "Presidente",
    numero: 3050,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.560
    }, {
      Tipo: 2,
      Valor: 4.560
    }, {
      Tipo: 3,
      Valor: 5.560
    }, {
      Tipo: 4,
      Valor: 3.560
    }]
  },
  {
    id: 2,
    logo: "images/IpirangaLogo.png",
    nome: "Posto Phoenix Ltda",
    rua: "Platina",
    bairro: "Prado",
    numero: 999,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.540
    }, {
      Tipo: 2,
      Valor: 4.540
    }, {
      Tipo: 3,
      Valor: 5.540
    }, {
      Tipo: 4,
      Valor: 3.540
    }]
  },
  {
    id: 3,
    logo: "images/ShellLogo.png",
    nome: "Posto Estação BH",
    rua: "Avenida Coronel Jose Benjamim",
    bairro: "Padre Eustáquio",
    numero: 17,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.530
    }, {
      Tipo: 2,
      Valor: 4.530
    }, {
      Tipo: 3,
      Valor: 5.530
    }, {
      Tipo: 4,
      Valor: 3.530
    }]
  },
  {
    id: 4,
    logo: "images/PetrobrasLogo.png",
    nome: "Posto Tereza Cristina",
    rua: "Avenida Cristiano Machado",
    bairro: "Heliópolis",
    numero: 10025,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.520
    }, {
      Tipo: 2,
      Valor: 4.520
    }, {
      Tipo: 3,
      Valor: 5.520
    }, {
      Tipo: 4,
      Valor: 3.520
    }]
  },
  {
    id: 5,
    logo: "images/IpirangaLogo.png",
    nome: "Posto Mem de Sá",
    rua: "Avenida Tereza Cristina",
    bairro: "Carlos Prates",
    numero: 820,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.510
    }, {
      Tipo: 2,
      Valor: 4.510
    }, {
      Tipo: 3,
      Valor: 5.510
    }, {
      Tipo: 4,
      Valor: 3.510
    }]
  },
  {
    id: 5,
    logo: "images/ShellLogo.png",
    nome: "Posto Serrano",
    rua: "Avenida Mem de Sa",
    bairro: "Santa Efigênia",
    numero: 140,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.500
    }, {
      Tipo: 2,
      Valor: 4.500
    }, {
      Tipo: 3,
      Valor: 5.500
    }, {
      Tipo: 4,
      Valor: 3.500
    }]
  },
  {
    id: 6,
    logo: "images/PetrobrasLogo.png",
    nome: "Posto Hiper Lube",
    rua: "Avenida Abílio Machado",
    bairro: "Alípio de Melo",
    numero: 3123,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.490
    }, {
      Tipo: 2,
      Valor: 4.490
    }, {
      Tipo: 3,
      Valor: 5.490
    }, {
      Tipo: 4,
      Valor: 3.490
    }]
  },
  {
    id: 7,
    logo: "images/IpirangaLogo.png",
    nome: "Posto Almada 2",
    rua: "Avenida Petrolina",
    bairro: "Sagrada Família",
    numero: 640,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.480
    }, {
      Tipo: 2,
      Valor: 4.480
    }, {
      Tipo: 3,
      Valor: 5.480
    }, {
      Tipo: 4,
      Valor: 3.480
    }]
  },
  {
    id: 8,
    logo: "images/ShellLogo.png",
    nome: "Posto MM",
    rua: "Rua Jacui",
    bairro: "Ipiranga",
    numero: 3880,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.470
    }, {
      Tipo: 2,
      Valor: 4.470
    }, {
      Tipo: 3,
      Valor: 5.470
    }, {
      Tipo: 4,
      Valor: 3.470
    }]
  },
  {
    id: 9,
    logo: "images/PetrobrasLogo.png",
    nome: "Posto Barbosa",
    rua: "Rua Grão Mogol",
    bairro: "Sion",
    numero: 953,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.460
    }, {
      Tipo: 2,
      Valor: 4.460
    }, {
      Tipo: 3,
      Valor: 5.460
    }, {
      Tipo: 4,
      Valor: 3.460
    }]
  },
  {
    id: 10,
    logo: "images/IpirangaLogo.png",
    nome: "Posto MG",
    rua: "Avenida Presidente Carlos Luz",
    bairro: "Caiçaras",
    numero: 2263,
    tiposCombustiveis: [{
      Tipo: 1,
      Valor: 7.450
    }, {
      Tipo: 2,
      Valor: 4.450
    }, {
      Tipo: 3,
      Valor: 5.450
    }, {
      Tipo: 4,
      Valor: 3.450
    }]
  },
];

function buscarPostos(tipoCombSelecionado) {
  $('.listaPostos').empty();

  var enderecoSelecionado = $('#imputEndereco').val();
  var tipoSelecionado = $('#selectTipoCombustivel').val();

  if (parametroValido(enderecoSelecionado) || parametroValido(tipoSelecionado)) {

    var listaPostosAux = [];
    for (let i = 0; i < listaPostos.length; i++) {
      if (listaPostos[i].rua.toUpperCase().match(enderecoSelecionado.toUpperCase())) {
        listaPostosAux.push(listaPostos[i]);
      }
      if (listaPostos[i].bairro.toUpperCase().match(enderecoSelecionado.toUpperCase())) {

        var itemExiste = listaPostosAux.find((element) => element.id === listaPostos[i].id);
        if (!parametroValido(itemExiste)) {
          listaPostosAux.push(listaPostos[i]);
        }
      }
    }
    listaPostos = listaPostosAux;

    if (tipoCombSelecionado == 1) {
      listaPostos.sort((a, b) => a.tiposCombustiveis.find((element) => element.Tipo === 1).Valor - b.tiposCombustiveis.find((element) => element.Tipo === 1).Valor);
    } else if (tipoCombSelecionado == 2) {
      listaPostos.sort((a, b) => a.tiposCombustiveis.find((element) => element.Tipo === 2).Valor - b.tiposCombustiveis.find((element) => element.Tipo === 2).Valor);
    } else if (tipoCombSelecionado == 3) {
      listaPostos.sort((a, b) => a.tiposCombustiveis.find((element) => element.Tipo === 3).Valor - b.tiposCombustiveis.find((element) => element.Tipo === 3).Valor);
    } else if (tipoCombSelecionado == 4) {
      listaPostos.sort((a, b) => a.tiposCombustiveis.find((element) => element.Tipo === 4).Valor - b.tiposCombustiveis.find((element) => element.Tipo === 4).Valor);
    }


    for (let i = 0; i < listaPostos.length; i++) {
      var li = `<li id='${listaPostos[i].id}' class="col-md-12">` +
        '	<div style="display: flex;" class="col-md-9">' +
        '		<div>' +
        `			<button type='button' id='item_${listaPostos[i].id}' onclick="AdicionarFavorito(this.id)" style="background: transparent;">` +
        '				<img src="images/estrela.png" style="width:50px; margin-top: 25px;" alt="">' +
        '			</button>' +
        '		</div>' +
        '	<div>' +
        `		<img src="${listaPostos[i].logo}" alt="">` +
        '	</div>' +
        '	<div style="display: block; margin-top: 20px;">' +
        `		<h1>${listaPostos[i].nome}</h1>` +
        `		<p>Endereço: ${listaPostos[i].rua}, ${listaPostos[i].numero}, bairro: ${listaPostos[i].bairro}</p>` +
        '	</div>' +
        '	</div>' +
        '		<div class="col-md-3">' +
        '		<div class="valorCombustivel">';
      if (tipoCombSelecionado == 1) {
        var preco = listaPostos[i].tiposCombustiveis.find((element) => element.Tipo === 1);

        li += ` 	  <h3>R$ ${preco.Valor.toFixed(3).replace('.', ',')}</h3>` +
          '		</div>' +
          '	</div>' +
          '</li>';
      } else if (tipoCombSelecionado == 2) {
        var preco = listaPostos[i].tiposCombustiveis.find((element) => element.Tipo === 2);

        li += ` 	  <h3>R$ ${preco.Valor.toFixed(3).replace('.', ',')}</h3>` +
          '		</div>' +
          '	</div>' +
          '</li>';
      }
      else if (tipoCombSelecionado == 3) {
        var preco = listaPostos[i].tiposCombustiveis.find((element) => element.Tipo === 3);

        li += ` 	  <h3>R$ ${preco.Valor.toFixed(3).replace('.', ',')}</h3>` +
          '		</div>' +
          '	</div>' +
          '</li>';
      } else if (tipoCombSelecionado == 4) {
        var preco = listaPostos[i].tiposCombustiveis.find((element) => element.Tipo === 4);

        li += ` 	  <h3>R$ ${preco.Valor.toFixed(3).replace('.', ',')}</h3>` +
          '		</div>' +
          '	</div>' +
          '</li>';
      }

      $('.listaPostos').append(li);
    }
  }
}

function parametroValido(params) {
  if (params != null && params != '' && params != undefined) {
    return true;
  }
  return false;
}

let listaFavoritos = [];

function AdicionarFavorito(idBotao) {
  let item = listaPostos.find(x => x.id == idBotao.replace('item_', ''))

  $(`#${idBotao} img`).attr("src", "images/Unfavoritepng.png");

  if (!parametroValido(listaFavoritos.find(x => x.id == idBotao.replace('item_', '')))) {
    listaFavoritos.push(item);
  }
  localStorage.clear();
  localStorage.setItem("favList", JSON.stringify(listaFavoritos));
}

function RemoverFavorito(idBotao) {
  $(`#listaFavoritos #${idBotao.replace('item_', '')}`).remove()

  listaCarregada = JSON.parse(localStorage.getItem("favList") || "[]");
  let item = listaCarregada.find(x => x.id == idBotao.replace('item_', ''))

  const index = listaCarregada.indexOf(item);
  if (index > -1) {
    listaCarregada.splice(index, 1);
  }

  localStorage.clear();
  localStorage.setItem("favList", JSON.stringify(listaCarregada));
}

function montarListaFavoritos() {
  $('#listaFavoritos').empty();


  listaCarregada = JSON.parse(localStorage.getItem("favList") || "[]");

  listaCarregada.sort((a, b) => a.tiposCombustiveis.find((element) => element.Tipo === 1).Valor - b.tiposCombustiveis.find((element) => element.Tipo === 1).Valor);

  for (let i = 0; i < listaCarregada.length; i++) {
    var li = `<li id='${listaCarregada[i].id}' class="col-md-12">` +
      '	<div style="display: flex;" class="col-md-9">' +
      '		<div>' +
      `			<button type='button' id='item_${listaCarregada[i].id}' onclick="RemoverFavorito(this.id)" style="background: transparent;">` +
      '				<img src="images/Unfavoritepng.png" style="width:50px; margin-top: 25px;" alt="">' +
      '			</button>' +
      '		</div>' +
      '	<div>' +
      `		<img src="${listaCarregada[i].logo}" alt="">` +
      '	</div>' +
      '	<div style="display: block; margin-top: 20px;">' +
      `		<h1>${listaCarregada[i].nome}</h1>` +
      `		<p>Endereço: ${listaCarregada[i].rua}, ${listaCarregada[i].numero}, bairro: ${listaCarregada[i].bairro}</p>` +
      '	</div>' +
      '	</div>' +
      '		<div class="col-md-3">' +
      '		<div class="valorCombustivel">';

    var preco1 = listaCarregada[i].tiposCombustiveis.find((element) => element.Tipo === 1);
    var preco2 = listaCarregada[i].tiposCombustiveis.find((element) => element.Tipo === 2);
    var preco3 = listaCarregada[i].tiposCombustiveis.find((element) => element.Tipo === 3);
    var preco4 = listaCarregada[i].tiposCombustiveis.find((element) => element.Tipo === 4);

    li += `<h1>Diesel R$ ${preco1.Valor.toFixed(3).replace('.', ',')} Etanol R$ ${preco2.Valor.toFixed(3).replace('.', ',')} Gasolina  R$ ${preco3.Valor.toFixed(3).replace('.', ',')} Gnv R$ ${preco4.Valor.toFixed(3).replace('.', ',')}</h3>` +
      '		</div>' +
      '	</div>' +
      '</li>';

    $('#listaFavoritos').append(li);
  }
}

function calcularValorCombustivel(precoAlcool, precoGasolina) {
  var resultado = Math.round(precoAlcool) / Math.round(precoGasolina);
  if (resultado < 0.7) {
    $('#alcoolVantagem').css('display', 'block');
    $('#gasolinaVantagem').css('display', 'none');
  }
  else {
    $('#gasolinaVantagem').css('display', 'block');
    $('#alcoolVantagem').css('display', 'none');
  }
  return
}

let listaUsuarios = [
  {
    nome: "Admin",
    email: "admin@gmail.com",
    senha: "123"
  }
]

function cadastro(nomeUser, emailUser, senhaUser, confirmaSenhaUser) {
  if (senhaUser != confirmaSenhaUser) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Senhas não Conferem!',
    })
  } else {
    var listaUsersCriados = JSON.parse(localStorage.getItem("usersList") || "[]");
    let usuarioExistente = listaUsersCriados.find(x => x.nome == nomeUser && x.email == emailUser && x.senha == senhaUser)

    if (usuarioExistente != null && usuarioExistente != undefined && usuarioExistente != null) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuário já Existe!',
      })
    } else {
      var dados = {
        "nome": nomeUser,
        "email": emailUser,
        "senha": senhaUser
      }
      listaUsuarios.push(dados);
      localStorage.setItem("usersList", JSON.stringify(listaUsuarios));
      return window.location.href = 'Login.html'
    }
  }
}

function login(emailUser, senhaUser) {
  var listaUsersCriados = JSON.parse(localStorage.getItem("usersList") || "[]");
  let usuarioESenhaValidos = listaUsersCriados.find(x => x.email == emailUser && x.senha == senhaUser)

  if (usuarioESenhaValidos != null && usuarioESenhaValidos != undefined && usuarioESenhaValidos != null) {
    return window.location.href = 'Index.html'
  } else {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuário ou senha inválidos!',
    })
  }
}