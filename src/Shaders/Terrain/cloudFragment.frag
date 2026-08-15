uniform sampler2D uTexture;
uniform float uTime;

// varying float vNoise;
varying vec2 vUv;

void main(){
    vec2 cloudUv = vUv;
     cloudUv.x *=2.5;
    cloudUv.y *=2.5;
    cloudUv.y += uTime * 0.1;

    //cloud
    float cloud = texture2D(uTexture,cloudUv).r;

    cloud *= smoothstep(0.0,0.1,vUv.x);
    cloud *= smoothstep(1.0,0.9,vUv.x);
    cloud *= smoothstep(0.0,0.1,vUv.y);
    cloud *= smoothstep(1.0,0.9,vUv.y);

    // cloud*= 1.1;

    csm_FragColor = vec4(1.0,1.0,1.0,cloud);
    // csm_FragColor = vec4(vec3(cloud),1.0);
}
