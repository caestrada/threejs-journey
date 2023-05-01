import * as THREE from 'three'
import gsap from 'gsap'

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
renderer.render(scene, camera)

// Time
// let time = Date.now();
// const clock = new THREE.Clock();

// Note: gsap has its own tick. 
gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})

// Animation
const tick = () => {
    
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // console.log(deltaTime)
    // time = currentTime;

    // const elapsedTime = clock.getElapsedTime();
    // console.log(elapsedTime)

    // Update objects
    // mesh.rotation.x += 0.0001 * deltaTime;
    // mesh.rotation.y += 0.0001 * deltaTime;
    // mesh.rotation.z += 0.0001 * deltaTime;

    // mesh.position.x = Math.sin(elapsedTime);
    // mesh.position.y = Math.cos(elapsedTime);
    // mesh.position.z = Math.sin(elapsedTime);


    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick);
} 

tick();