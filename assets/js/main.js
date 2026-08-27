// Main script for Blog de Tráfego Pago & AdSense

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (toggleBtn && siteNav) {
    toggleBtn.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      const isExpanded = siteNav.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Cookie Consent Banner (LGPD & AdSense Compliance)
  const cookieBanner = document.getElementById('cookie-consent-banner');
  const acceptBtn = document.getElementById('accept-cookies-btn');

  if (cookieBanner && acceptBtn) {
    const hasConsented = localStorage.getItem('site_cookie_consent');
    if (!hasConsented) {
      cookieBanner.style.display = 'flex';
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('site_cookie_consent', 'true');
      cookieBanner.style.display = 'none';
    });
  }

  // Copy Code Blocks
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach((pre) => {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.textContent = 'Copiar';
    copyBtn.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      background: rgba(51, 65, 85, 0.8);
      color: #94a3b8;
      border: 1px solid #475569;
      border-radius: 4px;
      padding: 3px 8px;
      font-size: 11px;
      cursor: pointer;
      font-family: sans-serif;
      transition: all 0.2s ease;
    `;

    pre.style.position = 'relative';
    pre.appendChild(copyBtn);

    copyBtn.addEventListener('click', async () => {
      const code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        copyBtn.textContent = 'Copiado!';
        copyBtn.style.color = '#38bdf8';
        setTimeout(() => {
          copyBtn.textContent = 'Copiar';
          copyBtn.style.color = '#94a3b8';
        }, 2000);
      } catch (err) {
        copyBtn.textContent = 'Erro';
      }
    });
  });
});
