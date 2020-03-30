function Salvar() {
  let obj = {
    nome: document.getElementById('nome').value,
    fundacao: document.getElementById('fundacao').value,
    campus: document.getElementById('campus').value,
    alunos: document.getElementById('alunos').value,
    professores: document.getElementById('professores').value,
    cursos: document.getElementById('cursos').value,
    mec: document.getElementById('mec').value,
  }

  let data = JSON.stringify(obj);
  localStorage.setItem('Universidade', data);

  let rec = localStorage.getItem('Universidade');
  let res = JSON.parse(rec);

  console.log(res);



}


