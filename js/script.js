/* ============================================================
   Cybersecurity Portfolio — main script
   ============================================================ */

/* ------------------------------------------------------------------
   CONFIG — öz məlumatlarınızla əvəz edin
   ------------------------------------------------------------------ */
const CONFIG = {
  name: 'Samir Nazarov',
  whoami: 'security_researcher',
  interests: 'web_appsec :: network :: malware',

  mediumUsername: 's4m1r', // Medium istifadəçi adınız (@ olmadan)
  rss2jsonUrl: 'https://api.rss2json.com/v1/api.json?rss_url=',

  email: 'samir.nazarov@yahoo.com',
  resumeUrl: '#', // CV / resume linkiniz (PDF, Google Drive və s.)

  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samir-nazarov',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/5n4z4r0v',
      icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@s4m1r',
      icon: 'M13.54 12a6.8 6.8 0 0 1-6.77 6.88A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.88 6.8 6.8 0 0 1 6.77 6.88zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z',
    },
    {
      name: 'X / Twitter',
      url: 'https://x.com/username',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    },
  ],

  tools: ['Burp Suite', 'Nmap', 'Metasploit', 'OWASP ZAP', 'Wireshark', 'Ghidra', 'TryHackMe', 'HackTheBox', 'Linux', 'Python', 'Bash', 'Docker'],
};

/* ------------------------------------------------------------------
   Helpers
   ------------------------------------------------------------------ */
const $ = (sel) => document.querySelector(sel);

const escapeHtml = (str = '') =>
  str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

function stripTags(html = '') {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

const mediumFeedUrl =
  CONFIG.rss2jsonUrl + encodeURIComponent(`https://medium.com/feed/@${CONFIG.mediumUsername}`);

/* ------------------------------------------------------------------
   DOM hazırlığı — məlumatları tətbiq et
   ------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  document.title = `~/cybersecurity-portfolio — ${CONFIG.name}`;
  $('#navUserName').textContent = CONFIG.name.toLowerCase().replace(/\s+/g, '-');
  $('#userName').textContent = CONFIG.name;
  $('#userBio').textContent = document.querySelector('.hero__sub').textContent;
  $('#footerName').textContent = CONFIG.name;
  $('#whoamiOut').textContent = CONFIG.whoami;
  $('#interestsOut').textContent = CONFIG.interests;
  $('#year').textContent = new Date().getFullYear();
  $('#contactOut').textContent = `mailto:${CONFIG.email}`;
  $('#mediumLink').href = `https://medium.com/@${CONFIG.mediumUsername}`;
  if (CONFIG.resumeUrl !== '#') $('#resumeBtn').href = CONFIG.resumeUrl;

  renderSocials();
  renderChips();
  initTypewriter();
  initNav();
  initReveal();
  initCounters();
  initToTop();
  initContactForm();
  initBlog();
});

/* ------------------------------------------------------------------
   Social links
   ------------------------------------------------------------------ */
function renderSocials() {
  const box = $('#socialLinks');
  box.innerHTML = CONFIG.socials
    .map(
      (s) => `
      <a class="social" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(s.name)}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${s.icon}"/></svg>
        ${escapeHtml(s.name)}
      </a>`
    )
    .join('');
}

/* ------------------------------------------------------------------
   Tool chips
   ------------------------------------------------------------------ */
function renderChips() {
  const box = $('#toolChips');
  box.innerHTML = CONFIG.tools.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join('');
}

/* ------------------------------------------------------------------
   Typewriter effekti
   ------------------------------------------------------------------ */
function initTypewriter() {
  const phrases = [
    'whoami --hacker',
    'nmap -sV -sC target',
    'nc -lvnp 4444',
    'sudo whoami # root',
    'echo "pwned!"',
  ];
  const el = $('#typeCursor');
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  (function type() {
    const phrase = phrases[phraseIdx];
    el.textContent = phrase.slice(0, charIdx);

    if (!deleting) {
      charIdx++;
      if (charIdx > phrase.length) {
        deleting = true;
        setTimeout(type, 1600);
        return;
      }
      setTimeout(type, 65);
    } else {
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(type, 350);
        return;
      }
      setTimeout(type, 35);
    }
  })();
}

/* ------------------------------------------------------------------
   Mobile nav toggle
   ------------------------------------------------------------------ */
function initNav() {
  const toggle = $('#navToggle');
  const links = $('.nav__links');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    })
  );
}

/* ------------------------------------------------------------------
   Scroll reveal
   ------------------------------------------------------------------ */
function initReveal() {
  const els = document.querySelectorAll('.section, .hero__inner');
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 }
  );
  els.forEach((el) => {
    el.classList.add('reveal');
    io.observe(el);
  });
}

/* ------------------------------------------------------------------
   Stat counter animasiyası
   ------------------------------------------------------------------ */
function initCounters() {
  const nums = document.querySelectorAll('.stat__num');
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const tick = () => {
          current = Math.min(target, current + step);
          el.textContent = current + suffix;
          if (current < target) requestAnimationFrame(tick);
          else el.textContent = target + suffix;
        };
        tick();
        io.unobserve(el);
      }),
    { threshold: 0.5 }
  );
  nums.forEach((n) => io.observe(n));
}

/* ------------------------------------------------------------------
   To-top düyməsi
   ------------------------------------------------------------------ */
function initToTop() {
  const btn = $('#toTop');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 480), { passive: true });
}

/* ------------------------------------------------------------------
   Kontakt forması (real backend olmadığı üçün mailto fallback)
   ------------------------------------------------------------------ */
function initContactForm() {
  const form = $('#contactForm');
  const status = $('#formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio mesajı — ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('email')}`);
    const mailto = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

    status.classList.remove('error');
    status.textContent = `email client açılır... (${CONFIG.email})`;
    window.location.href = mailto;
  });
}

/* ------------------------------------------------------------------
   Medium RSS → Blog kartları
   ------------------------------------------------------------------ */
async function initBlog() {
  const grid = $('#blogGrid');

  try {
    const res = await fetch(mediumFeedUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      showEmpty();
      return;
    }

    const posts = data.items;
    grid.innerHTML = posts.map((p) => renderCard(p)).join('');
    $('#blogEmpty').classList.add('hidden');
  } catch (err) {
    console.warn('Medium feed yüklənə bilmədi:', err);
    showEmpty();
  }
}

function renderCard(post) {
  const title = escapeHtml(stripTags(post.title || 'Başlıqsız yazı'));
  const desc = escapeHtml(stripTags(post.description || '').slice(0, 180));
  const date = formatDate(post.pubDate);
  const link = post.link || mediumFeedUrl;
  const thumb = post.thumbnail
    ? `<img class="card__thumb" src="${escapeHtml(post.thumbnail)}" alt="" loading="lazy" />`
    : '<div class="card__thumb"></div>';
  const cats = (post.categories || [])
    .slice(0, 3)
    .map((c) => `<span class="card__cat">${escapeHtml(c)}</span>`)
    .join('');

  return `
    <article class="card reveal visible">
      ${thumb}
      <div class="card__body">
        <div class="card__meta">
          <time datetime="${escapeHtml(post.pubDate || '')}">${escapeHtml(date)}</time>
          <div class="card__cats">${cats}</div>
        </div>
        <h3 class="card__title">${title}</h3>
        <p class="card__desc">${desc}</p>
        <a class="card__foot" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">read write-up</a>
      </div>
    </article>`;
}

function showEmpty() {
  $('#blogGrid').innerHTML = '';
  $('#blogEmpty').classList.remove('hidden');
}
