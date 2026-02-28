function goTo(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

/* ===== Advanced Particles ===== */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];
const numberOfParticles = 100;

for (let i = 0; i < numberOfParticles; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5),
    dy: (Math.random() - 0.5)
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#1D4ED8";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    for (let j = i; j < particles.length; j++) {
      let p2 = particles[j];
      let dx = p.x - p2.x;
      let dy = p.y - p2.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(0,245,255," + (1 - distance / 100) + ")";
        ctx.lineWidth = 0.5;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ===== Unified Loader Animation with Fade Out ===== */
const wrapper = document.querySelector(".timer-wrapper");
const percentText = document.querySelector(".timer-percent");
const ring = document.querySelector(".timer-ring");
const bar = document.getElementById("progress-bar");
const text = document.getElementById("progress-text");
const button = document.querySelector(".explore-button");

const delay = 4400;     // يبدأ بعد 4.4 ثانية
const duration = 10000; // مدة 10 ثواني
let startTime = null;
let animationFrame;

setTimeout(() => {

  if (wrapper) {
    wrapper.style.opacity = "1";
    wrapper.style.transition = "opacity 0.5s ease";
  }

  if (ring) {
    ring.style.animation = `spin ${duration}ms linear forwards`;
  }

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;

    let elapsed = timestamp - startTime;
    let percent = Math.min((elapsed / duration) * 100, 100);
    let value = Math.floor(percent);

    if (percentText) percentText.textContent = value + "%";
    if (text) text.textContent = value + "%";
    if (bar) bar.style.width = percent + "%";

    if (percent < 100) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationFrame);

      // Fade out تدريجي
      if (wrapper) {
        wrapper.style.transition = "opacity 1s ease";
        wrapper.style.opacity = "0";
      }

      setTimeout(() => {
        window.location.href = "about.html";
      }, 1000); // بعد ثانية من الفيد أوت
    }
  }

  animationFrame = requestAnimationFrame(animate);

  if (button) {
    button.addEventListener("click", () => {
      cancelAnimationFrame(animationFrame);
      if (wrapper) {
        wrapper.style.transition = "opacity 0.5s ease";
        wrapper.style.opacity = "0";
      }
      setTimeout(() => {
        window.location.href = "about.html";
      }, 500);
    });
  }

}, delay);

window.onload = () => {
  // كل شيء يبدأ من البداية عند تحميل الصفحة
  startLoader();
};

function startLoader() {
  function goTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }

  /* ===== Advanced Particles ===== */
  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let particles = [];
  const numberOfParticles = 100;

  for (let i = 0; i < numberOfParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5),
      dy: (Math.random() - 0.5)
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#1D4ED8";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      for (let j = i; j < particles.length; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(0,245,255," + (1 - distance / 100) + ")";
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }
  drawParticles();

  /* ===== Loader Animation ===== */
  const wrapper = document.querySelector(".timer-wrapper");
  const percentText = document.querySelector(".timer-percent");
  const ring = document.querySelector(".timer-ring");
  const bar = document.getElementById("progress-bar");
  const text = document.getElementById("progress-text");
  const button = document.querySelector(".explore-button");

  const delay = 4400;     // يبدأ بعد 4.4 ثانية
  const duration = 10000; // مدة 10 ثواني
  let startTime = null;
  let animationFrame;

  setTimeout(() => {
    if (wrapper) {
      wrapper.style.opacity = "1";
      wrapper.style.transition = "opacity 0.5s ease";
    }

    if (ring) {
      ring.style.animation = `spin ${duration}ms linear forwards`;
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;

      let elapsed = timestamp - startTime;
      let percent = Math.min((elapsed / duration) * 100, 100);
      let value = Math.floor(percent);

      if (percentText) percentText.textContent = value + "%";
      if (text) text.textContent = value + "%";
      if (bar) bar.style.width = percent + "%";

      if (percent < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrame);

        // Fade out تدريجي
        if (wrapper) {
          wrapper.style.transition = "opacity 1s ease";
          wrapper.style.opacity = "0";
        }

        setTimeout(() => {
          window.location.href = "about.html";
        }, 1000); // بعد ثانية من الفيد أوت
      }
    }

    animationFrame = requestAnimationFrame(animate);

    if (button) {
      button.addEventListener("click", () => {
        cancelAnimationFrame(animationFrame);
        if (wrapper) {
          wrapper.style.transition = "opacity 0.5s ease";
          wrapper.style.opacity = "0";
        }
        setTimeout(() => {
          window.location.href = "about.html";
        }, 500);
      });
    }

  }, delay);
}

// ==== Redirect إلى loader عند refresh ====
window.onload = () => {
  // لو المستخدم مش في الصفحة الرئيسية
  if (window.location.pathname.includes("about.html")) {
    // رجعه للصفحة الرئيسية (loader.html)
    window.location.href = "index.html"; // ضع هنا اسم الصفحة اللي فيها الـ loader
  }
};