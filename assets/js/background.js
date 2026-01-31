/**
 * Utility function for returning a random integer in a given range
 * @param {Int} max
 * @param {Int} min
 */
const randomInRange = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const ACTIVE_PROBABILITY = 0;
const BASE_SIZE = 1;
const VELOCITY_INC = 1.01;
const VELOCITY_INIT_INC = 1.025;
const JUMP_VELOCITY_INC = 1.25;
const JUMP_SIZE_INC = 1.15;
const SIZE_INC = 1.01;
const RAD = Math.PI / 180;
const WARP_COLORS = [
  [197, 239, 247],
  [25, 181, 254],
  [77, 5, 232],
  [165, 55, 253],
  [255, 255, 255],
];

/**
 * Custom debounce function (replaces Lodash _.debounce)
 */
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Custom TweenMax replacement using requestAnimationFrame
 */
class TweenMax {
  static to(target, duration, vars) {
    const startTime = performance.now();
    const startValues = {};
    const changes = {};

    for (let key in vars) {
      startValues[key] = target[key] || 0;
      changes[key] = vars[key] - startValues[key];
    }

    const update = (time) => {
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const easedProgress = this.easeOutCubic(progress);

      for (let key in startValues) {
        target[key] = startValues[key] + changes[key] * easedProgress;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }

  static easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }
}

/**
 * Class for storing the particle metadata
 * position, size, length, speed etc.
 */
class Star {
  STATE = {
    alpha: Math.random(),
    angle: randomInRange(0, 360) * RAD,
  };
  reset = () => {
    const angle = randomInRange(0, 360) * (Math.PI / 180);
    const vX = Math.cos(angle);
    const vY = Math.sin(angle);
    const mainEl = document.querySelector("main");
    const width = mainEl.offsetWidth;
    const height = mainEl.offsetHeight;
    const travelled =
      Math.random() > 0.5
        ? Math.random() * Math.max(width, height) +
          Math.random() * (width * 0.24)
        : Math.random() * (width * 0.25);
    this.STATE = {
      ...this.STATE,
      iX: undefined,
      iY: undefined,
      active: travelled ? true : false,
      x: Math.floor(vX * travelled) + width / 2,
      vX,
      y: Math.floor(vY * travelled) + height / 2,
      vY,
      size: BASE_SIZE,
    };
  };
  constructor() {
    this.reset();
  }
}

const generateStarPool = (size) => new Array(size).fill().map(() => new Star());

// Class for the actual app
class JumpToHyperspace {
  STATE = {
    stars: generateStarPool(300),
    bgAlpha: 0,
    sizeInc: SIZE_INC,
    velocity: VELOCITY_INC,
    initiating: false,
    jumping: false,
    initiateTimestamp: undefined,
    active: true, // <-- added toggle state
  };
  canvas = document.createElement("canvas");
  context = this.canvas.getContext("2d");
  mainEl = document.querySelector("main");

  constructor() {
    // Style canvas as background
    Object.assign(this.canvas.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    });

    // Insert as FIRST child
    this.mainEl.insertBefore(this.canvas, this.mainEl.firstChild);

    this.bind();
    this.setup();
    this.render();
  }

  render = () => {
    if (!this.STATE.active) return; // <-- stop rendering when inactive

    const {
      STATE: { bgAlpha, velocity, sizeInc, initiating, jumping, stars },
      context,
      canvas,
    } = this;

    const w = canvas.width;
    const h = canvas.height;

    context.clearRect(0, 0, w, h);
    if (bgAlpha > 0) {
      context.fillStyle = `rgba(31, 58, 157, ${bgAlpha})`;
      context.fillRect(0, 0, w, h);
    }

    const nonActive = stars.filter((s) => !s.STATE.active);
    if (!initiating && nonActive.length > 0) {
      nonActive[0].STATE.active = true;
    }

    for (const star of stars.filter((s) => s.STATE.active)) {
      const { active, x, y, iX, iY, iVX, iVY, size, vX, vY } = star.STATE;

      if (
        ((iX || x) < 0 || (iX || x) > w || (iY || y) < 0 || (iY || y) > h) &&
        active &&
        !initiating
      ) {
        star.reset();
      } else if (active) {
        const newIX = initiating ? iX : iX + iVX;
        const newIY = initiating ? iY : iY + iVY;
        const newX = x + vX;
        const newY = y + vY;
        const caught =
          (vX < 0 && newIX < x) ||
          (vX > 0 && newIX > x) ||
          (vY < 0 && newIY < y) ||
          (vY > 0 && newIY > y);
        star.STATE = {
          ...star.STATE,
          iX: caught ? undefined : newIX,
          iY: caught ? undefined : newIY,
          iVX: caught ? undefined : iVX * VELOCITY_INIT_INC,
          iVY: caught ? undefined : iVY * VELOCITY_INIT_INC,
          x: newX,
          vX: star.STATE.vX * velocity,
          y: newY,
          vY: star.STATE.vY * velocity,
          size: initiating ? size : size * (iX || iY ? SIZE_INC : sizeInc),
        };
        let color = `rgba(255, 255, 255, ${star.STATE.alpha})`;
        if (jumping) {
          const [r, g, b] =
            WARP_COLORS[randomInRange(0, WARP_COLORS.length - 1)];
          color = `rgba(${r}, ${g}, ${b}, ${star.STATE.alpha})`;
        }
        context.strokeStyle = color;
        context.lineWidth = size;
        context.beginPath();
        context.moveTo(star.STATE.iX || x, star.STATE.iY || y);
        context.lineTo(star.STATE.x, star.STATE.y);
        context.stroke();
      }
    }
    requestAnimationFrame(this.render.bind(this));
  };

  // <-- added method to toggle animation on/off
  toggleActive = () => {
    this.STATE.active = !this.STATE.active;
    this.canvas.style.display = this.STATE.active ? "block" : "none";
    if (this.STATE.active) this.render();
  };

  initiate = () => {
    if (this.STATE.jumping || this.STATE.initiating) return;
    this.STATE = {
      ...this.STATE,
      initiating: true,
      initiateTimestamp: performance.now(),
    };
    TweenMax.to(this.STATE, 0.25, {
      velocity: VELOCITY_INIT_INC,
      bgAlpha: 0.3,
    });
    for (const star of this.STATE.stars.filter((s) => s.STATE.active)) {
      star.STATE = {
        ...star.STATE,
        iX: star.STATE.x,
        iY: star.STATE.y,
        iVX: star.STATE.vX,
        iVY: star.STATE.vY,
      };
    }
  };

  jump = () => {
    this.STATE = {
      ...this.STATE,
      bgAlpha: 0,
      jumping: true,
    };
    TweenMax.to(this.STATE, 0.25, {
      velocity: JUMP_VELOCITY_INC,
      bgAlpha: 0.75,
      sizeInc: JUMP_SIZE_INC,
    });
    setTimeout(() => {
      this.STATE = {
        ...this.STATE,
        jumping: false,
      };
      TweenMax.to(this.STATE, 0.25, {
        bgAlpha: 0,
        velocity: VELOCITY_INC,
        sizeInc: SIZE_INC,
      });
    }, 2500);
  };

  enter = () => {
    if (this.STATE.jumping) return;
    const { initiateTimestamp } = this.STATE;
    this.STATE = {
      ...this.STATE,
      initiating: false,
      initiateTimestamp: undefined,
    };
    if (performance.now() - initiateTimestamp > 600) {
      this.jump();
    } else {
      TweenMax.to(this.STATE, 0.25, { velocity: VELOCITY_INC, bgAlpha: 0 });
    }
  };

  bind = () => {
    this.mainEl.addEventListener("mousedown", this.initiate.bind(this));
    this.mainEl.addEventListener("touchstart", this.initiate.bind(this));
    this.mainEl.addEventListener("mouseup", this.enter.bind(this));
    this.mainEl.addEventListener("touchend", this.enter.bind(this));
  };

  setup = () => {
    this.context.lineCap = "round";
    this.canvas.height = this.mainEl.offsetHeight;
    this.canvas.width = this.mainEl.offsetWidth;
  };

  reset = () => {
    this.STATE = {
      ...this.STATE,
      stars: generateStarPool(300),
    };
    this.setup();
  };
}

window.myJump = new JumpToHyperspace();
window.addEventListener(
  "resize",
  debounce(() => {
    window.myJump.reset();
  }, 250),
);

// <-- Reference the existing HTML button by id
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBg");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      window.myJump.toggleActive();
    });
  }
});
