#include ./includes/simplexNoise2d.vert
#include ./includes/simplexNoise3d.vert

uniform sampler2D uTexture;
uniform float uTime;

varying vec2 vUv;


void main(){
    vec2 newUv = uv;
    // float twistPerlin = texture(uTexture,newUv * 4.0).r;

    //wave
    // float wave = (sin(twistPerlin * 15.0 + uTime * 0.2) * 0.5 + 0.5) * 0.5;

    // csm_Position.y += twistPerlin * wave;

    vUv = newUv;
}
