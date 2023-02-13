function Modal({ title, content }) {
  return (
    <>
      <div className="k">
        <div className="modal-header">
          <h4> {title} </h4>
        </div>
        <div className="modal-content">
          <p> {content} </p>
        </div>
        <div className="modal-actions">
          <button> NO, CANCEL</button>
          <button> YES, DELETE </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
