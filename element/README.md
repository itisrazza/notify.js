# Element theme for Notify.js
The element theme is designed for Notify.js and it's made to look like Chrome's notifications.

![Notify.js](http://i.imgur.com/yLew0Lt.png)

## Usage
Put this in the `<head>`:
```HTML
<link rel="stylesheet" type="text/css" href="path/to/element.css">
<script type="text/javascript" src="path/to/notify.js"></script>
```

Put this near the end of the `<body>`
```HTML
<div id="notifyCloak" class="" onclick="notifyHide()"></div>
<div class="notify-box notify-hide" id="notifyJs">
  <a onclick="notifyHide()" class="notify-close">&times;</a>
  <div class="notify-img" id="notifyIcon"></div>
  <div class="notify-content">
    <h4 id="notifyTitle">You haven't set anything.</h4>
    <p id="notifyContent">You should set something before doing it again.</p>
  </div>
</div>
```

And you're ready to go!
