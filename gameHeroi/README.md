🕹️ **Projeto: Classe de Herói em JavaScript**

---

📖 Descrição
<br>
<br>
Este projeto foi desenvolvido como parte de um desafio do curso de Lógica de Programação com o professor Felipe Aguiar.
O exercício consiste em criar uma classe genérica chamada Heroi, representando personagens de uma aventura com propriedades e métodos que simulam ataques diferentes conforme o tipo de herói.

<br>

🎯 **Objetivo**

<br>

Criar uma classe Heroi com as seguintes propriedades:

nome
idade
tipo: guerreiro, mago, monge ou nija

Implementar o método atacar(), que deve exibir a mensagem:

Código
O {tipo} atacou usando {ataque}
O ataque varia conforme o tipo do herói:

mago → usou magia

guerreiro → usou espada

monge → usou artes marciais

ninja → usou shuriken

🛠️ Tecnologias Utilizadas
JavaScript (ES6+)

Conceitos de:

Variáveis

Estruturas de decisão (if/else)

Funções

Classes e Objetos

📂 Estrutura do Código
javascript
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo.toLowerCase() === "mago") {
      ataque = "usou magia";
    } else if (this.tipo.toLowerCase() === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo.toLowerCase() === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo.toLowerCase() === "ninja") {
      ataque = "usou shuriken";
    } else {
      ataque = "atacou de forma desconhecida";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
🚀 Exemplos de Uso
javascript
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Shifu", 60, "monge");
const heroi4 = new Heroi("Hanzo", 25, "ninja");

heroi1.atacar(); // O guerreiro atacou usando usou espada
heroi2.atacar(); // O mago atacou usando usou magia
heroi3.atacar(); // O monge atacou usando usou artes marciais
heroi4.atacar(); // O ninja atacou usando usou shuriken
🏆 Resultado Esperado
Ao executar o código, o console exibirá mensagens como:

Código
O guerreiro atacou usando usou espada
O mago atacou usando usou magia
O monge atacou usando usou artes marciais
O ninja atacou usando usou shuriken
📌 Conclusão
Este desafio reforça conceitos fundamentais de programação orientada a objetos e estruturas de decisão em JavaScript.
Foi uma excelente prática proposta pelo professor Felipe Aguiar no curso de Lógica de Programação.
