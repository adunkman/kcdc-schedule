(function () {

  var container = ".expander",
      details = ".description";

  var addExpandAndContractBehavior = function () {
    $(container).click(function () {
      $(details, this).toggle(200);
    });
  };

  $(document).ready(addExpandAndContractBehavior);

})();