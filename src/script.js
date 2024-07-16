import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Animation Function

/**
 * Higher frame rate monitors will result in faster rotating/moving 
 * animations.
 */

// Previous TIme
let time = Date.now();

const tick = () => {
    // console.log("tick");

    // Optimize animation to play the same on all framerates
    // using current time - previous time
    const currentTime = Date.now();

    // Calculating the difference in between times
    const deltaTime = currentTime - time;

    // Updating previous time to current time, for updated calculations
    time = currentTime;
    console.log(deltaTime);

    // Updates to object, based on the difference in times
    // rather than each tick
    mesh.rotation.x += 0.001 * deltaTime; // Rotation on x axis
    mesh.rotation.y += 0.001 * deltaTime; // Rotation on y axis

    // Render
    renderer.render(scene, camera)

    // Recursive call
    window.requestAnimationFrame(tick);
}

// tick() function call to do animation
tick();