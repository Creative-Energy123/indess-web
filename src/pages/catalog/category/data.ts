import imgValves from "../../../assets/catalog/valves.jpg";
import vBall from "../../../assets/catalog/valves/ball.jpg";
import vButterfly from "../../../assets/catalog/valves/butterfly.jpg";
import vBypass from "../../../assets/catalog/valves/bypass.jpg";
import vCheck from "../../../assets/catalog/valves/check.jpg";
import vControl from "../../../assets/catalog/valves/control.jpg";
import vDiaphragm from "../../../assets/catalog/valves/diaphragm.jpg";
import vGate from "../../../assets/catalog/valves/gate.jpg";
import vGlobe from "../../../assets/catalog/valves/globe.jpg";
import vNeedle from "../../../assets/catalog/valves/needle.jpg";
import vPinch from "../../../assets/catalog/valves/pinch.jpg";
import vPlug from "../../../assets/catalog/valves/plug.jpg";
import vRelief from "../../../assets/catalog/valves/pressure-relief.jpg";
import vSafety from "../../../assets/catalog/valves/safety.jpg";
import vSlide from "../../../assets/catalog/valves/slide.jpg";
import vSolenoid from "../../../assets/catalog/valves/solenoid.jpg";

import type { CatalogDetailPage } from "./types";

export const CATALOG_DETAIL_PAGES: Record<string, CatalogDetailPage> = {
  valves: {
    slug: "valves",
    parent: "Mechanical Solutions",
    parentN: "01",
    title: "Valves",
    intro:
      "A complete range of industrial valves engineered for flow control, isolation, and safety across oil and gas, petrochemical, marine, and utility applications.",
    hero: imgValves,
    items: [
      {
        name: "Ball Valves",
        image: vBall,
        description:
          "A ball valve is a shut-off valve that controls the flow of a liquid or gas by means of a rotary ball having a bore.",
      },
      {
        name: "Check Valves",
        image: vCheck,
        description:
          "Check valves provide flow in one direction and help improve process safety and installation reliability.",
      },
      {
        name: "Control Valves",
        image: vControl,
        description:
          "Control valves are used to regulate flow in hydraulic and process circuits across industrial systems.",
      },
      {
        name: "Gate Valves",
        image: vGate,
        description: "Gate valves are used to allow full flow or to isolate flow completely in a line.",
      },
      {
        name: "Globe Valves",
        image: vGlobe,
        description: "Globe valves are suited for throttling and directional flow control in steam and fluid service.",
      },
      {
        name: "Butterfly Valves",
        image: vButterfly,
        description: "Butterfly valves use a rotating disc mounted on a stem for opening and closing.",
      },
      {
        name: "Safety Valves",
        image: vSafety,
        description:
          "Safety valves are pressure relief devices designed to protect life, equipment, and process systems.",
      },
      {
        name: "Needle Valves",
        image: vNeedle,
        description: "Needle valves provide fine flow control through a precision needle-like closure element.",
      },
      {
        name: "Plug Valves",
        image: vPlug,
        description:
          "Plug valves are quarter-turn valves using a cylindrical or tapered plug to start or stop flow.",
      },
      {
        name: "Pressure Relief Valves",
        image: vRelief,
        description:
          "Pressure relief valves protect piping and equipment by releasing pressure during overpressure events.",
      },
      {
        name: "Solenoid Valves",
        image: vSolenoid,
        description:
          "Solenoid valves are electrically actuated valves used for fast, reliable opening and closing control.",
      },
      {
        name: "Slide Valves",
        image: vSlide,
        description: "Slide valves are used for low-pressure flow control of gases, liquids, and suspended solids.",
      },
      {
        name: "Bypass Valves",
        image: vBypass,
        description:
          "Bypass valves provide an alternate route for fluid by diverting part of the main system flow.",
      },
      {
        name: "Pinch Valves",
        image: vPinch,
        description: "Pinch valves are used for shutoff and throttling by constricting flexible flow paths.",
      },
      {
        name: "Diaphragm Valves",
        image: vDiaphragm,
        description: "Diaphragm valves are linear motion valves for starting, regulating, or stopping fluid flow.",
      },
    ],
  },
};
