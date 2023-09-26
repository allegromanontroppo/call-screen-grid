import { useRef } from "react";
import Participant from "./participant";
import classNames from "classnames";
import useAspectRatio from "../../hooks/use-aspect-ratio";

export default function VideoArea() {
  const videoAreaRef = useRef();
  const aspectRatio = useAspectRatio(videoAreaRef);

  return (
    <div
      className={classNames(
        "video-area",
        aspectRatio > 1.6 ? "landscape" : "portrait"
      )}
      ref={videoAreaRef}
    >
      <div className="participants">
        <Participant person="don" />
        <Participant person="joan" />
        <Participant person="paul" />
        <Participant person="pete" />
      </div>
      <div className="thumbnails">
        <Participant person="peggy" />
      </div>
    </div>
  );
}
