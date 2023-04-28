/**
 * 4 elements to get started:
 * - A scene that will contain objects
 * - Some objects
 * - A camera
 * - A renderer
 */

/** 
 * Scene
 * - Like a container
 * - We put objects, models, light, etc..
 * - At some point we ask Three.js to render the scene.
 */
const scene = new THREE.Scene()

/**
 * Objects
 * -------
 * - Primitive geometries
 * - Imported models
 * - Particles
 * - Lights
 * - Etc..
 * 
 * To create a visible obj we start with a Mesh.
 */

// Red cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 ) // Note: Unit 1. It could be any unit.
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } )
const mesh = new THREE.Mesh( geometry, material )
scene.add( mesh );

// Camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 1, 1000 )
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1


scene.add( camera );

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)