# User-Agent string switcher

Provides 1) a Chrome extension in `extension/`; 2) a socket.io server in `node/`.

## Usage instructions

* Setup server
* Start server
* Install extension
* In the console where the server runs, enter user agent string on `stdin`. It
  will be set for the Chrome instance.

### Setup server

```
cd <repo>/node
npm install
```

### Start server

```
node server.js
``` 

### Install extensions

* Open Chrome
* Navigate to `chrome://extensions`
* Enable "Developer mode"
* Select "Load unpacked extension..."
* Navigate to and open `<repo>/extension` 

Optionally, select "background page" in "Inspect views" to view/debug extension
execution.

### Set `User-Agent`

Switch back to the console where the server is started. Enter user agent string
and press enter. All the HTTP requests from the Chrome instance where the
extension is installed will be using the user agent string set.

