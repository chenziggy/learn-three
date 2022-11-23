import * as THREE from "three";
import OrthographicCamera from "./src/orthographicCamera";
import PerspectiveCamera from "./src/perspectiveCamera";
import "./style.css";

class App {
  constructor() {}
}

const app = new App();
new OrthographicCamera();
new PerspectiveCamera();
