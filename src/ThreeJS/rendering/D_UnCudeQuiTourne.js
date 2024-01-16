/* eslint-disable no-unused-vars */

import * as ThreeCanvas from "@/ThreeJS/BasicAndMouse" ;
import * as THREE from "three";

let element ;
let isMovingOnX = false ;
let isMovingOnY = false ;
let isMovingOnZ = false ;

let rotationSpeed = 1 ;

export function initAndBuildThree(container) {

    ThreeCanvas.initThreeJSBase(container, true) ;


    let cubeGeo = new THREE.BoxGeometry(1, 1, 1);
    let materialRed = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color using hex value
    element = new THREE.Mesh(cubeGeo, materialRed);

    element.position.set(0, 0, 0);

    ThreeCanvas.getScene().add(element) ;
    ThreeCanvas.lookAtIm(element) ;

    ThreeCanvas.setCustomRenderFunction((delta) => {

        if(isMovingOnX) {
            element.rotation.x += rotationSpeed * delta;
        }

        if(isMovingOnY) {
            element.rotation.y += rotationSpeed * delta;
        }

        if(isMovingOnZ) {
            element.rotation.z += rotationSpeed * delta;
        }

    });

}

export function getElementPosition() {
    return element.getPosition() ;
}

export function setMovingOnX(makeMove) {
    isMovingOnX = makeMove ;
}

export function setMovingOnY(makeMove) {
    isMovingOnY = makeMove ;
}

export function setMovingOnZ(makeMove) {
    isMovingOnZ = makeMove ;
}

export function resetCubePosition() {
    element.position.set(0, 0, 0);
}