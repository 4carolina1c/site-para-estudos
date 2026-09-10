// Inicializa os ícones do Lucide
lucide.createIcons();

// Funções para Expandir e Recolher Painéis por Tema
function toggleTheme(headerElement) {
  const panel = headerElement.parentElement;
  panel.classList.toggle('open');
}

// Filtros Rápidos (Tipo de Conteúdo)
let currentTypeFilter = 'todos';

function applyFilter(type, button) {
  currentTypeFilter = type;
  
  // Atualizar classe do botão ativo
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  filterMaterials();
}

// Função Unificada de Busca (Texto + Filtro Rápido)
function filterMaterials() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const materialCards = document.querySelectorAll('.material-card');

  materialCards.forEach(card => {
    const title = card.querySelector('.material-title').textContent.toLowerCase();
    const type = card.getAttribute('data-type');

    const matchesSearch = title.includes(searchInput);
    const matchesType = (currentTypeFilter === 'todos') || (type === currentTypeFilter);

    if (matchesSearch && matchesType) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Ação do Botão "+ Novo tema"
function addNewTheme() {
  const themeName = prompt("Digite o nome do novo tema:");
  if (themeName) {
    alert(`Tema "${themeName}" criado com sucesso!`);
  }
}