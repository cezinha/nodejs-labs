var services = {
  "highlights": "http://app.servicos.uol.com.br/aplicativo/uol/olimpiadas/2016/carrossel/",
  "news": "http://app.servicos.uol.com.br/c/api/v1/list/news/?app=uol-olimpiadas&version=2016",
  "photos": "http://app.servicos.uol.com.br/c/api/v1/list/albums/?app=uol-olimpiadas&version=2016",
  "videos": "http://app.servicos.uol.com.br/c/api/v1/list/videos/?app=uol-olimpiadas&version=2016",
  "blogs": "http://app.servicos.uol.com.br/c/api/v1/list/blogs/?app=uol-olimpiadas&version=2016",
  "timeline": "/aplicativo/uol/olimpiadas/2016/timeline/"
}
var config = {
  "app": "APP UOL Olimpiadas"
}

var assert = chai.assert;
var expect = chai.expect;

var request = {
  get: function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == "200") {
          var data = {};
          try { data = JSON.parse(xhr.responseText); } catch (e) {};
          callback(null, xhr, data);
        } else {
          callback(xhr.status, xhr);
        }
      }
    };

    xhr.send();
  }
};

var pattern = {
  url : /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  image : /https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)/,
  image_format : /\b\d+x\d+\b/,
  webview: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)?(\?)(app=uol-olimpiadas-2016)?((\&)(\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)))?/,
  album: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)?(\?)(app=uol-olimpiadas-2016)?((\&)(\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)))?/,
  blog: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)?(\?)(app=uol-olimpiadas-2016)?((\&)(\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)))?/,
  video: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
};
