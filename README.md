# pretty-contentful

Convert Contentful data simpler

## Install

```bash
npm install pretty-contentful
```

## Usage

```javascript
const contentful = require('contentful');
const prettify = require('pretty-contentful');

const client = contentful.createClient({
  accessToken: ACCESS_TOKEN,
  space: SPACE
});

client.getEntries({
  content_type: 'page',
  include: 3,
}).then(entries => prettify(entries.items));
```

## Example

### `getEntry`

```javascript
const prettify = require('pretty-contentful');

client.getEntry('XNZt3G2nySkKcasU2ma0k').then(entry => prettify(entry));
```

After:
```json
{
  "id": "XNZt3G2nySkKcasU2ma0k",
  "spaceId": "57ms2witonnw",
  "contentType": "page",
  "entryTitle": "About",
  "slug": "/about",
  "title": "About: pretty-contentful"
}
```

Before:
```json
{
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "57ms2witonnw"
      }
    },
    "id": "XNZt3G2nySkKcasU2ma0k",
    "type": "Entry",
    "createdAt": "2018-10-06T18:15:44.698Z",
    "updatedAt": "2018-10-06T18:15:44.698Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "revision": 1,
    "contentType": {
      "sys": {
        "type": "Link",
        "linkType": "ContentType",
        "id": "page"
      }
    },
    "locale": "en-US"
  },
  "fields": {
    "entryTitle": "About",
    "slug": "/about",
    "title": "About: pretty-contentful"
  }
}
```

### `getEntries`

```javascript
const prettify = require('pretty-contentful');

client.getEntries({
  content_type: 'page',
  include: 3,
}).then(entries => prettify(entries.items));
```

After:
```json
[
  {
    "id": "37XQFMMcfeWuCM2Oq0kkAw",
    "spaceId": "57ms2witonnw",
    "contentType": "page",
    "entryTitle": "Home (Default)",
    "slug": "/",
    "title": "Pretty Contentful",
    "description": "I love Contentful!",
    "image": {
      "id": "5a25O6egjKKYASQ4gm0Cku",
      "spaceId": "57ms2witonnw",
      "title": "og-contentful",
      "file": {
        "url": "//images.ctfassets.net/57ms2witonnw/5a25O6egjKKYASQ4gm0Cku/a7405e9d26fd986ba4a0b505864d6db8/og-contentful.png",
        "details": {
          "size": 15860,
          "image": {
            "width": 1200,
            "height": 630
          }
        },
        "fileName": "og-contentful.png",
        "contentType": "image/png"
      }
    }
  },
  {
    "id": "XNZt3G2nySkKcasU2ma0k",
    "spaceId": "57ms2witonnw",
    "contentType": "page",
    "entryTitle": "About",
    "slug": "/about",
    "title": "About: pretty-contentful"
  }
]
```

Before:
```json
[
  {
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "57ms2witonnw"
        }
      },
      "id": "37XQFMMcfeWuCM2Oq0kkAw",
      "type": "Entry",
      "createdAt": "2018-10-06T18:14:53.050Z",
      "updatedAt": "2018-10-06T18:14:53.050Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "page"
        }
      },
      "locale": "en-US"
    },
    "fields": {
      "entryTitle": "Home (Default)",
      "slug": "/",
      "title": "Pretty Contentful",
      "description": "I love Contentful!",
      "image": {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "57ms2witonnw"
            }
          },
          "id": "5a25O6egjKKYASQ4gm0Cku",
          "type": "Asset",
          "createdAt": "2018-10-06T18:14:40.361Z",
          "updatedAt": "2018-10-06T18:14:40.361Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "og-contentful",
          "file": {
            "url": "//images.ctfassets.net/57ms2witonnw/5a25O6egjKKYASQ4gm0Cku/a7405e9d26fd986ba4a0b505864d6db8/og-contentful.png",
            "details": {
              "size": 15860,
              "image": {
                "width": 1200,
                "height": 630
              }
            },
            "fileName": "og-contentful.png",
            "contentType": "image/png"
          }
        }
      }
    }
  },
  {
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "57ms2witonnw"
        }
      },
      "id": "XNZt3G2nySkKcasU2ma0k",
      "type": "Entry",
      "createdAt": "2018-10-06T18:15:44.698Z",
      "updatedAt": "2018-10-06T18:15:44.698Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "page"
        }
      },
      "locale": "en-US"
    },
    "fields": {
      "entryTitle": "About",
      "slug": "/about",
      "title": "About: pretty-contentful"
    }
  }
]
```
