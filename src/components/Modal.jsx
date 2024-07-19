import { useState, useEffect, useCallback } from "react";
import Input from "./UI/Input";

export default function Modal({
  modal,
  setModal,
  note,
  setNote,
  addNote = () => {},
  editNote = () => {},
}) {
  const [goClose, setGoClose] = useState(false);

  const isTrustedElement = (el) =>
    !el.closest(".modal__inner") || el.closest(".button_white");

  const prepareCloseModal = (e) => {
    if (isTrustedElement(e.target)) setGoClose(true);
  };
  const closeModal = useCallback(
    (e) => {
      if (!goClose && e.key !== "Escape") return;

      if (isTrustedElement(e.target)) {
        setModal((prev) => ({ ...prev, open: false }));
        setNote({ title: "" });
        setGoClose(false);
      }
    },
    [goClose]
  );

  useEffect(() => {
    if (!modal.open) return;
    document.addEventListener("keyup", closeModal);
    return () => document.removeEventListener("keyup", closeModal);
  }, [modal]);

  const applyFnc = {
    add: addNote,
    edit: editNote,
  };

  return (
    <div
      onMouseDown={prepareCloseModal}
      onMouseUp={closeModal}
      className={modal.open ? "modal modal_open" : "modal"}
    >
      <div className="modal__wrapepr">
        <div className="modal__inner">
          <h2 className="modal__title">{modal.title}</h2>
          <div className="modal__body">
            <Input
              value={note.title}
              onChange={(e) =>
                setNote((prev) => ({ ...prev, title: e.target.value }))
              }
              onKeyDown={(e) => e.key === "Enter" && applyFnc[modal.type](note)}
              placeholder={modal.placeholder}
            />
          </div>
          <div className="modal__buttons">
            <button className="button button_white"> Cancel </button>
            <button
              onClick={() => applyFnc[modal.type](note)}
              className="button button_purple"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
