"use client";
const srollToUiPortfolio = () => {
  const element = document.getElementById("ui-portfolio");
  element?.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "start",
  });
};

const ScrollDownButton = () => {
  return (
    <button className="down-btn" onClick={srollToUiPortfolio}>
      <span>❱❱❱</span>
    </button>
  );
};

export default ScrollDownButton;
