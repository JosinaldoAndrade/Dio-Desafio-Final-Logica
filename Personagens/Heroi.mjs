export default class Heroi {

    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }

    atacar(){
        let ataque;

        switch(UPPER(this.tipo)){

            case "MAGO" : {
                ataque = "usou magia" ;
                break; 
            }
            case "GUERREIRO " : {
                ataque = "usou espada";
                break; 
            }
            case "MONGE" : {
                ataque = "(usou artes marciais" ;
                break;
            }
            case "NINJA" : {
                ataque = "usou shuriken";
                break; 
            }
            default : {
                ataque = "ataca padrão";
            }

        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)

          
    }
 

}