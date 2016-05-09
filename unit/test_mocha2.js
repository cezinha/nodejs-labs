var pattern = {
  url : /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  image : /https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)/,
  image_format : /\b\d+x\d+\b/,
  webview: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)?(\?)(app=uol-olimpiadas-2016)?((\&)(\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)))?/,
  album: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)?(\?)(app=uol-olimpiadas-2016)?((\&)(\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)))?/,
  blog: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)?(\?)(app=uol-olimpiadas-2016)?((\&)(\b([-a-zA-Z0-9@:%_\+.~#?&//=]+)))?/,
  video: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
};

var serviceSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Timeline",
  "type": "object",
  "required": [
    "results"
  ],
  "properties": {
    "results": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "pattern" : "news"
              },
              "category": {
                "type": "string"
              },
              "date-created": {
                "type": "integer"
              },
              "date-updated": {
                "type": "integer"
              },
              "data": {
                "type": "object",
                "properties": {
                  "section": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "image-url": {
                    "type": "string",
                    "pattern": pattern.image
                  },
                  "image-formats": {
                    "type": "object",
                    "properties": {
                      "small": {
                        "type": "string",
                        "pattern": pattern.image_format
                      },
                      "large": {
                        "type": "string",
                        "pattern": pattern.image_format
                      },
                      "xlarge": {
                        "type": "string",
                        "pattern": pattern.image_format
                      }
                    }
                  },
                  "share-url": {
                    "type": "string",
                    "pattern": pattern.url
                  },
                  "webview-url": {
                    "type": "string",
                    "pattern": pattern.webview
                  },
                  "babel-id": {
                    "type": "integer"
                  },
                  "comments": {
                    "type": "integer"
                  },
                  "babel-lastupdate": {
                    "type": "integer"
                  }
                },
                "required": [
                  "title",
                  "webview-url"
                ],
                "additionalProperties" : false
              }
            },
            "required": [
              "type",
              "category",
              "date-created",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "pattern" : "blog"
              },
              "category": {
                "type": "string"
              },
              "date-created": {
                "type": "integer"
              },
              "date-updated": {
                "type": "integer"
              },
              "data": {
                "type": "object",
                "properties": {
                  "thumb": {
                    "type": "string",
                    "pattern": pattern.image
                  },
                  "name": {
                    "type": "string"
                  },
                  "section": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "feed-url": {
                    "type": "string",
                    "pattern": pattern.webview
                  },
                  "image-url": {
                    "type": "string",
                    "pattern": pattern.image
                  },
                  "image-formats": {
                    "type": "object",
                    "properties": {
                      "small": {
                        "type": "string",
                        "pattern": pattern.image_format
                      },
                      "large": {
                        "type": "string",
                        "pattern": pattern.image_format
                      },
                      "xlarge": {
                        "type": "string",
                        "pattern": pattern.image_format
                      }
                    }
                  },
                  "share-url": {
                    "type": "string",
                    "pattern": pattern.url
                  },
                  "webview-url": {
                    "type": "string",
                    "pattern": pattern.webview
                  },
                  "babel-id": {
                    "type": "integer"
                  },
                  "comments": {
                    "type": "integer"
                  },
                  "babel-lastupdate": {
                    "type": "integer"
                  }
                },
                "required": [
                  "title",
                  "feed-url",
                  "webview-url"
                ],
                "additionalProperties" : false
              }
            },
            "required": [
              "type",
              "category",
              "date-created",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "pattern" : "album"
              },
              "category": {
                "type": "string"
              },
              "date-created": {
                "type": "integer"
              },
              "date-updated": {
                "type": "integer"
              },
              "data": {
                "type": "object",
                "properties": {
                  "section": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "image-url": {
                    "type": "string",
                    "pattern": pattern.image
                  },
                  "image-formats": {
                    "type": "object",
                    "properties": {
                      "small": {
                        "type": "string",
                        "pattern": pattern.image_format
                      },
                      "large": {
                        "type": "string",
                        "pattern": pattern.image_format
                      },
                      "xlarge": {
                        "type": "string",
                        "pattern": pattern.image_format
                      }
                    }
                  },
                  "share-url": {
                    "type": "string",
                    "pattern": pattern.url
                  },
                  "album-url": {
                    "type": "string",
                    "pattern": pattern.album
                  },
                  "babel-id": {
                    "type": "integer"
                  },
                  "comments": {
                    "type": "integer"
                  },
                  "babel-lastupdate": {
                    "type": "integer"
                  }
                },
                "required": [
                  "title",
                  "album-url"
                ],
                "additionalProperties" : false
              }
            },
            "required": [
              "type",
              "category",
              "date-created",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "pattern" : "video"
              },
              "category": {
                "type": "string"
              },
              "date-created": {
                "type": "integer"
              },
              "date-updated": {
                "type": "integer"
              },
              "data": {
                "type": "object",
                "properties": {
                  "section": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "image-url": {
                    "type": "string",
                    "pattern": pattern.image
                  },
                  "video-url": {
                    "type": "string",
                    "pattern": pattern.url
                  },
                  "length": {
                    "type": "integer"
                  },
                  "babel-id": {
                    "type": "integer"
                  },
                  "comments": {
                    "type": "integer"
                  },
                  "babel-lastupdate": {
                    "type": "integer"
                  }
                },
                "required": [
                  "title",
                  "video-url"
                ],
                "additionalProperties" : false
              }
            },
            "required": [
              "type",
              "category",
              "date-created",
              "data"
            ]
          }
        ]
      },
      "minItems": 1
    }
  }
};

var request = require('request'),
    chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    schema = require('chai-json-schema');
chai.use(schema);

describe('Testing connection to services', function() {
  var tests = [
    {
      description: "Carrossel",
      url: 'http://app.servicos.uol.com.br/aplicativo/uol/olimpiadas/2016/carrossel/',
      schema: serviceSchema
    },
    {
      description: "Timeline",
      url: 'http://m.app.uol.com.br/aplicativo/uol/olimpiadas/2016/timeline/',
      schema: serviceSchema
    }
  ];

  tests.forEach(function(test) {
    describe(test.description, function() {
      it('status 200', function(done) {
        request(test.url, function(error, response, body) {
          if (error) done(error);
          expect(response.statusCode).to.equal(200);
          done();
        });
      });

      it('content-type: JSON', function(done) {
        request(test.url, function(error, response, body) {
          if (error) done(error);
          expect(response.headers["content-type"]).to.equal("application/json; charset=utf-8");
          done();
        });
      });

      it("validação do JSON Schema", function(done) {
        request(test.url, function(error, response, body) {
          if (error) done(error);
          var obj = JSON.parse(body);
          expect(obj).to.be.jsonSchema(test.schema);
          done();
        });
      });
    });
  });

  describe('Publicação de itens', function() {
    var backAppURL = "http://10.138.146.107:8080/uol-olimpiadas/publicador/";
    var timelineURL = "http://m.app.uol.com.br/aplicativo/uol/olimpiadas/2016/timeline/?type=new&date=1450885352185";
    var solrURL = "http://d3-appcelular-qa5.host.intranet:8983/solr/collection1/select?q=*&order=date-created&wt=json&fq=id:news_timeline_1450885352185";

    it('Adiciona item na timeline', function(done) {
      var data = {
        "type": "news",
        "category": "timeline",
        "date-created": 1450885352185,
        "date-updated": 1450885352185,
        "data": {
          "title": "Ícone da Olimpíada de 1996, Marcia Fu ainda sente dores por causa do vôlei",
          "share-url": "http://olimpiadas.uol.com.br/noticias/2015/12/20/como-o-volei-deixou-sequela-no-corpo-de-medalhista-olimpica-19-anos-depois.htm",
          "webview-url": "http://olimpiadas.uol.com.br/noticias/2015/12/20/como-o-volei-deixou-sequela-no-corpo-de-medalhista-olimpica-19-anos-depois.htm?app=uol-olimpiadas-2016",
          "babel-id": 0,
          "comments": 0,
          "babel-lastupdate": 0
        }
      };

      request.post({
        headers: { 'content-type': 'application/json;charset=utf-8'},
        url: backAppURL,
        body: JSON.stringify(data)
      }, function(error, response, body) {
        if (error) done(error);
        expect(response.statusCode).to.equal(200);
        var result = JSON.parse(body);
        expect(result.status).to.equal("success");

        done();
      })
    });

    it('Verifica se o item foi adicionado', function(done) {
      this.timeout(10000);
      setTimeout(function() {
        request(solrURL, function(error, response, body) {
          if (error) done(error);
          expect(response.statusCode).to.equal(200);
          var result = JSON.parse(body);
          expect(result.response).not.to.be.empty;
          var obj = result.response.docs[0];
          expect(obj["date-created"]).to.equal(1450885352185);
          expect(obj).not.to.be.empty;
          expect(obj.data).not.to.be.empty;
          var data = JSON.parse(obj.data);
          expect(data.title).to.equal("Ícone da Olimpíada de 1996, Marcia Fu ainda sente dores por causa do vôlei");

          done();
        });
      }, 5000);
    });

    it('Remove item da timeline', function(done) {
      this.timeout(10000);
      setTimeout(function() {
        request.del(backAppURL+"news_timeline_1450885352185", function(error, response, body) {
          if (error) done(error);
          expect(response.statusCode).to.equal(200);
          var result = JSON.parse(body);
          expect(result.status).to.equal("success");

          done();
        });
      }, 5000);
    });

    it('Verifica se o item foi removido no solr', function(done) {
      this.timeout(10000);
      setTimeout(function() {
       request(solrURL, function(error, response, body) {
          if (error) done(error);
          expect(response.statusCode).to.equal(200);
          var result = JSON.parse(body);
          expect(result.response.numFound).to.equal(0);
          expect(result.response.docs).to.be.empty;

          done();
        });
      }, 5000);
    });
    it('Adiciona item inválido na timeline', function(done) {
      var data = {
        "data": {
          "title": "Ícone da Olimpíada de 1996, Marcia Fu ainda sente dores por causa do vôlei",
          "share-url": "http://olimpiadas.uol.com.br/noticias/2015/12/20/como-o-volei-deixou-sequela-no-corpo-de-medalhista-olimpica-19-anos-depois.htm",
          "webview-url": "http://olimpiadas.uol.com.br/noticias/2015/12/20/como-o-volei-deixou-sequela-no-corpo-de-medalhista-olimpica-19-anos-depois.htm?app=uol-olimpiadas-2016",
          "babel-id": 0,
          "comments": 0,
          "babel-lastupdate": 0
        }
      };

      request.post({
        headers: { 'content-type': 'application/json;charset=utf-8'},
        url: backAppURL,
        body: JSON.stringify(data)
      }, function(error, response, body) {
        if (error) done(error);
        expect(response.statusCode).to.equal(500);

        done();
      })
    });
  });
});



