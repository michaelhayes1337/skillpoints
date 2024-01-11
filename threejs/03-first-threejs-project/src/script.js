import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "yellow",
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x += 1.5;
mesh.position.y += 1;
scene.add(mesh);

const circle = new THREE.CircleGeometry(1, 32, 3, 3);
const circleMesh = new THREE.Mesh(circle, material);
scene.add(circleMesh);

/**
 * Sizes
 */
const sizes = {
  width: 1000,
  height: 700,
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
