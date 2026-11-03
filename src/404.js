import "./style.css";
import "./404.css";
import arrowLeftIcon from "lucide-static/icons/arrow-left.svg?raw";
import rotateCwIcon from "lucide-static/icons/rotate-cw.svg?raw";

const icons = {
  "arrow-left": arrowLeftIcon,
  "rotate-cw": rotateCwIcon,
};

document.querySelectorAll("[data-icon]").forEach((element) => {
  element.innerHTML = icons[element.dataset.icon];
});

const systemColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
let themePreference = "system";

try {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (["light", "dark", "system"].includes(savedTheme)) {
    themePreference = savedTheme;
  }
} catch {}

function applyTheme() {
  const theme =
    themePreference === "system"
      ? systemColorScheme.matches
        ? "dark"
        : "light"
      : themePreference;

  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#101814" : "#f6f8f6");
}

applyTheme();
systemColorScheme.addEventListener("change", () => {
  if (themePreference === "system") {
    applyTheme();
  }
});

const routeCanvas = document.querySelector("#route-canvas");
const retryButton = document.querySelector("#retry-signal");
const traceStatus = document.querySelector("#trace-status");

retryButton.addEventListener("click", () => {
  routeCanvas.classList.remove("is-running");
  void routeCanvas.offsetWidth;
  routeCanvas.classList.add("is-running");
  traceStatus.textContent = "Signal retried. Destination still unavailable.";
});
