import "./style.css";

const builtAt = __BUILD_TIME__;
document.querySelector("#app").innerHTML = `
  <h1>⚡ Vite build deployed</h1>
  <p>This app was built on the hosting platform with <code>vite build</code>.</p>
  <p class="meta">Built at ${builtAt}</p>
`;
