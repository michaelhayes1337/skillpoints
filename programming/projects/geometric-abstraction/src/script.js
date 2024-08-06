import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

/**
 * Textures
 */
const loadingManager = new THREE.LoadingManager();
// loadingManager.onStart = (e) => {
//   console.log("onStart", e);
// };
// loadingManager.onLoad = (e) => {
//   console.log("onLoad", e);
// };
// loadingManager.onError = (e) => {
//   console.log("onError", e);
// };

const textureLoader = new THREE.TextureLoader(loadingManager);

const woodColorTexture = textureLoader.load(
  "/textures/wood/Wood_024_basecolor.jpg"
);
woodColorTexture.colorSpace = THREE.SRGBColorSpace;

const woodAmbientOcclusionTexture = textureLoader.load(
  "/textures/wood/Wood_024_ambientOcclusion.jpg"
);

const metalColorTexture = textureLoader.load("Metal_Plate_047_basecolor.jpg");
metalColorTexture.colorSpace = THREE.SRGBColorSpace;

console.log(metalColorTexture);

const metalAmbientOcclusionTexture = textureLoader.load(
  "Metal_Plate_047_ambientOcclusion.jpg"
);

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#ffffff");
//add a axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

/**
 * Fonts
 */

/*
 * Objects
 */
const coneGeometry = new THREE.ConeGeometry(1, 1);
const triangleGeometry = new THREE.ConeGeometry(1, 1, 3);
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const capsuleGeometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
const planeGeometry = new THREE.PlaneGeometry(0.5, 0.5);

const material1 = new THREE.MeshBasicMaterial({ color: "red" });
const material2 = new THREE.MeshBasicMaterial({ color: "yellow" });
const material3 = new THREE.MeshBasicMaterial({ color: "pink" });
const material4 = new THREE.MeshBasicMaterial({ color: "teal" });
const material5 = new THREE.MeshBasicMaterial({ color: "cyan" });

const material6 = new THREE.MeshPhysicalMaterial({
  color: "blue",
  map: metalColorTexture,
  aoMap: metalAmbientOcclusionTexture,
  metalness: 1,
  roughness: 0,
  clearcoat: 1,
});

const woodMaterial = new THREE.MeshPhysicalMaterial({
  color: "brown",
  map: woodColorTexture,
  clearcoat: 1,
  // aoMap: woodAmbientOcclusionTexture,
  // transparent: true,
});

//Wood Shelf
const shelfGroup = new THREE.Group();

const firstShelf = new THREE.Mesh(boxGeometry, woodMaterial);
firstShelf.position.y = -20;
firstShelf.scale.set(500, 5, 25);
shelfGroup.add(firstShelf);

const secondShelf = new THREE.Mesh(boxGeometry, woodMaterial);
secondShelf.position.y = -90;
secondShelf.scale.set(500, 5, 25);
shelfGroup.add(secondShelf);

const thirdShelf = new THREE.Mesh(boxGeometry, woodMaterial);
thirdShelf.position.y = 50;
thirdShelf.scale.set(500, 5, 25);
shelfGroup.add(thirdShelf);

const fourthShelf = new THREE.Mesh(boxGeometry, woodMaterial);
fourthShelf.position.y = 120;
fourthShelf.scale.set(500, 5, 25);
shelfGroup.add(fourthShelf);

const backBoardShelf = new THREE.Mesh(boxGeometry, woodMaterial);
backBoardShelf.scale.set(500, 5, 300);
backBoardShelf.rotation.x = Math.PI * 0.5;
backBoardShelf.position.z = -15;
shelfGroup.add(backBoardShelf);

const sideBoardShelfLeft = new THREE.Mesh(boxGeometry, woodMaterial);
sideBoardShelfLeft.rotation.z = Math.PI * 0.5;
sideBoardShelfLeft.position.x = -250;
sideBoardShelfLeft.scale.set(300, 5, 25);
shelfGroup.add(sideBoardShelfLeft);

const sideBoardShelfRight = new THREE.Mesh(boxGeometry, woodMaterial);
sideBoardShelfRight.rotation.z = Math.PI * 0.5;
sideBoardShelfRight.position.x = 250;
sideBoardShelfRight.scale.set(300, 5, 25);
shelfGroup.add(sideBoardShelfRight);

//scene.add(shelfGroup);

//Figurine
const figurineGroup = new THREE.Group();

const crotch = new THREE.Mesh(coneGeometry, material1);
crotch.scale.set(4, 4, 1);
crotch.rotation.x = Math.PI;
crotch.position.y = -2;
figurineGroup.add(crotch);

const torso = new THREE.Mesh(coneGeometry, material2);
torso.scale.set(10, 10, 1);
torso.position.y = 5.5;
torso.rotation.x = Math.PI;
figurineGroup.add(torso);

const head = new THREE.Mesh(capsuleGeometry, material5);
head.scale.set(2.5, 2, 1);
head.position.y = 14;
figurineGroup.add(head);

const leftQuad = new THREE.Mesh(coneGeometry, material3);
leftQuad.position.x = -6;
leftQuad.position.y = -6;
leftQuad.rotation.z = Math.PI * 0.75;
leftQuad.scale.set(3, 10, 1);
figurineGroup.add(leftQuad);

const rightQuad = new THREE.Mesh(coneGeometry, material3);
rightQuad.position.x = 6;
rightQuad.position.y = -6;
rightQuad.rotation.z = -Math.PI * 0.75;
rightQuad.scale.set(3, 10, 1);
figurineGroup.add(rightQuad);

const leftCalf = new THREE.Mesh(coneGeometry, material4);
leftCalf.position.x = -6;
leftCalf.position.y = -13;
leftCalf.rotation.z = -Math.PI * 0.85;
leftCalf.scale.set(2, 8, 1);
figurineGroup.add(leftCalf);

const rightCalf = new THREE.Mesh(coneGeometry, material4);
rightCalf.position.x = 6;
rightCalf.position.y = -13;
rightCalf.rotation.z = Math.PI * 0.85;
rightCalf.scale.set(2, 8, 1);
figurineGroup.add(rightCalf);

const leftFoot = new THREE.Mesh(coneGeometry, material5);
leftFoot.position.x = -5.7;
leftFoot.position.y = -18.5;
leftFoot.rotation.z = Math.PI * 0.6;
leftFoot.scale.set(1, 4, 1);
figurineGroup.add(leftFoot);

const rightFoot = new THREE.Mesh(coneGeometry, material5);
rightFoot.position.x = 5.7;
rightFoot.position.y = -18.5;
rightFoot.rotation.z = -Math.PI * 0.6;
rightFoot.scale.set(1, 4, 1);
figurineGroup.add(rightFoot);

const leftShoulder = new THREE.Mesh(triangleGeometry, material6);
leftShoulder.position.x = -9.5;
leftShoulder.position.y = 8.5;
leftShoulder.rotation.z = Math.PI * 0.09;
leftShoulder.scale.set(2.5, 4, 1);
figurineGroup.add(leftShoulder);

const rightShoulder = new THREE.Mesh(triangleGeometry, material6);
rightShoulder.position.x = 9.5;
rightShoulder.position.y = 8.5;
rightShoulder.rotation.z = -Math.PI * 0.09;
rightShoulder.scale.set(2.5, 4, 1);
figurineGroup.add(rightShoulder);

const leftBicep = new THREE.Mesh(triangleGeometry, material6);
leftBicep.position.x = -17.5;
leftBicep.position.y = 9.5;
leftBicep.rotation.z = Math.PI * 0.445;
leftBicep.scale.set(2.5, 13, 1);
figurineGroup.add(leftBicep);

const rightBicep = new THREE.Mesh(triangleGeometry, material6);
rightBicep.position.x = 17.5;
rightBicep.position.y = 9.5;
rightBicep.rotation.z = -Math.PI * 0.445;
rightBicep.scale.set(2.5, 13, 1);
figurineGroup.add(rightBicep);

const leftForeArm = new THREE.Mesh(triangleGeometry, material6);
leftForeArm.position.x = -22;
leftForeArm.position.y = 16;
leftForeArm.scale.set(2, 10, 1);
figurineGroup.add(leftForeArm);

const rightForeArm = new THREE.Mesh(triangleGeometry, material6);
rightForeArm.position.x = 22;
rightForeArm.position.y = 16;
rightForeArm.scale.set(2, 10, 1);
figurineGroup.add(rightForeArm);

const leftHand = new THREE.Mesh(boxGeometry, material6);
leftHand.position.x = -20.5;
leftHand.position.y = 23;
leftHand.scale.set(3, 3, 1);
figurineGroup.add(leftHand);

const rightHand = new THREE.Mesh(boxGeometry, material6);
rightHand.position.x = 20.5;
rightHand.position.y = 23;
rightHand.scale.set(3, 3, 1);
figurineGroup.add(rightHand);

figurineGroup.position.y += 2;

scene.add(figurineGroup);

/**
 * Lights
 */

const ambientLight = new THREE.AmbientLight({
  color: 0xffffff,
  intensity: 1,
});
//scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xff00ff, 1);
pointLight.position.set(0, -10, -5);
pointLight.lookAt(figurineGroup.position);

scene.add(pointLight);

const pointLightL = new THREE.PointLight(0x0000ff, 0.9);
pointLight.position.set(-10, 50, 45);
pointLight.lookAt(figurineGroup.position);

scene.add(pointLight);

const pointLightR = new THREE.PointLight(0xff0000, 0.9);
pointLight.position.set(10, 50, 45);
pointLight.lookAt(figurineGroup.position);

scene.add(pointLight);

const sphereSize = 5;
const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
scene.add(pointLightHelper);

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
  500
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 50;
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

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
