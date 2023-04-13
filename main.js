import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { OrbitControls } from 'OrbitControls';


let scene = new THREE.Scene()


// scene.background = new THREE.Color('#000')

let light = new THREE.DirectionalLight(0xFAFAD2,10)
scene.add(light)

let camera = new THREE.PerspectiveCamera(30,1 )
camera.position.set(0,1.3,10)



let renderer = new THREE.WebGLRenderer({  
  canvas : document.querySelector("#canvas"),
  antialias :  true
})
renderer.setSize(800,800 )

renderer.outputEncoding = THREE.sRGBEncoding;

const controls = new OrbitControls( camera, renderer.domElement  );


let loader = new GLTFLoader()
loader.load('scene/scene.gltf', function(cat){
  scene.add(cat.scene)
    
    function animate(){    
      requestAnimationFrame(animate)
      cat.scene.rotation.y += 0.002
      controls.update();
      renderer.render(scene,camera)
    }
    
    animate()
})

controls.update();

