import Gradient from '../index';

test('create new Mesh Gradient', () => {
  console.log(Gradient)
  const meshGradient = new Gradient();
  expect(meshGradient).not.toBe(undefined);
});
