import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: false,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(5, 3, -1);
//scene.add(mesh);

const mesh2 = new THREE.Mesh(geometry, material);
//scene.add(mesh2);

const mesh3 = new THREE.Mesh(geometry, material);
mesh3.position.set(-5, -3, -1);
//scene.add(mesh3);

const group = new THREE.Group();
group.add(mesh, mesh2, mesh3);

group.rotation.y = 0;

scene.add(group);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;

scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
requestAnimationFrame(animate);
