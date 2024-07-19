/* eslint-disable no-unused-vars */
import { Popover } from "react-bootstrap";
import banner1 from "../assets/images/banner/webdev.webp";
import banner2 from "../assets/images/banner/techdev.webp";
import banner3 from "../assets/images/banner/hackdev.webp";

export const carousel_content = [
  {
    type: "image",
    src: banner1,
    title: "Innovative Solutions",
    description:
      "Discover cutting-edge solutions designed to drive your business forward.",
    caption:
      "Explore the future with our advanced technologies and innovative solutions.",
    caption_title: "Innovation at its Best",
  },
  {
    type: "image",
    src: banner2,
    title: "Seamless Integration",
    description:
      "Achieve seamless integration with our state-of-the-art software solutions.",
    caption:
      "Our software ensures smooth and efficient integration for all your needs.",
    caption_title: "Smooth Integration",
  },
  {
    type: "image",
    src: banner3,
    title: "Secure and Reliable",
    description:
      "Experience top-notch security and reliability with our expert solutions.",
    caption:
      "Your safety is our priority. Trust our secure and dependable services.",
    caption_title: "Safety First",
  },
];

export const missionContent = (
  <Popover id="popover-positioned-right" title="Popover right">
    <div className="text_component_container">
      <p className="text-break h6 p-3">
        Nuestra misión es abrazar la tecnología y el diseño con amor,
        transformando la experiencia digital para todos, al mejorar la calidad
        de los sistemas informáticos y ofrecer soluciones que inspiren y
        conecten a las personas.
      </p>
    </div>
  </Popover>
);
export const visionContent = (
  <Popover id="popover-positioned-right" title="Popover right">
    <div className="text_component_container">
      <p className="text-break h6 p-3">
        Soñamos con un mundo donde la tecnología y el diseño se fusionen
        armoniosamente para crear experiencias llenas de amor y empatía, donde
        cada interacción digital sea una expresión de cuidado y conexión genuina
      </p>
    </div>
  </Popover>
);

export const goalsContent = (
  <Popover id="popover-positioned-right" title="Objetivos">
    <div className="text_component_container">
      <p className="text-break h6 p-3">
        Nuestra empresa tiene como objetivos:
        <ul>
          <li>
            Ser un pilar en la innovación de nuevos sistemas y tecnologías.
          </li>
          <li>
            Desarrollar software de alta calidad que impulse la transformación
            digital.
          </li>
          <li>Crear artículos y soluciones tecnológicas avanzadas.</li>
          <li>
            Ofrecer servicios de marketing digital que potencien el crecimiento
            empresarial.
          </li>
        </ul>
        Con una visión clara y una pasión por la tecnología, trabajamos para
        hacer realidad estos objetivos y marcar la diferencia en el mundo
        tecnológico.
      </p>
    </div>
  </Popover>
);
