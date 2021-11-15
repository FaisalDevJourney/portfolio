//scene where we will render our objects
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
const container = document.getElementsByClassName("firstcontainer");
//then we need camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
    0.1,1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const light = new THREE.DirectionalLight( 0x040404, 0.5 );
    const geometry = new THREE.BoxGeometry(2,2,2);
    const material = new THREE.MeshBasicMaterial({color: 0x00fff0});
    const landgeo = new THREE.BoxGeometry(20,0,20);
    const landMaterial = new THREE.MeshBasicMaterial({color:0xffffff});
    const land = new THREE.Mesh(landgeo,landMaterial);
    //mesh create the cube which takes the shape and the color
    const cube = new THREE.Mesh(geometry,material);
    land.position.x=0;
    land.position.y=-1;
    land.position.z=0;
    cube.position.x=0;
    cube.position.z=0;
    cube.position.y=0;
    scene.add(cube);
    scene.add(land);
    light.position.set(3,3,3);
    light.position.multiplyScalar(1.5);
    light.castShadow=true;
    scene.add(light);
    camera.position.z=10;
    camera.position.y=6;
    camera.rotation.x=-0.6;
    
    document.addEventListener('keydown', function(e) {
        
        if (e.keyCode == '38') {
            cube.position.z -=0.1;
            cube.rotation.x -=0.1;
        }
        else if (e.keyCode == '40') {
            cube.position.z +=0.1;
            cube.rotation.x +=0.1;
        }
        else if (e.keyCode == '37') {
            cube.position.x -=0.1;
            cube.rotation.z +=0.1;
        }
        else if (e.keyCode == '39') {
            cube.position.x +=0.1;
            cube.rotation.z -=0.1;
        }
    })
    

    function onMouseMove( event ) {

        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
    
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        cube.position.x=mouse.x;
    }

    if(cube.position.x > 20){
        cube.position.x =0;
    }
    
    function animate (){
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
    }

    

    animate();
    