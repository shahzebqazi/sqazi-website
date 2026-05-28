(function () {
  var STORAGE_KEY = "sqazi-theme";
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function preferred() {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "latte" : "mocha";
  }

  function current() {
    return root.getAttribute("data-theme") || preferred();
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* private mode */
    }
    if (toggle) {
      toggle.textContent = theme === "latte" ? "Mocha" : "Latte";
      toggle.setAttribute("aria-label", "Switch to " + (theme === "latte" ? "dark" : "light") + " theme");
    }
  }

  var stored;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    stored = null;
  }
  apply(stored === "latte" || stored === "mocha" ? stored : preferred());

  if (toggle) {
    toggle.addEventListener("click", function () {
      apply(current() === "latte" ? "mocha" : "latte");
    });
  }
})();
