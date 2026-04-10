const lista = document.getElementById('lista');
const input = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const contador = document.getElementById('contador');

function atualizarContador() {
  const total = lista.querySelectorAll('li').length;
  contador.textContent = `${total} tarefa(s)`;
}

function criarItem(texto) {
  const li = document.createElement('li');
  li.textContent = texto;

  const btn = document.createElement('button');
  btn.textContent = 'Remover';
  btn.className = 'btn-remover';
  btn.addEventListener('click', () => {
    li.remove();
    atualizarContador();
  });

  li.appendChild(btn);
  return li;
}

btnAdicionar.addEventListener('click', () => {
  const texto = input.value.trim();
  if (!texto) return;
  lista.appendChild(criarItem(texto));
  input.value = '';
  input.focus();
  atualizarContador();
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') btnAdicionar.click();
});

atualizarContador();
