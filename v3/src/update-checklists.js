import { Checklist } from "./classChecklist.js";

export function updateChecklistLogic(inputId, inputData) {
  // Handle buttons-dropdowns for expanding articles on the checklist
  const buttons = document.querySelectorAll(".checklist-form__ac-trigger");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      const panel = this.parentElement.nextElementSibling;
      panel.classList.toggle("isActive");
      if (panel.getAttribute("class").includes("isActive")) return this.setAttribute("aria-expanded", true);
      return this.setAttribute("aria-expanded", false);
    });
  }
  // Create starting date and time stamp
  // TODO-make variable for end date/time for calculations
  const startDate = `${new Date().getDate().toString().padStart(2, "0")}.${(new Date().getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${new Date().getFullYear()}`;
  const startTime = `${new Date().getHours().toString().padStart(2, "0")}:${new Date().getMinutes().toString().padStart(2, "0")}`;

  // Show results when "Finish" button is clicked - Submit form
  const finishButton = document.querySelector(".checklist-form__submit");
  finishButton.addEventListener("click", (e) => {
    e.preventDefault();
    showResults();
  });

  async function showResults() {
    let total = 0;
    let answered = 0;
    let comments = 0;
    let interimArray = [];
    let checklistItemsArray = [];
    const questions = document.querySelectorAll(".checklist-form__question");
    const answers = document.querySelectorAll(".checklist-form__answers");

    const checklistNameInput = document.getElementById("checklist-name");
    for (let i = 0; i < questions.length; i++) {
      const radios = answers[i].querySelectorAll('input[type="radio"]');
      const singleQuestion = questions[i].innerHTML;

      const comment = answers[i].nextElementSibling.querySelector("textarea").value;
      if (comment !== "") {
        comments++;
      }

      for (let j = 0; j < radios.length; j++) {
        const singleQuestionAnswer = radios[j].nextElementSibling.innerHTML;
        if (radios[j].checked) {
          // Cheklist items object
          const checklistItems = {
            id: radios[j].name,
            singleQuestion,
            "has value": radios[j].value,
            stating: singleQuestionAnswer,
            comment: comment !== "" ? comment : "N/A",
          };
          interimArray.push(checklistItems);
          // console.log("in loop", interimArray);
          total += parseInt(radios[j].value);
          answered++;
          if (answered === questions.length) {
            // console.log(answered, questions.length);
            checklistItemsArray.push(...interimArray);
            // Empty interim array
            interimArray = [];
            // console.log("after", interimArray);
          }
          // Uncheck all answers
          // radios[j].checked = false;
        }
      }
    }

    const modal = document.querySelector("#modal");
    const modalHedingContent = document.querySelector(".modal-test-content-h2");
    const percentageContent = document.querySelector("#percentage");
    const commentsContent = document.querySelector("#comments");
    const numberCommentsContent = document.querySelector("#numberComments");
    const renderChecklistsModal = document.getElementById("render-modal");

    const checklistItemsList = document.getElementById("checklist-items");
    //TODO-show the checklist in incomplete checklists on start and when in incomplete modal click to complete by taking it to the cl

    // Date and time stamp to the Checklist
    // TODO-make variable for end date/time for calculations
    const endDate = `${new Date().getDate().toString().padStart(2, "0")}.${(new Date().getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${new Date().getFullYear()}`;
    const endTime = `${new Date().getHours().toString().padStart(2, "0")}:${new Date().getMinutes().toString().padStart(2, "0")}`;

    //  Logic for calculating evaluation (success percentage)
    const result = (total / answered) * 100;
    const resultString = `${result.toFixed(2)}%`;

    // Push date, time and the final result as an object ONLY to the completed Checklist
    // checklistItemsArray.push({ startDate }, { endDate }, { startTime }, { endTime });
    const wholeChecklist = await Checklist.updateChecklist(inputId, [
      checklistNameInput.options[checklistNameInput.selectedIndex].text,
      startDate,
      endDate,
      startTime,
      endTime,
      [...checklistItemsArray],
      result,
    ]);
    console.dir(checklistNameInput.selectedOptions);
    if (answered === questions.length) {
      wholeChecklist.completed = true;
    }
    console.table(wholeChecklist);
    // console.table("final array", answeredSingleQuestionArray);
    console.table(checklistItemsArray);

    // Modal after succesfully completing the Checklist
    modalHedingContent.textContent = "Checklist Completed";
    percentageContent.textContent = resultString;
    commentsContent.textContent = `${comments === 1 ? "Comment" : "Comments"}`;
    numberCommentsContent.textContent = comments;
    modal.style.display = "block";

    // Closing modal button with 2 scenarios (complete and incomplete Checklist)
    const close = document.querySelector(".close").addEventListener("click", () => {
      if (answered === questions.length) {
        modal.style.display = "none";
        renderChecklistsModal.style.display = "none";

        // reset();
      }
      modal.style.display = "none";
    });

    // Modal after incomplete Checklist
    if (answered < questions.length) {
      modalHedingContent.textContent = "Please answer all questions";
      percentageContent.textContent = "";
      document.querySelector("#result").textContent = "";
      commentsContent.textContent = "";
      numberCommentsContent.textContent = "";
    }
    return checklistItemsArray;
  }
  // Resetting function
  function reset() {
    window.location.reload();
  }
}
