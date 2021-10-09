import type { Component } from "solid-js";
import marked from "marked";
import highlightJS from "highlight.js";

import "highlight.js/scss/vs.scss";

marked.setOptions({
  highlight: (code, lang) => {
    console.log(lang, highlightJS.highlight(code, { language: lang }).value);
    return highlightJS.highlight(lang, code).value;
  },
});

const content = `
## Posts
1. [A problem from google foobar](google.com)
2. ...

### Footnote

Just started drafting down my journey

if you have any query, hit me up junaid1460@gmail.com ( format your subject like this \`PROFILE: ..\` )

`;

import styles from "./app.module.css";
import "./app.scss";
import "github-markdown-css/github-markdown.css";

const App: Component = () => {
  return (
    <div class={styles.container}>
      <div class={styles.topbar}>
        <div class={styles.logo}></div>
        <span class={styles.logoName}>Brain food</span>
        <span style="padding-left: 5px; margin-bottom: -10px">
          from <a href="https://github.com/junaid1460">junaid1460</a>
        </span>
      </div>
      <div class={styles.sidebar}></div>
      <div class={styles.content}>
        <div
          class="app-markdown markdown-body"
          innerHTML={marked(content, { headerIds: true, breaks: true })}
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
