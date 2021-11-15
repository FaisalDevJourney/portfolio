

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
     const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
        0.1,1000
        );
    
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const sunGeometry = new THREE.SphereGeometry( 2, 30, 40 );
    const sunMaterial = new THREE.MeshBasicMaterial({color:0xffff00});
    const sun= new THREE.Mesh(sunGeometry,sunMaterial);
    const earthGeo = new THREE.SphereGeometry( 1, 30, 40 );
    const earthMat = new THREE.MeshBasicMaterial({color:0xffff55});
    const earth = new THREE.Mesh(earthGeo,earthMat);
    camera.position.z=8;
    earth.position.x=4;
    scene.add(sun);
    scene.add(earth);
    const rad = 0.1;
    const axis = new THREE.Vector3(0.5,0,0.5);



function animate(){
    requestAnimationFrame(animate);
    earth.rotateY(Math.PI);
    renderer.render(scene,camera);
}

animate();