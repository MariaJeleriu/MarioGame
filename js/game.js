// Kboom settings
kaboom({
  global: true,
  fullscreen: true,
  scale: 1.5,
  debug: true,
  clearColor: [0, 0, 0, 1],
});
// Const

const MOVE_SPEED = 120;
const JUMP_FORCE = 360;
const BIG_JUMP_FORCE = 450;
let CURRENT_JUMP_FORCE = JUMP_FORCE;
let isJumping = true;
const FALL_DEATH = 400;
var noCoin = sessionStorage.getItem("noCoin");
var noEnemy = sessionStorage.getItem("noEnemy");
console.log(noCoin);

// Sprites
loadRoot("https://i.imgur.com/");
loadSprite("coin", "wbKxhcd.png");
loadSprite("evil-shroom", "KPO3fR9.png");
loadSprite("brick", "pogC9x5.png");
loadSprite("block", "M6rwarW.png");
loadSprite("block2", "M6rwarW.png");
loadSprite("mario", "Wb1qfhK.png");
loadSprite("marioLeft", "fD3IESs.png");
loadSprite("mushroom", "0wMd92p.png");
loadSprite("surprise", "gesQ1KP.png");
loadSprite("unboxed", "bdrLpi6.png");
loadSprite("pipe-top-left", "ReTPiWY.png");
loadSprite("pipe-top-right", "hj2GK4n.png");
loadSprite("pipe-bottom-left", "c1cYSbt.png");
loadSprite("pipe-bottom-right", "nqQ79eI.png");
loadSprite("blue-block", "fVscIbn.png");
loadSprite("blue-brick", "3e5YRQd.png");
loadSprite("blue-steel", "gqVoI2b.png");
loadSprite("blue-evil-shroom", "SvV4ueD.png");
loadSprite("blue-surprise", "RMqCc1G.png");
loadSprite("flower", "uaUm9sN.png");
loadSprite("fire", "o9WizfI.png");
loadSprite("fire2", "o9WizfI.png");
loadSprite("water", "QA257Bj.png");
loadSprite("left-water", "rfDoaa1.png");
loadSprite("right-water", "SmHhgUn.png");
loadSprite("grass", "4IzFwwk.png");
loadSprite("cloud", "yTdIBqD.png");
loadSprite("window", "w2vTCMK.png");
loadSprite("barrel", "rGlNIdL.png");
loadSprite("concrete", "e8lUfe5.png");
loadSprite("concrete2", "e8lUfe5.png");
loadSprite("bowser", "nmSDoxR.png");
loadSprite("spike", "M8eEebU.png");
loadSprite("peaches", "mUlhEil.png");

// Level design
scene("game", ({ level, score }) => {
  layers(["bg", "obj", "ui"], "obj");

  const maps = [
    [
      "                                                           ",
      "                                                           ",
      "                                                           ",
      "                                                           ",
      "                                                           ",
      "                         %                                 ",
      "              f                                            ",
      "             ======  ========                              ",
      "                                                           ",
      "                                                           ",
      "      %*%                                                  ",
      "                                                           ",
      "   ==    f       f              f           f  ====   ===  ",
      "======================================ii ==========   === ",
      "===================================================   === ",
      "                                                           ",
      "                                                           ",
      " +-              %*%                                       ",
      " ()                                                        ",
      "====================================   ==================  ",
    ],
    [
      "£                                                         £             ",
      "£                           *                             £             ",
      "£                                                         £             ",
      "£                                                         £             ",
      "£                                                         £             ",
      "£                         x   xxxx                        £             ",
      "£                        xx   xxxxxxx   xxxx              £             ",
      "£                   xxxxxxx   xxxxxxx   xxxxxx            £             ",
      "£                 xxxxxxxxx   xxxxxxx   xxxxxxxxx                  %*%  ",
      "£              x xxxxxxxxxx   xxxxxxx   xxxxxxxxxxx                     ",
      "£                                                                       ",
      "£        @@@@@@                                        xxx£lr£!!  !!!!!!",
      "£                                                         £lr£!!  !!!!!!",
      "£      @                                                  £lr£!!  !!!!!!",
      "£               z   z                                     £lr£!!  !!!!!!",
      "!!!!!!!!!!!!!!!!!!!!!!!!!!     !!!!!!!!!!!!!!!!!!!!!!!!!!!!lr£!!  !!!!!!",
      "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww!lr£!!  !!!!!!",
      "                                                                        ",
      "                                                                !!+-    ",
      "                                                               !!!()    ",
      "                                                              !!!!!!    ",
      "                                                              !!!!!!    ",
    ],
    [
      "=                              }%}                                                 ",
      "=                                                                                  ",
      "=             c                                c                                     ",
      "=                              }}}}}   c                                            ",
      "=                        %}                                                        ",
      "=  c                                                                               ",
      "=                                           gg                                     ",
      "=                   ======                 gggg                                    ",
      "=              ==            gggggg       g====g                                   ",
      "=   f   z                f   ======   fz  ======                                   ",
      "=gggggggggggg    gggggggggggggggggggggggggggggggggggggg===    ====                 ",
      "=gggggggggggg    gggggggggggggggggggggggggggggggggggggg====   ====                 ",
      "=ggggggggggggwwwwgggggggggggggggggggggggggggggggggggggg===   =====                 ",
      "=============wwww=========================================    ====                 ",
      "                 =============                                                     ",
      "                 ============= $$$$$$                      =  iiii                 ",
      "                 ====================       ========================+-             ",
      "                            =========   g   ========================()             ",
      "                            =========   z   ==========================             ",
      "                            =========ggggggg==========================             ",
      "                                                                                   ",
      "                                                                                   ",
      "                                                                                   ",
    ],

    [
      "                              %                                                                                      ",
      "                                                                                                                     ",
      "                                                                                                                     ",
      "                   d                                                                                                 ",
      "                            *%%%%                                                                                    ",
      "                                                                                                                     ",
      "                                                                                                                     ",
      "                                                                                             d                       ",
      "                       ==================                                                                            ",
      "                                                   d                         %                           +-           ",
      "                                                                                                         ()           ",
      "                b   ==                                                    ====                   %    =========      ",
      " d                                   d                                           d                                    ",
      "               =========                                                                        ====                 ",
      "            d                                           d         =====                                     % %       ",
      "           ===                  b                                                         ===                        ",
      "                           ^               ^     ^             ^     ^                            ^            ^      ",
      "=====   ========  $   =22222222222=  $  =2222=  =2222=   $   =2222222222222=========   ======   =22222=   =22222=     ",
      "=====   ========  =   =============  =  ======  ======   =   =======================   ======   =======   =======     ",
      "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii   ",
    ],
    [
      "        oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
      "                                                                                                                                  ",
      "                                                                                                                                 ",
      "                                                                                                                                  ",
      "                                                                                                                                  ",
      "                                                             d                                                                    ",
      "                                %%%                                                                                               ",
      "                                                                                                                       d          ",
      "    d                                                                                                                             ",
      "                           ooooooooooooooooooo                      d                                                             ",
      "                                                 o                                                                                ",
      "                    d                                                                                   d                         ",
      "                                                  ooooo                                                                           ",
      "                                  d                                                                                               ",
      "                                                        oooo                                                          q           ",
      "                                                                                            d                                     ",
      "        z     ^      z                              ^                ^           z                  y     y     y             p  ",
      "ooooouuuuuuuuuuuuuuuuuoo    oo     oo     oo     ouuuuuuuuuuuo   ouuuuuuuo   ouuuuuuuuuuuoooooooooooouuuuuuuuuuuuuuuuuuuuuoooooooo",
      "oooooooooooooooooooooooossssoosssssoosssssoosssssooooooooooooosssooooooooosssooooooooooooooooooooooooooooooooooooooooooooooooooooo ",
    ],
  ];

  const levelCfg = {
    width: 20,
    height: 20,
    "=": [sprite("block"), solid(), "wall"],
    2: [sprite("block2"), solid()],
    $: [sprite("coin"), "coin"],
    "%": [sprite("surprise"), solid(), "coin-surprise"],
    "*": [sprite("surprise"), solid(), "mushroom-surprise"],
    "}": [sprite("unboxed"), solid()],
    "(": [sprite("pipe-bottom-left"), solid(), scale(0.5)],
    ")": [sprite("pipe-bottom-right"), solid(), scale(0.5)],
    "-": [sprite("pipe-top-left"), solid(), scale(0.5), "pipe"],
    "+": [sprite("pipe-top-right"), solid(), scale(0.5), "pipe"],
    "^": [sprite("evil-shroom"), solid(), { dir: -1 }, "dangerous"],
    "#": [sprite("mushroom"), solid(), "mushroom", body()],
    "!": [sprite("blue-block"), solid(), scale(0.5)],
    "£": [sprite("blue-brick"), solid(), scale(0.5), "wall"],
    z: [
      sprite("blue-evil-shroom"),
      solid(),
      scale(0.5),
      { dir: -1 },
      "dangerous",
    ],
    "@": [sprite("blue-surprise"), solid(), scale(0.5), "coin-surprise"],
    x: [sprite("blue-steel"), solid(), scale(0.5)],
    f: [sprite("flower"), scale(0.5)],
    i: [sprite("fire"), scale(0.7), "death"],
    y: [sprite("fire2"), scale(1), solid(), { dir: -1 }, "dangerous"],
    w: [sprite("water"), scale(0.5)],
    l: [sprite("left-water"), scale(0.5)],
    r: [sprite("right-water"), scale(0.5)],
    g: [sprite("grass"), solid(), scale(0.4)],
    c: [sprite("cloud"), scale(0.2)],
    d: [sprite("window"), scale(0.1)],
    b: [sprite("barrel"), scale(0.1)],
    o: [sprite("concrete"), solid(), scale(0.08), "wall"],
    u: [sprite("concrete"), solid(), scale(0.08)],
    q: [sprite("bowser"), solid(), scale(0.1), "bowser"],
    s: [sprite("spike"), scale(0.05)],
    p: [sprite("peaches"), scale(0.08), "peaches"],
  };

  const gameLevel = addLevel(maps[level], levelCfg);

  const scoreLabel = add([
    text(score),
    pos(30, 6),
    layer("ui"),
    {
      value: score,
    },
  ]);

  add([text("level " + parseInt(level + 1)), pos(40, 6)]);

  function big() {
    let timer = 0;
    let isBig = false;
    return {
      update() {
        if (isBig) {
          CURRENT_JUMP_FORCE = BIG_JUMP_FORCE;
          timer -= dt();
          if (timer <= 0) {
            this.smallify();
          }
        }
      },
      isBig() {
        return isBig;
      },
      smallify() {
        this.scale = vec2(1);
        CURRENT_JUMP_FORCE = JUMP_FORCE;
        timer = 0;
        isBig = false;
      },
      biggify(time) {
        this.scale = vec2(2);
        timer = time;
        isBig = true;
      },
    };
  }

  const player = add([
    sprite("mario"),
    solid(),
    pos(40, 0),
    body(),
    big(),
    origin("bot"),
  ]);

  action("mushroom", (m) => {
    m.move(20, 0);
  });

  player.on("headbump", (obj) => {
    if (obj.is("coin-surprise")) {
      gameLevel.spawn("$", obj.gridPos.sub(0, 1));
      destroy(obj);
      gameLevel.spawn("}", obj.gridPos.sub(0, 0));
    }
    if (obj.is("mushroom-surprise")) {
      gameLevel.spawn("#", obj.gridPos.sub(0, 1));
      destroy(obj);
      gameLevel.spawn("}", obj.gridPos.sub(0, 0));
    }
  });

  player.collides("mushroom", (m) => {
    destroy(m);
    var mushroomTouch = new Audio('sound/mushroom.mp3');
    mushroomTouch.play()
    player.biggify(6);
    
  });

  player.collides("coin", (c) => {
    destroy(c);
    var coinTouch = new Audio('sound/coin.mp3');
    coinTouch.play()
    console.log(noCoin);

    if (noCoin == "true") {
      scoreLabel.value -= 1;
    } else {
      scoreLabel.value++;
    }
    scoreLabel.text = scoreLabel.value;
  });
  player.collides("bowser", (bo) => {
    destroy(bo);
  });

  var ENEMY_SPEED = 20;

  action("dangerous", (d) => {
    d.move(d.dir * ENEMY_SPEED, 0);
  });

  collides("dangerous", "wall", (d) => {
    d.dir = -d.dir;
  });

  player.collides("peaches", () => {
    go("win", { score: scoreLabel.value });
  });

  player.collides("dangerous", (d) => {
    if (noEnemy == "true") {
      go("lose", { score: scoreLabel.value });
    } else if (isJumping) {
      destroy(d);
    } else {
      go("lose", { score: scoreLabel.value });
    }
  });
  player.collides("death", () => {
    if (noEnemy == "true") {
      go("lose", { score: scoreLabel.value });
    } else {
      go("lose", { score: scoreLabel.value });
    }
  });

  player.action(() => {
    camPos(player.pos);
    if (player.pos.y >= FALL_DEATH) {
      go("lose", { score: scoreLabel.value });
    }
  });

  player.collides("pipe", () => {
    keyPress("down", () => {
      go("game", {
        level: (level + 1) % maps.length,
        score: scoreLabel.value,
      });
    });
  });

  keyDown("left", () => {
    player.changeSprite("marioLeft");
    player.move(-MOVE_SPEED, 0);
  });

  keyDown("right", () => {
    player.changeSprite("mario");
    player.move(MOVE_SPEED, 0);
  });

  player.action(() => {
    if (player.grounded()) {
      isJumping = false;
    }
  });

  keyPress("space", () => {
    if (player.grounded()) {
      isJumping = true;
      player.jump(CURRENT_JUMP_FORCE);
    }
  });
});

scene("lose", ({ score }) => {
  add([text(score, 32), origin("center"), pos(width() / 2, height() / 2)]);
  sessionStorage.setItem("score", score);
  setTimeout(function () {
    window.location.href = "score.html";
  }, 5000);
  document.getElementById("audio").pause();
  var loseSound = new Audio('sound/gameover.mp3');
  loseSound.play();
});
scene("win", ({ score }) => {
  add([
    text("win " + score + " points", 32),
    origin("center"),
    pos(width() / 2, height() / 2),
  ]);
  sessionStorage.setItem("score", score);
  setTimeout(function () {
    window.location.href = "score.html";
  }, 5000);
  document.getElementById("audio").pause();
  var winSound = new Audio('sound/win.mp3');
  winSound.play();
});

var startScore = 0;
if (noCoin == "false") {
  startScore = 0;
} else {
  startScore = 32;
}
start("game", { level: 0, score: startScore });

document.addEventListener("keydown", musicPlay);
function musicPlay() {
  document.getElementById("audio").play();
  document.removeEventListener("keydown", musicPlay);
}

var audio = new Audio("sound/jump.mp3");
audio.volume = 0.3;
if (audio) {
  window.addEventListener("keydown", function (event) {
    var key = event.which || event.keyCode;

    if (key === 32) {
      audio.load();
      audio.play();
    }
  });
}
