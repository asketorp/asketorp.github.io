$(function() {

  var $main = $("main"),

  contentTemplate = Handlebars.compile($("#content-page-template").html()),

  menuTemplate = Handlebars.compile($("#menu-template").html()),

  getHashPartOrNull = function(url){
    var hashPos = url.indexOf("#");

    if (hashPos >= 0){
      return url.substr(hashPos + 1);
    }

    return null;
  },

  init = function() {
    console.log("Init");
    $("#sidebar").html(menuTemplate(menu));

    loadPage(getHashPartOrNull(location.href));
  },


  loadPage = function(contentId) {
    // If the contentId is valid, use it, otherwise default to the first id.
    if (! (contentId in data) ){
      contentId = Object.keys(data)[0];
    }

    if (data[contentId].body === null) {
      var tmpl = Handlebars.compile($("#" + data[contentId].template).html());
      data[contentId].body = tmpl(data[contentId].data);
    }

    $("#content").html(contentTemplate(data[contentId]));
  };

  init();

  $(window).on("popstate", function(e) {
    // This can be null if this is the initial page load, that is ok...
    loadPage(e.originalEvent.state);
  });

  $(document).on("click", "a", function() {
    var href = $(this).attr("href"),
    id = $(this).parent().attr("id");


    if (href == "#"){
      console.log("pushing id: " + id);
      history.pushState(id, '', "index.html#"+id);
      loadPage(id);
      return false;
    }
  });
});
