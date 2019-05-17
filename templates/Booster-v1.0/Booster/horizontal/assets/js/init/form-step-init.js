'use strict';
$(document).ready(function() {

  var form = $("#xp-basic-form-wizard");
  form.children("div").steps({
      headerTag: "h3",
      bodyTag: "section",
      transitionEffect: "slideLeft",
      onFinishing: function (event, currentIndex)
      {
          return form;
      },
      onFinished: function (event, currentIndex)
      {
          $("#xp-basic-form-wizard").submit();
      }
  });

  var verticalform = $("#xp-horizontal-form-wizard");
  verticalform.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    stepsOrientation: "vertical",
    onFinishing: function (event, currentIndex)
      {
          return verticalform;
      },
      onFinished: function (event, currentIndex)
      {
          $("#xp-horizontal-form-wizard").submit();          
      }
  });

});