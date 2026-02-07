/** @typedef {import("./common")} */

const css = `
  ytd-thumbnail, ytd-playlist-thumbnail, .rich-thumbnail, .ytd-playlist-header-renderer.thumbnail-wrapper, #thumbnail, #video-preview, ytm-media-item .media-item-thumbnail-container, ytm-reel-item-renderer .video-thumbnail-container-vertical, ytm-playlist-video-renderer .compact-media-item-image, .ytp-videowall-still-image, grid-shelf-view-model {
    display: none !important;
  }
  ytm-reel-shelf-renderer .reel-shelf-items>* {
    height: auto !important;
    align-items: flex-start !important;
  }
  ytm-reel-item-renderer ytm-text-badge-renderer ytm-badge.text-badge[data-type=BADGE_STYLE_TYPE_SIMPLE] {
    visibility: hidden !important;
  }
  .video-thumbnail-container-compact  {
     display: none !important;
  }
  .fullscreen-watch-next-entrypoint-wrapper {
    display: none !important;
  }
  ytm-reel-item-renderer.rounded-reel-item .reel-item-metadata {
    height: 80px;
    width: 100px;
    position: static !important;
    overflow: hidden;
  }
  .detail, .compact-media-item{
    padding : 20px 12px 20px 12px !important;
  }
  .ytp-videowall-still-info-content {
    opacity: 1 !important;
  }
  html {
   filter : grayscale(1) !important; 
  }
  ytd-topbar-logo-renderer, #scroll-container {
     display : none !important;
  }
  .ytp-prev-button, .ytp-next-button {
     display : none !important;
  }
  #page-header-banner{
    visibility : hidden !important;
  }
  ytd-miniplayer.style-scope.ytd-app {
    top : inherit !important;
  }`;
  
  const elem = document.createElement("style");
  document.documentElement.appendChild(elem);
  
  const updateElem = async () => {
    const options = await loadOptions()
  
    if(options.focusMode) {
      elem.textContent = `/* Modified by ByDesign */
      ${css}`;
      return;
    }else{
      elem.textContent = "";
    }
  };
  
  // Update when settings are changed
  browser.storage.onChanged.addListener(updateElem)
  
  // Update when moving page
  let lastPathname = window.location.pathname;
  setInterval(() => {
    if (lastPathname !== window.location.pathname) {
      lastPathname = window.location.pathname
      updateElem();
    }
  }, 200);
  
  // Initialize on load
  updateElem()

