import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Textures
 */

const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log("Started Load");
};
loadingManager.onLoad = () => {
  console.log("Loaded");
};
loadingManager.onError = () => {
  console.log("Error");
};
const textureLoader = new THREE.TextureLoader(loadingManager);

//Door Textures
const doorColorTexture = textureLoader.load("/textures/door/color.jpg");
doorColorTexture.colorSpace = THREE.SRGBColorSpace;
const doorAlpha = textureLoader.load("/textures/door/alpha.jpg");
const doorAmbient = textureLoader.load("/textures/door/ambientOcclusion.jpg");
const doorHeight = textureLoader.load("/textures/door/height.jpg");
const doorMetal = textureLoader.load("/textures/door/metalness.jpg");
const doorNormal = textureLoader.load("/textures/door/normal.jpg");
const doorRoughness = textureLoader.load("/textures/door/roughness.jpg");

//Environment Textures
const environementMap = textureLoader.load("/textures/environmentMap/2k.hdr");

//Gradient
const gradientTexture = textureLoader.load("/textures/gradients/3.jpg");

//Matcaps
const matcapTexture = textureLoader.load("/textures/matcaps/3.png");
matcapTexture.colorSpace = THREE.SRGBColorSpace;
/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Meshes
 */
const sphere = new THREE.SphereGeometry(0.5, 16, 16);
const plane = new THREE.PlaneGeometry(1, 1);
const torus = new THREE.TorusGeometry(0.3, 0.2, 16, 32);

// const material = new THREE.MeshBasicMaterial({
//   color: "xff00ff",
// });
// material.map = doorColorTexture;
// material.transparent = true;
// material.alphaMap = doorAlpha;
// material.side = THREE.DoubleSide;

// const material = new THREE.MeshNormalMaterial();
// material.wireframe = true;
// material.flatShading = true;

// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcapTexture;

// const material = new THREE.MeshLambertMaterial();
const material = new THREE.MeshToonMaterial();

//create a mesh for each geometry and add to scene
const sphereMesh = new THREE.Mesh(sphere, material);
sphereMesh.position.x = -1.5;

const planeMesh = new THREE.Mesh(plane, material);
planeMesh.position.x = 0;

const torusMesh = new THREE.Mesh(torus, material);
torusMesh.position.x = 1.5;

scene.add(sphereMesh, planeMesh, torusMesh);

/**
 * Lights
 */

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 30);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 4;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Move Meshes
  sphereMesh.rotation.y = Math.sin(elapsedTime * 0.1);

  planeMesh.rotation.y = Math.sin(elapsedTime * 0.3);
  planeMesh.rotation.x = Math.cos(elapsedTime * 0.3);

  torusMesh.rotation.y = Math.sin(elapsedTime * 0.3);
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
