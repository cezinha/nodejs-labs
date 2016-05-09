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

var testVars = {
    base_url: services.timeline,
    title: "["+config.app+"] "+serviceSchema.description,
    schema: serviceSchema,
    arr: "results"
};

describe(testVars.title, function() {
  describe("GET "+testVars.base_url, function() {
    it("return status code 200", function(done) {
      request.get(testVars.base_url, function(error, response, data) {
        assert.equal(200, response.status);
        done();
      });
    });

    // application/json; charset=utf-8
    it("validação do Content-Type: application/json; charset=utf-8", function(done) {
      request.get(testVars.base_url, function(error, response, data) {
        assert.equal("application/json; charset=utf-8", response.getResponseHeader("Content-Type"));
        done();
      });
    });

    it("validação do JSON Schema", function(done) {
      request.get(testVars.base_url, function(error, response, data) {
        assert.jsonSchema(data, testVars.schema);
        done();
      });
    });

    it("quantidade mínima de resultados do JSON ", function(done) {
      request.get(testVars.base_url, function(error, response, data) {
        expect(data[testVars.arr].length).to.be.at.least(1);
        done();
      });
    });
  });
});
