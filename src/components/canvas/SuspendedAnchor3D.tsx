"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function SuspendedPhysicalUnit() {
  const groupRef = useRef<THREE.Group>(null);
  const lanyardMeshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Physics state (Spring-damper pendulum)
  const pos = useRef(new THREE.Vector3(0, 0, 0));
  const vel = useRef(new THREE.Vector3(0, 0, 0));
  const rot = useRef(new THREE.Vector3(0, 0, 0));

  const isDragging = useRef(false);
  const mousePlanePos = useRef(new THREE.Vector3(0, 0, 0));
  const [hovered, setHovered] = useState(false);

  // Top anchor point (fixed)
  const anchor = useMemo(() => new THREE.Vector3(0, 2.8, 0), []);

  // Geometric assets
  const geometries = useMemo(() => {
    return {
      outerBarrel: new THREE.CylinderGeometry(1.4, 1.45, 0.6, 40),
      innerRing: new THREE.TorusGeometry(1.35, 0.06, 16, 48),
      lensGlass: new THREE.SphereGeometry(1.15, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35),
      coreDie: new THREE.BoxGeometry(0.85, 0.85, 0.2),
      blade: new THREE.BoxGeometry(0.15, 0.6, 0.02),
      hexLug: new THREE.CylinderGeometry(0.08, 0.08, 0.25, 6),
      topHook: new THREE.TorusGeometry(0.2, 0.04, 16, 32)
    };
  }, []);

  // Pointer event handlers for tugging / swinging
  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    isDragging.current = true;
  };

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePlanePos.current.set(x * (viewport.width / 2), y * (viewport.height / 2) - 0.2, 0);
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [viewport]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const dt = Math.min(delta, 0.033);

    // Physics Simulation (Spring-Damper towards resting or mouse position)
    const target = isDragging.current
      ? mousePlanePos.current
      : new THREE.Vector3(
          Math.sin(t * 0.8) * 0.12,
          -0.2 + Math.cos(t * 1.2) * 0.05,
          Math.sin(t * 0.6) * 0.08
        );

    // Spring forces
    const k = isDragging.current ? 38 : 12; // stiffness
    const d = 4.5; // damping

    const forceX = -k * (pos.current.x - target.x) - d * vel.current.x;
    const forceY = -k * (pos.current.y - target.y) - d * vel.current.y;
    const forceZ = -k * (pos.current.z - target.z) - d * vel.current.z;

    vel.current.x += forceX * dt;
    vel.current.y += forceY * dt;
    vel.current.z += forceZ * dt;

    pos.current.x += vel.current.x * dt;
    pos.current.y += vel.current.y * dt;
    pos.current.z += vel.current.z * dt;

    // Angular swing rotation
    const swingX = (pos.current.y - anchor.y) * 0.15;
    const swingZ = -pos.current.x * 0.45;
    const idleSpin = t * 0.25;

    rot.current.x += (swingX - rot.current.x) * 0.1;
    rot.current.z += (swingZ - rot.current.z) * 0.1;
    rot.current.y = idleSpin + (pos.current.x * 0.5);

    if (groupRef.current) {
      groupRef.current.position.copy(pos.current);
      groupRef.current.rotation.set(rot.current.x, rot.current.y, rot.current.z);
    }

    // Update 3D lanyard cable cylinder orientation & length
    if (lanyardMeshRef.current) {
      const start = anchor;
      const end = new THREE.Vector3(pos.current.x, pos.current.y + 0.38, pos.current.z);
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const distance = Math.max(0.1, start.distanceTo(end));

      lanyardMeshRef.current.position.copy(mid);
      lanyardMeshRef.current.scale.set(1, distance, 1);
      lanyardMeshRef.current.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3().subVectors(end, start).normalize()
      );
    }
  });

  return (
    <>
      {/* Top Anchor Mount */}
      <mesh position={[anchor.x, anchor.y, anchor.z]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.1, 16]} />
        <meshStandardMaterial color="#1F2833" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Physics Lanyard 3D Cable */}
      <mesh ref={lanyardMeshRef}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshStandardMaterial
          color="#66FCF1"
          emissive="#66FCF1"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Suspended Aperture & Tensor Core Unit */}
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={handlePointerDown}
      >
        {/* Top Suspension Hook */}
        <mesh
          geometry={geometries.topHook}
          position={[0, 0.38, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#66FCF1" metalness={0.95} roughness={0.2} />
        </mesh>

        {/* Heavy Dark-Metal Outer Aperture Barrel */}
        <mesh
          geometry={geometries.outerBarrel}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#141A22"
            metalness={0.92}
            roughness={0.25}
          />
        </mesh>

        {/* Outer Electric Cyan Chamfer Ring */}
        <mesh geometry={geometries.innerRing} position={[0, 0, 0.3]}>
          <meshStandardMaterial
            color={hovered ? "#66FCF1" : "#45A29E"}
            metalness={0.95}
            roughness={0.15}
            emissive="#66FCF1"
            emissiveIntensity={hovered ? 0.8 : 0.3}
          />
        </mesh>

        {/* Stepped Aperture Iris Blades (8 Blades) */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <mesh
              key={i}
              geometry={geometries.blade}
              position={[Math.cos(angle) * 0.55, Math.sin(angle) * 0.55, 0.1]}
              rotation={[0, 0, angle + 0.65]}
            >
              <meshStandardMaterial color="#0B0C10" metalness={0.9} roughness={0.35} />
            </mesh>
          );
        })}

        {/* Central Glowing AI Tensor Die */}
        <mesh geometry={geometries.coreDie} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#0B0C10"
            emissive="#66FCF1"
            emissiveIntensity={hovered ? 2.8 : 1.6}
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Sapphire Front Lens Glass */}
        <mesh
          geometry={geometries.lensGlass}
          position={[0, 0, 0.22]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshPhysicalMaterial
            color="#1F2833"
            transmission={0.88}
            opacity={0.95}
            transparent
            roughness={0.08}
            ior={1.65}
            reflectivity={0.9}
          />
        </mesh>

        {/* Perimeter Hex Bolts */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <mesh
              key={i}
              geometry={geometries.hexLug}
              position={[Math.cos(angle) * 1.25, Math.sin(angle) * 1.25, 0.25]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshStandardMaterial color="#45A29E" metalness={0.95} roughness={0.2} />
            </mesh>
          );
        })}
      </group>
    </>
  );
}

export function SuspendedAnchor3D() {
  return (
    <div className="w-full h-80 sm:h-96 md:h-[460px] relative select-none cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="!w-full !h-full"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 6, 5]} intensity={1.8} color="#FFFFFF" />
        <directionalLight position={[-5, -4, -3]} intensity={1.2} color="#66FCF1" />
        <pointLight position={[0, 0, 3]} intensity={2.2} color="#66FCF1" />

        <SuspendedPhysicalUnit />
      </Canvas>

      {/* Subtle Hint */}
      <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none">
        <span className="font-data text-[10px] uppercase tracking-widest text-cyan/70 bg-obsidian/80 px-3 py-1 rounded-full border border-cyan/20">
          ✦ Tug / Drag Aperture Tensor Core
        </span>
      </div>
    </div>
  );
}
