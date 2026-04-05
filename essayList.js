export function loadEssay() {
    fetch("essays.json")
    .then(res => res.json())
    .then(essays => {
        const essayList = document.getElementById("essay-Titles");
        const modal = document.getElementById("essay-Modal");
        const titleElem = document.getElementById("title");
        const contentElem = document.getElementById("content");
        const closeModal = document.getElementById("closeModal");

      // Close modal when X is clicked
        closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
        essayList.style.display = "block";  // show list again//
        });
        
        essays.forEach(essay => {
            const li = document.createElement("li");
            li.textContent = essay.title;

        li.addEventListener("click", () => {
            essayList.style.display = "none";  // hide list
            titleElem.textContent = essay.title;
            contentElem.textContent = essay.content;

        modal.classList.add("show");       // trigger CSS animation
        });

        essayList.appendChild(li);
    });
})
    .catch(err => console.error(err));
}