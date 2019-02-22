(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
  };

  SingleNoteView.prototype.returnHtmlString = function(){
      return "<div>" + this.note.showText() + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;

})(this);

// window.onload = function(){
//   var note = new Note('Favourite drink: seltzer');
//   var singleNoteView = new SingleNoteView(note);
//   console.log(singleNoteView.returnHtmlString());
// };
