(function(exports) {

  function NoteController() {
    document.getElementById("app").innerHTML = 'howdy';
    var content = document.getElementById("app").innerHTML;
    console.log(content);
  };

  //   // NoteController.prototype.renderNotes() = {
  //   //
  //   //   document.getElementById("app").innerHTML = 'howdy';
  //   //   var content = document.getElementById("app").innerHTML;
  //   //   console.log(content);
  //   //
  //   // };

  exports.NoteController = NoteController

})(this);


window.onload = function() {
var noteController = new NoteController();
};
