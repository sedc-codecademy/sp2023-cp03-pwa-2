export const checklist1Content = ` 
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
<!-- Checklist form with button-dropdown  -->
<section class="checklist-form">
  <div class="checklist-form__wrapper container">
    <p class="checklist-form__disclaimer">You need to answer all the questions on the checklist to get a result</p>
    <form id="checklist" data-hs-cf-bound="true" action="#">
      <!-- This ARTICLE below is a temlpate for creating areas of specific questions along with questions -->
      <article class="checklist-form__group js-enabled is-active" id="ac-0">
        <div class="checklist-form__ac-head ac-header">
          <!-- Every button shows the questions for the specific area needed to be checked - opening/closing as a dropdown-->
          <button
            class="checklist-form__ac-trigger"
            type="button"
            id="ac-trigger-0"
            role="button"
            aria-controls="ac-panel-0"
            aria-disabled="false"
            aria-expanded="true"
          >
            Equipment and inventory
          </button>
        </div>
        <div class="checklist-form__panel" id="ac-panel-0" role="region" aria-labelledby="ac-trigger-0">
          <fieldset>
            <p class="checklist-form__question">Shall we turn off the bar equipment?</p>
            <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
              <li class="checklist-form__answer-item">
                <input
                  class="visually-hidden checklist-form__radio checklist-form__radio--green"
                  type="radio"
                  name="question_643e4fbbad494"
                  id="question_643e4fbbad494-yes"
                  value="1"
                />
                <label class="checklist-form__radio-label" for="question_643e4fbbad494-yes">Yes</label>
              </li>
              <li class="checklist-form__answer-item">
                <input
                  class="visually-hidden checklist-form__radio checklist-form__radio--red"
                  type="radio"
                  name="question_643e4fbbad494"
                  id="question_643e4fbbad494-no"
                  value="0"
                />
                <label class="checklist-form__radio-label" for="question_643e4fbbad494-no">No</label>
              </li>
            </ul>
            <label class="checklist-form__comment">
              <textarea name="comment" placeholder="Add comment"></textarea>
            </label>
          </fieldset>
          <!-- End of single question - template for questions - Question, 2 answer values (1 if Yes and 0 if No) and optional comment  -->
          <fieldset>
            <p class="checklist-form__question">Is the bar counter clean, without streaks, and washed?</p>
            <ul class="checklist-form__answers" role="none" data-weight="1" data-block-category="false" data-block-checklist="false">
              <li class="checklist-form__answer-item">
                <input
                  class="visually-hidden checklist-form__radio checklist-form__radio--green"
                  type="radio"
                  name="question_643e4fbbad49a"
                  id="question_643e4fbbad49a-yes"
                  value="1"
                />
                <label class="checklist-form__radio-label" for="question_643e4fbbad49a-yes">Yes</label>
              </li>
              <li class="checklist-form__answer-item">
                <input
                  class="visually-hidden checklist-form__radio checklist-form__radio--red"
                  type="radio"
                  name="question_643e4fbbad49a"
                  id="question_643e4fbbad49a-no"
                  value="0"
                />
                <label class="checklist-form__radio-label" for="question_643e4fbbad49a-no">No</label>
              </li>
            </ul>
            <label class="checklist-form__comment">
              <textarea name="comment" placeholder="Add comment"></textarea>
            </label>
          </fieldset>
        </div>
      </article>
     
      <button class="checklist-form__submit od-button od-button--white" type="submit">Finish</button>
    </form>
  </div>
</section>
`;
