

export default function Messages({ messages }) {

  return (
    <div className="toast-container position-fixed bottom-0 start-0 p-3">
      {messages.map((m, i) => {
        return (
          <div
            className={`toast show align-items-center toast-${m.type}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            key={i}
          >
            <div className="d-flex">
              <div className="toast-body">{m.message}</div>
              <button
                type="button"
                className="btn-close me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
