export class Checklist {
  static checklistsArray = [];
  constructor(title, startDate, endDate, startTime, endTime, items = [], result) {
    this.id = Math.floor(Math.random() * 100);
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.startTime = startTime;
    this.endTime = endTime;
    this.items = [...items];
    this.result = result;
    this.completed = false;
    Checklist.checklistsArray.push(this);
  }
  static async createChecklist(title, startDate, endDate, startTime, endTime, items, result) {
    const checklist = new Checklist(title, startDate, endDate, startTime, endTime, items, result);
    return checklist;
  }
  static async getAllChecklists() {
    const checklists = this.checklistsArray;
    return checklists;
  }
  static async renderSingleChecklist() {
    // if (checklistNameInput.options[checklistNameInput.selectedIndex].value === "test-checklist") return checklist1Content;
    // if (checklistNameInput.options[checklistNameInput.selectedIndex].value === "bartender-open-shift") return bartenderOpenChecklist;
  }
  static async findChecklistById(id) {
    const foundCl = this.checklistsArray.find((item) => item.id === id);
    return foundCl;
  }
  static async updateChecklist(id, data) {
    const foundCl = this.checklistsArray.find((item) => item.id === id);
    const updatedChecklist = { ...foundCl, ...data };
    const updatedChecklistArray = this.checklistsArray.map((item) => (item.id === updatedChecklist.id ? updatedChecklist : item));
    // const updatedChecklist = Object.assign(foundCl, data);
    this.checklistsArray = updatedChecklistArray;
    return updatedChecklistArray;
  }
  static async changeChecklistStatus(id, booStatus) {
    const foundCl = this.checklistsArray.find((item) => item.id === id);
    const updatedChecklist = { ...foundCl, ...{ completed: booStatus } };
    const updatedChecklistArray = this.checklistsArray.map((item) => (item.id === updatedChecklist.id ? updatedChecklist : item));
    // const updatedChecklist = Object.assign(foundCl, data);
    this.checklistsArray = updatedChecklistArray;
    return updatedChecklistArray;
  }
  static async showIncompleteChecklists() {
    const foundCl = this.checklistsArray.filter((item) => item.completed === false);
    return foundCl;
  }
  static async deleteChecklist(id) {
    const deletedChecklistArray = this.checklistsArray.filter((item) => item.id !== id);
    this.checklistsArray = deletedChecklistArray;
    return deletedChecklistArray;
  }
  static async completeItem(id) {
    const item = this.checklistsArray.find((item) => item.id === id);
    item.completed = true;
    // console.log(item);
  }
  static async percentComplete() {
    const cheklists = this.checklistsArray.length;
    if (cheklists === 0) return 0;
    const foundCl = this.checklistsArray.filter((item) => item.completed === true).length;
    let countCompleted = Math.floor((foundCl / cheklists) * 100);
    // console.log(foundCl);
    return countCompleted;
  }
}
