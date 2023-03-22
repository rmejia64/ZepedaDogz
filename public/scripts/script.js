window.addEventListener("load", (event) => {
  console.log("page has been loaded");
  console.log(document.body);

  let logo = document.getElementById("mobile-logo-wrap");
  let linkswrap = document.getElementById("mobile-links-container");
  let hide = true;
  renderNav();

  logo.addEventListener("click", (event) => {
    hide = !hide;
    console.log("click");
    renderNav();
  });

  window.addEventListener("resize", (event) => {
    handleResize();
  });

  function renderNav() {
    if (hide) {
      for (let i = 1; i < 7; i++) {
        linkswrap.children[i].style.display = "none";
      }
    } else {
      for (let i = 1; i < 7; i++) {
        linkswrap.children[i].style.display = "block";
      }
    }
  }

  function handleResize() {
    if (window.innerWidth < 900) {
      hide = true;
    } else {
      hide = false;
    }

    renderNav();
  }
});
