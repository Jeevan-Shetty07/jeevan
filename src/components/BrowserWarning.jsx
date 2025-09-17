import React, { useEffect, useState } from "react";

export default function BrowserWarning() {
  const [showPopup, setShowPopup] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    // Detect Instagram or Facebook in-app browser
    if (/Instagram|FBAN|FBAV/i.test(ua)) {
      setShowPopup(true);
    }
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500); // hide after 2.5s
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

  if (!showPopup) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        {/* Popup */}
        <div className="bg-white text-black rounded-2xl shadow-xl max-w-md w-[90%] p-6 relative">
          {/* Close button */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          >
            ✖
          </button>

          <h2 className="text-xl font-bold mb-2 text-center">
            ⚠️ Open in Browser
          </h2>
          <p className="text-gray-700 text-center mb-4">
            For the best experience, please open this page in your default
            browser (Chrome/Safari).
          </p>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleCopyLink}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Copy Link
            </button>
            <button
              onClick={handleOpenChrome}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Open in Chrome
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg text-white z-50
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </div>
      )}
    </>
  );
}
