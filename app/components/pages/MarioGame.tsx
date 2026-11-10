"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Slide } from "@/app/animation/Slide";
import {
  HiVolumeUp,
  HiVolumeOff,
  HiRefresh,
  HiPlay,
  HiPause,
} from "react-icons/hi";

// Web Audio sound generator for retro 8-bit sound effects (no external files needed)
class RetroAudio {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  jump() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(580, now + 0.14);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } catch {
      // AudioContext policy
    }
  }

  coin() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
    } catch {}
  }

  stomp() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch {}
  }

  gameOver() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [440, 415, 392, 349];
      notes.forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = "triangle";
        const t = now + i * 0.12;
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.11);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(t);
        osc.stop(t + 0.12);
      });
    } catch {}
  }
}

const audio = new RetroAudio();

interface Block {
  x: number;
  y: number;
  w: number;
  h: number;
  type: "question" | "brick" | "pipe";
  hit?: boolean;
  coinSpawned?: boolean;
}

interface Goomba {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  alive: boolean;
  squashTime?: number;
}

interface FloatingCoin {
  x: number;
  y: number;
  vy: number;
  life: number;
}

export default function MarioGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  // Game state stored in refs to prevent closure stale state in animation loop
  const stateRef = useRef({
    mario: {
      x: 60,
      y: 200,
      w: 24,
      h: 32,
      vx: 0,
      vy: 0,
      speed: 3.5,
      jumpForce: -9.5,
      grounded: false,
      facing: "right" as "left" | "right",
      animFrame: 0,
    },
    cameraX: 0,
    gravity: 0.48,
    keys: {
      left: false,
      right: false,
      jump: false,
    },
    blocks: [] as Block[],
    goombas: [] as Goomba[],
    floatingCoins: [] as FloatingCoin[],
    score: 0,
    coins: 0,
    lives: 3,
    gameOver: false,
    worldWidth: 2600,
  });

  const resetGame = useCallback(() => {
    const s = stateRef.current;
    s.mario.x = 60;
    s.mario.y = 180;
    s.mario.vx = 0;
    s.mario.vy = 0;
    s.mario.grounded = false;
    s.cameraX = 0;
    s.score = 0;
    s.coins = 0;
    s.lives = 3;
    s.gameOver = false;
    setScore(0);
    setCoins(0);
    setLives(3);
    setGameOver(false);

    // Initial level design: pipes, question blocks, bricks
    s.blocks = [
      // Ground handled separately at y = 240
      // Section 1: Question and brick blocks
      { x: 180, y: 155, w: 26, h: 26, type: "question" },
      { x: 230, y: 155, w: 26, h: 26, type: "brick" },
      { x: 256, y: 155, w: 26, h: 26, type: "question" },
      { x: 282, y: 155, w: 26, h: 26, type: "brick" },
      { x: 256, y: 85, w: 26, h: 26, type: "question" }, // High coin block

      // Green pipe 1
      { x: 380, y: 185, w: 46, h: 55, type: "pipe" },

      // Section 2
      { x: 500, y: 155, w: 26, h: 26, type: "question" },
      { x: 580, y: 165, w: 46, h: 75, type: "pipe" },

      // High platform of bricks
      { x: 720, y: 140, w: 26, h: 26, type: "brick" },
      { x: 746, y: 140, w: 26, h: 26, type: "question" },
      { x: 772, y: 140, w: 26, h: 26, type: "brick" },
      { x: 798, y: 140, w: 26, h: 26, type: "question" },

      // Green pipe 3
      { x: 920, y: 175, w: 46, h: 65, type: "pipe" },

      // Section 3: Castle stairs / stepping blocks
      { x: 1100, y: 214, w: 26, h: 26, type: "brick" },
      { x: 1126, y: 188, w: 26, h: 52, type: "brick" },
      { x: 1152, y: 162, w: 26, h: 78, type: "brick" },
      { x: 1178, y: 136, w: 26, h: 104, type: "brick" },
      { x: 1260, y: 136, w: 26, h: 26, type: "question" },
      { x: 1320, y: 175, w: 46, h: 65, type: "pipe" },

      // Section 4
      { x: 1500, y: 155, w: 26, h: 26, type: "question" },
      { x: 1540, y: 155, w: 26, h: 26, type: "question" },
      { x: 1680, y: 185, w: 46, h: 55, type: "pipe" },
    ];

    s.goombas = [
      { x: 300, y: 216, w: 24, h: 24, vx: -1.2, alive: true },
      { x: 470, y: 216, w: 24, h: 24, vx: -1.2, alive: true },
      { x: 670, y: 216, w: 24, h: 24, vx: -1.3, alive: true },
      { x: 860, y: 216, w: 24, h: 24, vx: -1.2, alive: true },
      { x: 1030, y: 216, w: 24, h: 24, vx: -1.4, alive: true },
      { x: 1420, y: 216, w: 24, h: 24, vx: -1.3, alive: true },
      { x: 1600, y: 216, w: 24, h: 24, vx: -1.5, alive: true },
    ];

    s.floatingCoins = [];
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("mario_high_score");
    if (saved) setHighScore(parseInt(saved, 10));
    resetGame();
  }, [resetGame]);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    audio.enabled = next;
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = stateRef.current.keys;
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        keys.left = true;
      }
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        keys.right = true;
      }
      if (
        e.code === "ArrowUp" ||
        e.code === "KeyW" ||
        e.code === "Space"
      ) {
        if (!keys.jump && stateRef.current.mario.grounded) {
          keys.jump = true;
          stateRef.current.mario.vy = stateRef.current.mario.jumpForce;
          stateRef.current.mario.grounded = false;
          audio.jump();
        }
        if (e.code === "Space") e.preventDefault();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const keys = stateRef.current.keys;
      if (e.code === "ArrowLeft" || e.code === "KeyA") keys.left = false;
      if (e.code === "ArrowRight" || e.code === "KeyD") keys.right = false;
      if (e.code === "ArrowUp" || e.code === "KeyW" || e.code === "Space") {
        keys.jump = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Main Canvas Render & Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const groundY = 240;

    const gameLoop = () => {
      const s = stateRef.current;
      const m = s.mario;

      if (isPlaying && !s.gameOver) {
        // Horizontal Movement
        if (s.keys.left) {
          m.vx = -m.speed;
          m.facing = "left";
          m.animFrame += 0.2;
        } else if (s.keys.right) {
          m.vx = m.speed;
          m.facing = "right";
          m.animFrame += 0.2;
        } else {
          m.vx *= 0.75;
          if (Math.abs(m.vx) < 0.2) m.vx = 0;
        }

        // Gravity
        m.vy += s.gravity;
        if (m.vy > 12) m.vy = 12;

        m.x += m.vx;

        // Wall bounds
        if (m.x < 10) m.x = 10;
        if (m.x > s.worldWidth - 50) m.x = s.worldWidth - 50;

        // Horizontal Block Collisions
        for (const b of s.blocks) {
          if (
            m.x + m.w > b.x &&
            m.x < b.x + b.w &&
            m.y + m.h > b.y &&
            m.y < b.y + b.h
          ) {
            if (m.vx > 0) m.x = b.x - m.w;
            else if (m.vx < 0) m.x = b.x + b.w;
          }
        }

        // Vertical Movement
        m.y += m.vy;
        m.grounded = false;

        // Ground Collision
        if (m.y + m.h >= groundY) {
          m.y = groundY - m.h;
          m.vy = 0;
          m.grounded = true;
        }

        // Vertical Block Collisions
        for (const b of s.blocks) {
          if (
            m.x + m.w > b.x + 4 &&
            m.x < b.x + b.w - 4 &&
            m.y + m.h >= b.y &&
            m.y <= b.y + b.h
          ) {
            // Landing on top of block
            if (m.vy > 0 && m.y + m.h - m.vy <= b.y + 10) {
              m.y = b.y - m.h;
              m.vy = 0;
              m.grounded = true;
            }
            // Hitting block from underneath
            else if (m.vy < 0 && m.y - m.vy >= b.y + b.h - 10) {
              m.y = b.y + b.h;
              m.vy = 1;
              if (b.type === "question" && !b.hit) {
                b.hit = true;
                s.score += 200;
                s.coins += 1;
                setScore(s.score);
                setCoins(s.coins);
                audio.coin();
                s.floatingCoins.push({
                  x: b.x + 8,
                  y: b.y - 12,
                  vy: -4,
                  life: 25,
                });
              } else if (b.type === "brick") {
                s.score += 50;
                setScore(s.score);
              }
            }
          }
        }

        // Update Camera
        const targetCamX = m.x - 180;
        if (targetCamX > s.cameraX) {
          s.cameraX += (targetCamX - s.cameraX) * 0.15;
        }

        // Update Floating Coins
        for (let i = s.floatingCoins.length - 1; i >= 0; i--) {
          const fc = s.floatingCoins[i];
          fc.y += fc.vy;
          fc.vy += 0.25;
          fc.life--;
          if (fc.life <= 0) {
            s.floatingCoins.splice(i, 1);
          }
        }

        // Update Goombas
        for (const g of s.goombas) {
          if (!g.alive) continue;
          g.x += g.vx;

          // Turn around on block collision
          for (const b of s.blocks) {
            if (
              g.x + g.w > b.x &&
              g.x < b.x + b.w &&
              g.y + g.h > b.y &&
              g.y < b.y + b.h
            ) {
              g.vx *= -1;
            }
          }

          // Mario vs Goomba Collision
          if (
            m.x + m.w > g.x &&
            m.x < g.x + g.w &&
            m.y + m.h > g.y &&
            m.y < g.y + g.h
          ) {
            // Jump stomp from above
            if (m.vy > 0 && m.y + m.h - m.vy <= g.y + 12) {
              g.alive = false;
              m.vy = -6; // Little bounce
              s.score += 300;
              setScore(s.score);
              audio.stomp();
            } else {
              // Hurt Mario
              s.lives -= 1;
              setLives(s.lives);
              audio.gameOver();
              if (s.lives <= 0) {
                s.gameOver = true;
                setGameOver(true);
                setIsPlaying(false);
                if (s.score > highScore) {
                  setHighScore(s.score);
                  localStorage.setItem("mario_high_score", s.score.toString());
                }
              } else {
                // Respawn slightly back
                m.x = Math.max(20, m.x - 80);
                m.y = 150;
                m.vx = 0;
                m.vy = 0;
              }
            }
          }
        }
      }

      // DRAWING
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sky Background
      const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      skyGrad.addColorStop(0, "#5c94fc");
      skyGrad.addColorStop(1, "#94baff");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(-s.cameraX, 0);

      // Background Clouds (Parallax)
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      for (let i = 0; i < 15; i++) {
        const cx = i * 240 + 40;
        ctx.beginPath();
        ctx.arc(cx, 50, 18, 0, Math.PI * 2);
        ctx.arc(cx + 18, 45, 22, 0, Math.PI * 2);
        ctx.arc(cx + 36, 50, 18, 0, Math.PI * 2);
        ctx.fill();
      }

      // Background Hills / Bushes
      for (let i = 0; i < 10; i++) {
        const hx = i * 360 + 60;
        ctx.fillStyle = "#00a800";
        ctx.beginPath();
        ctx.arc(hx, 240, 45, Math.PI, 0);
        ctx.fill();
      }

      // Ground (Striped retro Mario style)
      ctx.fillStyle = "#c84c0c";
      ctx.fillRect(0, groundY, s.worldWidth, 60);
      ctx.fillStyle = "#00a800";
      ctx.fillRect(0, groundY, s.worldWidth, 8); // Green grass strip

      // Draw Blocks
      for (const b of s.blocks) {
        if (b.type === "question") {
          ctx.fillStyle = b.hit ? "#8a572a" : "#fc9838";
          ctx.fillRect(b.x, b.y, b.w, b.h);
          ctx.strokeStyle = "#000";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(b.x, b.y, b.w, b.h);

          // Dot accents
          ctx.fillStyle = "#000";
          ctx.fillRect(b.x + 3, b.y + 3, 2, 2);
          ctx.fillRect(b.x + b.w - 5, b.y + 3, 2, 2);
          ctx.fillRect(b.x + 3, b.y + b.h - 5, 2, 2);
          ctx.fillRect(b.x + b.w - 5, b.y + b.h - 5, 2, 2);

          if (!b.hit) {
            ctx.fillStyle = "#fff";
            ctx.font = "bold 14px monospace";
            ctx.fillText("?", b.x + 8, b.y + 18);
          }
        } else if (b.type === "brick") {
          ctx.fillStyle = "#b84418";
          ctx.fillRect(b.x, b.y, b.w, b.h);
          ctx.strokeStyle = "#000";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(b.x, b.y, b.w, b.h);
          ctx.strokeStyle = "#501800";
          ctx.strokeRect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);
        } else if (b.type === "pipe") {
          // Pipe Lip
          ctx.fillStyle = "#00a800";
          ctx.fillRect(b.x - 3, b.y, b.w + 6, 16);
          ctx.strokeStyle = "#000";
          ctx.lineWidth = 2;
          ctx.strokeRect(b.x - 3, b.y, b.w + 6, 16);
          // Pipe Body
          ctx.fillStyle = "#008800";
          ctx.fillRect(b.x, b.y + 16, b.w, b.h - 16);
          ctx.strokeRect(b.x, b.y + 16, b.w, b.h - 16);
          // Highlight
          ctx.fillStyle = "#80d010";
          ctx.fillRect(b.x + 4, b.y + 16, 5, b.h - 16);
        }
      }

      // Draw Floating Bounced Coins
      for (const fc of s.floatingCoins) {
        ctx.fillStyle = "#ffd700";
        ctx.beginPath();
        ctx.ellipse(fc.x + 5, fc.y, 7, 10, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#b8860b";
        ctx.stroke();
      }

      // Draw Goombas
      for (const g of s.goombas) {
        if (!g.alive) continue;
        // Head / Body
        ctx.fillStyle = "#a84000";
        ctx.beginPath();
        ctx.ellipse(g.x + 12, g.y + 10, 11, 10, 0, 0, Math.PI * 2);
        ctx.fill();
        // Feet
        ctx.fillStyle = "#000";
        ctx.fillRect(g.x + 2, g.y + 18, 7, 6);
        ctx.fillRect(g.x + 15, g.y + 18, 7, 6);
        // Eyes
        ctx.fillStyle = "#fff";
        ctx.fillRect(g.x + 6, g.y + 6, 3, 5);
        ctx.fillRect(g.x + 15, g.y + 6, 3, 5);
        ctx.fillStyle = "#000";
        ctx.fillRect(g.x + 7, g.y + 7, 2, 3);
        ctx.fillRect(g.x + 16, g.y + 7, 2, 3);
      }

      // Draw Mario (Stylized Retro Pixel Sprite)
      const mx = m.x;
      const my = m.y;

      ctx.save();
      if (m.facing === "left") {
        ctx.translate(mx + m.w, my);
        ctx.scale(-1, 1);
      } else {
        ctx.translate(mx, my);
      }

      // Red Cap
      ctx.fillStyle = "#e52521";
      ctx.fillRect(4, 0, 16, 6);
      ctx.fillRect(2, 4, 20, 4);

      // Hair & Sideburns
      ctx.fillStyle = "#6b3310";
      ctx.fillRect(2, 8, 4, 7);

      // Face
      ctx.fillStyle = "#fcb888";
      ctx.fillRect(6, 8, 12, 10);
      ctx.fillRect(18, 10, 4, 4); // Nose

      // Mustache
      ctx.fillStyle = "#000";
      ctx.fillRect(10, 13, 10, 4);

      // Blue Overalls / Red Shirt
      ctx.fillStyle = "#e52521"; // Shirt
      ctx.fillRect(4, 18, 16, 8);
      ctx.fillStyle = "#0020d0"; // Overalls
      ctx.fillRect(6, 20, 12, 8);
      ctx.fillRect(8, 18, 3, 4);
      ctx.fillRect(13, 18, 3, 4);

      // Buttons
      ctx.fillStyle = "#ffd700";
      ctx.fillRect(7, 21, 2, 2);
      ctx.fillRect(15, 21, 2, 2);

      // Shoes
      ctx.fillStyle = "#6b3310";
      const isWalking = Math.sin(m.animFrame) > 0;
      if (m.grounded && m.vx !== 0 && isWalking) {
        ctx.fillRect(2, 28, 8, 4);
        ctx.fillRect(14, 26, 8, 4);
      } else {
        ctx.fillRect(4, 28, 7, 4);
        ctx.fillRect(13, 28, 7, 4);
      }

      ctx.restore();
      ctx.restore();

      // UI Overlays if not started or game over
      if (!isPlaying && !gameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 20px -apple-system, BlinkMacSystemFont, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("🕹️ SUPER MARIO BREAK", canvas.width / 2, 110);
        ctx.font = "14px -apple-system, BlinkMacSystemFont, sans-serif";
        ctx.fillStyle = "#ffd700";
        ctx.fillText("Bored? Click 'Start Game' or Tap Play!", canvas.width / 2, 140);
        ctx.font = "12px monospace";
        ctx.fillStyle = "#ddd";
        ctx.fillText("Controls: [◀ / ▶ / A / D] Run  •  [SPACE / ▲ / W] Jump", canvas.width / 2, 175);
      }

      if (gameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ef4444";
        ctx.font = "bold 24px -apple-system, BlinkMacSystemFont, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, 110);
        ctx.fillStyle = "#fff";
        ctx.font = "16px monospace";
        ctx.fillText(`Final Score: ${s.score}   Coins: ${s.coins}`, canvas.width / 2, 145);
      }

      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying, gameOver, highScore]);

  // Touch handlers for mobile
  const handleTouchStart = (action: "left" | "right" | "jump") => {
    if (!isPlaying) setIsPlaying(true);
    if (gameOver) resetGame();
    const s = stateRef.current;
    if (action === "left") s.keys.left = true;
    if (action === "right") s.keys.right = true;
    if (action === "jump") {
      if (s.mario.grounded) {
        s.mario.vy = s.mario.jumpForce;
        s.mario.grounded = false;
        audio.jump();
      }
    }
  };

  const handleTouchEnd = (action: "left" | "right" | "jump") => {
    const s = stateRef.current;
    if (action === "left") s.keys.left = false;
    if (action === "right") s.keys.right = false;
    if (action === "jump") s.keys.jump = false;
  };

  return (
    <section className="mt-20 mb-24">
      <Slide delay={0.2}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-x-3">
              <span className="text-2xl">🍄</span>
              <h2 className="font-incognito text-3xl font-bold tracking-tight">
                Super Mario Coffee Break
              </h2>
            </div>
            <p className="text-sm dark:text-zinc-400 text-zinc-600 mt-1">
              Bored while reading my portfolio? Stomp Goombas and hit question blocks for coins!
            </p>
          </div>

          {/* Quick HUD Badges */}
          <div className="flex items-center gap-x-3 text-xs font-mono font-semibold">
            <span className="px-3 py-1.5 rounded-md dark:bg-zinc-800 bg-zinc-200 text-amber-500">
              🪙 COINS: {coins}
            </span>
            <span className="px-3 py-1.5 rounded-md dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700">
              ⭐ SCORE: {score}
            </span>
            <span className="px-3 py-1.5 rounded-md dark:bg-zinc-800 bg-zinc-200 text-emerald-500">
              🏆 BEST: {highScore}
            </span>
          </div>
        </div>

        {/* Arcade Cabinet Screen */}
        <div className="relative rounded-2xl overflow-hidden border-2 dark:border-zinc-800 border-zinc-300 shadow-2xl bg-black">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-xs text-zinc-400">
            <div className="flex items-center gap-x-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="font-mono text-zinc-300 ml-2">WORLD 1-1</span>
            </div>
            <div className="flex items-center gap-x-3">
              <span>LIVES: {"❤️".repeat(Math.max(0, lives))}</span>
              <button
                onClick={toggleSound}
                className="p-1.5 hover:text-white transition-colors"
                title={soundOn ? "Mute Sound" : "Enable Sound"}
              >
                {soundOn ? <HiVolumeUp size={16} /> : <HiVolumeOff size={16} />}
              </button>
            </div>
          </div>

          {/* 60fps HTML5 Canvas */}
          <canvas
            ref={canvasRef}
            width={720}
            height={280}
            className="w-full h-auto block select-none cursor-pointer"
            onClick={() => {
              if (!isPlaying && !gameOver) setIsPlaying(true);
              if (gameOver) {
                resetGame();
                setIsPlaying(true);
              }
            }}
          />

          {/* Floating Action Controls */}
          <div className="flex items-center justify-between p-3 bg-zinc-900/95 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (gameOver) {
                    resetGame();
                    setIsPlaying(true);
                  } else {
                    setIsPlaying(!isPlaying);
                  }
                }}
                className="flex items-center gap-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                {gameOver ? (
                  <>
                    <HiRefresh size={14} /> Play Again
                  </>
                ) : isPlaying ? (
                  <>
                    <HiPause size={14} /> Pause
                  </>
                ) : (
                  <>
                    <HiPlay size={14} /> Start Game
                  </>
                )}
              </button>
              <button
                onClick={resetGame}
                className="flex items-center gap-x-1 text-xs px-2.5 py-1.5 rounded-md dark:bg-zinc-800 bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <HiRefresh size={13} /> Reset
              </button>
            </div>

            {/* Mobile Touch Controls */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onTouchStart={() => handleTouchStart("left")}
                onTouchEnd={() => handleTouchEnd("left")}
                onMouseDown={() => handleTouchStart("left")}
                onMouseUp={() => handleTouchEnd("left")}
                className="w-9 h-9 rounded-md bg-zinc-800 text-zinc-200 active:bg-zinc-700 flex items-center justify-center font-bold text-sm select-none"
              >
                ◀
              </button>
              <button
                onTouchStart={() => handleTouchStart("right")}
                onTouchEnd={() => handleTouchEnd("right")}
                onMouseDown={() => handleTouchStart("right")}
                onMouseUp={() => handleTouchEnd("right")}
                className="w-9 h-9 rounded-md bg-zinc-800 text-zinc-200 active:bg-zinc-700 flex items-center justify-center font-bold text-sm select-none"
              >
                ▶
              </button>
              <button
                onTouchStart={() => handleTouchStart("jump")}
                onTouchEnd={() => handleTouchEnd("jump")}
                onMouseDown={() => handleTouchStart("jump")}
                onMouseUp={() => handleTouchEnd("jump")}
                className="px-3 h-9 rounded-md bg-red-600 text-white active:bg-red-500 flex items-center justify-center font-bold text-xs uppercase select-none"
              >
                JUMP
              </button>
            </div>

            <div className="hidden sm:block text-xs text-zinc-500 font-mono">
              Use <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">A</kbd> <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">D</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">◀</kbd> <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">▶</kbd> to run, <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">SPACE</kbd> to jump
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}
