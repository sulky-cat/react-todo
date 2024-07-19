import EmptyImg from "/img/Empty.png";

export default function Empty() {
  return (
    <div className="empty">
      <div className="empty__img">
        <img src={EmptyImg} alt="Empty" />
      </div>
      <p className="empty__text">Empty...</p>
    </div>
  );
}
