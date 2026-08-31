"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ScanObjectProps {
  mouse: { x: number; y: number };
}

export function ScanObject({ mouse }: ScanObjectProps) {
  const group = useRef<THREE.Group>(null);
  const box = useRef<THREE.LineSegments>(null);
  const boxMaterial = useRef<THREE.LineBasicMaterial>(null);

  const icosahedronGeometry = useMemo(() => new THREE.IcosahedronGeometry(1.6, 1), []);
  const wireGeometry = useMemo(() => new THREE.WireframeGeometry(icosahedronGeometry), [icosahedronGeometry]);
  const boxGeometry = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(2.5, 2.5, 2.5)), []);

  const pointsGeometry = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x += delta * 0.03;

      const targetX = mouse.y * 0.25;
      const targetY = mouse.x * 0.35;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.02;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.0; // yaw driven by base spin only
    }

    if (boxMaterial.current) {
      const pulse = 0.35 + Math.sin(state.clock.elapsedTime * 1.4) * 0.15;
      boxMaterial.current.opacity = pulse;
    }
    if (box.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.9) * 0.015;
      box.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={group}>
      <lineSegments geometry={wireGeometry}>
        <lineBasicMaterial color="#8C99AF" transparent opacity={0.55} />
      </lineSegments>

      <lineSegments ref={box} geometry={boxGeometry}>
        <lineBasicMaterial ref={boxMaterial} color="#E8A33D" transparent opacity={0.4} />
      </lineSegments>

      <points geometry={pointsGeometry}>
        <pointsMaterial color="#6FE3D9" size={0.02} transparent opacity={0.5} sizeAttenuation />
      </points>
    </group>
  );
}
