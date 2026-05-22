(function () {
  const CONFIG = {
    WEBSITE_LINK: "https://bvwdcuyr2ogy.top/2vL5?p=%2Fregistration%2F",
    APK_LINK: "downloads/betwinner_ke.apk",
    BETWINNER_LOGO: "assets/betwinner-logo.png",
    APP_PREVIEW_IMAGE: "assets/app-preview.svg",
    TRACKING_ID: "TRACKING_ID"
  };

  document.querySelectorAll(".js-open-website").forEach((link) => {
    link.href = CONFIG.WEBSITE_LINK;
    link.addEventListener("click", () => {
      window.__LANDING_TRACKING_ID__ = CONFIG.TRACKING_ID;
      window.__TRACKING_ACTION__ = "open_website";
    });
  });

  document.querySelectorAll(".js-download-apk").forEach((link) => {
    link.href = CONFIG.APK_LINK;
    link.setAttribute("download", "");
    link.addEventListener("click", () => {
      window.__LANDING_TRACKING_ID__ = CONFIG.TRACKING_ID;
      window.__TRACKING_ACTION__ = "download_apk";
    });
  });

  document.querySelectorAll('img[src="assets/betwinner-logo.png"]').forEach((image) => {
    image.src = CONFIG.BETWINNER_LOGO;
  });

  document.querySelectorAll('img[src="assets/app-preview.svg"]').forEach((image) => {
    image.src = CONFIG.APP_PREVIEW_IMAGE;
  });
})();
