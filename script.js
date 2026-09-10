// Inicializa os ícones do Lucide
lucide.createIcons();

// NAVEGAÇÃO DE ABAS (Troca de Telas do App)
function switchTab(tabId, element) {
  // Ocultar todas as seções
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Remover a classe ativa de todos os botões do menu inferior
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));

  // Mostrar a seção selecionada
  const targetTab = document.getElementById(`sec-${tabId}`);
  if (targetTab) {
    targetTab.classList.add('active');
  }

  // Marcar o botão correspondente como ativo
  if (element) {
    element.classList.add('active');
  } else {
    // Caso a navegação seja acionada por outro elemento (como clicar no Avatar)
    const indexMap = { materiais: 0, cronograma: 1, simulados: 2, perfil: 3 };
    if (navItems[indexMap[tabId]]) {
      navItems[indexMap[tabId]].classList.add('active');
    }
  }
}

// Expandir / Recolher Painéis de Temas
function toggleTheme(headerElement) {
  const panel = headerElement.parentElement;
  panel.classList.toggle('open');
}

// Filtro por Tipo de Conteúdo
let currentTypeFilter = 'todos';

function applyFilter(type, button) {
  currentTypeFilter = type;
  
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  filterMaterials();
}

// Busca por Nome do Material
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