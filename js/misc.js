// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Load the model
const loader = new THREE.OBJLoader();
loader.load('models/model.obj', (obj) => {
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

// Set camera position
camera.position.z = 5;

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();