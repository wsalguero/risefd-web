/* eslint-disable no-unused-vars */
import React from "react";

const Accordion = () => {
  return (
    <div>
      {" "}
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseMission"
              aria-expanded="false"
              aria-controls="flush-collapseMission"
            >
              Misión
            </button>
          </h2>
          <div
            id="flush-collapseMission"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body d-flex">
              <aside>
                <img
                  src="ruta-a-tu-imagen-mision.jpg"
                  alt="Misión"
                  className="me-3"
                  style={{ width: "100px", height: "100px" }}
                />
              </aside>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseVision"
              aria-expanded="false"
              aria-controls="flush-collapseVision"
            >
              Visión
            </button>
          </h2>
          <div
            id="flush-collapseVision"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body d-flex">
              <aside>
                <img
                  src="ruta-a-tu-imagen-mision.jpg"
                  alt="Misión"
                  className="me-3"
                  style={{ width: "100px", height: "100px" }}
                />
              </aside>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseObjectives"
              aria-expanded="false"
              aria-controls="flush-collapseObjectives"
            >
              Objetivos
            </button>
          </h2>
          <div
            id="flush-collapseObjectives"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body d-flex">
              <aside>
                <img
                  src="ruta-a-tu-imagen-mision.jpg"
                  alt="Misión"
                  className="me-3"
                  style={{ width: "100px", height: "100px" }}
                />
              </aside>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
