// Paste this into a "Run JavaScript on Web Page" action in the Shortcuts app.
// It reads the current PlayerZone profile URL and returns the RG-ID via completion().
// Slug shape: /players/<id>-<firstname>-<rest>  e.g. /players/6320-tobias-ww
var m = window.location.pathname.match(/\/players\/(\d+)-([^\/-]+)/);
if (m) {
  var firstName = decodeURIComponent(m[2]);
  completion(firstName.slice(0, 3).toUpperCase() + m[1]);
} else {
  completion("No RG-ID found on this page");
}
