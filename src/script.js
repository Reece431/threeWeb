// import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'lil-gui'
// import { Vector3 } from 'three'

// /**
//  * RAYCASTING
//  * cast a ray in a specific direction and test what objects intersect with it.
//  * detect if theres a wall in front of a player, or if a laser hit something, or if a spaceship is heading towards an asteroid
//  */

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Objects
//  */
// const object1 = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     new THREE.MeshBasicMaterial({ color: '#ff0000' })
// )
// object1.position.x = - 2

// const object2 = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     new THREE.MeshBasicMaterial({ color: '#ff0000' })
// )

// const object3 = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     new THREE.MeshBasicMaterial({ color: '#ff0000' })
// )
// object3.position.x = 2

// scene.add(object1)

// /**
//  * raycaster
//  */
// const ray = new THREE.Raycaster()
// //now set the origin of this ray and the direction using xyz coords
// // const origin = new THREE.Vector3(-3, 0, 0);
// // const direction = new THREE.Vector3(10, 0, 0);
// // //best to look this up in the docs, makes no sense to me just ALWAYS normalise the direction
// // direction.normalize();

// // ray.set(origin, direction)

// // //Cast the ray
// // //2 options, one for 1 object and one for multiple
// // const intersect = ray.intersectObject(object2)
// // //this still produces an array as a ray can go through 1 object multiple times

// // console.log(intersect)

// // const intersects = ray.intersectObjects([object1, object2, object3])
// // console.log(intersects)
// //info on the data you'll find
// /**
//  * distance - distance between the origin and colision point
//  * face - what face of the geomatry was hit
//  * faceIndex - the index of the face
//  * object - what object was hit by the ray
//  * point - a Vector3 of the exact pos of the collision
//  * uv - the UV coords in the geomatry the ray hit
//  */

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  *  Mouse
// */
// const mouse = new THREE.Vector2();
// window.addEventListener('mousemove', (e) => {
//     mouse.x = e.clientX /sizes.width * 2 - 1 //this maths helps convert mouse x from pixels to a value between -1 - 1
//     mouse.y = - e.clientY /sizes.height * 2 + 1 //there are many ways to accomplish this goal but we always want -1 - 1

//     // console.log(mouse.x, mouse.y)
// })

// window.addEventListener('click', () => {
//     // console.log('clicked')
//     if(currentIntersect) {
//         if(currentIntersect.object === object1){
//             // console.log('clicked object 1')
//         } else if(currentIntersect.object === object2){
//             // console.log('clicked object 2')
//         } else if(currentIntersect.object === object3){
//             // console.log('clicked object 3')
//         }
//     }
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.z = 3
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// //testing for mouse enter and move leave
// //create witness var (call it what you like) this will be updated whenever a object is hit by or leaves the path of our ray
// let currentIntersect = null;

// const tick = () =>
// {

//     const elapsedTime = clock.getElapsedTime()

//     // Animate spheres
//     object1.position.y = Math.sin(elapsedTime * 0.3) * 1.5
//     // object2.position.y = Math.sin(elapsedTime * 1.2) * 1.5
//     // object3.position.y = Math.sin(elapsedTime * 0.8) * 1.5

//     // Raycaster
//     //origin
//     // const origin = new THREE.Vector3(-3,0,0)
//     // //direction
//     // const destinition = new THREE.Vector3(10,0,0)
//     // //normalise
//     // destinition.normalize();
//     // //set
//     // ray.set(origin, destinition);
//     // //shoot
//     // const intersets = ray.intersectObjects([object1, object2, object3])

//     // //set them all red here, then when we re-render if its not in the path is still gets rendered red but not blue
//     // object1.material.color.set('#ff0000');
//     // object2.material.color.set('#ff0000');
//     // object3.material.color.set('#ff0000');

//     // //change the color of the objects hit by the ray
//     // //this can be done by hopping into the objects array inside intersets and change there color
//     // intersets.map(i => {
//     //     i.object.material.color.set('#0000ff')
//     // })

//     //cating mouse rays
//     //this says the rays origin is the mouse and its direction is where the camera points at
//     ray.setFromCamera(mouse, camera)
//     const intersets = ray.intersectObjects([object1])
   
//     object1.material.color.set('#ff0000');
//     // object2.material.color.set('#ff0000');
//     // object3.material.color.set('#ff0000');

//     intersets.map(i => {
//         i.object.material.color.set('#0000ff')
//     })

//     //test intersects against current intersect
//     if(intersets.length) {
//         // console.log('mouse enter')
//         currentIntersect = intersets[0]
//     } else {
//         // console.log('mouse leave')
//         currentIntersect = null
//     }

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()