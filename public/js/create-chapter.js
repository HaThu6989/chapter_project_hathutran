import { deleteChapter } from "./delete-chapter.js";

function createNewChapter() {
  const form = document.getElementById("create-form");
  const chaptersContainer = document.querySelector("#chapter-list-container");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData);
    const body = JSON.stringify(entries);
    axios
      .post("/chapter/new", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        chaptersContainer.innerHTML += response.data;
        deleteChapter();
        createNewChapter();
      })
      .catch((error) => {
        console.error("Error creating new chapter:", error);
      });
  });
}
createNewChapter();
