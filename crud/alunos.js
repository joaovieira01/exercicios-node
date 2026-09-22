import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const alunos = [];

function adicionarAluno(nome) {
    alunos.push(nome);
}

function listarAlunos() {
    console.log("\n--- Lista de Alunos ---")
    for (let i = 0; i < alunos.length; i++) {
        console.log(`${i + 1}. ${alunos[i]}`);
    }
}

function perguntarNome() {
    rl.question("Digite o nome do aluno (ou pressione Enter para finalizar): ", (nome) => {
        if (nome.trim() === "") {
            listarAlunos();
            rl.close();
        } else {
            adicionarAluno(nome);
            perguntarNome();
        }
    });
}

perguntarNome();