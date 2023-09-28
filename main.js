const todosAlunos = [];

todosAlunos.push({ name: "Sergio", nota: 10 });
todosAlunos.push({ name: "Aluno A", nota: 9 });
todosAlunos.push({ name: "Aluno B", nota: 8 });
todosAlunos.push({ name: "Aluno C", nota: 6 });
todosAlunos.push({ name: "Aluno D", nota: 5 });
todosAlunos.push({ name: "Aluno E", nota: 0 });

console.log("Todos alunos: ");
console.log(todosAlunos);

const aprovados = todosAlunos.map((item) => {
  if (item.nota >= 6) {
    return item;
  }
});
console.log("--------------------------------");
console.log("Aprovados");
console.log(aprovados);
