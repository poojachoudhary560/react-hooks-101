import React from "react";
import "./styles.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import ClassCounter1 from "./components/ClassCounter1";
import HookCounter1 from "./components/HookCounter1";

export default function App() {
  return (
    <div className="App">
      {/*  <ClassCounter1 /> */}
      <HookCounter1 />
    </div>
  );
}
