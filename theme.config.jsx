export default {
  logo: <span>数据库原理课程设计</span>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – NUAA",
    };
  },
  darkMode: true,
  sidebar: {
    toggleButton: true,
  },
  toc: {
    float: true,
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          ZYH
        </a>
        .
      </span>
    ),
  },
};
