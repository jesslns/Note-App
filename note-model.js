(function(exports) {
  function Note(text) {
    this.text = text;
  };

  Note.prototype.printText = function(){
    return this.text;
  };

  exports.Note = Note;

})(this);
