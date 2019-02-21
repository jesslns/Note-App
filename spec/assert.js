'use strict'

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
    }
  },
  isFalse: function(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error ("Failed: " + assertionTocheck + " is not falsy")
    }
  },
  isEqual: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ("Failed: " + assertionTocheck + " is not truthy")
    }
  },
  isNoteController: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ("Failed: " + assertionTocheck + " is not truthy")
    }
    else {
      console.log('isNoteController: pass');
    }
  },

};
