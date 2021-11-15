//scene where we will render our objects
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
//then we need camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
    0.1,1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const light = new THREE.DirectionalLight( 0x040404, 0.5 );
    const geometry = new THREE.BoxGeometry(2,2,2);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    //mesh create the cube which takes the shape and the color
    const cube = new THREE.Mesh(geometry,material);
    scene.add(cube);
    light.position.set(3,3,3);
    light.position.multiplyScalar(1.5);
    light.castShadow=true;
    scene.add(light);
    camera.position.z=5;
    
    document.addEventListener('keydown', function(e) {
        
        if (e.keyCode == '38') {
            cube.rotation.x +=5;
        }
        else if (code == '40') {
            // Down
        }
        else if (code == '37') {
           // Left
        }
        else if (code == '39') {
           // Right
        }
    })
    
    
    
    function animate (){
        requestAnimationFrame(animate);
        cube.rotation.x +=0.02;
        cube.rotation.y +=0.02;
        renderer.render(scene,camera);
    }

    

    animate();
    