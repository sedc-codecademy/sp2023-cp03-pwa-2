// Define a Checklist object
class Checklist {
  constructor(name, items) {
    this.name = name;
    this.items = items;
  }
  // Define a method to calculate the percentage of completed items
  percentComplete() {
    const numItems = this.items.length;
    if (numItems === 0) {
      return 0;
    } else if (numItems === 1) {
      return this.items[0].completed ? 100 : 0;
    }
    const numCompletedItems = this.items.reduce((count, item) => {
      return count + (item.completed ? 1 : 0);
    }, 0);
    return Math.round((numCompletedItems / numItems) * 100);
  }
  // Define a method to mark an item as completed
  completeItem(index) {
    const item = this.items[index];
    item.completed = true;
    console.log(this.items);
    //   console.log(this.items[0]);
    // if (index < this.items.length - 1) {
    //   // Check if item is not already at the end
    //   this.items.splice(index, 1); // Remove item from current position
    //   this.items.push(item); // Add item to end of array
    // }
  }
}

// Define a method to mark an item as incomplete
//   Checklist.prototype.incompleteItem = function (index) {
//     this.items[index].completed = false;
//   };

// Create an example checklist
const checklistItems = [
  { name: "Item 1", completed: false },
  { name: "Item 2", completed: false },
  { name: "Item 3", completed: false },
];
const checklist = new Checklist("My Checklist", checklistItems);

// Render the checklist on the page
const checklistElement = document.getElementById("checklist");
checklistElement.innerHTML = `
    <div>
      ${checklist.name} is ${checklist.percentComplete()}% complete
    </div>
  `;

const incompleteItemsButton = document.getElementById("show-incomplete-items");
const modalElement = document.getElementById("modal");
const incompleteItemsList = document.getElementById("incomplete-items");
const closeModalButton = document.getElementById("close-modal");
const checklistNameInput = document.getElementById("checklist-name");
const createChecklistButton = document.getElementById("create-checklist");
const checklistItemsList = document.getElementById("checklist-items");
const checklistModalElement = document.getElementById("created-cheklist-modal");
const closeChecklistModalButton = document.getElementById("close-cheklist-modal");
const createdChecklist = [];
// Handle clicking on the "Create checklist" button
createChecklistButton.addEventListener("click", () => {
  const newChecklist = new Checklist(checklistNameInput.value, { completed: false });
  createdChecklist.push(newChecklist);
  checklistItemsList.innerHTML = createdChecklist.map((item, index) => `<li id="${index}">${item.name}</li>`).join("");
  checklistModalElement.style.display = "block";
  modalElement.style.display = "none";
});

// Handle clicking on the "Show Incomplete Items" button
incompleteItemsButton.addEventListener("click", () => {
  const incompleteItems = createdChecklist.filter((item) => !item.completed);
  incompleteItemsList.innerHTML = incompleteItems.map((item, index) => `<li id="${index}">${item.name}</li>`).join("");
  modalElement.style.display = "block";
  checklistModalElement.style.display = "none";
});

// Handle clicking on an incomplete item to mark it as completed
incompleteItemsList.addEventListener("click", (event) => {
  const clickedListItem = event.target;
  if (clickedListItem.tagName === "LI") {
    const index = clickedListItem.id;
    checklist.completeItem(index);
    clickedListItem.classList.add("completed");
    checklistElement.innerHTML = `
        <div>
          ${checklist.name} is ${checklist.percentComplete()}% complete
        </div>
      `;
    if (checklist.percentComplete() >= 100) {
      modalElement.style.display = "none";
    }
  }
});

// Handle clicking on a completed item to mark it as incomplete
//   checklistElement.addEventListener("click", (event) => {
//     const clickedListItem = event.target;
//     if (clickedListItem.tagName === "LI") {
//       const index = clickedListItem.dataset.index;
//       checklist.incompleteItem(index);
//       clickedListItem.classList.remove("completed");
//       checklistElement.innerHTML = `
//     <div>
//       ${checklist.name} is ${checklist.percentComplete()}% complete
//     </div>
//   `;
//       if (checklist.percentComplete() < 100) {
//         modalElement.style.display = "block";
//       }
//     }
//   });

// Handle clicking on the "Close" button to close the modal
closeModalButton.addEventListener("click", () => {
  modalElement.style.display = "none";
});
closeChecklistModalButton.addEventListener("click", () => {
  checklistModalElement.style.display = "none";
});
