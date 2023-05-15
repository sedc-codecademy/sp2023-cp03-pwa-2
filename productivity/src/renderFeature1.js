// import * as feature1Js from "./feature1.js";
export const feature1Content = `
<h2>Audit Management Checklist</h2>
<div id="checklist"></div>

<div>
  <label for="checklist-name">Choose a checklist:</label>

  <select name="checklist-name" id="checklist-name">
  <option value="test-checklist" selected>Test checklist</option>
  <option value="" disabled >--Please choose an option--</option>
    <option value="bartender-open-shift">Opening Shift - Bartender</option>
    <option value="bartender-close-shift">Closing Shift - Bartender</option>
    <option value="manager-close-shift">Closing Shift - Restaurant Manager</option>
    <option value="supervisor-close-shift">Closing Shift - Supervisor</option>
    <option value="supervisor-utilities-sanitation">Utilities and sanitation - Supervisor</option>
    <option value="manager-daily-checklist">Daily checklist - Restaurant Manager</option>
    <option value="supervisor-weekly-checklist">Weekly checklist - Supervisor</option>
    <option value="supervisor-waiter-checklist">Waiter checklist - Supervisor</option>
    <option value="manager-waiter-checklist">Waiter checklist - Manager</option>
  </select>
  <!-- <input type="text" id="checklist-name" required /> -->
  <button id="create-checklist" class="feat-button feat-button--white">Create Checklist</button>
</div>

<button id="render-checklist" class="feat-button feat-button--white">Render Single Checklist</button>
<div id="render-modal" class="modal" style="display: none">
  <div class="modal-content">
    <div class="container">
      <!-- Show checklist here -->
    </div>
    <button id="close-render-modal" class="feat-button feat-button--white">Close</button>
  </div>
</div>

<div>
  <button id="show-incomplete-items" class="feat-button feat-button--white">Show Incomplete Items</button>
</div>

<div>
  <button id="show-allitems" class="feat-button feat-button--white">Show All Checklists</button>
</div>

<div id="allitems-modal" class="modal" style="display: none">
  <div class="modal-content">
    <h3>All Checklists</h3>
    <ul id="all-items"></ul>
    <button id="close-allitems-modal" class="feat-button feat-button--white">Close</button>
  </div>
</div>

<div id="modal" style="display: none" class="modal">
  <div class="modal-content">
    <h3>Incomplete Items</h3>
    <ul id="incomplete-items"></ul>
    <button id="close-modal" class="feat-button feat-button--white">Close</button>
  </div>
</div>

<div id="created-cheklist-modal" style="display: none" class="modal">
  <div class="modal-content">
    <h3>Current checklist</h3>
    <ul id="checklist-items"></ul>
    <button id="close-cheklist-modal" class="feat-button feat-button--white">Close</button>
  </div>
</div>
`;
