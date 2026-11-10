(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var metaTheme = document.querySelector('meta[name="theme-color"]');
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  /* ----------------------------------------------------------
     Tema claro / oscuro
     ---------------------------------------------------------- */
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var dark = theme === 'dark';
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(dark));
      toggle.setAttribute('aria-label', dark ? 'Activar tema claro' : 'Activar tema oscuro');
    }
    if (metaTheme) metaTheme.setAttribute('content', dark ? '#202B38' : '#FCFCFC');
  }

  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('jm-theme', next); } catch (e) {}
      applyTheme(next);
    });
  }

  function storedTheme() {
    try { return localStorage.getItem('jm-theme'); } catch (e) { return null; }
  }

  if (mq) {
    var onSystemTheme = function (event) {
      if (!storedTheme()) applyTheme(event.matches ? 'dark' : 'light');
    };
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', onSystemTheme);
    } else if (typeof mq.addListener === 'function') {
      mq.addListener(onSystemTheme);
    }
  }

  window.addEventListener('storage', function (event) {
    if (event.key === 'jm-theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
      applyTheme(event.newValue);
    }
  });

  /* ----------------------------------------------------------
     Menú móvil
     ---------------------------------------------------------- */
  var menuBtn = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  function setMenu(open) {
    if (!menuBtn || !mobileNav) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Cerrar menú de secciones' : 'Abrir menú de secciones');
    mobileNav.hidden = !open;
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
    });

    mobileNav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setMenu(false);
        menuBtn.focus({ preventScroll: true });
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !mobileNav.hidden) {
        setMenu(false);
        menuBtn.focus({ preventScroll: true });
      }
    });

    document.addEventListener('click', function (event) {
      if (mobileNav.hidden) return;
      if (mobileNav.contains(event.target) || menuBtn.contains(event.target)) return;
      setMenu(false);
    });

    var desktop = window.matchMedia ? window.matchMedia('(min-width: 1024px)') : null;
    if (desktop) {
      var onDesktop = function (event) {
        if (event.matches) setMenu(false);
      };
      if (typeof desktop.addEventListener === 'function') {
        desktop.addEventListener('change', onDesktop);
      } else if (typeof desktop.addListener === 'function') {
        desktop.addListener(onDesktop);
      }
    }
  }

  /* ----------------------------------------------------------
     Sección activa
     ---------------------------------------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link[data-section]'));
  var sections = navLinks.map(function (link) {
    return document.getElementById(link.getAttribute('data-section'));
  }).filter(Boolean);

  function setCurrent(id) {
    navLinks.forEach(function (link) {
      if (link.getAttribute('data-section') === id) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if (sections.length) {
    var ticking = false;

    var updateCurrent = function () {
      ticking = false;
      var offset = 96;
      var y = window.scrollY + offset;
      var current = '';

      sections.forEach(function (section) {
        var top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= y) current = section.id;
      });

      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = sections[sections.length - 1].id;

      setCurrent(current);
    };

    var requestUpdate = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateCurrent);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateCurrent();
  }
})();
