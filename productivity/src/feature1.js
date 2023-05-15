import { checklist1Content } from "./renderFeat1Check1.js";
import { checklistLogic } from "./checklists.js";
import { bartenderOpenChecklist } from "./renderfeat1BartenderOpen.js";
import { Checklist } from "./classChecklist.js";

export function feature1Js() {
  const newChecklist = new Checklist("First checklist", "22.04.2023", "22.04.2023", "12:15", "12:17", [
    { see: "what" },
    { hear: "no" },
    { speak: false },
  ]);
  const newChecklist1 = new Checklist("Second checklist", "22.04.2023", "22.04.2023", "12:15", "12:17", [
    { see: "what" },
    { hear: "no" },
    { speak: false },
  ]);
  const newChecklist2 = new Checklist("Third checklist", "22.04.2023", "22.04.2023", "12:15", "12:17", [
    { see: "what" },
    { hear: "no" },
    { speak: false },
  ]);
  // console.log(newChecklist);
  const newOne = Checklist.createChecklist("Fourth checklist", "22.04.2023", "22.04.2023", "12:15", "12:17", [
    { see: "what" },
    { hear: "no" },
    { speak: false },
  ]);
  // console.log(newOne);

  const checklistElement = document.getElementById("checklist");
  const incompleteItemsButton = document.getElementById("show-incomplete-items");
  const modalElement = document.getElementById("modal");
  const incompleteItemsList = document.getElementById("incomplete-items");
  const closeModalButton = document.getElementById("close-modal");

  const allChecklistButton = document.getElementById("show-allitems");
  const allChecklistsModal = document.getElementById("allitems-modal");
  const allChecklistsList = document.getElementById("all-items");
  const closeAllChecklistModalButton = document.getElementById("close-allitems-modal");

  const checklistNameInput = document.getElementById("checklist-name");
  const createChecklistButton = document.getElementById("create-checklist");
  const checklistItemsList = document.getElementById("checklist-items");
  const checklistModalElement = document.getElementById("created-cheklist-modal");
  const closeChecklistModalButton = document.getElementById("close-cheklist-modal");

  const renderChecklistsModal = document.getElementById("render-modal");
  const container = document.querySelector(".container");
  const renderChecklistButton = document.getElementById("render-checklist");
  const closeRenderModalButton = document.getElementById("close-render-modal");

  // Handle clicking on the "Create checklist" button
  createChecklistButton.addEventListener("click", async () => {
    const newChecklist = await Checklist.createChecklist(checklistNameInput.options[checklistNameInput.selectedIndex].text, [
      { see: "what" },
      { hear: "no" },
      { speak: false },
    ]);
    checklistItemsList.innerHTML = `<li id="${newChecklist.id}">${newChecklist.title}</li>`;
    checklistModalElement.style.display = "block";
    modalElement.style.display = "none";
    allChecklistsModal.style.display = "none";
    checklistNameInput.value = "";
    checklistElement.innerHTML = "See for incomplete checklists";
  });

  // Handle clicking on the "Show Incomplete Cheklists" button
  incompleteItemsButton.addEventListener("click", () => {
    const incompleteItems = Checklist.checklistsArray.filter((item) => !item.completed);
    incompleteItemsList.innerHTML = incompleteItems.map((item) => `<li id="${item.id}">${item.title}</li>`).join("");
    modalElement.style.display = "block";
    checklistModalElement.style.display = "none";
    allChecklistsModal.style.display = "none";
  });

  // Handle clicking on the "Show All Checklists" button
  allChecklistButton.addEventListener("click", () => {
    const allCheklists = Checklist.checklistsArray;
    allChecklistsList.innerHTML = allCheklists
      .map((item) => `<li id="${item.id}">${item.title}  Status:${item.completed ? "Completed" : "Not Completed"}</li>`)
      .join("");
    // console.log(allChecklistsList);
    allChecklistsModal.style.display = "block";
    modalElement.style.display = "none";
    checklistModalElement.style.display = "none";
  });

  // Handle clicking on an incomplete item to mark it as completed
  incompleteItemsList.addEventListener("click", async (event) => {
    const clickedListItem = event.target;
    // console.log(clickedListItem);
    if (clickedListItem.tagName === "LI") {
      const index = parseInt(clickedListItem.id);
      await Checklist.completeItem(index);
      clickedListItem.classList.add("completed");
      checklistElement.innerHTML = `
    <div>
    The checklists are ${await Checklist.percentComplete()}% complete
    </div>
    `;
      console.log(Checklist.checklistsArray[Checklist.checklistsArray.length - 1]);
      if ((await Checklist.percentComplete()) >= 100) {
        modalElement.style.display = "none";
      }
    }
  });

  // Handle clicking on a button to render single checklist
  renderChecklistButton.addEventListener("click", async () => {
    // container.innerHTML = await Checklist.renderSingleChecklist();
    // if (checklistNameInput.options[checklistNameInput.selectedIndex].value === "test-checklist") container.innerHTML = checklist1Content;
    // if (checklistNameInput.options[checklistNameInput.selectedIndex].value === "bartender-open-shift") container.innerHTML = bartenderOpenChecklist;
    const checklistContent = {
      "test-checklist": checklist1Content,
      "bartender-open-shift": bartenderOpenChecklist,
    };

    const selectedValue = checklistNameInput.options[checklistNameInput.selectedIndex].value;
    if (checklistContent.hasOwnProperty(selectedValue)) {
      container.innerHTML = checklistContent[selectedValue];
    }

    checklistLogic();
    renderChecklistsModal.style.display = "block";
    checklistModalElement.style.display = "none";
    modalElement.style.display = "none";
    allChecklistsModal.style.display = "none";
  });

  // Handle clicking on the "Close" button to close the modals
  closeModalButton.addEventListener("click", () => {
    modalElement.style.display = "none";
  });
  closeChecklistModalButton.addEventListener("click", () => {
    checklistModalElement.style.display = "none";
  });
  closeAllChecklistModalButton.addEventListener("click", () => {
    allChecklistsModal.style.display = "none";
  });
  closeRenderModalButton.addEventListener("click", () => {
    renderChecklistsModal.style.display = "none";
  });
}
