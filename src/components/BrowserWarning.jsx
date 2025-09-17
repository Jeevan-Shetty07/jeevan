import React, { useEffect, useState } from "react";

export default function BrowserWarning() {
  const [showBanner, setShowBanner] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    // Detect Instagram or Facebook in-app browser
    if (/Instagram|FBAN|FBAV/i.test(ua)) {
      setShowBanner(true);
    }
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500); // auto hide after 2.5s
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("✅ Link copied! Open Chrome/Safari and paste it.", "success");
    } catch (err) {
      showToast("❌ Failed to copy link. Copy manually.", "error");
    }
  };

  const handleOpenChrome = () => {
    // Works on Android Chrome
    window.location.href = `intent://${window.location.host}${
      window.location.pathname
    }#Intent;scheme=https;package=com.android.chrome;end;`;
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-3 items-center z-50 w-[90%] md:w-auto">
        <p className="font-semibold text-center md:text-left">
          ⚠️ Open this page in your browser for the best experience.
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleCopyLink}
            className="bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition"
          >
            Copy Link
          </button>
          <button
            onClick={handleOpenChrome}
            className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
          >
            Open in Chrome
          </button>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg text-white z-50
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </div>
      )}
    </>
  );
}
