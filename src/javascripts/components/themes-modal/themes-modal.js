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
          <p>Customize your dragon's chat experience with one of our gorgeous color schemes!</p>
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

