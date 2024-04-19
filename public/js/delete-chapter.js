export function deleteChapter() {
  const deleteIcons = document.querySelectorAll(".delete-chapter");

  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const chapterId = icon.getAttribute("data-chapterid");

      axios
        .delete(`/chapter/delete/${chapterId}`)
        .then((response) => {
          icon.closest(".chapter-card").remove();
        })
        .catch((error) => {
          console.error("Error deleting chapter:", error);
        });
    });
  });
}

deleteChapter();
