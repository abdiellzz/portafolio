/* =========================================================
   Abdiel Camargo — Portafolio
   Interacciones de la interfaz
   ========================================================= */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Año actual ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Menú móvil ---------- */
  var menuToggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');

  function closeMenu() {
    if (!menuToggle || !nav) return;
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        nav.classList.add('is-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Cerrar menú');
      }
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', function (event) {
      if (!nav.classList.contains('is-open')) return;
      if (!event.target.closest('#nav') && !event.target.closest('#menu-toggle')) closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  /* ---------- Sección activa en la navegación ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var navSections = navLinks
    .map(function (link) {
      // data-section permite indicar la sección de contexto de un enlace externo.
      // Así, “Proyectos” mantiene su catálogo independiente y se marca al recorrer
      // la invitación de proyectos en la página de inicio.
      var target = link.getAttribute('data-section') || link.getAttribute('href');
      var section = target && target.charAt(0) === '#' ? document.querySelector(target) : null;
      return section ? { link: link, section: section } : null;
    })
    .filter(Boolean);

  function updateActiveNavigation() {
    if (!navSections.length) return;

    // El punto de lectura acompaña a la cabecera fija y evita perder secciones
    // breves al hacer scroll rápido, como la invitación de Proyectos.
    var headerOffset = header ? header.offsetHeight : 0;
    var marker = headerOffset + Math.min(window.innerHeight * 0.34, 280);
    var current = null;

    navSections.forEach(function (item) {
      if (item.section.getBoundingClientRect().top <= marker) current = item;
    });

    navLinks.forEach(function (link) {
      var active = current && link === current.link;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  /* ---------- Cabecera y barra de progreso ---------- */
  var header = document.getElementById('site-header');
  var progress = document.getElementById('scroll-progress');
  var ticking = false;

  function onScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - window.innerHeight;

    if (header) header.classList.toggle('is-scrolled', scrollTop > 10);
    if (progress) progress.style.width = height > 0 ? ((scrollTop / height) * 100).toFixed(2) + '%' : '0%';
    updateActiveNavigation();
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  window.addEventListener('resize', updateActiveNavigation, { passive: true });
  onScroll();

  /* ---------- Animaciones de entrada ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Efecto de escritura del terminal ---------- */
  var terminal = document.getElementById('terminal');
  if (terminal && !prefersReducedMotion) {
    var lines = Array.prototype.slice.call(terminal.querySelectorAll('.t-line'));
    lines.forEach(function (line) { line.style.opacity = '0'; });

    var played = false;
    var play = function () {
      if (played) return;
      played = true;
      lines.forEach(function (line, index) {
        window.setTimeout(function () {
          line.style.transition = 'opacity 0.28s ease';
          line.style.opacity = '1';
        }, index * 90);
      });
    };

    if ('IntersectionObserver' in window) {
      var termObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            play();
            observer.disconnect();
          }
        });
      }, { threshold: 0.15 });
      termObserver.observe(terminal);

      // Respaldo por si ya es visible sin disparar el observer.
      window.setTimeout(function () {
        var rect = terminal.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) play();
      }, 900);
    } else {
      play();
    }
  }

  /* ---------- Cierre del menú al navegar con el historial ---------- */
  window.addEventListener('hashchange', closeMenu);
})();
