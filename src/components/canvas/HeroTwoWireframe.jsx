import { useEffect, useRef } from 'react';
import Two from 'two.js';

export default function HeroTwoWireframe() {
  const containerRef = useRef(null);
  const twoInstanceRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create Two.js instance
    const params = {
      type: Two.Types.canvas,
      autostart: true,
      fitted: true,
    };
    const two = new Two(params).appendTo(container);
    twoInstanceRef.current = two;

    const width = two.width;
    const height = two.height;
    const cx = width / 2;
    const cy = height / 2;

    const mainGroup = two.makeGroup();
    mainGroup.translation.set(cx, cy);

    // Color definitions
    const cyan = '#00F0FF';
    const gold = '#FFB800';
    const coral = '#FF3366';
    const navyMuted = '#1A2440';
    const cyanMuted = 'rgba(0, 240, 255, 0.2)';

    // 1. Central Core Microchip / Turbine Hub
    const coreOuterRing = two.makeCircle(0, 0, 42);
    coreOuterRing.stroke = cyan;
    coreOuterRing.fill = 'transparent';
    coreOuterRing.linewidth = 2;
    mainGroup.add(coreOuterRing);

    const coreInnerOctagon = two.makePolygon(0, 0, 28, 8);
    coreInnerOctagon.stroke = gold;
    coreInnerOctagon.fill = 'rgba(255, 184, 0, 0.08)';
    coreInnerOctagon.linewidth = 1.5;
    mainGroup.add(coreInnerOctagon);

    const centerDot = two.makeCircle(0, 0, 5);
    centerDot.fill = cyan;
    centerDot.noStroke();
    mainGroup.add(centerDot);

    // 2. Middle Ring: Low-Poly Hexagonal Vector Frame with Gear Notches
    const hexRingGroup = two.makeGroup();
    const hexOuter = two.makePolygon(0, 0, 105, 6);
    hexOuter.stroke = cyan;
    hexOuter.fill = 'transparent';
    hexOuter.linewidth = 1.5;
    hexRingGroup.add(hexOuter);

    const hexInner = two.makePolygon(0, 0, 85, 6);
    hexInner.stroke = navyMuted;
    hexInner.fill = 'rgba(0, 240, 255, 0.02)';
    hexInner.linewidth = 1;
    hexRingGroup.add(hexInner);

    // Circuit radial teeth around hexagon
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6;
      const r1 = 95;
      const r2 = 118;
      const x1 = Math.cos(angle) * r1;
      const y1 = Math.sin(angle) * r1;
      const x2 = Math.cos(angle) * r2;
      const y2 = Math.sin(angle) * r2;
      const tooth = two.makeLine(x1, y1, x2, y2);
      tooth.stroke = i % 2 === 0 ? cyan : gold;
      tooth.linewidth = i % 2 === 0 ? 1.5 : 1;
      hexRingGroup.add(tooth);

      const toothTip = two.makeCircle(x2, y2, 2.5);
      toothTip.fill = i % 2 === 0 ? cyan : gold;
      toothTip.noStroke();
      hexRingGroup.add(toothTip);
    }
    mainGroup.add(hexRingGroup);

    // 3. Outer Vector Frame: 12-sided Radar Constellation
    const dodecGroup = two.makeGroup();
    const dodecagon = two.makePolygon(0, 0, 180, 12);
    dodecagon.stroke = cyanMuted;
    dodecagon.fill = 'transparent';
    dodecagon.linewidth = 1;
    dodecGroup.add(dodecagon);

    // Crosshair axis lines
    const axisH = two.makeLine(-230, 0, 230, 0);
    axisH.stroke = 'rgba(0, 240, 255, 0.15)';
    axisH.linewidth = 1;
    dodecGroup.add(axisH);

    const axisV = two.makeLine(0, -230, 0, 230);
    axisV.stroke = 'rgba(0, 240, 255, 0.15)';
    axisV.linewidth = 1;
    dodecGroup.add(axisV);

    // Radar quadrant angle degree ticks
    for (let deg = 0; deg < 360; deg += 30) {
      const rad = (deg * Math.PI) / 180;
      const rOuter = 210;
      const rInner = deg % 90 === 0 ? 195 : 203;
      const tick = two.makeLine(
        Math.cos(rad) * rInner,
        Math.sin(rad) * rInner,
        Math.cos(rad) * rOuter,
        Math.sin(rad) * rOuter
      );
      tick.stroke = deg % 90 === 0 ? gold : 'rgba(0, 240, 255, 0.3)';
      tick.linewidth = deg % 90 === 0 ? 1.5 : 1;
      dodecGroup.add(tick);
    }
    mainGroup.add(dodecGroup);

    // 4. Orbital Vector Nodes & Connector Chords
    const orbitalNodes = [];
    const orbitalGroup = two.makeGroup();
    const nodeCount = 7;
    for (let i = 0; i < nodeCount; i++) {
      const radius = 140 + (i % 3) * 28;
      const initialAngle = (i * 2 * Math.PI) / nodeCount;
      const node = two.makeCircle(0, 0, i === 0 ? 5 : 3.5);
      node.fill = i % 2 === 0 ? cyan : gold;
      node.stroke = '#0B0D17';
      node.linewidth = 1;
      orbitalGroup.add(node);

      orbitalNodes.push({
        element: node,
        radius: radius,
        angle: initialAngle,
        speed: (0.003 + (i % 4) * 0.002) * (i % 2 === 0 ? 1 : -1),
      });
    }

    // Dynamic interconnecting vectors between orbiters
    const connectorLines = [];
    for (let i = 0; i < nodeCount; i++) {
      const line = two.makeLine(0, 0, 0, 0);
      line.stroke = 'rgba(0, 240, 255, 0.25)';
      line.linewidth = 1;
      orbitalGroup.add(line);
      connectorLines.push(line);
    }
    mainGroup.add(orbitalGroup);

    // Mouse Parallax
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 35;
      targetY = (y / rect.height) * 35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    two.bind('update', (frameCount) => {
      // Rotate layers at independent mechanical velocities
      coreInnerOctagon.rotation += 0.008;
      hexRingGroup.rotation -= 0.003;
      dodecGroup.rotation += 0.001;

      // Pulse core dot
      const pulse = 1 + Math.sin(frameCount * 0.06) * 0.2;
      centerDot.scale = pulse;

      // Update orbital nodes positions
      const positions = [];
      orbitalNodes.forEach((nodeObj) => {
        nodeObj.angle += nodeObj.speed;
        const nx = Math.cos(nodeObj.angle) * nodeObj.radius;
        const ny = Math.sin(nodeObj.angle) * nodeObj.radius;
        nodeObj.element.translation.set(nx, ny);
        positions.push({ x: nx, y: ny });
      });

      // Update connector lines between adjacent nodes
      for (let i = 0; i < nodeCount; i++) {
        const nextIdx = (i + 1) % nodeCount;
        const line = connectorLines[i];
        if (line && positions[i] && positions[nextIdx]) {
          line.vertices[0].set(positions[i].x, positions[i].y);
          line.vertices[1].set(positions[nextIdx].x, positions[nextIdx].y);
        }
      }

      // Smooth mouse parallax damping
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      mainGroup.translation.set(two.width / 2 + currentX, two.height / 2 + currentY);
    });

    // Handle Window Resize
    const handleResize = () => {
      if (two && container) {
        two.width = container.clientWidth;
        two.height = container.clientHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      two.unbind('update');
      two.clear();
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[460px] flex items-center justify-center pointer-events-none select-none">
      <div ref={containerRef} className="w-full h-full absolute inset-0 opacity-80" />
      
      {/* Corner Technical Telemetry Markings */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-electric/50 tracking-wider flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-cyan-electric animate-ping" />
        <span>VECTOR HUD // 2D CORE WIREFRAME</span>
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[9px] text-gold-warning/50 tracking-widest uppercase">
        6.6kV TURBINE &bull; FIELD ORIENTED VECTOR
      </div>
    </div>
  );
}
