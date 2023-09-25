import Participant from "./participant";

export default function VideoArea() {
  return (
    <div className="video-area">
      <div className="participants">
        <Participant person="don" />
        <Participant person="joan" />
        <Participant person="paul" />
        <Participant person="pete" />
      </div>
      <div className="side-bar">
        <Participant person="peggy" />
      </div>
    </div>
  );
}
