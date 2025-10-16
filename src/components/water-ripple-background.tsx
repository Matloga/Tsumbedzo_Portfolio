"use client";

import React, { useRef, useEffect } from 'react';

// Adapted from https://github.com/dli/ripple
export default function WaterRippleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let half_width = width >> 1;
    let half_height = height >> 1;
    let size = width * (height + 2) * 2;
    let delay = 30;
    let oldind = width;
    let newind = width * (height + 3);
    let riprad = 3;

    let ripplemap: number[] = [];
    let last_map: number[] = [];

    let ripple: ImageData;
    let texture: ImageData;

    for (let i = 0; i < size; i++) {
      ripplemap[i] = 0;
      last_map[i] = 0;
    }

    // Pre-render the background image
    const background = new Image();
    background.crossOrigin = "anonymous";
    background.src = "/tsumbedzo-matloga.jpg";
    background.onload = function () {
      if (!ctx) return;
      ctx.drawImage(background, 0, 0, width, height);
      texture = ctx.getImageData(0, 0, width, height);
      ripple = ctx.getImageData(0, 0, width, height);
    };

    function disturb(dx: number, dy: number) {
      dx <<= 0;
      dy <<= 0;

      for (let j = dy - riprad; j < dy + riprad; j++) {
        for (let k = dx - riprad; k < dx + riprad; k++) {
          ripplemap[oldind + j * width + k] += 128;
        }
      }
    }

    function newframe() {
      let i, a, b, x, y, data, cur_pixel, new_pixel;

      let t = oldind;
      oldind = newind;
      newind = t;
      i = 0;
      let mapind = oldind;

      for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
          data =
            (ripplemap[mapind - width] +
              ripplemap[mapind + width] +
              ripplemap[mapind - 1] +
              ripplemap[mapind + 1]) >>
            1;

          data -= ripplemap[newind + i];
          data -= data >> 5;

          ripplemap[newind + i] = data;

          data = 1024 - data;

          old_data = last_map[i];
          last_map[i] = data;

          if (old_data != data) {
            //offsets
            a = (((x - half_width) * data) / 1024) << 0;
            b = (((y - half_height) * data) / 1024) << 0;

            if (a >= width) a = width - 1;
            if (a < 0) a = 0;
            if (b >= height) b = height - 1;
            if (b < 0) b = 0;

            new_pixel = (a + b * width) * 4;
            cur_pixel = i * 4;

            ripple.data[cur_pixel] = texture.data[new_pixel];
            ripple.data[cur_pixel + 1] = texture.data[new_pixel + 1];
            ripple.data[cur_pixel + 2] = texture.data[new_pixel + 2];
          }
          mapind++;
          i++;
        }
      }
    }

    let isRunning = true;
    let old_data: number;
    function run() {
      if (!isRunning) return;
      newframe();
      ctx.putImageData(ripple, 0, 0);
      requestAnimationFrame(run);
    }

    const handleMouseMove = (e: MouseEvent) => {
      disturb(e.offsetX || e.layerX, e.offsetY || e.layerY);
    };

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        half_width = width >> 1;
        half_height = height >> 1;
        size = width * (height + 2) * 2;
        oldind = width;
        newind = width * (height + 3);

        ripplemap = [];
        last_map = [];
        for (let i = 0; i < size; i++) {
            ripplemap[i] = 0;
            last_map[i] = 0;
        }

        if(background.complete && ctx) {
            ctx.drawImage(background, 0, 0, width, height);
            texture = ctx.getImageData(0, 0, width, height);
            ripple = ctx.getImageData(0, 0, width, height);
        }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    run();

    return () => {
      isRunning = false;
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
