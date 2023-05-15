export const bartenderOpenChecklist = `
<!-- Modal for viewing the results -->
<div id="modal" class="modal-test">
  <div class="modal-test-content">
    <h2 class="modal-test-content-h2"></h2>
    <span id="percentage"></span>
    <p id="result">Evaluation</p>
    <span id="numberComments"></span>
    <p id="comments"></p>
    <button class="close od-button od-button--white">Close</button>
  </div>
</div>
<section class="checklist-form">
<div class="checklist-form__wrapper container">
  <p class="checklist-form__disclaimer">You need to answer all the questions on the checklist to get a result</p>
  <form id="checklist" data-hs-cf-bound="true">
    <div class="checklist-form__group js-enabled is-active" id="ac-0">
      <div class="checklist-form__ac-head ac-header">
        <button
          class="checklist-form__ac-trigger"
          type="button"
          id="ac-trigger-0"
          role="button"
          aria-controls="ac-panel-0"
          aria-disabled="false"
          aria-expanded="true"
        >
          Standards of external appearance
        </button>
      </div>
      <div class="checklist-form__panel" id="ac-panel-0" role="region" aria-labelledby="ac-trigger-0">
        <fieldset>
          <p class="checklist-form__question">Is the bartender present at their workplace and appearing according to standards?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d786"
                id="question_643e4fb95d786-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d786-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d786"
                id="question_643e4fb95d786-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d786-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
      </div>
    </div>
    <div class="checklist-form__group js-enabled is-active" id="ac-1">
      <div class="checklist-form__ac-head ac-header">
        <button
          class="checklist-form__ac-trigger"
          type="button"
          id="ac-trigger-1"
          role="button"
          aria-controls="ac-panel-1"
          aria-disabled="false"
          aria-expanded="true"
        >
          Conditions and rules for the storage of semi-finished products
        </button>
      </div>
      <div class="checklist-form__panel" id="ac-panel-1" role="region" aria-labelledby="ac-trigger-1">
        <fieldset>
          <p class="checklist-form__question">Have all the storage deadlines for semi-finished products been met and have all the semi-finished products been labeled?
          </p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d792"
                id="question_643e4fb95d792-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d792-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d792"
                id="question_643e4fb95d792-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d792-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
      </div>
    </div>
    <div class="checklist-form__group js-enabled is-active" id="ac-2">
      <div class="checklist-form__ac-head ac-header">
        <button
          class="checklist-form__ac-trigger"
          type="button"
          id="ac-trigger-2"
          role="button"
          aria-controls="ac-panel-2"
          aria-disabled="false"
          aria-expanded="true"
        >
          Conditions and rules of storage of goods
        </button>
      </div>
      <div class="checklist-form__panel" id="ac-panel-2" role="region" aria-labelledby="ac-trigger-2">
        <fieldset>
          <p class="checklist-form__question">Has the product taken from the warehouse been labeled and placed in the designated areas of the bar?
          </p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d794"
                id="question_643e4fb95d794-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d794-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d794"
                id="question_643e4fb95d794-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d794-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
      </div>
    </div>
    <div class="checklist-form__group js-enabled is-active" id="ac-3">
      <div class="checklist-form__ac-head ac-header">
        <button
          class="checklist-form__ac-trigger"
          type="button"
          id="ac-trigger-3"
          role="button"
          aria-controls="ac-panel-3"
          aria-disabled="false"
          aria-expanded="true"
        >
          Equipment and inventory
        </button>
      </div>
      <div class="checklist-form__panel" id="ac-panel-3" role="region" aria-labelledby="ac-trigger-3">
        <fieldset>
          <p class="checklist-form__question">Is the coffee machine clean and decorated according to the standard?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d798"
                id="question_643e4fb95d798-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d798-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d798"
                id="question_643e4fb95d798-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d798-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Is the bar counter and countertop clean?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d799"
                id="question_643e4fb95d799-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d799-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d799"
                id="question_643e4fb95d799-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d799-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Are the sink and faucet clean, with no rust or buildup?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d79a"
                id="question_643e4fb95d79a-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79a-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d79a"
                id="question_643e4fb95d79a-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79a-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Are the refrigerators (inside and outside) free of dust, streaks, leaks, and food residue?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d79c"
                id="question_643e4fb95d79c-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79c-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d79c"
                id="question_643e4fb95d79c-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79c-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Do the shelves have no dust, cobwebs, stains, or streaks?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d79d"
                id="question_643e4fb95d79d-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79d-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d79d"
                id="question_643e4fb95d79d-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79d-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Are the sockets and switches clean?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d79e"
                id="question_643e4fb95d79e-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79e-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d79e"
                id="question_643e4fb95d79e-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79e-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Is the refrigerator display free of spots, dust, streaks, and leaks?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d79f"
                id="question_643e4fb95d79f-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79f-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d79f"
                id="question_643e4fb95d79f-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d79f-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Are the nightstands clean and free of trash, dirt, dust, and stains in the container they are placed in?
          </p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7a0"
                id="question_643e4fb95d7a0-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a0-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7a0"
                id="question_643e4fb95d7a0-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a0-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Are the shelves filled with clean polished glasses?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7a1"
                id="question_643e4fb95d7a1-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a1-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7a1"
                id="question_643e4fb95d7a1-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a1-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Do you have enough cleaning supplies and household goods?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7a3"
                id="question_643e4fb95d7a3-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a3-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7a3"
                id="question_643e4fb95d7a3-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a3-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Is the bar inventory clean?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7a4"
                id="question_643e4fb95d7a4-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a4-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7a4"
                id="question_643e4fb95d7a4-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a4-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Has the blacklist been compiled and provided to the administrator and waiters for review?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7a5"
                id="question_643e4fb95d7a5-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a5-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7a5"
                id="question_643e4fb95d7a5-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a5-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Is the coffee grinder clean and filled with beans?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7a6"
                id="question_643e4fb95d7a6-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a6-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7a6"
                id="question_643e4fb95d7a6-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a6-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Is the check printer working properly, clean, and with a spare thermal ribbon for replacement?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7a8"
                id="question_643e4fb95d7a8-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a8-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7a8"
                id="question_643e4fb95d7a8-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a8-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Are the boards clean and marked?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7a9"
                id="question_643e4fb95d7a9-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a9-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7a9"
                id="question_643e4fb95d7a9-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7a9-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Is the equipment in good working order, clean, and ready for use?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7aa"
                id="question_643e4fb95d7aa-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7aa-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7aa"
                id="question_643e4fb95d7aa-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7aa-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Is the beer system clean?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7ab"
                id="question_643e4fb95d7ab-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7ab-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7ab"
                id="question_643e4fb95d7ab-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7ab-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Do the beer kegs have labeling and meet the expiration date?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7ac"
                id="question_643e4fb95d7ac-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7ac-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7ac"
                id="question_643e4fb95d7ac-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7ac-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
        <fieldset>
          <p class="checklist-form__question">Are the bottles on the shelves wiped clean of dust and smudges?</p>
          <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--green"
                type="radio"
                name="question_643e4fb95d7ad"
                id="question_643e4fb95d7ad-yes"
                value="1"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7ad-yes">Yes</label>
            </li>
            <li class="checklist-form__answer-item">
              <input
                class="visually-hidden checklist-form__radio checklist-form__radio--red"
                type="radio"
                name="question_643e4fb95d7ad"
                id="question_643e4fb95d7ad-no"
                value="0"
              />
              <label class="checklist-form__radio-label" for="question_643e4fb95d7ad-no">No</label>
            </li>
          </ul>
          <label class="checklist-form__comment">
            <textarea name="comment" placeholder="Add comment"></textarea>
          </label>
        </fieldset>
      </div>
    </div>
    <button class="checklist-form__submit od-button od-button--white" type="submit">Finish</button>
  </form>
</div>
</section>`;
