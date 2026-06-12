const projectsData = {
    1: {
        title: "API & Dashboard IoT de Telemetria",
        tech: "Python (FastAPI), Docker, PostgreSQL, Nginx, AWS (VPS Linux)",
        description: "Plataforma escalável projetada para recepção, validação e armazenamento em alta velocidade de leituras de sensores IoT industriais.",
        effort: "Segregação estrita de configurações de ambiente via Pydantic Settings, validação de dados em tempo de execução via schemas tipados e testes de integração automatizados com pytest. Conteinerização completa com Docker Compose para garantir a portabilidade e consistência entre ambientes de desenvolvimento e produção.",
        criticalAnalysis: "A escolha do FastAPI em detrimento do Flask foi motivada pelo suporte nativo a chamadas assíncronas (async/await), otimizando a latência sob alta concorrência de sensores. Para evitar gargalos de gravação constante no PostgreSQL sob tráfego contínuo, implementou-se um mecanismo de escrita em lote (batch insert) a cada 100 leituras, o que reduziu a taxa de uso da CPU do banco de dados em 40%. A segurança dos sensores expostos na nuvem foi reforçada com controle de cabeçalhos via JWT e limites de taxa de requisições (rate limiting) configurados no Nginx.",
        subjects: "Computação em Nuvem e Web Services em Linux, IoT e Indústria 4.0 em Python, Banco de Dados, Introdução à Segurança da Informação.",
        features: [
            "Ingestão assíncrona de telemetria IoT via JSON validado com Pydantic.",
            "Persistência estruturada otimizada com índices temporais no PostgreSQL.",
            "Controle de acessos baseado em autenticação de cabeçalho via JWT.",
            "Ambiente isolado em contêineres Docker gerenciado via docker-compose.",
            "Servidor Nginx como proxy reverso com controle de requisições contra ataques DoS."
        ]
    },
    2: {
        title: "API REST de Agendamento Comercial",
        tech: "Java, Spring Boot, Spring Security, JPA/Hibernate, PostgreSQL, JUnit",
        description: "API de nível corporativo para controle de agenda de serviços e reservas, focando no gerenciamento automático de horários livres e controle de concorrência.",
        effort: "Uso intensivo de Padrões de Projeto do GoF (Singleton para gerenciamento das regras globais, Strategy para políticas de cancelamento e Factory para instanciar tipos de serviços). Cobertura rigorosa de testes unitários com JUnit e mock frameworks (Mockito) para assegurar a confiabilidade do código de negócios.",
        criticalAnalysis: "O maior desafio técnico foi impedir agendamentos duplicados do mesmo horário por usuários concorrentes no mesmo milissegundo. Optou-se por aplicar Bloqueio Otimista (Optimistic Locking via anotação @Version do JPA) ao invés de Bloqueio Pessimista no banco de dados. Isso evitou o travamento de tabelas e lentidão geral sob tráfego massivo, assumindo que colisões diretas de horários são raras, mas tratando as exceções de concorrência de forma elegante com retentativas automáticas no cliente. A modelagem prévia de diagramas de classes e sequências em UML reduziu o acoplamento do sistema.",
        subjects: "Programação Orientada a Objetos em Java, Padrões de Projetos de Software com Java, Modelagem de Sistemas em UML, Estrutura de Dados, Engenharia de Software.",
        features: [
            "Modelagem orientada ao domínio (DDD) com diagramas de classes UML bem documentados.",
            "Algoritmo de varredura inteligente de janelas de tempo livre baseado em árvores de intervalo.",
            "Segurança de dados e transações implementando controle de concorrência no banco de dados.",
            "Spring Security integrado com JWT para controle de acessos por papel (RBAC).",
            "Suíte de testes de integração automatizados cobrindo fluxos felizes e exceções."
        ]
    },
    3: {
        title: "App de Finanças Pessoais (Nativo)",
        tech: "Android SDK, Kotlin/Java, Room Database, Material Design, Usabilidade",
        description: "Aplicativo nativo offline-first para controle financeiro, com foco extremo em usabilidade, segurança de dados locais e interfaces fluidas.",
        effort: "Desenho de interface alinhado às diretrizes do Material Design 3 e heurísticas de usabilidade (feedback do sistema, flexibilidade de uso e controle do usuário). Persistência de dados offline estruturada e segura usando banco de dados local criptografado para garantir privacidade total.",
        criticalAnalysis: "Sendo um aplicativo financeiro de uso pessoal, a privacidade e a responsividade offline são os maiores requisitos. O principal trade-off na arquitetura MVVM foi o consumo de bateria versus processamento: para evitar travamentos da thread principal de exibição (UI Thread) no carregamento de grandes históricos de transações, todos os cálculos e relatórios analíticos foram alocados em rotinas assíncronas em segundo plano. Para segurança, em caso de perda do dispositivo físico, o banco de dados Room SQLite foi totalmente criptografado com SQLCipher, inviabilizando qualquer leitura direta dos arquivos do sistema operacional.",
        subjects: "Programação para Dispositivos Móveis em Android, Engenharia de Usabilidade, Segurança Cibernética.",
        features: [
            "Interface do usuário desenhada seguindo as Heurísticas de Nielsen para máxima clareza.",
            "Abstração de banco de dados SQLite usando Room com criptografia SQLCipher (AES-256).",
            "Visualização analítica integrada por meio de gráficos de consumo interativos por categoria.",
            "Arquitetura de dados offline-first garantindo usabilidade estável e sem conexão de rede."
        ]
    },
    4: {
        title: "Big Data Dashboard de Indicadores",
        tech: "Python, Pandas, Streamlit, Plotly, Scikit-learn, Anaconda",
        description: "Visualizador analítico interativo para extração e processamento de bases de dados massivas públicas, com modelagem matemática estatística preditiva de tendências.",
        effort: "Processo estruturado de ETL (Extração, Transformação e Carga) de grandes arquivos CSV, implementação de rotinas de higienização de dados ausentes e modularização do código para fácil adição de novos indicadores comerciais.",
        criticalAnalysis: "O volume de dados gerado por fontes governamentais pode estourar facilmente a memória RAM de servidores simples. Realizou-se uma otimização no uso dos DataFrames do Pandas: convertendo strings de dados geográficos repetitivos em tipos categóricos e ajustando a escala numérica de inteiros grandes, o consumo de memória RAM da aplicação caiu em 65%. Em termos de previsão preditiva, optou-se pela Regressão Linear Simples para prever tendências temporais devido ao seu baixo consumo computacional e facilidade de explicabilidade direta ao usuário.",
        subjects: "Tópicos de Big Data em Python, Paradigmas de Linguagens de Programação em Python, Matemática e Lógica, Pensamento Computacional.",
        features: [
            "Pipeline de limpeza de dados e eliminação de outliers automatizada.",
            "Filtros de cruzamento analíticos dinâmicos de dados em múltiplos níveis simultâneos.",
            "Gráficos interativos integrados com a biblioteca Plotly (linhas, barras e dispersão).",
            "Módulo de projeção estatística linear (Scikit-Learn) calculando previsões de dados futuros."
        ]
    },
    5: {
        title: "Portal Web Seguro de Gestão Acadêmica",
        tech: "PHP, HTML5, Vanilla JavaScript, CSS3, MySQL",
        description: "Portal administrativo para gestão de notas e matrículas estudantis, implementado com foco de segurança 'Secure by Design' e adequação às leis cibernéticas vigentes.",
        effort: "Mapeamento rigoroso de segurança em conformidade com o OWASP Top 10 para prevenção de vulnerabilidades web comuns, acoplado a fluxos explícitos de aceite e gestão de termos de uso em conformidade direta com a Lei Geral de Proteção de Dados (LGPD).",
        criticalAnalysis: "Sistemas acadêmicos lidam com dados pessoais e notas sensíveis, sendo alvos comuns na web. Adotou-se o princípio da menor exposição possível. Para mitigar o SQL Injection (SQLi), abandonou-se qualquer concatenação de strings em favor de Prepared Statements via PDO no PHP. O risco de ataques Cross-Site Scripting (XSS) foi eliminado sanitizando saídas de inputs nas páginas com htmlspecialchars. Sob a perspectiva de Direito Cibernético, implementou-se o conceito de Privacy by Design, estruturando o banco de dados para anonimizar registros após a expiração de prazos legais, respeitando a LGPD sem corromper a integridade dos históricos acadêmicos permanentes.",
        subjects: "Desenvolvimento Web em HTML5, CSS, Javascript e PHP, Segurança Cibernética, Introdução à Segurança da Informação, Direito Cybernético, Métodos Ágeis com Scrum.",
        features: [
            "Painel administrativo web responsivo feito com frontend dinâmico puro (sem frameworks pesados).",
            "Abstração de conexão MySQL defensiva utilizando Prepared Statements e PDO.",
            "Fluxo de consentimento e termos de uso do portal totalmente adaptados à LGPD.",
            "Prevenção nativa contra Cross-Site Scripting (XSS), CSRF e SQL Injection.",
            "Gerenciamento e escopo das entregas e tarefas da aplicação organizadas via metodologia ágil Scrum."
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // mensagem de boas-vindas para desenvolvedores no console
    console.log(
        "%c👋 Olá, Desenvolvedor ou Recrutador!", 
        "color: #00c3ff; font-size: 16px; font-weight: bold; font-family: 'Outfit', sans-serif;"
    );
    console.log(
        "%cSe você está inspecionando o código ou testando requisições, saiba que implementei validação client-side no formulário e regras de validação server-side (filtros de presença) diretamente na esteira de integração do Make.com para barrar payloads vazios. Fique à vontade para testar! (Dica: tente digitar \"dev\" na página fora de campos de texto)",
        "color: #a0aec0; font-size: 12px; font-family: 'Inter', sans-serif;"
    );

    // navbar scroll effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // menu mobile drawer
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const closeDrawerBtn = document.querySelector(".close-drawer-btn");
    const mobileDrawer = document.querySelector(".mobile-drawer");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-item");

    const toggleDrawer = (open) => {
        if (open) {
            mobileDrawer.classList.add("open");
            mobileDrawer.setAttribute("aria-hidden", "false");
            mobileMenuBtn.setAttribute("aria-expanded", "true");
        } else {
            mobileDrawer.classList.remove("open");
            mobileDrawer.setAttribute("aria-hidden", "true");
            mobileMenuBtn.setAttribute("aria-expanded", "false");
        }
    };

    mobileMenuBtn.addEventListener("click", () => toggleDrawer(true));
    closeDrawerBtn.addEventListener("click", () => toggleDrawer(false));
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => toggleDrawer(false));
    });

    // typewriter effect
    const typewriterText = document.getElementById("typewriter-text");
    const words = [
        "Backend com Java & Spring Boot",
        "Aplicações Cloud & IoT no Linux",
        "Análise de Big Data com Python",
        "Desenvolvimento Mobile Android",
        "Modelagem & Engenharia de Software"
    ];
    
    let wordIndex = 0;
    let charIndex = words[0].length;
    let isDeleting = true;
    let typingSpeed = 2000;

    const typeEffect = () => {
        if (document.body.classList.contains("pause-animations")) {
            typewriterText.textContent = words[0];
            return;
        }

        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    };

    if (typewriterText) {
        setTimeout(typeEffect, typingSpeed);
    }

    // acessibilidade
    const accToggleBtn = document.querySelector(".accessibility-toggle-btn");
    const accPanel = document.querySelector(".accessibility-panel");

    accToggleBtn.addEventListener("click", () => {
        const isExpanded = accToggleBtn.getAttribute("aria-expanded") === "true";
        accToggleBtn.setAttribute("aria-expanded", !isExpanded);
        accPanel.classList.toggle("active");
        accPanel.setAttribute("aria-hidden", isExpanded);
    });

    document.addEventListener("click", (e) => {
        if (!accToggleBtn.contains(e.target) && !accPanel.contains(e.target)) {
            accToggleBtn.setAttribute("aria-expanded", "false");
            accPanel.classList.remove("active");
            accPanel.setAttribute("aria-hidden", "true");
        }
    });

    const btnHighContrast = document.getElementById("btn-high-contrast");
    btnHighContrast.addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
        btnHighContrast.classList.toggle("active");
        
        const active = document.body.classList.contains("high-contrast");
        btnHighContrast.setAttribute("aria-pressed", active);
    });

    const btnDyslexiaFont = document.getElementById("btn-dyslexia-font");
    btnDyslexiaFont.addEventListener("click", () => {
        document.body.classList.toggle("dyslexia-font");
        btnDyslexiaFont.classList.toggle("active");
        
        const active = document.body.classList.contains("dyslexia-font");
        btnDyslexiaFont.setAttribute("aria-pressed", active);
    });

    const btnPauseAnimations = document.getElementById("btn-pause-animations");
    btnPauseAnimations.addEventListener("click", () => {
        document.body.classList.toggle("pause-animations");
        btnPauseAnimations.classList.toggle("active");

        const active = document.body.classList.contains("pause-animations");
        btnPauseAnimations.setAttribute("aria-pressed", active);

        if (active && typewriterText) {
            typewriterText.textContent = "Engenharia de Software & Tecnologia";
        } else {
            typeEffect();
        }
    });

    let currentFontSize = 16;
    const rootHtml = document.documentElement;
    const btnFontDec = document.getElementById("btn-font-dec");
    const btnFontInc = document.getElementById("btn-font-inc");
    const btnFontReset = document.getElementById("btn-font-reset");

    const updateBaseFontSize = (size) => {
        currentFontSize = size;
        rootHtml.style.setProperty("--base-font-size", `${currentFontSize}px`);
    };

    btnFontDec.addEventListener("click", () => {
        if (currentFontSize > 12) {
            updateBaseFontSize(currentFontSize - 1);
        }
    });

    btnFontInc.addEventListener("click", () => {
        if (currentFontSize < 24) {
            updateBaseFontSize(currentFontSize + 1);
        }
    });

    btnFontReset.addEventListener("click", () => {
        updateBaseFontSize(16);
    });

    // whatsapp
    const btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", () => {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Por favor, preencha todos os campos do formulário antes de enviar via WhatsApp.");
                return;
            }

            const textMessage = `Olá Mateus! Meu nome é ${name} (${email}). Vi seu portfólio e gostaria de falar com você: "${message}"`;
            const phoneNumber = "5585988463993"; 
            const encodedText = encodeURIComponent(textMessage);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

            window.open(whatsappUrl, "_blank");
        });
    }

    // envio do formulario via webhook
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Enviando...";
            submitBtn.disabled = true;
            const webhookUrl = "https://hook.us2.make.com/drbemw9yrtnyxudivbuifos9uahzuyt3"; 

            fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            })
            .then(response => {
                if (response.ok) {
                    alert("Mensagem enviada com sucesso!");
                    contactForm.reset();
                } else {
                    alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
                }
            })
            .catch(error => {
                console.error("Erro no envio:", error);
                alert("Ocorreu um erro de rede. Verifique sua conexão e tente novamente.");
            })
            .finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }

    // Easter Egg: Modo Matrix ao digitar "dev" de forma não intrusiva
    let keystrokes = "";
    let keystrokeTimeout;

    document.addEventListener("keydown", (e) => {
        // Ignora se o foco estiver em inputs, textareas ou elementos editáveis
        if (document.activeElement && 
            (document.activeElement.tagName === "INPUT" || 
             document.activeElement.tagName === "TEXTAREA" || 
             document.activeElement.isContentEditable)) {
            return;
        }

        // Captura apenas caracteres individuais legíveis
        if (e.key.length === 1) {
            clearTimeout(keystrokeTimeout);
            keystrokes += e.key.toLowerCase();
            keystrokes = keystrokes.slice(-3); // Guarda apenas as últimas 3 teclas

            // Limpa o buffer de digitação após 1 segundo sem novas teclas
            keystrokeTimeout = setTimeout(() => {
                keystrokes = "";
            }, 1000);

            if (keystrokes === "dev") {
                document.body.classList.toggle("matrix-mode");
                const active = document.body.classList.contains("matrix-mode");
                if (active) {
                    console.log("%c💥 MODO MATRIX ATIVADO! Cores do sistema alteradas para verde neon.", "color: #00ff66; font-size: 14px; font-weight: bold;");
                } else {
                    console.log("%c🔄 MODO MATRIX DESATIVADO! Retornando ao tema original.", "color: #00c3ff; font-size: 14px; font-weight: bold;");
                }
                keystrokes = ""; // Reseta o buffer
            }
        }
    });
});

// modal de detalhes do projeto
function openProjectDetails(projectId) {
    const modal = document.getElementById("project-modal");
    const container = document.getElementById("modal-project-details");
    const data = projectsData[projectId];

    if (!data) return;

    let featuresHtml = "";
    data.features.forEach((item) => {
        featuresHtml += `
            <li>
                <span style="color: var(--color-primary); font-weight: bold; margin-right: 0.5rem;" aria-hidden="true">❖</span>
                <span>${item}</span>
            </li>
        `;
    });

    container.innerHTML = `
        <div class="modal-title-area">
            <h3 class="modal-project-title" id="modal-title">${data.title}</h3>
            <p class="modal-project-meta"><strong>Tecnologias:</strong> ${data.tech}</p>
        </div>
        
        <div class="modal-subjects-block">
            <h4>Sobre o Projeto</h4>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.95rem;">${data.description}</p>
            
            <h4>Esforço &amp; Boas Práticas de Mercado</h4>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.95rem;">${data.effort}</p>

            <h4>Capacidade Crítica &amp; Análise Técnico-Estrutural</h4>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.95rem;">${data.criticalAnalysis}</p>
        </div>
        
        <div class="modal-subjects-block">
            <h4>Funcionalidades Demonstradas</h4>
            <ul class="modal-checklist" style="margin-bottom: 1.5rem;">
                ${featuresHtml}
            </ul>
            
            <h4>Disciplinas Acadêmicas Aplicadas</h4>
            <p style="color: var(--text-muted); font-size: 0.88rem; font-style: italic; border-top: 1px dashed rgba(255, 255, 255, 0.08); padding-top: 0.75rem;">${data.subjects}</p>
        </div>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    
    const closeBtn = modal.querySelector(".close-modal-btn");
    if (closeBtn) closeBtn.focus();
}

function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

window.onclick = function(event) {
    const modal = document.getElementById("project-modal");
    if (event.target === modal) {
        closeProjectModal();
    }
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeProjectModal();
    }
});
