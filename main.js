// Footer year — keeps copyright fresh without manual edits.
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle: stores choice in localStorage, falls back to system preference.
// The initial theme is applied in <head> to avoid a flash of wrong colors.
(() => {
  const toggle = document.getElementById("theme-toggle");
  const meta = document.getElementById("theme-color-meta");
  if (!toggle) return;

  const META_COLORS = { dark: "#0e1626", light: "#f6f7fb" };

  const apply = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    if (meta) meta.setAttribute("content", META_COLORS[theme] || META_COLORS.dark);
    toggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  };

  // Sync meta + aria-label with whatever the boot script already chose.
  apply(document.documentElement.getAttribute("data-theme") || "dark");

  toggle.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch (_) {
      /* storage disabled — choice won't persist, that's fine */
    }
  });

  // Follow system changes only when the user hasn't picked one yet.
  if (window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e) => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch (_) {}
      apply(e.matches ? "light" : "dark");
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }
})();

// Contact form: visual only. Submitting shows a toast — no real send.
(() => {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");
  if (!form || !toast) return;

  const MESSAGE =
    "This feature will be added soon. For now, you can contact me through the channels above.";

  let hideTimer = 0;

  const showToast = (text) => {
    toast.textContent = text;
    toast.setAttribute("aria-hidden", "false");
    void toast.offsetWidth;
    toast.classList.add("is-visible");

    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      toast.setAttribute("aria-hidden", "true");
    }, 4000);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast(MESSAGE);
  });
})();
