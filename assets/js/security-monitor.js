// ===== SECURITY MONITORING SYSTEM =====
class SecurityMonitor {
    constructor() {
        this.threats = [];
        this.init();
    }

    init() {
    this.monitorNetworkRequests();
    this.monitorDOMChanges();
    // monitorConsoleAccess removido para permitir inspeção
    this.startThreatDetection();
    }

    monitorNetworkRequests() {
        const originalFetch = window.fetch;
        const originalXHR = XMLHttpRequest.prototype.open;

        // Monitor fetch requests
        window.fetch = (...args) => {
            this.logRequest('fetch', args[0]);
            return originalFetch.apply(window, args);
        };

        // Monitor XHR requests
        XMLHttpRequest.prototype.open = function(...args) {
            SecurityMonitor.instance?.logRequest('xhr', args[1]);
            return originalXHR.apply(this, args);
        };
    }

    monitorDOMChanges() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Element node
                            this.checkSuspiciousElement(node);
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['src', 'href', 'onclick', 'onload']
        });
    }

    // monitorConsoleAccess removido

    checkSuspiciousElement(element) {
        const suspicious = [
            'script', 'iframe', 'object', 'embed',
            'link[rel="stylesheet"]', 'style'
        ];

        if (suspicious.some(tag => element.matches?.(tag))) {
            if (!this.isWhitelisted(element)) {
                this.reportThreat(`Suspicious element: ${element.tagName}`, 'high');
                element.remove();
            }
        }
    }

    isWhitelisted(element) {
        const whitelist = [
            'https://fonts.googleapis.com',
            'https://cdnjs.cloudflare.com',
            '/assets/'
        ];

        const src = element.src || element.href;
        return whitelist.some(allowed => src?.startsWith(allowed));
    }

    logRequest(type, url) {
        const suspicious = [
            'admin', 'config', 'password', 'token',
            'api/private', 'debug', 'test'
        ];

        if (suspicious.some(pattern => url?.includes(pattern))) {
            this.reportThreat(`Suspicious ${type} request to: ${url}`, 'medium');
        }
    }

    startThreatDetection() {
        // Detect rapid requests (potential DoS)
        let requestCount = 0;
        setInterval(() => {
            if (requestCount > 50) {
                this.reportThreat('Potential DoS attack detected', 'critical');
            }
            requestCount = 0;
        }, 1000);

        // Monitor for script injection
        setInterval(() => {
            const scripts = document.querySelectorAll('script');
            scripts.forEach(script => {
                if (!script.src && script.textContent.includes('eval(')) {
                    this.reportThreat('Script injection detected', 'critical');
                    script.remove();
                }
            });
        }, 2000);
    }

    reportThreat(description, severity) {
        const threat = {
            timestamp: Date.now(),
            description,
            severity,
            userAgent: navigator.userAgent,
            url: window.location.href,
            ip: this.getClientIP()
        };

        this.threats.push(threat);
        
        // Send to security endpoint
        if (navigator.sendBeacon) {
            navigator.sendBeacon('/security/threat', JSON.stringify(threat));
        }

        console.warn(`🚨 Security Threat [${severity}]: ${description}`);
        
        if (severity === 'critical') {
            this.lockdown();
        }
    }

    getClientIP() {
        // This would typically be done server-side
        return 'unknown';
    }

    // lockdown removido

    getThreatReport() {
        return {
            total: this.threats.length,
            critical: this.threats.filter(t => t.severity === 'critical').length,
            high: this.threats.filter(t => t.severity === 'high').length,
            medium: this.threats.filter(t => t.severity === 'medium').length,
            threats: this.threats
        };
    }
}

// Initialize security monitor
SecurityMonitor.instance = new SecurityMonitor();

// Expose to window for testing (remove in production)
window.SecurityMonitor = SecurityMonitor;
