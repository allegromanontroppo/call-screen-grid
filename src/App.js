import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import VideoArea from "./components/video-area";

import "./styles/app.scss";
import classNames from "classnames";

export default function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={classNames("app", { "side-bar-visible": sidebar })}>
      <Header />
      <main>
        <VideoArea />
      </main>
      <Footer sidebarVisible={sidebar} onToggleSidebar={setSidebar} />
    </div>
  );
}
