import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//TextureLoader
const tL = new THREE.TextureLoader();
const earthTexture = tL.load("/assets/earth.jpg");

//Scene
const scene = new THREE.Scene();

//Geometry
const geometry = new THREE.SphereGeometry(1);

//Material -> Skin
const material = new THREE.MeshBasicMaterial({ map: earthTexture });

//Object
const cube = new THREE.Mesh(geometry, material);

//Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
camera.position.z = 3;
scene.add(cube, camera);

const canvas = document.querySelector("canvas.canvas");
const renderer = new THREE.WebGL1Renderer({
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

//Control
const control = new OrbitControls(camera, canvas);

const animate = () => {
  // console.log("Hi");
  window.requestAnimationFrame(animate);
  cube.rotation.y += (Math.PI / 3) * 0.004;
  renderer.render(scene, camera);
  control.update();
};

animate();
