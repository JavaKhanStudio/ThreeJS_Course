/* eslint-disable no-unused-vars */

import * as ThreeCanvas from "@/ThreeJS/BasicAndMouse" ;
import * as THREE from "three";

let element ;
export function initAndBuildThree(container) {

    ThreeCanvas.initThreeJSBase(container, true) ;


    let cubeGeo = new THREE.BoxGeometry(1, 1, 1);
    let materialRed = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color using hex value
    element = new THREE.Mesh(cubeGeo, materialRed);

    element.position.set(0, 0, 0);

    ThreeCanvas.getScene().add(element) ;
    ThreeCanvas.lookAtIm(element) ;

    ThreeCanvas.setCustomRenderFunction((delta) => {
        element.position.set(0,element.position.y + (1 * delta) ,0)
    });

}

export function getElementPosition() {
    return element.getPosition() ;
}

export function resetCubePosition() {
    element.position.set(0, 0, 0);
}