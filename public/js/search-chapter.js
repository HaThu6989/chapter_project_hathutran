let menuContainer;

window.addEventListener("click", () => {
  menuContainer.innerHTML = "";
});

window.addEventListener("DOMContentLoaded", () => {
  menuContainer = document.getElementById("search-menu-container");
  menuContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  const searchInput = document.getElementById("search-input");

  let ref;

  searchInput.addEventListener("input", (event) => {
    const value = event.target.value;
    console.log("value", value);
    if (ref) {
      clearTimeout(ref);
    }

    if (value.length) {
      ref = setTimeout(() => {
        axios
          .get(`/chapter/search?search=${value}`)
          .then((response) => {
            menuContainer.innerHTML = response.data;
            console.log("response", response);
          })
          .catch((error) => console.error("Error:", error));
      }, 1500);
    } else {
      menuContainer.innerHTML = "";
    }
  });
});
