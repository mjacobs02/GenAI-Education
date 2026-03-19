// _static/newtab-chatgpt.js
(function () {
    function apply(scope) {
      var root = scope || document;
      var anchors = root.querySelectorAll('a[href]');
      anchors.forEach(function (a) {
        var href = a.getAttribute('href');
        if (!href) return;
  
        // Resolve relative URLs safely
        var url;
        try { url = new URL(href, window.location.href); } catch (e) { return; }
  
        var wrapsImg = a.querySelector('img') !== null;
        var isExternal = url.origin !== window.location.origin;
        var isChatGPT = /(^|\.)chatgpt\.com$/i.test(url.hostname);
  
        // Open in new tab if:
        // 1) it’s to chatgpt.com (ANY link or button), or
        // 2) it’s an external link that wraps an image (covers other image buttons)
        if (isChatGPT || (isExternal && wrapsImg)) {
          a.setAttribute('target', '_blank');
          var rel = (a.getAttribute('rel') || '').split(/\s+/);
          if (!rel.includes('noopener')) rel.push('noopener');
          if (!rel.includes('noreferrer')) rel.push('noreferrer');
          a.setAttribute('rel', rel.join(' ').trim());
        }
      });
    }
  
    // Run now/when ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { apply(document); });
    } else {
      apply(document);
    }
  
    // Catch late-loaded content (toggle blocks, tabs, etc.)
    if ('MutationObserver' in window) {
      new MutationObserver(function (muts) {
        muts.forEach(function (m) {
          if (m.addedNodes && m.addedNodes.length) {
            m.addedNodes.forEach(function (n) { if (n.nodeType === 1) apply(n); });
          }
        });
      }).observe(document.documentElement, { childList: true, subtree: true });
    }
  })();