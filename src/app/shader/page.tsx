'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ShaderPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    const observer = new ResizeObserver(syncSize);
    observer.observe(canvas);
    syncSize();

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    // Very subtle, slow-moving white/grey gradient wave for a clean architectural aesthetic
    float wave = sin(uv.x * 3.0 + u_time * 0.3) * 0.03 + sin(uv.y * 4.0 + u_time * 0.2) * 0.03;
    vec3 color = vec3(0.96, 0.97, 0.99) + wave;
    
    gl_FragColor = vec4(color, 1.0);
}`;

    function createShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vShader = createShader(gl.VERTEX_SHADER, vs);
    const fShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vShader || !fShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vShader);
    gl.attachShader(prog, fShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');

    let animId: number;
    function render(t: number) {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    }
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden flex items-center justify-center">
      {/* WebGL Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />

      {/* Foreground Hero Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-border-subtle text-xs font-bold text-primary shadow-xs">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          Realic Architectural Shader Engine
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-montserrat text-primary tracking-tight">
          Smooth Visual Motion & Precision Architecture
        </h1>

        <p className="text-sm sm:text-base text-text-medium-emphasis leading-relaxed">
          Rendered in real-time with high-performance WebGL fragment shaders, reflecting our commitment to cutting-edge digital aesthetics.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            href="/properties"
            className="px-6 py-3 bg-primary hover:bg-secondary text-white font-bold text-xs rounded-xl shadow-md transition-colors"
          >
            Explore Verified Catalog
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-surface-pure hover:bg-surface-container-low text-primary font-bold text-xs rounded-xl border border-border-subtle shadow-xs transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
