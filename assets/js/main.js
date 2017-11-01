$(function() {
  $("#submit").click(function() {
    //alert(window.location.protocol + '//' + window.location.hostname + "/create/" + encodeURI($('#targetInput').val()));
    /*$.getJSON(window.location.href + "/create/" + $('#targetInput').val(),
      function(data) {
        alert(data);
      });*/
    var base = window.location.protocol + '//' + window.location.hostname + ":" + window.location.port + "/";
    var url = base + "create/" + encodeURIComponent($('#targetInput').val());
    $.getJSON(url, function (data) {
      $("#outputInput").val(base + data.uuid);
    });
  });
});
