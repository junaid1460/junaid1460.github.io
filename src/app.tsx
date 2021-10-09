import { Component, createSignal } from "solid-js";
import marked from "marked";
import highlightJS from "highlight.js";

import "highlight.js/scss/vs.scss";

marked.setOptions({
  highlight: (code, lang) => {
    console.log(lang, highlightJS.highlight(code, { language: lang }).value);
    return highlightJS.highlight(lang, code).value;
  },
});

import styles from "./app.module.css";
import "./app.scss";
import "github-markdown-css/github-markdown.css";

const App: Component = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  let page = params.page || "home";

  const [content, setContent] = createSignal<string>();

  console.log(page);

  if (!page.startsWith("http")) {
    page = `/pages/${page}.md`;
  }

  fetch(page)
    .then((e) => e.text())
    .then((response) => setContent(response));

  return (
    <div class={styles.container}>
      <div class={styles.backLay}> </div>
      <div class={styles.topbar}>
        <div class={styles.logo}></div>
        <span class={styles.logoName}>Brain food</span>
      </div>
      <div class={styles.sidebar}></div>
      <div class={styles.content}>
        <div
          class="app-markdown markdown-body"
          innerHTML={marked(content() || "", {
            headerIds: true,
            breaks: true,
          })}
        ></div>
      </div>
      <div class={styles.footer}>
        <div class={styles.contactInformation}>
          <a href="https://www.linkedin.com/in/junaid1460" target="_blank">
            <i class="fab fa-linkedin" className={styles.contactIcon}></i>
          </a>

          <a href="https://github.com/junaid1460" target="_blank">
            <i class="fab fa-github" className={styles.contactIcon}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
