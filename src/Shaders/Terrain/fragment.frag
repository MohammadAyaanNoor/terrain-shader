uniform vec3 uColorWaterDeep;
uniform vec3 uColorWaterSurface;
uniform vec3 uColorSand;
uniform vec3 uColorGrass;
uniform vec3 uColorSnow;
uniform vec3 uColorRock;

varying vec3 vPosition;
varying float vUpDot;
#include ./includes/simplexNoise2d.vert
void main(){
    //color
    vec3 color = vec3(1.0);

    //Water
    float surfaceWaterMix = smoothstep(-1.0,-0.1, vPosition.y);
    color = mix(uColorWaterDeep, uColorWaterSurface, surfaceWaterMix);
    
    //Sand
    float sandMix = step(-0.1, vPosition.y);
    color = mix(color, uColorSand, sandMix);

    //Grass
    float grassMix = step(-0.06, vPosition.y);
    color = mix(color, uColorGrass, grassMix);

    //Rock
    float rockMix = vUpDot;
    rockMix = 1.0 - step(0.8, rockMix);
    rockMix *= step(-0.06, vPosition.y);
    color = mix(color, uColorRock, rockMix); 

    //Snow
    float snowThreshold = 0.45;
    snowThreshold += simplexNoise(vPosition.xz * 15.0) * 0.1;
    float snowMix = step(snowThreshold, vPosition.y);
    color = mix(color, uColorSnow, snowMix);

    // float grassMix = smoothstep(0.0,0.5, vPosition.y);
    // float rockMix = smoothstep(0.1,0.5, vPosition.y);
    // float snowMix = smoothstep(0.5,1.0, vPosition.y);

    // color = mix(color, uColorGrass, grassMix);
    // color = mix(color, uColorRock, rockMix);
    // color = mix(color, uColorSnow, snowMix);


    csm_DiffuseColor = vec4(color,1.0);
}