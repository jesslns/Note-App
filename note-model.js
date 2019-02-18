(function(exports) {
  function Note(text) {
    this.text = text;
  };

  Note.prototype.addText = function(){
    return this.text;
  };

  exports.Note = Note;

})(this);
