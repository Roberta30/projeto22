const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage, playerArcherimage;
var alvo, alvoimage;
var flecha, flechaimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage = loadImage("./assets/playerArcher.png");
  flechaimage = loadImage("./assets/arrow.png");
  alvoimage = loadImage("./assets/board.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options={
    isStatic: true 
  }

  playerArcher = Bodies.rectangle(280, 200, 50, 50);
  World.add(world, playerArcher);
  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);
  //criar corpo do jogador
  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);

  alvo = Bodies.rectangle(980, 210, 100, 100);
  World.add(world, alvo);

  flecha = Bodies.rectangle(300, 228, 50, 50);
  World.add(world, flecha);
}

function draw() {
  background(backgroundImg);

  //exibir a imagem da base do jogador usando a função image()
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);

  //image, do jogador
  image(playerimage, player.position.x, player.position.y, 70, 180);

  //imagem do anco
  image(playerArcherimage, playerArcher.position.x, playerArcher.position.y, 100, 80);

  image(alvoimage, alvo.position.x, alvo.position.y, 100, 80);

  image(flechaimage, flecha.position.x, flecha.position.y, 50, 20);

  Engine.update(engine);
  playerArcher.display();

  // Title
  push(); 
  fill("yellow");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
  pop(); 
}
