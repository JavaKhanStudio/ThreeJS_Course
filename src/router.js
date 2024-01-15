import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/IndexPage.vue';

import VersIntroduction from '@/pages/introduction/A_IntroductionIndex.vue';
import IntroIntroduction from '@/pages/introduction/Intro_Introduction.vue';
import SimpleCube from '@/pages/introduction/SimpleCube.vue';
import CubeAvecTexture from '@/pages/introduction/CubeAvecTexture.vue';


import LesCanvas from '@/pages/canvas/A_CanvasIndex.vue';
import IntroCanvas from '@/pages/canvas/Intro_LesCanvas.vue';
import Canvas1 from '@/pages/canvas/TheCanvas1.vue';
import Canvas2 from '@/pages/canvas/TheCanvas2.vue';

import LesShaders from '@/pages/shader/A_ShaderIndex.vue';
import IntroShaders from '@/pages/shader/Intro_Shader.vue';

import LesScenes from '@/pages/scene/A_SceneIndex.vue';
import IntroScenes from '@/pages/scene/Intro_Scene.vue';

import LesObjet3D from '@/pages/objet3D/A_Objet3DIndex.vue';
import IntroObjet3D from '@/pages/objet3D/Intro_Objet3D.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/intro',
            name: 'VersIntroduction',
            component: VersIntroduction,
            children: [
                {
                    path: '',
                    name: 'IntroIntroduction',
                    component: IntroIntroduction
                },
                {
                    path: 'simpleCube',
                    name: 'simpleCube',
                    component: SimpleCube
                },
                {
                    path: 'cubeAvecTexture',
                    name: 'cubeAvecTexture',
                    component: CubeAvecTexture
                }
            ]
        },
        {
            path: '/canvas',
            name: 'LesCanvas',
            component: LesCanvas,
            children: [
                {
                    path: '',
                    name: 'IntroCanvas',
                    component: IntroCanvas
                },
                {
                    path: 'Canvas1',
                    name: 'Canvas1',
                    component: Canvas1
                },
                {
                    path: 'Canvas2',
                    name: 'Canvas2',
                    component: Canvas2
                }
            ]
        },
        {
            path: '/objet3D',
            name: 'LesObjet3D',
            component: LesObjet3D,
            children: [
                {
                    path: '',
                    name: 'IntroObjet3D',
                    component: IntroObjet3D
                }
            ]
        },
        {
            path: '/shader',
            name: 'LesShaders',
            component: LesShaders,
            children: [
                {
                    path: '',
                    name: 'IntroShaders',
                    component: IntroShaders
                }
            ]
        },
        {
            path: '/scene',
            name: 'LesScenes',
            component: LesScenes,
            children: [
                {
                    path: '',
                    name: 'IntroScene',
                    component: IntroScenes,
                }
            ]
        },
    ]
});



export default router;
