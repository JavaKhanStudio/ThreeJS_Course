/* eslint-disable no-unused-vars */

import * as ThreeCanvas from "@/ThreeJS/BasicAndMouse" ;
import * as THREE from "three";

export function initAndBuildThree(container) {

    ThreeCanvas.initThreeJSBase(container, true) ;
    let scene = ThreeCanvas.getScene() ;

    // Create Geometry
    let cubeGeo = new THREE.BoxGeometry(1, 1, 1);

    let basePath = '/texture/wood/' ;
    // Set Color
    let texture = new THREE.TextureLoader().load(basePath + 'basecolor.jpg');
    let normalMap = new THREE.TextureLoader().load(basePath + 'normal.jpg');
    let roughnessMap = new THREE.TextureLoader().load(basePath + 'roughness.jpg');
    let metalnessMap = new THREE.TextureLoader().load(basePath + 'metallic.jpg');
    let opacityMap = new THREE.TextureLoader().load(basePath + 'opacity.jpg');




    // Create the material
    let materialRed = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color using hex value

    let materialWood = new THREE.MeshBasicMaterial({ map: texture });

    let materialWoodComplexe = new THREE.MeshStandardMaterial({
        map: texture,
        normalMap: normalMap,
        roughnessMap: roughnessMap,
        metalnessMap: metalnessMap,
        alphaMap: opacityMap,
        transparent: true, // Required when using an alphaMap
        roughness: 1,
        metalness: 1,
    });



    // Building the Element
    let element = new THREE.Mesh(cubeGeo, materialRed);
    element.position.set(0, 1, 0);

    // Adding Lights
    let ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5); // Position the light

    // scene.add(ambientLight);
    // scene.add(directionalLight);

    scene.add(element) ;
    ThreeCanvas.lookAtIm(element) ;
    // ADD CODE HERE


}