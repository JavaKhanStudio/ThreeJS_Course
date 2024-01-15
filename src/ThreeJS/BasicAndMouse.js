
import * as THREE from "three";

let inDebuggingMode;


const mouse = {x: 0, y: 0};
let mouse3D = new THREE.Vector3();

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('resize', onWindowResize, false);
window.addEventListener('scroll', updateCanvasBounds, false);


let  renderer;
let  camera;
let  scene;
let  container;
let  canvasBounds;

export function getRenderer()
{
    return renderer ;
}

export function getScene()
{
    return scene ;
}


function onWindowResize() {
    if (!camera || !renderer || !container) return;


    const width = container.clientWidth;
    const height = container.clientHeight;

    if (inDebuggingMode) {
        console.log('Resizing to:', width, height);
    }

    // Update camera aspect ratio and renderer size
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // renderer.setSize(width, height - 4);
    renderer.setSize(width, height);
    updateCanvasBounds();
}

function updateCanvasBounds() {
    if (renderer && renderer.domElement) {
        console.log('Updating canvas bounds to ' + renderer.domElement.getBoundingClientRect().width + 'x' + renderer.domElement.getBoundingClientRect().height + 'px');
        canvasBounds = renderer.domElement.getBoundingClientRect();
    } else {
        console.log('Unable to act on updateCanvasBounds(). No renderer or renderer.domElement found.')
    }
}


export function initThreeJSBase(isContainer, inDebug) {

    container = isContainer;
    inDebuggingMode = inDebug ;

    if (!container) {
        console.error('No container element provided for Three.js initialization.');
        return;
    }

    const canvas = container.querySelector('canvas');

    if (!canvas) {
        console.error('No canvas element found in the container.');
        return;
    }

    createRenderer(canvas, !inDebuggingMode);
    updateCanvasBounds();
    createCamera(container.clientWidth, container.clientHeight);

    scene = new THREE.Scene();


    if (inDebuggingMode) {
        addDebugElements();
    }

    let firstRender = true;
    let secondRender = false;
    let timmingOnSecondRender = 0;

    function render() {

        makeRenderCheck() ;

        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function makeRenderCheck() {
        if (secondRender) {
            timmingOnSecondRender += 1

            if (timmingOnSecondRender > 30) {
                onWindowResize();
                secondRender = false;
            }
        }

        if (firstRender) {
            firstRender = false;
            container.style.display = 'flex'; // Show the canvas after the first render
            secondRender = true;

        }
    }

    requestAnimationFrame(render);
}

function onMouseMove(event) {
    if (!camera || !canvasBounds) return;

    // Clamp the mouse position to the canvas bounds
    const clampedX = Math.min(Math.max(event.clientX, canvasBounds.left), canvasBounds.right);
    const clampedY = Math.min(Math.max(event.clientY, canvasBounds.top), canvasBounds.bottom);

    // Calculate mouse position relative to the canvas
    mouse.x = ((clampedX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
    mouse.y = -((clampedY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

    mouse3D.set(mouse.x, mouse.y, 0.0); // Set Z between -1 and 1
}


function createRenderer(canvas, isTransparent) {
    if (renderer) {
        renderer.dispose();
    }

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvas,
        alpha: isTransparent
    });
}

function createCamera(width, height) {
    const fov = 50;
    const aspect = width / height; // Adjust for canvas size
    const near = 0.1;
    const far = 300;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.x = 3.0;
    camera.position.y = 3.0;
    camera.position.z = 3.0;

}

// Debugging stuff
let line;

function addDebugElements() {
    // Create axis helper to display the center of the scene
    const axesHelper = new THREE.AxesHelper(10);
    scene.add(axesHelper);

    // Create a line between the center and the mouse
    let lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
    let lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]);
    line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
}

export function lookAtIm(element) {
    camera.lookAt(element.position) ;
}
