import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const controls = new OrbitControls( camera, renderer.domElement );

// Initialize Three.js
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Set camera position
camera.position.set(0.5,0.2,0.5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Create a directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

// Set the position of the light
// directionalLight.position.set(1, 1, 1);
directionalLight.position.set(0.5,0.2,0.5);

// Add the light to the scene
scene.add(directionalLight);

// Load the model
const loader = new THREE.OBJLoader();
loader.load('models/arm.obj', (obj) => {
    // Add texture to the model
    const texture = new THREE.TextureLoader().load('textures/texture.png');
    obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material.map = texture;
        }
    });

    // Add the model to the scene
    scene.add(obj);
});

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the model (for example)
    if (scene.children.length > 1) {
        scene.children[1].rotation.x += 0.01;
        scene.children[1].rotation.y += 0.01;
    }

    renderer.render(scene, camera);
};

animate();


// // Initialize Three.js
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('container').appendChild(renderer.domElement);

// // Load the model
// const loader = new THREE.OBJLoader();
// loader.load('models/arm.obj', (obj) => {
//     // Add texture to the model
//     const texture = new THREE.TextureLoader().load('textures/texture.png');
//     obj.traverse((child) => {
//         if (child instanceof THREE.Mesh) {
//             child.material.map = texture;
//         }
//     });

//     // Add the model to the scene
//     scene.add(obj);
// });

// // Set camera position
// camera.position.z = 5;

// // Animation loop
// const animate = () => {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// };

// animate();