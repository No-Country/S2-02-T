function vaciarRoot() {
  const root = window.document.querySelector("#root");
  root.querySelector(".header-menu-hmbgs").addEventListener("click", () => {
    const nav = root.querySelector(".header__ul");
    console.log(nav.classList);
  });
}
export { vaciarRoot };
