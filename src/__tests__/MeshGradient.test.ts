import Gradient from '../index';
import 'jest-canvas-mock';
import 'jest-webgl-canvas-mock';

test('create new Mesh Gradient', () => {
  const newCanvas = document.createElement('canvas');
  newCanvas.width = 800;
  newCanvas.height = 600;
  newCanvas.id = 'my-canvas';
  const colors = ['#fff', '#fff', '#fff', '#fff'];
  document.body.appendChild(newCanvas);

  const meshGradient = new Gradient();
  expect(meshGradient).not.toBe(undefined);
  expect(meshGradient.initGradient('#my-canvas', colors)).not.toBe(undefined);
});
