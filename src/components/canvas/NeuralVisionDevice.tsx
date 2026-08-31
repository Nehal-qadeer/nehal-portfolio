"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSandboxStore } from "@/hooks/useSandboxStore";

interface DeviceProps {
  pointer: { x: number; y: number };
}

export function NeuralVisionDevice({ pointer }: DeviceProps) {
  const {
    explosionProgress,
    renderMode,
    activeComponent,
    theme,
    laserScanActive,
    autoRotate
  } = useSandboxStore();

  const mainGroup = useRef<THREE.Group>(null);
  const opticsGroup = useRef<THREE.Group>(null);
  const finsGroup = useRef<THREE.Group>(null);
  const coreGroup = useRef<THREE.Group>(null);
  const chassisGroup = useRef<THREE.Group>(null);
  const laserPlaneRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const isLight = theme === "light";
  const isXRay = renderMode === "xray";
  const isLidar = renderMode === "lidar";

  // Color definitions based on theme and mode
  const colors = useMemo(() => {
    if (isXRay) {
      return {
        metal: isLight ? "#2563EB" : "#38BDF8",
        accent: "#F59E0B",
        glow: isLight ? "#1D4ED8" : "#6FE3D9",
        glass: "#38BDF8",
        wireframe: true,
        opacity: 0.75
      };
    }
    return {
      metal: isLight ? "#CBD5E1" : "#1E293B",
      metalTrim: isLight ? "#94A3B8" : "#334155",
      titanium: isLight ? "#64748B" : "#0F172A",
      gold: "#E8A33D",
      copper: "#C2410C",
      accent: isLight ? "#D97706" : "#E8A33D",
      laser: isLight ? "#0D9488" : "#6FE3D9",
      glass: isLight ? "#E0F2FE" : "#0284C7",
      wireframe: false,
      opacity: 1
    };
  }, [isLight, isXRay]);

  // Geometries
  const geometries = useMemo(() => {
    return {
      lensBarrel: new THREE.CylinderGeometry(0.85, 0.95, 0.7, 32),
      lensGlass: new THREE.SphereGeometry(0.78, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.4),
      lensRing: new THREE.TorusGeometry(0.92, 0.06, 16, 48),
      apertureBlade: new THREE.BoxGeometry(0.12, 0.45, 0.02),
      chassisRing: new THREE.TorusGeometry(1.6, 0.08, 16, 64),
      chassisGimbal: new THREE.TorusGeometry(2.1, 0.05, 16, 64),
      coreBox: new THREE.BoxGeometry(1.2, 1.2, 0.25),
      dieBox: new THREE.BoxGeometry(0.7, 0.7, 0.08),
      fin: new THREE.BoxGeometry(0.06, 0.8, 1.1),
      hexScrew: new THREE.CylinderGeometry(0.06, 0.06, 0.1, 6),
      laserPlane: new THREE.PlaneGeometry(5, 5)
    };
  }, []);

  // 3D LiDAR Point Cloud Particle Geometry
  const lidarPoints = useMemo(() => {
    const count = 1400;
    const positions = new Float32Array(count * 3);
    const colorsArr = new Float32Array(count * 3);
    const c1 = new THREE.Color(isLight ? "#2563EB" : "#6FE3D9");
    const c2 = new THREE.Color(isLight ? "#D97706" : "#E8A33D");

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 0.9 + Math.pow(Math.random(), 2) * 2.6;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mixed = c1.clone().lerp(c2, Math.sin(r * 2) * 0.5 + 0.5);
      colorsArr[i * 3] = mixed.r;
      colorsArr[i * 3 + 1] = mixed.g;
      colorsArr[i * 3 + 2] = mixed.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colorsArr, 3));
    return geo;
  }, [isLight]);

  // Frame animation loop
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (mainGroup.current) {
      // Gentle auto-rotation or mouse-guided orientation
      if (autoRotate) {
        mainGroup.current.rotation.y += delta * 0.25;
        mainGroup.current.rotation.x = Math.sin(t * 0.5) * 0.08;
      }

      // Cursor parallax tilt
      const targetTiltX = pointer.y * 0.45;
      const targetTiltY = pointer.x * 0.55;
      mainGroup.current.rotation.x += (targetTiltX - mainGroup.current.rotation.x) * 0.05;
      mainGroup.current.rotation.y += (targetTiltY - mainGroup.current.rotation.y) * 0.03;
    }

    // Exploded view displacements along respective axes
    const p = explosionProgress;

    // 1. Optics moves forward (+Z) and twists slightly
    if (opticsGroup.current) {
      opticsGroup.current.position.z = 0.6 + p * 2.8;
      opticsGroup.current.rotation.z = p * 0.4;
    }

    // 2. Heat sink fins expand radially outward (X & Y)
    if (finsGroup.current) {
      const finScale = 1 + p * 0.85;
      finsGroup.current.scale.set(finScale, finScale, 1 + p * 0.2);
      finsGroup.current.position.z = 0.1 - p * 0.3;
    }

    // 3. Neural silicon core floats in place / highlights
    if (coreGroup.current) {
      coreGroup.current.position.z = -0.3 - p * 0.8;
      coreGroup.current.rotation.y = Math.sin(t * 1.5) * (0.05 + p * 0.1);
    }

    // 4. Chassis frame displaces rearward (-Z)
    if (chassisGroup.current) {
      chassisGroup.current.position.z = -0.7 - p * 2.6;
      chassisGroup.current.rotation.z = -p * 0.3;
    }

    // 5. Laser plane sweep oscillation
    if (laserPlaneRef.current && laserScanActive) {
      laserPlaneRef.current.position.y = Math.sin(t * 2.2) * 2.4;
      laserPlaneRef.current.rotation.x = Math.PI / 2 + Math.cos(t * 1.1) * 0.1;
    }

    // 6. Point cloud particle pulse
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -t * 0.15;
    }
  });

  return (
    <group ref={mainGroup} dispose={null}>
      {/* ========================================================================= */}
      {/* 1. FRONT OPTICAL ASSEMBLY (Displaces +Z) */}
      {/* ========================================================================= */}
      <group
        ref={opticsGroup}
        position={[0, 0, 0.6]}
      >
        {/* Main Lens Barrel */}
        <mesh geometry={geometries.lensBarrel} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color={activeComponent === "optics" ? colors.gold : colors.metal}
            metalness={0.88}
            roughness={0.22}
            wireframe={isXRay}
          />
        </mesh>

        {/* Anodized Gold Retention Ring */}
        <mesh geometry={geometries.lensRing} position={[0, 0, 0.36]}>
          <meshStandardMaterial
            color={colors.gold}
            metalness={0.95}
            roughness={0.15}
            wireframe={isXRay}
          />
        </mesh>

        {/* Front Sapphire Coated Glass Element */}
        <mesh
          geometry={geometries.lensGlass}
          position={[0, 0, 0.32]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshPhysicalMaterial
            color={colors.glass}
            transmission={isXRay ? 0 : 0.85}
            opacity={isXRay ? 0.4 : 0.9}
            transparent
            roughness={0.05}
            ior={1.62}
            reflectivity={0.9}
            wireframe={isXRay}
          />
        </mesh>

        {/* Internal 8-Blade Optical Aperture Iris */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <mesh
              key={i}
              geometry={geometries.apertureBlade}
              position={[Math.cos(angle) * 0.35, Math.sin(angle) * 0.35, 0.1]}
              rotation={[0, 0, angle + 0.6 + explosionProgress * 0.4]}
            >
              <meshStandardMaterial
                color={isLight ? "#475569" : "#0F172A"}
                metalness={0.9}
                roughness={0.3}
                wireframe={isXRay}
              />
            </mesh>
          );
        })}
      </group>

      {/* ========================================================================= */}
      {/* 2. RADIAL CRYO-RADIATOR FIN MATRIX (Expands Outward X/Y) */}
      {/* ========================================================================= */}
      <group ref={finsGroup} position={[0, 0, 0.1]}>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 1.15;
          return (
            <group
              key={i}
              position={[Math.cos(angle) * r, Math.sin(angle) * r, 0]}
              rotation={[0, 0, angle]}
            >
              <mesh geometry={geometries.fin}>
                <meshStandardMaterial
                  color={activeComponent === "radiator" ? colors.gold : colors.metalTrim}
                  metalness={0.82}
                  roughness={0.3}
                  wireframe={isXRay}
                />
              </mesh>
              <mesh geometry={geometries.hexScrew} position={[0, 0.35, 0.45]}>
                <meshStandardMaterial
                  color={colors.gold}
                  metalness={0.95}
                  roughness={0.2}
                  wireframe={isXRay}
                />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* ========================================================================= */}
      {/* 3. NEURAL TPU SILICON DIE & COMPUTE CORE (Center Stage) */}
      {/* ========================================================================= */}
      <group ref={coreGroup} position={[0, 0, -0.3]}>
        {/* Copper Substrate Base */}
        <mesh geometry={geometries.coreBox}>
          <meshStandardMaterial
            color={activeComponent === "core" ? colors.gold : colors.copper}
            metalness={0.85}
            roughness={0.35}
            wireframe={isXRay}
          />
        </mesh>

        {/* Central Neural TPU Silicon Chip Die */}
        <mesh geometry={geometries.dieBox} position={[0, 0, 0.15]}>
          <meshStandardMaterial
            color={isLight ? "#0F172A" : "#050B14"}
            emissive={isLight ? "#2563EB" : "#6FE3D9"}
            emissiveIntensity={activeComponent === "core" ? 2.5 : 1.2}
            metalness={0.98}
            roughness={0.1}
            wireframe={isXRay}
          />
        </mesh>

        {/* Gold Bonding Contacts (4 Corners) */}
        {([
          [-0.45, -0.45],
          [0.45, -0.45],
          [-0.45, 0.45],
          [0.45, 0.45]
        ] as const).map(([cx, cy], i) => (
          <mesh key={i} position={[cx, cy, 0.13]}>
            <boxGeometry args={[0.16, 0.16, 0.04]} />
            <meshStandardMaterial
              color={colors.gold}
              metalness={0.98}
              roughness={0.15}
            />
          </mesh>
        ))}
      </group>

      {/* ========================================================================= */}
      {/* 4. TITANIUM EXOSKELETON & TELEMETRY GIMBAL (Displaces -Z) */}
      {/* ========================================================================= */}
      <group ref={chassisGroup} position={[0, 0, -0.7]}>
        <mesh geometry={geometries.chassisRing}>
          <meshStandardMaterial
            color={activeComponent === "chassis" ? colors.gold : colors.titanium}
            metalness={0.9}
            roughness={0.25}
            wireframe={isXRay}
          />
        </mesh>

        <mesh geometry={geometries.chassisGimbal} rotation={[0.4, 0.2, 0]}>
          <meshStandardMaterial
            color={colors.accent}
            metalness={0.95}
            roughness={0.2}
            wireframe={isXRay}
          />
        </mesh>

        {/* Outer Hex Mounting Lugs */}
        {Array.from({ length: 4 }).map((_, i) => {
          const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 1.85, Math.sin(angle) * 1.85, 0]}
              rotation={[0, 0, angle]}
            >
              <cylinderGeometry args={[0.14, 0.14, 0.35, 6]} />
              <meshStandardMaterial
                color={colors.metal}
                metalness={0.88}
                roughness={0.3}
              />
            </mesh>
          );
        })}
      </group>

      {/* ========================================================================= */}
      {/* 5. VOLUMETRIC LIDAR POINT CLOUD */}
      {/* ========================================================================= */}
      {(isLidar || laserScanActive) && (
        <points ref={pointsRef} geometry={lidarPoints}>
          <pointsMaterial
            size={isLight ? 0.035 : 0.045}
            vertexColors
            transparent
            opacity={isLight ? 0.75 : 0.85}
            sizeAttenuation
          />
        </points>
      )}

      {/* ========================================================================= */}
      {/* 6. DYNAMIC LASER SCANNING PLANE */}
      {/* ========================================================================= */}
      {laserScanActive && (
        <mesh
          ref={laserPlaneRef}
          geometry={geometries.laserPlane}
          position={[0, 0, 0]}
        >
          <meshBasicMaterial
            color={colors.laser}
            transparent
            opacity={isLight ? 0.15 : 0.25}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}
