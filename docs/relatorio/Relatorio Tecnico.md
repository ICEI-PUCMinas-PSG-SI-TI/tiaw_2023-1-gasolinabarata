# Informações do Projeto
`Gas Low Cost`  
O aplicativo está sendo desenvolvido com o intuito de buscar e filtrar postos de combustíveis. O alto valor do combustível tem sido um desafio para população, principalmente para quem usa como ferramenta de trabalho.

`CURSO` 

Sistemas de Informação

## Participantes

> Os membros do grupo são: 
> Daniel Ribeiro
> Leonardo Bisco
> Sâmela Carvalho
> Victor Vieira

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas](#personas)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
- [Projeto da Solução](#projeto-da-solução)
  - [Wireframes](#wireframes)
  - [Mapa de navegação](#mapa-de-navegação)
- [Conclusões](#avaliação-da-aplicação)
  
# Introdução

## Problema

A Gas Low Cost é uma plataforma web para consultas de preços de combustíveis. Buscamos melhorar nossa tecnologia e parcerias para aumentar o engajamento com nossos usuários. Você pode consultar preços praticados nos postos da cidade de Belo Horizonte próximos a você. Os preços dos combustíveis são atualizados com informações dos usuários e parceiros.

## Objetivos

Fornecer aos usuários informações confiáveis sobre os custos dos postos de gasolina locais, para que eles possam economizar dinheiro em combustível.
Facilitar a localização de postos de gasolina em uma determinada área que tenham custos reduzidos.
Criar uma base de dados completo e atualizado de postos de gasolina com custos mais baratos, a fim de auxiliar os usuários a tomar decisões conscientes no abastecimento de seus veículos.
Fornecer ferramentas de navegação que tornem simples para os clientes localizar os postos de gasolina locais com as melhores ofertas.
Oferecer aos usuários uma calculadora para verificar qual tipo de combustivel compensa utilizar.

## Público-Alvo

Os motoristas que desejam economizar nos custos de combustível seriam o mercado-alvo do produto. As pessoas que dirigem com frequência a negócios, viagens ou atividades diárias e procuram postos de gasolina locais com custos mais baixos podem se enquadrar nessa categoria. Além disso, motoristas que desejam realizar uma pesquisa preliminar para localizar postos de gasolina com preços reduzidos antes de iniciar uma viagem mais longa. Empresas com frotas de automóveis que buscam redução de custos também podem fazer parte do mercado-alvo.
 
# Especificações do Projeto

O site se concentrará em fornecer detalhes sobre postos de gasolina mais baratos próximos ao cliente. As informações que podem ser exibidas na página incluem algumas das seguintes:
Um campo de pesquisa onde os usuários podem procurar postos de gasolina em sua área;
Uma lista de postos de gasolina com preços mais baratos juntamente com o custo do combustível em cada posto;
Uma lista de postos favoritos do usuario 
Uma calculdora pra comparar se é melhor abastecer Gasolina ou Alcool
Detalhes adicionais sobre os postos de gasolina, incluindo horário de funcionamento e métodos de pagamento aceitos.

Técnicas e recursos, incluindo HTML, CSS e JavaScript, serão usados para implementar essas funcionalidades. A página será organizada usando HTML e seus elementos serão estilizados usando CSS para torná-la esteticamente agradável e fácil de usar. A página será interativa graças ao JavaScript, que permite a interação do usuário com os recursos oferecidos e atualizações sem exigir o recarregamento completo da página.

## Personas

As personas estão como imagem no seguinte link https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw_2023-1-gasolinabarata/tree/comentarios/docs/relatorio/images

https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw_2023-1-gasolinabarata/blob/comentarios/docs/relatorio/images/Persona1.jpg
https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw_2023-1-gasolinabarata/blob/comentarios/docs/relatorio/images/Persona2.jpg
https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw_2023-1-gasolinabarata/blob/comentarios/docs/relatorio/images/Persona3.jpg

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                             |PARA ... `MOTIVO/VALOR`                                                      |
|--------------------|----------------------------------------------------------------|-----------------------------------------------------------------------------|
|Usuário do sistema  | Criar um Usuário                                               | Usuario ter acesso ao sistema                                               |
|Usuário do sistema  | Buscar postos de gasolina  por tipo ou local                   | Acessar a base de postos mais proximos                                      |
|Usuário do sistema  | Calcular se compensa mais abastecer Alcool ou Gasolina         | Verifiar qual é o melhor tipo de combustivel para abastecer                 |
|Usuário do sistema  | Ser possivel deslogar do sistema                               | Sair do sistema                                                             |
|Usuário do sistema  | Ter possibilidade de entrar em contato com desenvolvedores     | Acessar formulario de contatos e se comunicar com desenvolvedores           |
|Usuário do sistema  | Ter acesso a página de informações sobre a empresa             | Acessar informações sobre a empresa seus objetivos e time de desenvolvedores|
|Usuário do sistema  | Buscar dados de localizcao digitando CEP                       | Acessar informações sobre endereço utiliznado apis do correios              |


## Requisitos

A tabela que segue apresenta os requisitos funcionais do projeto. 

### Requisitos Funcionais

|ID    | Descrição do Requisito                                             | Prioridade |
|------|--------------------------------------------------------------------|------------|
|RF-001| Permitir criar um Usuário                                          | ALTA       | 
|RF-002| Permitir Buscar postos de gasolina  por tipo ou local              | ALTA       | 
|RF-003| Criar calculadora se compensa mais abastecer Alcool ou Gasolina    | MEDIA      | 
|RF-004| Deslogar usuario do sistema                                        | ALTA       | 
|RF-005| Criação de formulario para entrar em contato                       | BAIXA      | 
|RF-006| Criação de página de informações sobre a empresa                   | ALTA       | 
|RF-007| Validar dados ao logar                                             | ALTA       | 
|RF-008| Validar dados ao tentar criar usuario que já existe                | ALTA       | 
|RF-009| Autopreenchimento de dados buscando dados da api do correiso       | BAIXA      | 


# Projeto da Solução
Técnicas e recursos, incluindo HTML, CSS e JavaScript, Jquery e SweetAlert2 serão usados para implementar essas funcionalidades. A página será organizada usando HTML e seus elementos serão estilizados usando CSS para torná-la esteticamente agradável e fácil de usar. A página será interativa graças ao JavaScript e JQuery, que permite a interação do usuário com os recursos oferecidos e atualizações sem exigir o recarregamento completo da página, SweetAlert2 utilizado para emitir alertas visuais ao usuario.

## Wireframes

Wireframes estão como imagem no seguinte link [https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw_2023-1-gasolinabarata/tree/comentarios/docs/relatorio/images]

https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw_2023-1-gasolinabarata/blob/comentarios/docs/relatorio/images/Mockup1.jpg
https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw_2023-1-gasolinabarata/blob/comentarios/docs/relatorio/images/Mockup2.jpg
https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw_2023-1-gasolinabarata/blob/comentarios/docs/relatorio/images/Mockup3.jpg
https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw_2023-1-gasolinabarata/blob/comentarios/docs/relatorio/images/Mockup4.jpg

## Mapa de navegação



# Conclusões

......  COLOQUE AQUI O SEU TEXTO ......

> Finalize escrevendo um ou dois parágrafos para relembrar o objetivo do projeto, 
> o que foi possível alcançar e o que ficou para um trabalho futuro, e relembrando
> as principais dificuldes encontradas e como foi possível contorná-las. 


