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

// Exemplos de uso:
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Shifu", 60, "monge");
const heroi4 = new Heroi("Hanzo", 25, "ninja");

heroi1.atacar(); // O guerreiro atacou usando usou espada
heroi2.atacar(); // O mago atacou usando usou magia
heroi3.atacar(); // O monge atacou usando usou artes marciais
heroi4.atacar(); // O ninja atacou usando usou shuriken
