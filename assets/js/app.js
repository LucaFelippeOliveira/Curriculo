// Secure & Optimized Resume JS
'use strict';

class SecureCV {
    constructor() {
        this.isSecurityActive = true;
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '50px'
        };
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup(), { once: true });
        } else {
            requestAnimationFrame(() => this.setup());
        }
    }

    setup() {
        console.log('🚀 Iniciando setup do SecureCV...');
        this.setupSecurity();
        this.setupAnimations();
        this.setupServiceWorker();
        this.setupPerformanceOptimizations();
        this.setupLinkFocusHandler();
        this.insertProtectedContact();
        console.log('✅ Setup completo!');
    }

    insertProtectedContact() {
        // Ofuscação simples: divide e-mail e telefone em partes
        const emailUser = 'luca.fo';
        const emailDomain = 'hotmail.com';
        const telefone = '+55 19 99285-3094';
        const email = `${emailUser}@${emailDomain}`;
        const emailSpan = document.getElementById('email');
        const telSpan = document.getElementById('telefone');
        if (emailSpan) {
            emailSpan.textContent = email;
            emailSpan.setAttribute('aria-label', email);
        }
        if (telSpan) {
            telSpan.textContent = telefone;
            telSpan.setAttribute('aria-label', telefone);
        }
    }

    setupSecurity() {
    // Bloqueios e monitoramento removidos para permitir total interação e inspeção
    }

    setupAnimations() {
        if (!('IntersectionObserver' in window)) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.willChange = 'transform, opacity';
                    
                    requestAnimationFrame(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                        
                        // Remove will-change after animation completes
                        setTimeout(() => {
                            element.style.willChange = 'auto';
                        }, 600);
                    });
                    
                    observer.unobserve(element);
                }
            });
        }, this.observerOptions);

        // Batch DOM operations
        const elements = document.querySelectorAll('.fade-in');
        const fragment = document.createDocumentFragment();
        
        elements.forEach(el => {
            el.style.cssText = 'opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1)';
            observer.observe(el);
        });
    }

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registration successful');
                    })
                    .catch(err => {
                        console.log('ServiceWorker registration failed');
                    });
            });
        }
    }

    // Função de proteção de DevTools removida

    // Função de proteção de console removida

    // triggerSecurityAlert removido

    setupPerformanceOptimizations() {
        // Lazy load de imagens não críticas
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[data-src]');
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }

        // Preload de recursos críticos
        const criticalResources = [
            'assets/css/main.css',
            'assets/js/security-monitor.js'
        ];

        criticalResources.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = href.endsWith('.css') ? 'style' : 'script';
            link.href = href;
            document.head.appendChild(link);
        });

        // Otimizar scroll performance
        let ticking = false;
        const updateScrollPosition = () => {
            // Código de scroll otimizado aqui
            ticking = false;
        };

        document.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        }, { passive: true });
    }

    setupLinkFocusHandler() {
        // Remove foco de todos os links imediatamente quando a página carrega
        const removeAllFocus = () => {
            document.querySelectorAll('a').forEach(link => {
                link.blur();
                link.style.outline = 'none';
            });
        };

        // Executa quando a página é mostrada (incluindo voltar do histórico)
        window.addEventListener('pageshow', removeAllFocus);
        
        // Executa quando a página termina de carregar
        window.addEventListener('load', removeAllFocus);
        
        // Executa quando o DOM está pronto
        document.addEventListener('DOMContentLoaded', removeAllFocus);

        // Remove foco após qualquer clique em link
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                const link = e.target.tagName === 'A' ? e.target : e.target.closest('a');
                setTimeout(() => {
                    link.blur();
                    link.style.outline = 'none';
                }, 50);
            }
        });

        // Remove foco ao mover o mouse
        document.addEventListener('mousemove', removeAllFocus, { once: true });
    }
}

new SecureCV();
