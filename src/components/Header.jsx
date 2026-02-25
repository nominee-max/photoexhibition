import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    if (window.UnicornStudio && window.UnicornStudio.init) {
      window.UnicornStudio.init();
    } else {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
      script.onload = () => window.UnicornStudio.init();
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div
      data-us-project="cKK1H5Bfwjyw5JhKNznv"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
