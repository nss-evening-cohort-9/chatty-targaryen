import util from '../../helpers/util';

const buttonDomStringBuilder = () => {
  let domString = '';
  domString += '<button type="button" class="btn btn-primary modal-button" id="changeThemesButton" data-toggle="modal" data-target="#changeThemesModal">';
  domString += 'Change Themes';
  domString += '</button>';
  util.printToDom('testModalDiv', domString);
};

const modalDomStringBuilder = () => {
  
  
  <div class="modal fade change-themes-modal" id="changeThemesModal" tabindex="-1" role="dialog" aria-labelledby="changeThemesLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="changeThemesLabel">Change Your Theme</h5>
          <button type="button" class="close modal-control-button" id="closeButton" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
        <div class="container-fluid">
        <div class="row">
        <div class="col-12">
          <p>Customize your dragon's chat experience with one of our gorgeous color schemes!</p>
          </div>
          <form>
  <div class="form-row">
    <div class="form-group col-sm-12 col-md-6 col-lg-3">
    <div class="form-check">
  <input class="form-check-input themes-modal-radio" type="radio" name="themesRadios" id="fireRadio" value="fire">
  <label class="form-check-label themes-radio-label" for="fireRadio">
    Fire Theme
  </label>
</div>
    </div>

    <div class="form-group col-sm-12 col-md-6 col-lg-3">
    <div class="form-check">
  <input class="form-check-input themes-modal-radio" type="radio" name="themesRadios" id="iceRadio" value="ice">
  <label class="form-check-label themes-radio-label" for="iceRadio">
    Ice Theme
  </label>
</div>
    </div>

    <div class="form-group col-sm-12 col-md-6 col-lg-3">
    <div class="form-check">
  <input class="form-check-input themes-modal-radio" type="radio" name="themesRadios" id="stoneRadio" value="stone">
  <label class="form-check-label themes-radio-label" for="stoneRadio">
    Stone Theme
  </label>
</div>
    </div>

    <div class="form-group col-sm-12 col-md-6 col-lg-3">
    <div class="form-check">
  <input class="form-check-input themes-modal-radio" type="radio" name="themesRadios" id="originalRadio" value="original">
  <label class="form-check-label themes-radio-label" for="originalRadio">
    Reset to Original
  </label>
</div>
    </div>

          </div>
          </form>

          </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary modal-control-button" id="cancelButton" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary modal-control-button" id="saveButton">Save changes</button>
        </div>
      </div>
    </div>
  </div>
};

export { buttonDomStringBuilder, modalDomStringBuilder, };

