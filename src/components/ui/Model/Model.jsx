import React from 'react';

const Model = () => {
  return (
    <div className="overflow-hidden">
    <div
      className="modal fade fade-in"
      id="languageModal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xs mx-auto"
        role="document"
      >
        <div className="modal-content bg-black">
          <div className="modal-body text-center p-0">
            <button
              className="btn-close text-white position-absolute top-0 end-0 times-icon mt-2 me-2 p-0"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <ul className="list-unstyled my-0 py-4 font-sans-serif">
              <li>
                <a
                  className="text-white fw-bold pt-1 d-block"
                  href=" /twbs-sparrow/v2.0.2/homes/default.html"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  className="pt-1 d-block text-500"
                  href=" /twbs-sparrow/v2.0.2/#!"
                >
                  Français
                </a>
              </li>
              <li>
                <a
                  className="text-500 pt-1 d-block"
                  href=" /twbs-sparrow/v2.0.2/pages/rtl.html"
                >
                  عربى
                </a>
              </li>
              <li>
                <a
                  className="pt-1 d-block text-500"
                  href=" /twbs-sparrow/v2.0.2/#!"
                >
                  Deutsche
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Model;

