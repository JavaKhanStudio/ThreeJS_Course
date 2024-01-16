import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/IndexPage.vue';

import VersIntroduction from '@/pages/introduction/A_IntroductionIndex.vue';
import IntroIntroduction from '@/pages/introduction/B_Intro_Introduction.vue';
import SimpleCube from '@/pages/introduction/SimpleCube.vue';
import CubeAvecTexture from '@/pages/introduction/CubeAvecTexture.vue';


import LesCanvas from '@/pages/canvas/A_CanvasIndex.vue';
import IntroCanvas from '@/pages/canvas/B_Intro_LesCanvas.vue';
import Canvas1 from '@/pages/canvas/TheCanvas1.vue';
import Canvas2 from '@/pages/canvas/TheCanvas2.vue';

import LesShaders from '@/pages/shader/A_ShaderIndex.vue';
import IntroShaders from '@/pages/shader/Intro_Shader.vue';

import LesRenderings from '@/pages/rendering/A_RenderingIndex.vue';
import IntroRendering from '@/pages/rendering/B_Intro_Rendering.vue';
import Override from '@/pages/rendering/RenderingOveride.vue';

import LesObjet3D from '@/pages/objet3D/A_Objet3DIndex.vue';
import IntroObjet3D from '@/pages/objet3D/B_Intro_Objet3D.vue';

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
            path: '/rendering',
            name: 'LesRenderings',
            component: LesRenderings,
            children: [
                {
                    path: '',
                    name: 'IntroRendering',
                    component: IntroRendering,
                },
                {
                    path: 'override',
                    name: 'override',
                    component: Override,
                }
            ]
        },
    ]
});



export default router;
