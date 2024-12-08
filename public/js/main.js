//! Variables (Jquery Type)
htmlDocument = $("html");
const headerMenu = $(".header__menu");
const headerMenuOpener = $(".header__content-menu");
const headerMenuCloser = $(".header__menu-close");
const homeButton = $(".homeBtn");
const popularSections = $(".popular__content-body");
const popularSectionButtons = $(".popular__content-button");

//! Functions
//! Open Header Menu
const openHeaderMenu = () => {
  headerMenu.animate(
    {
      right: 0,
    },
    1000
  );
  htmlDocument.css("overflow", "hidden");
  homeButton.css({
    display: "none",
    opacity: "0",
  });
};

//! Close Header Menu
const closerHeaderMenu = () => {
  headerMenu.animate(
    {
      right: "-100vw",
    },
    1000
  );
  htmlDocument.css("overflow", "auto");
  homeButton.css("display", "block");
  homeButton.animate(
    {
      opacity: "1",
    },
    675
  );
};

//! Making The Clicked Popular Section Visible
const visiblePopularSection = (event) => {
  const clickedSectionClass = event.target.className.slice(24);
  const clickedSection = $(`.popular__content-body.${clickedSectionClass}`);
  //! Changing Buttons Style
  popularSectionButtons.each((index, element) => {
    element.style.backgroundColor = "transparent";
  });
  event.target.style.backgroundColor = "#ffffff3b";

  //! Changing Sections Style
  popularSections.each((index, element) => {
    element.style.display = "none";
    element.style.opacity = "0";
  });
  clickedSection.css("display", "flex");
  clickedSection.animate({ opacity: "1" });
};

//! Calling Functions
headerMenuOpener.on("click", openHeaderMenu);
headerMenuCloser.on("click", closerHeaderMenu);
popularSectionButtons.on("click", visiblePopularSection);
