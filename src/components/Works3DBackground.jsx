import React, { useEffect, useRef } from 'react';

export default function Works3DBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Floating 3D Cubes
    const cubes = Array.from({ length: 10 }, () => ({
      x: (Math.random() - 0.5) * width * 0.8,
      y: (Math.random() - 0.5) * height * 0.8,
      z: Math.random() * 500 + 100,
      size: Math.random() * 28 + 18,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      rz: Math.random() * Math.PI,
      vx: (Math.random() - 0.5) * 0.012,
      vy: (Math.random() - 0.5) * 0.012,
      vz: (Math.random() - 0.5) * 0.012,
    }));

    const cubeVertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1]
    ];

    const cubeEdges = [
      [0,1], [1,2], [2,3], [3,0],
      [4,5], [5,6], [6,7], [7,4],
      [0,4], [1,5], [2,6], [3,7]
    ];

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 400;

      // Draw 3D Floating Wireframe Cubes
      cubes.forEach((cube) => {
        cube.rx += cube.vx;
        cube.ry += cube.vy;
        cube.rz += cube.vz;

        const cosX = Math.cos(cube.rx);
        const sinX = Math.sin(cube.rx);
        const cosY = Math.cos(cube.ry);
        const sinY = Math.sin(cube.ry);
        const cosZ = Math.cos(cube.rz);
        const sinZ = Math.sin(cube.rz);

        const projectedVertices = cubeVertices.map(([vx, vy, vz]) => {
          let x = vx * cube.size;
          let y = vy * cube.size;
          let z = vz * cube.size;

          let y1 = y * cosX - z * sinX;
          let z1 = y * sinX + z * cosX;

          let x2 = x * cosY - z1 * sinY;
          let z2 = x * sinY + z1 * cosY;

          let x3 = x2 * cosZ - y1 * sinZ;
          let y3 = x2 * sinZ + y1 * cosZ;

          let finalX = x3 + cube.x;
          let finalY = y3 + cube.y + Math.sin(time + cube.z) * 12;
          let finalZ = z2 + cube.z;

          const scale = fov / (fov + finalZ);
          return {
            px: centerX + finalX * scale,
            py: centerY + finalY * scale,
            scale,
          };
        });

        ctx.beginPath();
        cubeEdges.forEach(([i, j]) => {
          const v1 = projectedVertices[i];
          const v2 = projectedVertices[j];
          ctx.moveTo(v1.px, v1.py);
          ctx.lineTo(v2.px, v2.py);
        });

        ctx.strokeStyle = '#000000';
        ctx.globalAlpha = 0.12;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75,
      }}
    />
  );
}
