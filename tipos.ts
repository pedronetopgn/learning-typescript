// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 22;
const avaliacao: number = 8.5;

// String
const nome: string = 'Pedro Gonçalves';

//Array
const idades: number[] = [22,12,31,53];
const idades2: Array<number> = [23,23,12,11,44];

// Tuple
let jogadores: [string, string, string, number[]];
jogadores = ['Pedro', 'Lucas', 'Jhen', [12,12,14,15]];

//Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Pendente;

// Any
const retornoDaApi: any[] = [123, 'Pedro', false];
const retornoDaApi2: any = {
    //...
};

// Void
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //....
}
criar({
    propriedade: 1,
})

// Never
function loopInfinito(): never {
    while(true){}
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo falhou');
}

// Union Types
const nota: string | number = 8;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota(10);
exibirNota('9');

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

const funcionarios: Funcionario[] = [{
    nome: 'Pedro',
    sobrenome: 'Gonçalves',
    dataNascimento: new Date()
}, {
    nome: 'Lusca',
    sobrenome: 'Rc Branco',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log("Nome do funcionário: ", funcionario.nome);
    }
}
tratarFuncionarios(funcionarios);

// Valores nulos ou opcionais
type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; // torna o atributo opcional
}

const contato: Contato = {
    nome: 'Pedro',
    telefone1: '86999828017',
}

// Type Assertion
const minhaIdade: any = 22;
(minhaIdade as number).toString();
//<number>minhaIdade).toString();

//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);