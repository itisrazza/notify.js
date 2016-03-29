# Notify the web
A simple, yet reliable JavaScript plugin (CSS file available for styling the notification window) that pops up an notification inside the web browser.

![Notify.js](http://i.imgur.com/yLew0Lt.png)

## Usage
Once you included the notify.js file and your theme of choice, use the following JavaScript commands:
```JS
// To set the content of the notification
notifySet('Title','Content','Icon location',false);

/* The title and content are strings, the icon is a location to an image
 * and the last attribute is whether to show the notification or not
 *
 * The icon must be a square image (png, jpg, svg, gif)
 */
 
// To show, hide and toggle the notification
notifyHide();   // to hide
notifyShow();   // to show
notifyToggle(); // to toggle
```

## Demo
Here's a demo if you'd like: http://thegreatrazz.github.io/notify.js

### Old project/experiment
This is an old project or experiment for me to extend my knowledge of the web languages. If this code is valuable to you, please Fork and Star the repo and maybe consider contributing to it.
