/* ==========================================================================
   PAINEL DE DADOS DO CURRÍCULO (SEU "CMS")
   Edite as informações abaixo para atualizar o site automaticamente.
   ========================================================================== */

// --- 1. FORMAÇÃO ACADÊMICA ---
const dadosFormacao = [
    {
        periodo: "Agosto 2025 - Dezembro 2027",
        titulo: "Tecnologia em Análise e Desenvolvimento de Sistemas",
        instituicao: "Universidade Presbiteriana Mackenzie",
        local: "São Paulo",
        link: "https://www.mackenzie.br/graduacao/ead/tecnologia-em-analise-e-desenvolvimento-de-sistemas",
        descricao: [
            "Desenvolvimento Full-Stack e arquitetura de sistemas",
            "Programação avançada e metodologias ágeis",
            "Segurança da informação e proteção de dados",
            "Banco de dados e análise de performance"
        ]
    },
    {
        periodo: "Fevereiro 2020 - Dezembro 2021",
        titulo: "Ensino Médio (2ª e 3ª série)",
        instituicao: "Colégio Salesiano Dom Bosco Cidade Alta",
        local: "Piracicaba",
        link: "https://www.domboscopira.com.br/",
        descricao: [] // Deixe vazio se não tiver detalhes
    },
    {
        periodo: "Fevereiro 2019 - Dezembro 2019",
        titulo: "Ensino Médio (1ª série)",
        instituicao: "Colégio Anglo Portal do Engenho",
        local: "Piracicaba",
        link: "https://www.anglopiracicaba.com.br/",
        descricao: []
    },
    {
        periodo: "Fevereiro 2015 - Dezembro 2018",
        titulo: "Ensino Fundamental (6º ao 9º ano)",
        instituicao: "Colégio Anglo Portal do Engenho",
        local: "Piracicaba",
        link: "https://www.anglopiracicaba.com.br/",
        descricao: []
    }
];

// --- 2. EXPERIÊNCIA PROFISSIONAL ---
const dadosExperiencia = [
    {
        periodo: "Maio 2024 - Julho 2024 (3 meses)",
        titulo: "SÓCIO PROPRIETÁRIO",
        instituicao: "Capivaras Shop",
        descricao: [
            "Cofundação e gestão da Capivaras Shop, loja online especializada",
            "Desenvolvimento do site e estratégias de marketing digital",
            "Gestão de campanhas no Facebook Ads e captação de clientes",
            "Análise de métricas e precificação estratégica de produtos",
            "Gestão de fornecedores e transferências bancárias internacionais"
        ]
    },
    {
        periodo: "Janeiro 2024 - Abril 2024 (4 meses)",
        titulo: "OPERADOR DE MÁQUINAS",
        instituicao: "ElringKlinger",
        descricao: [
            "Operação e ajuste de máquinas de prensa industrial",
            "Inspeção rigorosa de peças e componentes",
            "Reabastecimento e alimentação das máquinas com material",
            "Controle de qualidade dos produtos manufaturados",
            "Monitoramento contínuo dos processos de produção",
            "Cumprimento de normas de segurança e procedimentos"
        ]
    },
    {
        periodo: "Outubro 2021 - Maio 2022 (8 meses)",
        titulo: "ESTAGIÁRIO DE TI",
        instituicao: "Encoparts",
        descricao: [
            "Suporte técnico a usuários da rede corporativa",
            "Configuração e manutenção de hardware e equipamentos",
            "Instalação de equipamentos e reparo de estações de trabalho",
            "Gerenciamento de pedidos e controle de peças",
            "Execução de backup diário de servidores"
        ]
    },
    {
        periodo: "Dezembro 2020 - Agosto 2021 (9 meses)",
        titulo: "ASSISTENTE ADMINISTRATIVO",
        instituicao: "B G Comércio de Embalagens LTDA",
        descricao: [
            "Auxílio em processos administrativos e financeiros",
            "Emissão e controle de Notas Fiscais",
            "Gestão de contas a pagar e cadastro de clientes/fornecedores",
            "Execução de transferências bancárias",
            "Suporte técnico em TI e manutenção de sistemas",
            "Gerenciamento e controle de pedidos"
        ]
    },
    {
        periodo: "Dezembro 2019 - Setembro 2020 (10 meses)",
        titulo: "TRAINEE",
        instituicao: "UCAF - Bombas Centrífugas",
        descricao: [
            "Auxílio na gestão logística e operacional",
            "Separação e embalagem de peças",
            "Organização e controle do estoque",
            "Suporte ao setor administrativo",
            "Arquivamento e controle de documentos"
        ]
    }
];

// --- 3. COMPETÊNCIAS ---
const dadosCompetencias = [
    {
        titulo: "TECNOLOGIAS",
        icone: "fas fa-code",
        itens: ["Linux", "HTML5 & CSS3", "GitHub", "VPNs", "Excel"]
    },
    {
        titulo: "HABILIDADES",
        icone: "fas fa-tools",
        itens: ["Suporte Técnico", "Sistemas Operacionais", "Diagnóstico de Problemas", "Manutenção de Hardware", "Infraestrutura de Rede"]
    },
    {
        titulo: "VALORES",
        icone: "fas fa-users",
        itens: ["Proatividade", "Comprometimento", "Trabalho em Equipe", "Liderança de Equipes", "Gestão de Projetos"]
    }
];

// --- 4. CERTIFICADOS (VERDES) ---
const dadosCertificados = [
    {
        titulo: "Introduction to Cybersecurity",
        emissor: "Cisco Networking Academy",
        data: "Verificação emitida em maio de 2025"
    }
];

// --- 5. CURSOS EM ANDAMENTO (AMARELOS) ---
const dadosCursando = [
    {
        titulo: "Learn SQL Basics for Data Science",
        emissor: "University of California Davis",
        data: "Em andamento"
    },
    {
        titulo: "Google IT Automation with Python",
        emissor: "Google",
        data: "Em andamento"
    }
];

// --- 6. IDIOMAS ---
const dadosIdiomas = [
    { idioma: "Português", nivel: "Fluente / Nativo", icone: "fas fa-flag" },
    { idioma: "Inglês", nivel: "Nível Básico", icone: "fas fa-flag-usa" },
    { idioma: "Espanhol", nivel: "Nível Básico", icone: "fas fa-flag" }
];

// --- 7. VOLUNTARIADO ---
const dadosVoluntario = [
    {
        periodo: "Janeiro 2017 - Junho 2017 (6 meses)",
        titulo: "Assistente Voluntário",
        instituicao: "Associação de Assistência Social Betel",
        descricao: [
            "Auxílio na cozinha e preparação de refeições",
            "Distribuição de alimentos para os necessitados",
            "Organização de atividades recreativas para idosos",
            "Apoio em eventos beneficentes e campanhas sociais"
        ]
    }
];

/* ==========================================================================
   FUNÇÕES DE SEGURANÇA
   ========================================================================== */

// Sanitização de HTML (proteção contra XSS)
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Validação de URL HTTPS
function isValidHttpsUrl(url) {
    if (!url) return false;
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'https:';
    } catch {
        return false;
    }
}

// Whitelist de ícones FontAwesome permitidos (prevenção de injeção)
const iconesPermitidos = [
    'fas fa-code', 'fas fa-tools', 'fas fa-users', 'fas fa-flag', 'fas fa-flag-usa',
    'fas fa-shield-alt', 'fas fa-star', 'fas fa-graduation-cap', 'fas fa-briefcase',
    'fas fa-cogs', 'fas fa-certificate', 'fas fa-book-open', 'fas fa-language', 'fas fa-heart'
];

function isValidIcon(icon) {
    return iconesPermitidos.includes(icon);
}

/* ==========================================================================
   MOTOR DE RENDERIZAÇÃO (ENGINE)
   A partir daqui é o código que faz a mágica. Só mexa se souber o que faz.
   ========================================================================== */

// Função Genérica para Timeline (Experiência, Formação, Voluntário)
function renderTimeline(dados, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // Se não achar o container, aborta para não dar erro
    
    const html = dados.map(item => {
        // Sanitiza dados de entrada
        const periodo = escapeHtml(item.periodo || '');
        const titulo = escapeHtml(item.titulo || '');
        const instituicao = escapeHtml(item.instituicao || '');
        const local = escapeHtml(item.local || '');

        // Cria a lista de bullet points (se houver descrição)
        let htmlDescricao = '';
        if (item.descricao && item.descricao.length > 0) {
            const lis = item.descricao.map(desc => `<li>${escapeHtml(desc)}</li>`).join('');
            htmlDescricao = `<div class="timeline-description"><ul>${lis}</ul></div>`;
        }

        // Verifica se tem link na instituição (valida HTTPS)
        let htmlInstituicao = local ? `${instituicao} - ${local}` : instituicao;
        if (item.link && isValidHttpsUrl(item.link)) {
            htmlInstituicao = `<a href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">${instituicao}</a>`;
            if (local) htmlInstituicao += ` - ${local}`;
        }

        // Monta o HTML
        return `
            <div class="timeline-item">
                <div class="timeline-date">${periodo}</div>
                <div class="timeline-title">${titulo}</div>
                <div class="timeline-subtitle">${htmlInstituicao}</div>
                ${htmlDescricao}
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// Função Genérica para Skills (Competências, Idiomas)
function renderSkills(dados, containerId, tipo = 'competencia') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const html = dados.map(item => {
        // Valida e sanitiza ícone
        const icone = isValidIcon(item.icone) ? item.icone : 'fas fa-circle';
        
        // Sanitiza dados
        const titulo = tipo === 'competencia' 
            ? escapeHtml(item.titulo || '') 
            : escapeHtml(item.idioma || '');
        
        const listaItens = tipo === 'competencia'
            ? (item.itens || []).map(skill => `<li>${escapeHtml(skill)}</li>`).join('')
            : `<li>${escapeHtml(item.nivel || '')}</li>`;

        return `
            <div class="skill-category">
                <h3><i class="${icone}" aria-hidden="true"></i> ${titulo}</h3>
                <ul class="skill-list">
                    ${listaItens}
                </ul>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// Função Genérica para Certificados e Cursos
function renderCertificados(dados, containerId, status = 'concluido') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const html = dados.map(item => {
        // Sanitiza dados
        const titulo = escapeHtml(item.titulo || '');
        const emissor = escapeHtml(item.emissor || '');
        const data = escapeHtml(item.data || '');
        
        // Define classes baseadas no status
        const classeExtra = status === 'andamento' ? 'certification-item-inprogress' : '';
        
        return `
            <div class="certification-item ${classeExtra}">
                <div class="certification-title">${titulo}</div>
                <div class="certification-issuer">${emissor}</div>
                <div class="certification-date">${data}</div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// Função de Ofuscação de Dados Pessoais (Anti-Scraping)
function renderizarDadosPessoais() {
    // Ofuscação de email (monta a partir de partes)
    const emailParts = ['luca1015f', '.fo', '@', 'gmail', '.com'];
    const email = emailParts.join('');
    const emailElement = document.getElementById('email');
    if (emailElement) {
        emailElement.textContent = email;
    }

    // Ofuscação de telefone (monta a partir de partes)
    const telefoneParts = ['+55', ' ', '19', ' ', '99285', '-', '3094'];
    const telefone = telefoneParts.join('');
    const telefoneElement = document.getElementById('telefone');
    if (telefoneElement) {
        telefoneElement.textContent = telefone;
    }

    // Ofuscação de data de nascimento
    const nascimentoParts = ['30', '/', '07', '/', '2004'];
    const nascimento = nascimentoParts.join('');
    const nascimentoElement = document.getElementById('data-nascimento');
    if (nascimentoElement) {
        nascimentoElement.textContent = nascimento;
    }

    // Ofuscação de cidade
    const cidadeParts = ['Piracicaba', ', ', 'SP'];
    const cidade = cidadeParts.join('');
    const cidadeElement = document.getElementById('cidade');
    if (cidadeElement) {
        cidadeElement.textContent = cidade;
    }
}

// INICIALIZADOR MESTRE
function iniciarSistema() {
    // Renderiza dados pessoais ofuscados primeiro
    renderizarDadosPessoais();
    
    // Renderiza conteúdo do currículo
    renderTimeline(dadosFormacao, 'container-formacao');
    renderTimeline(dadosExperiencia, 'container-experiencia');
    renderSkills(dadosCompetencias, 'container-competencias', 'competencia');
    renderCertificados(dadosCertificados, 'container-certificados', 'concluido');
    renderCertificados(dadosCursando, 'container-cursando', 'andamento');
    renderSkills(dadosIdiomas, 'container-idiomas', 'idioma');
    renderTimeline(dadosVoluntario, 'container-voluntario');
}

// Garante que o HTML carregou antes de rodar o script
document.addEventListener('DOMContentLoaded', iniciarSistema);