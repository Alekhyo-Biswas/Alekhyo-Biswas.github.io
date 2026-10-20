const CONFIG = {
  profile: {
    status: "Building VerScript (C17 Compiler & VM) + VS-Sharp",
    bio: "Systems and language developer architecting C compilers, bytecode virtual machines, cryptographic primitives (AES-256, xxHash), DSP synthesis extensions, and Olympiad mathematical proofs.",
    github: "https://github.com/alexon-v8"
  },
  metrics: [
    { value: "VerScript & C17", label: "Compiler, AST & VM Toolchain" },
    { value: "cmdOS / OS.sb", label: "Bytecode Kernel & 4+ Extensions" },
    { value: "AES-256 · FFT", label: "Cryptography & Spectral DSP" }
  ],
  projects: [
    {
      title: "VerScript Programming Language",
      category: "compilers",
      badge: "Flagship C Compiler & VM",
      status: "Active Dev",
      featured: true,
      description: "An open-source programming language written in C bridging expressive syntax with high-performance VM execution.",
      highlights: [
        "Lexer, parser, and fault-tolerant AST pipeline in C with contextual keywords and AST error recovery",
        "Automated multi-stage test suites running in Linux (WSL) and GitHub Actions CI/CD workflows"
      ],
      tags: ["C (C17)", "Compiler Design", "AST Recovery", "Bytecode VM", "WSL", "GitHub Actions"]
    },
    {
      title: "cmdOS Bytecode Virtual Machine",
      category: "compilers",
      badge: "VM Kernel & Runtime",
      status: "v2 Architecture",
      featured: true,
      description: "In-Scratch text compiler and virtual machine with bytecode execution, dynamic libraries, and virtual filesystem.",
      highlights: [
        "Compiles structured commands into bytecode executed by custom interpreter loop",
        "Native parsers for nested JSON objects and case-sensitive Base64 encoding"
      ],
      tags: ["Bytecode Interpreter", "VFS", "JSON Parser", "Base64 Codec", "Thread Stack"]
    },
    {
      title: "VS-Sharp (VS#)",
      category: "compilers",
      badge: "Intelligent Debugger",
      status: "In Development",
      featured: false,
      description: "AST-aware diagnostic debugger engineered for the VerScript toolchain.",
      highlights: ["Static AST fault localization and contextual syntax recovery hints", "Live bytecode frame and register inspection"],
      tags: ["VerScript", "C", "Static Analysis", "AST Diagnostics"]
    },
    {
      title: "PatternOS",
      category: "extensions",
      badge: "Neural & Statistical Engine",
      status: "Published",
      featured: false,
      description: "Statistical and pattern analysis engine built for TurboWarp and PenguinMod.",
      highlights: ["Pattern recognition and statistical primitives for block runtimes", "Documented for PenguinMod gallery"],
      tags: ["JavaScript", "TurboWarp", "PenguinMod", "Statistical Engine"]
    },
    {
      title: "MicroSynth",
      category: "extensions",
      badge: "Audio DSP Synth",
      status: "v1.0 Released",
      featured: false,
      description: "Compact synthesizer extension supporting microtonal tuning scales and waveform sample export.",
      highlights: ["Microtonal pitch ratios beyond standard 12-TET", "Programmable ADSR envelope shaping"],
      tags: ["Audio DSP", "Microtonal", "Sample Export", "JavaScript"]
    },
    {
      title: "penOS",
      category: "extensions",
      badge: "Graphics API",
      status: "v1.0.0 Released",
      featured: false,
      description: "Custom graphics extension expanding Scratch Pen with procedural rendering primitives.",
      highlights: ["Vector and raster rendering for custom UI in OS.sb", "Zero-dependency lightweight extension"],
      tags: ["Graphics API", "Procedural Rendering", "Scratch Pen"]
    },
    {
      title: "AES-256, xxHash & FFT Suite",
      category: "crypto",
      badge: "Cryptography & DSP",
      status: "Verified",
      featured: false,
      description: "Algorithmic implementations of symmetric block ciphers, hashing, and transforms.",
      highlights: ["AES-256 state matrix (SubBytes, MixColumns) and 256-bit key schedule", "Cooley-Tukey FFT and xxHash digest engine"],
      tags: ["AES-256", "GF(2^8)", "xxHash", "FFT", "One-Time Pad"]
    },
    {
      title: "Olympiad Number Theory & Energy 2047",
      category: "research",
      badge: "Math & Policy",
      status: "Research Portfolio",
      featured: false,
      description: "Olympiad number theory, calculus mensuration proofs, and India 2047 energy modeling.",
      highlights: ["Legendre's, Kummer's, Euler's totient, CRT, and quadratic residues", "Calculus derivations for 3D polyhedra and spheres"],
      tags: ["IOQM", "Calculus Mensuration", "Modular Arithmetic", "Energy Basket 2047"]
    }
  ],
  snippets: [
    {
      source: "fn compute_digest(buf: str, rounds: i32) -> u64 {\n  contextual let state = xxhash::init(0x9E3779B1);\n  return state.mix(buf, rounds);\n}",
      ast: "FunctionDecl [compute_digest -> u64]\n ├─ ParamList: (buf: str, rounds: i32)\n └─ BlockStmt\n     ├─ ContextualLet [state] := CallExpr(xxhash::init)\n     └─ ReturnStmt -> MethodCall(state.mix)",
      bytecode: "0x0000  LOAD_CONST    0x9E3779B1\n0x0004  CALL_EXT      <xxhash::init>\n0x0008  STORE_LOCAL   r0 (state)\n0x000C  RET_VAL"
    },
    {
      source: "cmdOS::spawn_thread(\"T_ALPHA_09\", {\n  vfs.mount(\"/lib/pattern.so\");\n  json.parse('{\"kernel\":{\"mode\":\"bytecode\"}}');\n});",
      ast: "ThreadSpawn [id: \"T_ALPHA_09\"]\n ├─ VfsMountCall (\"/lib/pattern.so\")\n └─ NativeJsonParse { kernel: { mode: \"bytecode\" } }",
      bytecode: "0x00A0  PUSH_TID      \"T_ALPHA_09\"\n0x00A4  DYN_LOAD      \"/lib/pattern.so\"\n0x00A8  JSON_DECODE   depth=2\n0x00AC  YIELD_FRAME"
    },
    {
      source: "synth.patch(\"MicroLead\", {\n  tuning: 19_TET,\n  env: adsr(0.01, 0.18, 0.70, 0.35),\n  export_wav: true\n});",
      ast: "SynthPatchDecl [\"MicroLead\"]\n ├─ TuningScale: Microtonal(19-TET)\n ├─ EnvelopeGen: ADSR\n └─ SampleExport: WAV_PCM_16",
      bytecode: "0x01F0  SET_TUNING    RATIO_19TET\n0x01F4  GEN_ENV_ADSR  [0.01, 0.18, 0.70, 0.35]\n0x01F8  EXPORT_PCM"
    }
  ],
  math: [
    {
      title: "Legendre's & Kummer's p-adic Valuations",
      formula: "v_p(n!) = Σ_{k≥1} ⌊n / p^k⌋",
      desc: "Prime power valuations applied to competitive number theory (IOQM), Wilson's Theorem, and Chinese Remainder Theorem."
    },
    {
      title: "Calculus Mensuration Derivations",
      formula: "V_solid = ∫_{a}^{b} A(z) dz",
      desc: "Formal infinitesimal slice proofs for polyhedra, cylinders, pyramids, and sphere mensuration."
    }
  ],
  stack: [
    { category: "Languages", items: ["C (C11/C17)", "VerScript", "JavaScript", "PowerShell", "cmdOS Bytecode"] },
    { category: "Compiler / VM", items: ["Lexer/AST", "Fault Recovery", "Bytecode VM", "VFS", "Nested JSON"] },
    { category: "Algorithms", items: ["AES-256 GF(2^8)", "xxHash", "Radix-2 FFT", "One-Time Pad", "Number Theory"] },
    { category: "Tooling", items: ["Linux / WSL", "VS Code", "GitHub Actions", "TurboWarp Desktop"] }
  ]
};

function init() {
  document.getElementById("cfg-status").textContent = CONFIG.profile.status;
  document.getElementById("cfg-bio").textContent = CONFIG.profile.bio;
  document.getElementById("nav-github").href = CONFIG.profile.github;
  document.getElementById("hero-github").href = CONFIG.profile.github;
  document.getElementById("cfg-metrics").innerHTML = CONFIG.metrics.map(m => `
    <div class="metric-card"><div class="metric-val">${m.value}</div><div class="metric-lbl">${m.label}</div></div>
  `).join("");

  renderProjects("all");
  document.getElementById("math-cards").innerHTML = CONFIG.math.map(m => `
    <div class="math-card"><h4>${m.title}</h4><div class="formula-box">${m.formula}</div><p style="color:var(--text-secondary);font-size:0.82rem;">${m.desc}</p></div>
  `).join("");

  document.getElementById("stack-grid").innerHTML = CONFIG.stack.map(s => `
    <div class="stack-col"><h3>// ${s.category}</h3><div class="stack-list">${s.items.map(i => `<span class="stack-pill">${i}</span>`).join("")}</div></div>
  `).join("");

  loadSnippet(0);
  initAES();
}

function renderProjects(filter) {
  const grid = document.getElementById("bento-grid");
  const list = filter === "all" ? CONFIG.projects : CONFIG.projects.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => `
    <article class="bento-card ${p.featured && filter === 'all' ? 'featured' : ''}">
      <div>
        <div class="card-meta"><span class="card-badge">${p.badge}</span><span class="card-status">● ${p.status}</span></div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        <ul class="card-points">${p.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
      </div>
      <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </article>
  `).join("");
}

function runCommand(raw) {
  const out = document.getElementById("term-output");
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return;
  const p = document.createElement("div");
  p.className = "term-line t-cyan";
  p.textContent = `alekhyo@verscript:~$ ${raw}`;
  out.appendChild(p);

  const echo = (html, cls="") => {
    const d = document.createElement("div");
    d.className = `term-line ${cls}`;
    d.innerHTML = html;
    out.appendChild(d);
    out.scrollTop = out.scrollHeight;
  };

  if (cmd === "help") {
    echo("Commands: verscript, cmdos, extensions, crypto, math, clear", "t-indigo");
  } else if (cmd === "verscript") {
    echo("VerScript: C17 Compiler + Fault-Tolerant AST + VS-Sharp Debugger ✓", "t-green");
  } else if (cmd === "cmdos") {
    echo("cmdOS VM: Bytecode Interpreter + VFS + Nested JSON/Base64 Engine ✓", "t-amber");
  } else if (cmd === "extensions") {
    echo("Extensions: PatternOS, MicroSynth (microtonal DSP), penOS v1.0", "t-indigo");
  } else if (cmd === "crypto") {
    echo("✔ AES-256 State Matrix | xxHash32 | FFT : ALL PASS", "t-green");
  } else if (cmd === "math") {
    echo("Math: Legendre's / Kummer's Theorems, 3D Calculus Mensuration", "t-amber");
  } else if (cmd === "clear") {
    out.innerHTML = "";
  } else {
    echo(`vs-sh: '${raw}' not found. Type 'help'`, "t-amber");
  }
}

function loadSnippet(i) {
  const s = CONFIG.snippets[i];
  document.getElementById("ast-source").textContent = s.source;
  document.getElementById("ast-tree").textContent = s.ast;
  document.getElementById("ast-bytecode").textContent = s.bytecode;
}

const AES_INIT = [0x32, 0x88, 0x31, 0xE0, 0x43, 0x5A, 0x31, 0x37, 0xF6, 0x30, 0x98, 0x07, 0xA8, 0x8D, 0xA2, 0x34];
let aes = [...AES_INIT], round = 0;
function initAES() {
  document.getElementById("aes-grid").innerHTML = aes.map((b, i) => `
    <div id="c-${i}" class="aes-cell">0x${b.toString(16).toUpperCase().padStart(2, '0')}</div>
  `).join("");
}
function stepAES(op) {
  if (op === "Reset") { aes = [...AES_INIT]; round = 0; initAES(); return; }
  if (op === "SubBytes") aes = aes.map(b => (b * 17 + 0x63) & 0xFF);
  if (op === "ShiftRows") { const s = [...aes]; aes[4]=s[5]; aes[5]=s[6]; aes[6]=s[7]; aes[7]=s[4]; }
  if (op === "MixColumns") aes = aes.map((b, i) => (b ^ aes[(i+4)%16] ^ 0x1B) & 0xFF);
  if (op === "AddRoundKey") { round = (round % 14) + 1; aes = aes.map((b, i) => b ^ (round * 0x29 + i)); }
  document.getElementById("aes-round-label").textContent = `Round ${round}/14 (${op})`;
  aes.forEach((b, i) => {
    const el = document.getElementById(`c-${i}`);
    el.textContent = `0x${b.toString(16).toUpperCase().padStart(2, '0')}`;
    el.classList.add("mutated");
    setTimeout(() => el.classList.remove("mutated"), 200);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  const input = document.getElementById("term-input");
  input.addEventListener("keydown", e => { if (e.key === "Enter") { runCommand(input.value); input.value = ""; } });
  document.querySelectorAll(".term-chip[data-cmd]").forEach(c => c.addEventListener("click", () => runCommand(c.dataset.cmd)));
  document.querySelectorAll(".wb-tab").forEach(tab => tab.addEventListener("click", () => {
    document.querySelectorAll(".wb-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".wb-panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`panel-${tab.dataset.tab}`).classList.add("active");
  }));
  document.querySelectorAll(".snippet-btn").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".snippet-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadSnippet(Number(btn.dataset.snippet));
  }));
  document.querySelectorAll(".filter-pill").forEach(p => p.addEventListener("click", () => {
    document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
    p.classList.add("active");
    renderProjects(p.dataset.filter);
  }));
  document.getElementById("theme-btn").addEventListener("click", () => {
    const h = document.documentElement;
    h.setAttribute("data-theme", h.getAttribute("data-theme") === "light" ? "dark" : "light");
  });
});
