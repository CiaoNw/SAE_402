
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x28282B );

//Camera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

let object;
let controls;
let objToRender = 'ressource/SAE';

const loader = new GLTFLoader();

loader.load(
  `${objToRender}.glb`,
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
  }
);

const renderer = new THREE.WebGLRenderer();
const divScene = document.getElementById("scene")

divScene.appendChild(renderer.domElement);
renderer.setSize(divScene.offsetWidth, divScene.offsetHeight);

renderer.physicallyCorrectLights = true
const ambientLight = new THREE.AmbientLight(0xfbf5e9, 1);
scene.add( ambientLight );

const topLight = new THREE.DirectionalLight(0xfbf5e9, 2.5); 
topLight.position.set(0, 10, -2)
topLight.castShadow = true;
scene.add(topLight);

const rightLight = new THREE.DirectionalLight(0xfbf5e9, 2.2);
rightLight.position.set(13, 7, 15)
rightLight.castShadow = true;
scene.add(rightLight);

const backRightLight = new THREE.DirectionalLight(0xfbf5e9, 2.2);
backRightLight.position.set(13, 7, -15)
backRightLight.castShadow = true;
scene.add(backRightLight);

const leftLight = new THREE.DirectionalLight(0xfbf5e9, 2.2);
leftLight.position.set(-13, 7, 15)
leftLight.castShadow = true;
scene.add(leftLight);

const backLeftLight = new THREE.DirectionalLight(0xfbf5e9, 2.2);
backLeftLight.position.set(-13, 7, -15)
backLeftLight.castShadow = true;
scene.add(backLeftLight);

controls = new OrbitControls(camera, renderer.domElement);
camera.position.set( 1.7, 0.7, 4 );
controls.update();

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(divScene.offsetWidth, divScene.offsetHeight);
});

animate();
