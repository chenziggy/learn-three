import * as THREE from "three";

export default class PerspectiveCamera {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
  renderer = new THREE.WebGL1Renderer({ antialias: true });
  cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 3),
    new THREE.MeshBasicMaterial({ color: 0xff00000, wireframe: true })
  );

  rendererSetting = (dom = document.querySelector("#perspectiveCamera")) => {
    const { width, height } = dom.getBoundingClientRect();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    dom.appendChild(this.renderer.domElement);
    this.camera.position.set(0, 0, 5);
    window.addEventListener("resize", () => {
      const dom = document.querySelector("#perspectiveCamera");
      const { width, height } = dom.getBoundingClientRect();
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    });
  };

  constructor() {
    this.scene.add(this.cube);
    this.rendererSetting();
    this.renderer.render(this.scene, this.camera);
  }
}
