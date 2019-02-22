(function(exports) {

  function SingleNoteView() {
  };

  SingleNoteView.prototype.returnHtmlString = function(note){
      return "<div>" + note.text + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
