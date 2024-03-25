## O que é um caso de uso?

Alistair Cockburn em seu livro, Writing Effective Use Cases, resume em uma frase o que é um caso de uso:

A use case is a description of the possible sequences of interactions between the system under discussion and its external actors, related to a particular goal. Cockburn, 2000

Ele amplia essa frase da seguinte forma:

- Um caso de uso descreve a interação e as responsabilidades de um sistema com agentes externos ou atores.
- Os atores podem ser uma pessoa, um grupo de pessoas ou um sistema de computador. O caso de uso é associado ao objetivo de um ator em particular, chamado de ator primário do caso de uso.
- Um caso de uso descreve vários conjuntos de interações que podem ocorrer entre vários agentes externos, ou atores, enquanto o ator principal estiver em busca daquele objetivo.
- Também descreve as responsabilidades do sistemas a ser desenvolvido, sem detalhar profundamente técnicas de implementação ou componentes do sistema.
- Cada possível sequencia de interações é chamada de cenário.
- Um caso de uso reúne em si todos os cenários relatados para o objetivo do ator primário, incluindo ambos, aquele em que o objetivo é atingido e outro em que o objetivo deve ser deixado de lado.

## Clean Architecture e os casos de uso

Dentro da Clean Architecture, Uncle Bob inclui os casos de uso como uma parte importante para a arquitetura da aplicação. Em um post em seu blog, com o título "Screaming Architecture", ele diz o seguinte:

A razão pela qual boas arquiteturas são centradas em casos de uso é para que os arquitetos possam descrever com segurança as estruturas que dão suporte a esses casos de uso, sem se comprometerem com estruturas, ferramentas e ambiente.
Novamente, considere os planos para uma casa.
A primeira preocupação do arquiteto é garantir que a casa seja utilizável, não é garantir que a casa seja de tijolos.
Na verdade, o arquiteto se esforça para garantir que o proprietário possa decidir mais tarde sobre tijolos, pedra ou cedro, depois que os planos garantirem que os casos de uso sejam atendidos.

Essa base nos direciona a como iremos fazer nossas implementações no projeto de hoje.

Caso queira se aprofundar mais no assunto, eu recomendo fortemente a leitura do livro Clean Architecture do próprio Uncle Bob, bem como o livro Writing Effective Use Cases do Alistair Cockburn.

## Conhecendo os casos de uso que vamos implementar hoje

Vamos começar com a história de usuário de um saque 24 horas:
Como cliente do banco Denarius, possuo acesso a caixas eletrônicos 24 horas. Através de um caixa eletrônico 24 horas disponível em vários pontos da cidade, posso efetuar um saque de R$ 2000,00 entre 6h e 22h e fora desses horários, posso efetuar um saque de até R$ 500,00. Para fazer o saque, é necessário inserir o cartão do meu banco, informar minha senha, informar o valor e aguardar a saída do dinheiro. Caso eu não possua saldo, é mostrado em tela o meu saldo atual bem como um botão para fazer outro saque. Caso o valor do saque exceda o valor máximo para horário, é mostrada uma informação com o valor máximo disponível para saque naquele momento.

Vamos a uma breve analise de quem são as principais entidades:

- Cliente ou Correntista
- Conta bancária
- Transação bancária

O caso de uso em questão é o de efetuar um saque. Vamos descrever com mais detalhes esse caso de uso:

Caso de uso UC:0001 - Efetuar saque
Ator primário: Cliente do banco
Sistema: Sistema bancário 24 horas

Cenário de Sucesso:
1 - O Cliente chega a um caixa eletrônico e insere seu cartão;
2 - O Sistema solicita que seja informada a senha;
3 - O Sistema verifica se a senha é válida;
4 - O Cliente acessa a opção de saque;
5 - O Cliente informa o valor desejado para o saque;
6 - O Sistema valida se existe saldo;
7 - O Sistema atualiza o saldo do caixa eletrônico;
8 - O Sistema libera o dinheiro no caixa eletrônico;
9 - O Sistema registra a transação efetuando débito do valor no saldo;
10 - O Cliente retira o dinheiro;
11 - O Sistema informa em tela o saldo atual;
12 - O Cliente remove o cartão;
13 - O Sistema encerra o atendimento;

Extensões:
1.1 - O cartão não é reconhecido;
3.1 - A senha está incorreta;
6.1 - O saldo é insuficiente;
  6.1.1 - É mostrada a mensagem "Saldo Insuficiente. R$ XXX,XX";
  6.1.2 - É solicitado se o Cliente deseja informar outro valor ou encerrar o atendimento;
6.2 - O valor disponível no caixa eletrônico é insuficiente;
  6.2.1 - É mostrada a mensagem "Saldo insuficiente neste terminal."
  6.2.2 - É solicitado se o Cliente deseja informar outro valor ou encerrar o atendimento;

## Transformando nosso caso de uso em uma história técnica

Podemos usar a história de usuário como descrição da nossa história técnica, incluindo nossos casos de uso como tarefas da história e em seguida dividindo em sub tarefas os cenários de extensão, que são os cenários de exceção a uma ou mais interações do usuário.

Poderíamos criar algo nesse sentido:

### HISTÓRIA

HIST:PRJ-0001 - Saque em caixa eletrônico 24 horas

Segue a história do usuário:
<História do usuário já descrita anteriormente>

### CASOS DE USO RELACIONADOS

- UC:0001 - Efetuar saque
- UC:0002 - Atualizar saldo caixa eletrônico ?
- UC:0003 - Atualizar saldo da conta ?
- UC:0004 - Adicionar uma transação ?

### TASKS

- TASK:PRJ-0001 - Implementar o caso de uso de efetuar saque
- TASK:PRJ-0002 - Implementar validação para quando o cartão não é reconhecido (UC:0001:1.1);
- TASK:PRJ-0003 - Implementar validação para quando a senha está incorreta (UC:0001:3.1);
- TASK:PRJ-0004 - Implementar validação para saldo insuficiente na conta (UC:0001:6.1)
- TASK:PRJ-0005 - Implementar validação para quando o valor no caixa eletrônico é insuficiente (UC:0001:6.2)
