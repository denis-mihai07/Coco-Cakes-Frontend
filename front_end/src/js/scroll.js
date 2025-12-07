window.addEventListener("scroll", () => {
  sessionStorage.setItem("scrollPosition", window.scrollY);
});

window.addEventListener("load", () => {
  const scrollPosition = sessionStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo({
      top: parseInt(scrollPosition),
      left: 0,
      behavior: "instant",
    });
  }
});
