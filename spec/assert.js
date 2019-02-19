var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },
  isFalse: function(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error ("Failed: " + assertionTocheck + " is not falsy")
    }
  }
};
