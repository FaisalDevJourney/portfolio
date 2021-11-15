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
    const geometry = new THREE.SphereGeometry(1,10,10);
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
    
    var Keys = {
        up: false,
        down: false,
        left: false,
        right: false
    };
    window.onkeydown = function(e){
        var kc = e.keyCode;
        e.preventDefault();
   
        if(kc === 37) Keys.left = true;
        if(kc === 38) Keys.up = true;
        if(kc === 39) Keys.right = true;
        if(kc === 40) Keys.down = true;
    };
    
    window.onkeyup = function(e){
        var kc = e.keyCode;
        e.preventDefault();
   
        if(kc === 37) Keys.left = false;
        if(kc === 38) Keys.up = false;
        if(kc === 39) Keys.right = false;
        if(kc === 40) Keys.down = false;
   };

   function main() {
    /* body */
  
      move();
    if(cube.position.x > 10){
        cube.position.x =10;
    }else if(cube.position.x < -10){
        cube.position.x = -10;
    }
  };


   function move(){

    if(Keys.up){
        cube.position.z -= 0.1;
    }

    if(Keys.down){
        cube.position.z += 0.1;
    }

    if(Keys.left) {
        cube.position.x -= 0.1;
    }

    if(Keys.right){
        cube.position.x += 0.1;
    }
}   
    

 
    
    function animate (){
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
    }

    setInterval(main, 20);
    animate();
    