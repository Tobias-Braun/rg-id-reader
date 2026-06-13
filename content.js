// Roundnet RG-ID Banner
//
// On a PlayerZone profile page (.../players/<id>-<firstname>-<...>) this derives
// the player's RG-ID and shows it in a fixed banner in the top-right corner.
//
// The RG-ID is the first three letters of the first name (upper case) followed
// by the numeric id from the profile URL. Example: /players/6320-tobias-ww => TOB6320

const BANNER_ID = "rg-id-banner";

/**
 * Extracts the RG-ID from a PlayerZone profile path.
 *
 * The slug after /players/ has the shape "<id>-<firstname>-<rest>", e.g.
 * "6320-tobias-ww". We take the leading number as the id and the next
 * dash-separated token as the first name.
 *
 * @param {string} pathname location.pathname, e.g. "/players/6320-tobias-ww"
 * @returns {string|null} the RG-ID (e.g. "TOB6320") or null if the path is not a profile
 */
function deriveRgId(pathname) {
  const match = pathname.match(/\/players\/(\d+)-([^/-]+)/);
  if (!match) return null;

  const id = match[1];
  // Decode in case the first name contains URL-encoded characters (e.g. umlauts).
  const firstName = decodeURIComponent(match[2]);
  const prefix = firstName.slice(0, 3).toUpperCase();

  return `${prefix}${id}`;
}

/**
 * Creates or updates the banner so it reflects the current RG-ID.
 * Removes the banner when the current page is not a player profile.
 */
function renderBanner() {
  const rgId = deriveRgId(window.location.pathname);
  let banner = document.getElementById(BANNER_ID);

  if (!rgId) {
    if (banner) banner.remove();
    return;
  }

  if (!banner) {
    banner = buildBanner();
    document.body.appendChild(banner);
  }

  const label = banner.querySelector(".rg-id-label");
  label.textContent = `RG-ID: ${rgId}`;

  // Keep the copy button pointed at the current profile's id.
  banner.querySelector(".rg-id-copy").dataset.rgId = rgId;
}

// Inline SVG icons (copy + checkmark) so the extension needs no image assets.
const COPY_ICON =
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
const CHECK_ICON =
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>';

/**
 * Builds the banner element: a label plus a copy button that writes the
 * current RG-ID to the clipboard.
 */
function buildBanner() {
  const banner = document.createElement("div");
  banner.id = BANNER_ID;

  const label = document.createElement("span");
  label.className = "rg-id-label";
  banner.appendChild(label);

  const copyBtn = document.createElement("button");
  copyBtn.className = "rg-id-copy";
  copyBtn.type = "button";
  copyBtn.title = "Copy RG-ID";
  copyBtn.setAttribute("aria-label", "Copy RG-ID");
  copyBtn.innerHTML = COPY_ICON;
  copyBtn.addEventListener("click", onCopyClick);
  banner.appendChild(copyBtn);

  return banner;
}

/** Copies the RG-ID to the clipboard and briefly shows a checkmark. */
async function onCopyClick(event) {
  const button = event.currentTarget;
  const rgId = button.dataset.rgId;
  if (!rgId) return;

  try {
    await navigator.clipboard.writeText(rgId);
  } catch (err) {
    // Clipboard API can be unavailable (e.g. no focus); fall back to execCommand.
    const helper = document.createElement("textarea");
    helper.value = rgId;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }

  button.innerHTML = CHECK_ICON;
  button.classList.add("rg-id-copied");
  clearTimeout(button._resetTimer);
  button._resetTimer = setTimeout(() => {
    button.innerHTML = COPY_ICON;
    button.classList.remove("rg-id-copied");
  }, 1200);
}

// The PlayerZone is a single-page app, so profile-to-profile navigation does not
// reload the document. Patch the History API and listen for popstate so the
// banner stays in sync with client-side route changes.
function onLocationChange() {
  renderBanner();
}

(function patchHistory() {
  const wrap = (method) => {
    const original = history[method];
    return function (...args) {
      const result = original.apply(this, args);
      window.dispatchEvent(new Event("rg-id:locationchange"));
      return result;
    };
  };

  history.pushState = wrap("pushState");
  history.replaceState = wrap("replaceState");
})();

window.addEventListener("popstate", onLocationChange);
window.addEventListener("rg-id:locationchange", onLocationChange);

renderBanner();
