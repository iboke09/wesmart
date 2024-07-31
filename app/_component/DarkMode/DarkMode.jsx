import React from "react";

function DarkMode() {
  let darkMode = false;
  let value = "darko";
  if (typeof window !== "undefined") {
    let toggleBtn = document.querySelector("#toggle");
    let bodyEl = document.querySelector("body");
    if (localStorage.getItem("dali")) {
      // toggleBtn.removeAttribute("defaultChecked")
      toggleBtn?.removeAttribute("checked");
      bodyEl.classList.add(localStorage.getItem("dali"));
    } else {
      toggleBtn?.setAttribute("defaultChecked", "defaultChecked");
    }
  }
  let defaultChecked = "defaultChecked";

  let lp = 0;

  if (typeof window !== "undefined") {
    if (localStorage.getItem("dali")) {
      lp = 1;
      if (document.readyState !== "loading") {
        document.getElementById("toggle")?.removeAttribute("checked");
      }
    } else {
      const input = document.querySelector("input");
      if (document.readyState !== "loading") {
        input?.setAttribute("checked", "checked");
      }
      input?.setAttribute(defaultChecked, "defaultChecked");
    }
  }
  return (
    <div className="maskdark">
      <label id="theme-toggle-button" for="toggle">
        {lp == 1 ? (
          <input
            aria-labelledby="theme-toggle-button"
            type="checkbox"
            id="toggle"
            onChange={() => {
              let toggleBtn = document.querySelector("#toggle");
              let bodyEl = document.querySelector("body");
              if (localStorage.getItem("dali")) {
                // toggleBtn.removeAttribute("defaultChecked")
                toggleBtn.removeAttribute("checked");
                bodyEl.classList.add(localStorage.getItem("dali"));
              } else {
                toggleBtn.setAttribute("defaultChecked", "defaultChecked");
              }
              if (typeof window !== "undefined") {
                darkMode = event.target.checked;
                if (darkMode) {
                  bodyEl.classList.remove("darko");
                  localStorage.removeItem("dali", value);
                } else {
                  // toggleBtn.removeAttribute("deafultChecked")
                  localStorage.setItem("dali", value);
                  bodyEl.classList.add(localStorage.getItem("dali"));
                }
              }
            }}
          />
        ) : (
          <input
            aria-labelledby="theme-toggle-button"
            defaultChecked
            type="checkbox"
            id="toggle"
            onChange={() => {
              let toggleBtn = document.querySelector("#toggle");
              let bodyEl = document.querySelector("body");
              if (localStorage.getItem("dali")) {
                toggleBtn.removeAttribute("checked");
                bodyEl.classList.add(localStorage.getItem("dali"));
              } else {
                toggleBtn.setAttribute("defaultChecked", "defaultChecked");
              }
              if (typeof window !== "undefined") {
                darkMode = event.target.checked;
                if (darkMode) {
                  bodyEl.classList.remove("darko");
                  localStorage.removeItem("dali", value);
                } else {
                  // toggleBtn.removeAttribute("deafultChecked")
                  localStorage.setItem("dali", value);
                  bodyEl.classList.add(localStorage.getItem("dali"));
                }
              }
            }}
          />
        )}
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default DarkMode;
