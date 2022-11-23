import * as THREE from "three";

export default class OrthographicCamera {
  camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 2, 20);
  scene = new THREE.Scene();
  renderer = new THREE.WebGL1Renderer({ antialias: true });
  cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff00000, wireframe: true })
  );
  rendererSetting = (dom = document.querySelector("#orthographicCamera")) => {
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(
      dom.getBoundingClientRect().width,
      dom.getBoundingClientRect().height
    );
    dom.appendChild(this.renderer.domElement);
    this.camera.position.set(4, -3, 5);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    window.addEventListener("resize", () => {
      dom = document.querySelector("#orthographicCamera");
      const { width, height } = dom.getBoundingClientRect();
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    });
  };
  constructor() {
    this.rendererSetting();
    this.scene.add(this.cube);
    this.renderer.render(this.scene, this.camera);
  }
}
