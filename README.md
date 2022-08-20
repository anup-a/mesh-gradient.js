# MeshGradient.js
`mesh-gradient.js` is tiny utility library to generate mesh gradient based on 4 RGB colors, built with vanilla js.

![mesh-610](https://user-images.githubusercontent.com/29516633/185747754-ea673532-c25b-46fc-98a3-6942bf96a547.png)


## Installation!


`npm install mesh-gradient.js` or `yarn add mesh-gradient.js`

## Basic Usage

Vanilla JS

```js
```
React
```jsx
import MeshGradient from 'mesh-gradient.js';
import { useEffect } from 'react';

const COLORS =   ["#eb75b6",
"#ddf3ff",
"#6e3deb",
"#c92f3c"]

function App() {

// create instance of Gradient Class
  const gradient = new MeshGradient();
  const canvasId = "my-canvas"

  useEffect(() => {
    // initialize new gradient
    // @Params
    // 1. id of canvas elememt
    // 2. array of colors in hexcode
    gradient.initGradient("#" + canvasId, COLORS) 
    // Mesh Id 
    // Any positive numeric value which acts as a seed for mesh pattern
    gradient?.changePosition(780); 
  }, [])

  const regenerate = () => {
    const value = Math.floor(Math.random() * 1000)
    // change pattern by changing mesh Id
    gradient?.changePosition(value);
  }

  return (
    <div className="App">
        <canvas id={canvasId} width="800" height="600"/>
        <button onClick={() => regenerate()}> Regenerate </button>
    </div>
  );
}

export default App;
```

Other Useful APIs

```js
// get current gradient colors
gradient.getGradientColors(),

// change gradient colors
gradient.changeGradientColors(newColors);

// force refresh mesh
// Usage - set any property of the Mesh Gradient Object and run this to see the effect
gradient.reGenerateCanvas();
```

Mesh Gradient Model 
```js
{
    isLoadedClass: boolean;
    el: any;
    inputColors: any;
    connect(): Promise<void>;
    shaderFiles: {
        vertex: string;
        noise: string;
        blend: string;
        fragment: string;
    } | undefined;
    conf: {
        presetName: string;
        wireframe: boolean;
        density: number[];
        zoom: number;
        rotation: number;
        playing: boolean;
    } | undefined;
    minigl: MiniGl | undefined;
    disconnect(): void;
    setCanvasSize(width: any, height: any, initial?: boolean): void;
    width: any;
    height: any;
    xSegCount: number | undefined;
    ySegCount: number | undefined;
    initMaterial(): any;
    uniforms: {
        u_time: any;
        u_shadow_power: any;
        u_darken_top: any;
        u_active_colors: any;
        u_global: any;
        u_vertDeform: any;
        u_baseColor: any;
        u_waveLayers: any;
    } | undefined;
    vertexShader: string | undefined;
    initMesh(): void;
    material: any;
    geometry: any;
    mesh: any;
    shouldSkipFrame(e: any): true | undefined;
    updateFrequency(e: any): void;
    toggleColor(index: any): void;
    showGradientLegend(): void;
    isGradientLegendVisible: boolean | undefined;
    hideGradientLegend(): void;
    changePosition(val: any): void;
    t: number | undefined;
    init(): void;
    initGradientColors(): void;
    sectionColors: any;
    changeGradientColors(colors: any): void;
    reGenerateCanvas(): void;
    getGradientColors(): any;
}
```

## Credits

- Stripe - `https://stripe.com`
- kevinhufnagl - `https://kevinhufnagl.com/` 
