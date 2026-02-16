async function carregarDados() {
    try {
        const resposta = await fetch('./curriculo.json');
        if (!resposta.ok) throw new Error("Erro ao carregar JSON");
        const dados = await resposta.json();

        renderizarPerfil(dados.perfil);
        renderizarResumo(dados.resumo);
        renderizarHabilidades(dados.habilidades_e_conhecimento);
        renderizarLista(dados.experiencia_profissional, 'lista-experiencias', 'experiencia');
        renderizarLista(dados.formacao_academica, 'lista-formacao', 'formacao');
        renderizarLista(dados.projetos_pessoais, 'lista-projetos', 'projeto');
        renderizarLista(dados.certificados, 'lista-certificados', 'certificado');
    } catch (erro) {
        console.error("Erro técnico:", erro);
    }
}

function renderizarPerfil(perfil) {
    const container = document.getElementById('perfil-info');
    
    const linkWpp = `https://wa.me/${perfil.telefone_wpp}`;
    const linkEmail = `mailto:${perfil.email}`;

    container.innerHTML = `
        <div class="foto-container">
            <img src="foto-luca.jpg" alt="Foto de ${perfil.nome}">
        </div>
        
        <h1 style="font-size: 2.0rem; margin-bottom: 15px; color: #ffffff; line-height: 1.1; font-weight: 800; text-align: center;">
            LUCA FELIPPE <br> 
            <span style="font-weight: 400; font-size: 1.6rem; opacity: 0.9;">DE OLIVEIRA</span>
        </h1>
        
        <div class="info-container">

            <div class="grupo-linha">
                <span>${perfil.idade}</span>
                <span>${perfil.localizacao}</span>
            </div>

            <div class="divisor-sidebar"></div>

            <div class="grupo-linha">
                <a href="${linkWpp}" target="_blank">WhatsApp</a>
                <a href="${linkEmail}" title="${perfil.email}">Email</a>
            </div>

            <div class="grupo-linha">
                <a href="${perfil.linkedin}" target="_blank">LinkedIn</a>
                <a href="${perfil.github}" target="_blank">GitHub</a>
                <a href="${perfil.tryhackme}" target="_blank">TryHackMe</a>
            </div>

        </div>
    `;
}

function renderizarResumo(resumo) {
    document.getElementById('resumo-profissional').innerHTML = `<p>"${resumo}"</p>`;
}

function renderizarHabilidades(habilidades) {
    const container = document.getElementById('lista-habilidades');
    container.innerHTML = '';
    habilidades.forEach(hab => {
        const div = document.createElement('div');
        div.innerHTML = `
            <span class="categoria-titulo">${hab.categoria}</span>
            <p class="habilidades-texto">${hab.itens.join(' | ')}</p>
        `;
        container.appendChild(div);
    });
}

function renderizarLista(itens, targetId, tipo) {
    const container = document.getElementById(targetId);
    if (!container) return;
    container.innerHTML = ''; 
    itens.forEach(item => {
        const div = document.createElement('div');
        div.style.marginBottom = "30px";
        
        if (tipo === 'experiencia') {
            div.innerHTML = `
                <h3 style="font-size: 1.25rem; color: #0f172a; margin-bottom: 5px;">${item.cargo}</h3>
                <div style="margin-bottom: 8px;">
                    <span style="color: #64748b; font-weight: 700;">${item.empresa}</span> 
                    <span style="color: #cbd5e1; margin: 0 10px;">|</span> 
                    <small style="color: #94a3b8;">${item.periodo}</small>
                </div>
                <p style="color: #334155;">${item.descricao}</p>
            `;
        } else if (tipo === 'certificado') {
            div.innerHTML = `
                <div style="padding: 15px; border-left: 4px solid var(--azul-marinho); background: #f8fafc; border-radius: 0 8px 8px 0;">
                    <strong style="color: #1e293b;">${item.emissor}</strong>: ${item.nome} <br>
                    <small style="color: #64748b; display: block; margin-top: 3px;">Credencial: ${item.codigo} (${item.data})</small>
                </div>
            `;
        } else {
            div.innerHTML = `
                <h3 style="font-size: 1.15rem; color: #0f172a;">${item.curso || item.nome}</h3>
                <span style="color: #64748b; font-weight: 600;">${item.instituicao || ''}</span> 
                <small style="color: #94a3b8; margin-left: 10px;">${item.periodo || ''}</small>
                <p style="margin-top: 5px; color: #334155;">${item.descricao || ''}</p>
            `;
        }
        container.appendChild(div);
    });
}

carregarDados();