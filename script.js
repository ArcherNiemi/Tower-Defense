const version = "1.2.1";

const rounds = {
  1: Array(4).fill({ enemyType: "basic", wait: 40 }),
  2: [{ enemyType: "basic", wait: 0 }, { enemyType: "fast", wait: 60 }, { enemyType: "fast", wait: 20 }],
  3: [{ enemyType: "big", wait: 0 }, { enemyType: "basic", wait: 30 }, { enemyType: "big", wait: 50 }],
  4: Array(6).fill({ enemyType: "basic", wait: 20 }),
  5: [{ enemyType: "tank", wait: 0 }, { enemyType: "basic", wait: 20 }, { enemyType: "basic", wait: 20 }],
  6: Array(8).fill({ enemyType: "fast", wait: 20 }),
  7: [{ enemyType: "big", wait: 0 }, { enemyType: "big", wait: 26 }, { enemyType: "big", wait: 26 }, { enemyType: "big", wait: 26 }],
  8: [{ enemyType: "bullet", wait: 0 }, { enemyType: "bullet", wait: 76 }], 
  9: [{ enemyType: "tank", wait: 0 }, { enemyType: "big", wait: 40 }, { enemyType: "tank", wait: 40 }],
  10: [{ enemyType: "power", wait: 0 }, { enemyType: "power", wait: 60 }],

  11: Array(15).fill({ enemyType: "basic", wait: 16 }),
  12: [{ enemyType: "heavy", wait: 0 }],
  13: Array(5).fill({ enemyType: "bullet", wait: 26 }),
  14: [{ enemyType: "power", wait: 0 },{ enemyType: "power", wait: 26 },{ enemyType: "power", wait: 26 }, ...Array(5).fill({ enemyType: "fast", wait: 6 })],
  15: Array(4).fill({ enemyType: "tank", wait: 46 }),
  16: Array(10).fill({ enemyType: "big", wait: 26 }),
  17: [{ enemyType: "heavy", wait: 0 }, { enemyType: "tank", wait: 50 }, { enemyType: "tank", wait: 50 }],
  18: Array(20).fill({ enemyType: "fast", wait: 16 }),
  19: [{ enemyType: "power", wait: 0 }, { enemyType: "heavy", wait: 76 }],
  20: [{ enemyType: "super", wait: 0 }],
  21: Array(25).fill({ enemyType: "basic", wait: 10 }),
  22: Array(10).fill({ enemyType: "bullet", wait: 20 }),
  23: Array(7).fill({ enemyType: "tank", wait: 40 }),
  24: [{ enemyType: "heavy", wait: 0 }, { enemyType: "strong", wait: 60 }],
  25: Array(10).fill({ enemyType: "power", wait: 30 }),
  26: [{ enemyType: "super", wait: 0 }, { enemyType: "power", wait: 36 }],
  27: Array(15).fill({ enemyType: "bullet", wait: 18 }),
  28: Array(5).fill({ enemyType: "heavy", wait: 46 }),
  29: Array(3).fill({ enemyType: "strong", wait: 30 }),
  30: [{ enemyType: "heavy", wait: 0 }, { enemyType: "super", wait: 50 }],

  31: Array(40).fill({ enemyType: "fast", wait: 10 }),
  32: Array(8).fill({ enemyType: "tank", wait: 6 }),
  33: Array(15).fill({ enemyType: "power", wait: 10 }),
  34: [{ enemyType: "super", wait: 0 }, ...Array(10).fill({ enemyType: "bullet", wait: 16 })],
  35: Array(8).fill({ enemyType: "heavy", wait: 40 }),
  36: Array(4).fill({ enemyType: "super", wait: 46 }),
  37: Array(50).fill({ enemyType: "basic", wait: 6 }),
  38: [{ enemyType: "strong", wait: 0 }, { enemyType: "strong", wait: 40 }],
  39: Array(30).fill({ enemyType: "bullet", wait: 20 }),
  40: Array(10).fill({ enemyType: "power", wait: 26 }),
  41: Array(5).fill({ enemyType: "super", wait: 30 }),
  42: Array(30).fill({ enemyType: "tank", wait: 16 }),
  43: [{ enemyType: "heavy", wait: 0 }, ...Array(4).fill({ enemyType: "strong", wait: 40 })],
  44: Array(15).fill({ enemyType: "bullet", wait: 6 }),
  45: Array(10).fill({ enemyType: "heavy", wait: 30 }),
  46: Array(8).fill({ enemyType: "super", wait: 20 }),
  47: Array(10).fill({ enemyType: "power", wait: 16 }),
  48: Array(20).fill({ enemyType: "tank", wait: 10 }),
  49: Array(50).fill({ enemyType: "fast", wait: 2 }),
  50: [{ enemyType: "beast", wait: 0 }],

  51: Array(8).fill({ enemyType: "strong", wait: 20 }),
  52: Array(15).fill({ enemyType: "heavy", wait: 26 }),
  53: [{ enemyType: "beast", wait: 0 }, ...Array(8).fill({ enemyType: "super", wait: 22 })],
  54: Array(50).fill({ enemyType: "fast", wait: 6 }),
  55: Array(2).fill({ enemyType: "beast", wait: 76 }),
  56: Array(10).fill({ enemyType: "strong", wait: 18 }),
  57: [{ enemyType: "beast", wait: 0 }, ...Array(15).fill({ enemyType: "power", wait: 16 })],
  58: [{ enemyType: "heavy", wait: 0 }, ...Array(10).fill({ enemyType: "bullet", wait: 16 })],
  59: Array(15).fill({ enemyType: "super", wait: 20 }),
  60: [{ enemyType: "beast", wait: 0 }, { enemyType: "beast", wait: 60 }, ...Array(10).fill({ enemyType: "strong", wait: 16 })],
  61: Array(40).fill({ enemyType: "bullet", wait: 4 }),
  62: [{ enemyType: "beast", wait: 0 }, { enemyType: "beast", wait: 50 }, { enemyType: "heavy", wait: 50 }],
  63: Array(15).fill({ enemyType: "super", wait: 16 }),
  64: Array(35).fill({ enemyType: "bullet", wait: 6 }),
  65: [{ enemyType: "beast", wait: 0 }, { enemyType: "sonic", wait: 50 }, ...Array(12).fill({ enemyType: "strong", wait: 16 })],
  66: Array(12).fill({ enemyType: "heavy", wait: 20 }),
  67: Array(50).fill({ enemyType: "tank", wait: 10 }),
  68: [{ enemyType: "beast", wait: 0 }, ...Array(15).fill({ enemyType: "super", wait: 16 })],
  69: Array(4).fill({ enemyType: "beast", wait: 60 }),
  70: Array(20).fill({ enemyType: "strong", wait: 12 }),
  71: [{ enemyType: "sonic", wait: 0 }, { enemyType: "sonic", wait: 20 }, ...Array(50).fill({ enemyType: "power", wait: 6 })],
  72: Array(35).fill({ enemyType: "bullet", wait: 8 }),
  73: [{ enemyType: "beast", wait: 0 }, { enemyType: "beast", wait: 40 }, ...Array(10).fill({ enemyType: "heavy", wait: 20 })],
  74: Array(22).fill({ enemyType: "super", wait: 12 }),
  75: [{ enemyType: "beast", wait: 0 }, { enemyType: "beast", wait: 50 }, { enemyType: "beast", wait: 50 }, { enemyType: "beast", wait: 50 }, { enemyType: "sonic", wait: 26 }],

  76: Array(40).fill({ enemyType: "fast", wait: 4 }),
  77: Array(15).fill({ enemyType: "strong", wait: 10 }),
  78: Array(5).fill({ enemyType: "sonic", wait: 40 }),
  79: Array(20).fill({ enemyType: "super", wait: 12 }),
  80: [{ enemyType: "demon", wait: 0 }, ...Array(20).fill({ enemyType: "strong", wait: 12 })],
  81: Array(50).fill({ enemyType: "bullet", wait: 2 }),
  82: Array(25).fill({ enemyType: "strong", wait: 10 }),
  83: [{ enemyType: "demon", wait: 0 }, { enemyType: "demon", wait: 50 }, ...Array(10).fill({ enemyType: "heavy", wait: 16 })],
  84: [{ enemyType: "beast", wait: 0 }, { enemyType: "beast", wait: 40 }, { enemyType: "beast", wait: 40 }],
  85: Array(8).fill({ enemyType: "sonic", wait: 16 }),
  86: Array(70).fill({ enemyType: "bullet", wait: 2 }),
  87: Array(30).fill({ enemyType: "strong", wait: 8 }),
  88: Array(4).fill({ enemyType: "demon", wait: 40 }),
  89: [{ enemyType: "beast", wait: 0 }, ...Array(20).fill({ enemyType: "super", wait: 10 })],
  90: [{ enemyType: "god", wait: 0 }],
  91: Array(40).fill({ enemyType: "strong", wait: 6 }),
  92: Array(10).fill({ enemyType: "sonic", wait: 8 }),
  93: Array(100).fill({ enemyType: "bullet", wait: 4 }),
  94: Array(5).fill({ enemyType: "demon", wait: 30 }), 
  95: Array(50).fill({ enemyType: "strong", wait: 6 }),
  96: Array(40).fill({ enemyType: "super", wait: 8 }),
  97: Array(100).fill({ enemyType: "bullet", wait: 2 }),
  98: [{ enemyType: "god", wait: 0 },{ enemyType: "god", wait: 200 }, { enemyType: "demon", wait: 50 }, { enemyType: "sonic", wait: 26 }],
  99: Array(15).fill({ enemyType: "sonic", wait: 6 }),
  100: [
    { enemyType: "god", wait: 0 },
    { enemyType: "god", wait: 100 },
    ...Array(4).fill({ enemyType: "demon", wait: 50 }),
    { enemyType: "god", wait: 100 },
    ...Array(4).fill({ enemyType: "demon", wait: 50 }),
    ...Array(15).fill({ enemyType: "sonic", wait: 20 })
  ]
};

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var rect = canvas.getBoundingClientRect();

canvas.width = 800;
canvas.height = 500;

const map1 = {"backgroundColor": "#d2c925","trackColor": "#6a543f","path": [[275,0,50,125,"down"],[275,75,250,50,"right"],[475,75,50,200,"down"],[75,225,450,50,"left"],[75,225,50,200,"down"],[75,375,250,50,"right"],[275,375,50,125,"down"]]};
const map2 = {"backgroundColor": "#008800","trackColor": "#79440e","path": [[0,225,250,50,"right"],[200,50,50,225,"up"],[200,50,250,50,"right"],[400,50,50,325,"down"],[400,325,200,50,"right"]]};
const map3 = {"backgroundColor": "#932f2f","trackColor": "#c2ae99","path": [[0,325,250,50,"right"],[200,225,50,150,"up"],[200,225,200,50,"right"],[350,125,50,150,"up"],[350,125,250,50,"right"]]};
const map4 = {"backgroundColor": "#258ad2","trackColor": "#25386e","path": [[0,275,250,50,"right"],[200,100,50,225,"up"],[200,100,275,50,"right"],[425,100,50,275,"down"],[250,325,225,50,"left"],[250,325,50,175,"down"]]};
const map5 = {"backgroundColor": "#808080","trackColor": "#5a5a5a","path": [[275,0,50,200,"down"],[275,150,100,50,"right"],[325,150,50,200,"down"],[175,300,200,50,"left"],[175,300,50,150,"down"],[175,400,425,50,"right"]]};
const map6 = {"backgroundColor": "#472050","trackColor": "#df29d6","path": [[250,0,50,100,"down"],[250,50,100,50,"right"],[300,50,50,150,"down"],[250,150,100,50,"left"],[250,150,50,200,"down"],[250,300,100,50,"right"],[300,300,50,150,"down"],[250,400,100,50,"left"],[250,400,50,100,"down"]]};

const maps = [[[map1, "Easy", "Desert"],[map4, "Easy", "Ocean"]],[[map2,"Medium", "Forest"],[map5,"Medium", "City"]],[[map3, "Hard", "Volcano"],[map6, "Hard", "Space"]]]

const mapBoxSize = [180,150];
const difficultyBoxSize = [180,150];

const easy = ["easy", 0.8];
const medium = ["medium", 1];
const hard = ["hard", 1.2];

const difficulties = [easy, medium, hard];


const towerPlacerWidth = 200;
const towerBoxSize = 70;
const towerBoxWidthMargin = 20;
const towerBoxHeightMargin = 40;
const startTowerBoxMargin = 70;
const towerPlacerRows = 3;
const towerPlacerColumns = 2;

const towerUpgraderHeight = 125;
const towerUpgradeButtonWidth = 145;
const towerUpgradeButtonCenter = 280;
const towerUpgradeButtonMargin = 20;

const sellButtonWidth = 70;
const sellButtonHieght = 85;
const sellButtonLocation = [canvas.width - towerPlacerWidth - sellButtonWidth - 10, canvas.height - towerUpgraderHeight + 20];


const playButtonSize = 70;
const playButtonMargin = 20;

const moneySize = 30;
const moneyPos = [700,35];

const roundSize = 30;
const roundPos = [590,35];

const difficultySize = 30;
const difficultyPos = [10,75];

const versionSize = 20;
const versionPos = [10,100];

const testingSize = 20;
const testingPos = [10,120];

const gameOverSize = 60;
const gameOverPos = [400,200];

const maxHealth = 100;
const testingMaxHealth = 9999999;
const healthBarSize = [120,50];

const startingMoney = 400;
const moneyPerRound = 100;
const maxMoney = 1000000;
const maxRound = 200;

const towerTypes = [["normal",200,"Normal"], ["sniper",350,"Sniper"], ["powerful",400,"Powerful"], ["rapidFire",700,"Rapid Fire"],["bomber",500,"Bomber"],["slower", 150,"Slower"],["bank", 800, "Bank"],["wizard", 450, "Wizard"],["thief", 250, "Thief"],["support", 1000, "Support"]];
const towerColors = {"normal": ["#ff9500", "#309f6b"],"powerful": ["#ff00ff", "#9f3030"],"sniper": ["#17d252", "#30669f"], "rapidFire": ["#edde12", "#3ed1af"],"bomber": ["#363636", "#742fad"], "slower": ["#1bb2d4", "#12e079"], "bank": ["#b36f2b", "#ba8f64"], "wizard": ["#8c2bb3", "#2c84c2"],"thief": ["#492d11", "#894e13"],"support": ["#ce421b", "#dc8b21"]};
const towerRanges = {"normal": 100,"powerful": 75,"sniper": 250, "rapidFire": 125, "bomber": 110, "slower": 140, "bank": 0,"wizard": 100,"thief": 75,"support": 100}
const towerUpgrades = {"normal": [[["Range +25",50, ["range"], [25],["#ff9500", "#29b071"]]],[["Speed 1.75x",100, ["attackSpeed"], [-18],["#ff9500", "#25cc7e"]]],[["Well Rounder",650, ["attackSpeed","damage","range"], [-4,2,25],["#ff9500", "#09f238"]],["Rapid Fire",250, ["attackSpeed"], [-10],["#ff9500", "#0defd5"]]]],
                       "powerful": [[["Range +25",150, ["range"], [25],["#ff00ff", "#c31f1f"]]],[["Damage +10",400, ["damage"], [10],["#ff00ff", "#ed0e0e"]]],[["Powerhouse",2300, ["damage","attackSpeed","range"], [30,-20,15],["#ff00ff", "#ed6f0e"]],["UltraAttacker",3200, ["attackSpeed","range","specialAbilities"], [20,-25,["multiAttack",20]],["#ff00ff", "#ed0ea3"]]]],
                       "sniper": [[["Speed 1.5x",150, ["attackSpeed"], [-20],["#17d252", "#266ab4"]]],[["Damage +2",450, ["damage"], [2],["#17d252", "#3280d4"]]],[["One Tapper",1200, ["damage","attackSpeed"], [26,60],["#17d252", "#d7188e"]],["Quick Fire",1000, ["attackSpeed"], [-20],["#17d252", "#18d7b7"]]]], 
                       "rapidFire": [[["Speed 2x",500,["attackSpeed"],[-6],["#edde12", "#26d7ad"]]],[["Damage +3",2400,["damage"],[3],["#edde12", "#1adece"]]],[["Laser",5000,["attackSpeed","damage"],[-2,4],["#edde12", "#1a86de"]],["Multi-Attack",6500,["specialAbilities","range"],[["multiAttack",6],10],["#edde12", "#14de72"]]]],
                       "bomber": [[["Damage +2",300,["damage"],[2],["#363636", "#8725d6"]]],[["Splash +30",600,["specialAbilities"],[["splash",30]],["#363636", "#981aff"]]],[["Huge Power",3000,["damage","specialAbilities", "attackSpeed"],[7,["splash",40],20],["#363636", "#ea1753"]],["Crazy Attacks",4200,["specialAbilities","range","attackSpeed"],[["multiAttack",4],15,-10],["#363636", "#dc17ea"]]]],
                       "slower": [[["Speed 2x",200,["attackSpeed"],[-30],["#1bb2d4", "#12e042"]]],[["Slow Down +3",600,["specialAbilities"],[["slowDown",3]],["#1bb2d4", "#15e012"]]],[["Chain Slow",2600,["specialAbilities", "specialAbilities"],[["chain", 80], ["slowDown", 2]],["#1bb2d4", "#b3e012"]],["Deadly Slow",2000,["damage", "specialAbilities"],[4, ["slowDown", 6]],["#1bb2d4", "#1227e0"]]]],
                       "bank": [[["Money Gen +10",600,["specialAbilities"],[["moneyGen",10]],["#b36f2b", "#d79655"]]],[["Money Gen +20",1200,["specialAbilities"],[["moneyGen",20]],["#b36f2b", "#d88e45"]]],[["Pay Day",2500,["specialAbilities", "attackSpeed"],[["moneyGen", 940], 9],["#b36f2b", "#e6d51a"]],["Super Sell",2000,["specialAbilities", "specialAbilities"],[["sell",0.50], ["moneyGen", 20]],["#b36f2b", "#4bd9ac"]]]],
                       "wizard": [[["Damage +1",300,["damage"],[1],["#8c2bb3", "#2a9dee"]]],[["Speed 2x",550,["attackSpeed"],[-40],["#8c2bb3", "#23d5f0"]]],[["Ultra Chain",1800,["specialAbilities", "range"],[["chain", 900], 250],["#8c2bb3", "#1bce4a"]],["Great Wizard",3400,["specialAbilities", "damage","attackSpeed","range"],[["chain",20], 2,-10,25],["#8c2bb3", "#cf19eb"]]]],
                       "thief": [[["Steal +1",200,["specialAbilities"],[["steal",1]],["#492d11", "#a65708"]]],[["Speed 2x",350,["attackSpeed"],[-40],["#492d11", "#cc6c0c"]]],[["Multi Steal",1800,["specialAbilities", "range","damage"],[["multiAttack", 3], 25,1],["#492d11", "#c9ba0d"]],["Mega Steal",2200,["specialAbilities", "damage","attackSpeed"],[["steal",6], 9,40],["#492d11", "#ce4a08"]]]],
                       "support": [[["Buff Range 1.1x",400,["specialAbilities"],[["buff",["range",0.1]]],["#ce421b", "#f8991c"]]],[["Buff Speed 1.1x",800,["specialAbilities"],[["buff",["attackSpeed",-0.1]]],["#ce421b", "#ee6f0e"]]],[["Final Range",2500,["specialAbilities","specialAbilities","range"],[["buff",["range",0.3]],["buff",["attackSpeed",-0.1]],25],["#ce421b", "#e4d316"]],["Huge Hits",4000,["specialAbilities", "specialAbilities"],[["buff",["attackSpeed",0.6]], ["buff",["damage",1]]],["#ce421b", "#dc21cc"]]]]};

const enemyMoney = {"basic": 1,"fast": 2,"big": 3,"tank": 5,"bullet": 5,"power": 5,"heavy": 10,"strong": 20,"super": 20,"beast": 50,"sonic": 50,"demon": 100,"god": 200};

const segWidth = 40;

const healthLength = 100;

const settingsSize = 50;

const backButtonPos = [160,canvas.height-135];
const resetButtonPos = [325,canvas.height-135];
const homeButtonPos = [490,canvas.height-135];
const settingsButtonsSize = [150, 50];

const gameOverViewButtonPos = [160,canvas.height-215];
const gameOverResetButtonPos = [325,canvas.height-215];
const gameOverHomeButtonPos = [490,canvas.height-215];
const gameOverButtonsSize = [150, 50];

const viewBackButtonSize = [100, 50];
const viewBackButtonPos = [canvas.width-towerPlacerWidth-viewBackButtonSize[0], canvas.height-viewBackButtonSize[1]];

const victoryContinueButtonPos = [160,canvas.height-215];
const victoryResetButtonPos = [325,canvas.height-215];
const victoryHomeButtonPos = [490,canvas.height-215];
const victoryButtonsSize = [150, 50];

const statsTabClosed = {"x": 10, "y": canvas.height-towerUpgraderHeight-40, "width": 100, "height": 40}
const statsTabOpen = {"x": 10, "y": canvas.height-towerUpgraderHeight-240, "width": 100, "height": 40}

const normalPlayButtonSize = 150;
const normalPlayButtonPos = [canvas.width/2-normalPlayButtonSize/2,canvas.height/2-normalPlayButtonSize/4];

const testingPlayButtonSize = 150;
const testingPlayButtonPos = [canvas.width/6-testingPlayButtonSize/2,canvas.height/2-testingPlayButtonSize/4];

const generateMoneyButtonSize = 50
const generateMoneyButtonPos = [210,canvas.height-generateMoneyButtonSize-10];

const changeRoundBoxSize = [250,150];
const changeRoundBoxPos = [canvas.width/2-changeRoundBoxSize[0]/2,canvas.height/2-changeRoundBoxSize[1]/2];
const changeRoundBackButtonSize = [160,40];
const changeRoundBackButtonPos = [changeRoundBoxPos[0]+changeRoundBoxSize[0]/2-changeRoundBackButtonSize[0]/2,changeRoundBoxPos[1]+changeRoundBoxSize[1]-changeRoundBackButtonSize[1]-10];

const changeMoneyBoxSize = [250,150];
const changeMoneyBoxPos = [canvas.width/2-changeMoneyBoxSize[0]/2,canvas.height/2-changeMoneyBoxSize[1]/2];
const changeMoneyBackButtonSize = [160,40];
const changeMoneyBackButtonPos = [changeMoneyBoxPos[0]+changeMoneyBoxSize[0]/2-changeMoneyBackButtonSize[0]/2,changeMoneyBoxPos[1]+changeMoneyBoxSize[1]-changeMoneyBackButtonSize[1]-10];
const changeGenerateMoneyButtonSize = [90,40];
const changeGenerateMoneyButtonPos = [changeMoneyBoxPos[0]+changeMoneyBoxSize[0]-changeGenerateMoneyButtonSize[0]-10,changeMoneyBoxPos[1]+changeMoneyBoxSize[1]/2-changeGenerateMoneyButtonSize[1]/2];

const mapSelectSize = 150;
const mapSelectLocation = [0,canvas.height-mapSelectSize];

const difficultySelectSize = 150;
const difficultySelectLocation = [0,canvas.height-difficultySelectSize-200];

const towerSelectSize = 150;
const towerSelectLocation = [canvas.width-towerSelectSize,canvas.height-towerSelectSize];
const homeTowerBoxSize = 40;

const modeSelectSize = 150;
const modeSelectLocation = [canvas.width-modeSelectSize,canvas.height-modeSelectSize-200];

const homePlaySize = 150;
const homePlayLocation = [canvas.width/2-homePlaySize/2,canvas.height-homePlaySize-50];

const towerSelectorBoxSize = 67;
const towerSelectorBoxMargin = [30,45];

const towerBottomMargin = 70;
const towerTopMargin = 80;

const towerBackButtonSize = [200,50];
const towerBackButtonPos = [canvas.width/2-towerBackButtonSize[0]/2,canvas.height-towerBackButtonSize[1]-15];

const initialSellValue = 0.8;

var map = map1;
var mapIndex = [0,0];
var difficulty = easy;

var enemies = [];
var strongEnemies = [];

var defenders = [];
var attacks = [];
var health = maxHealth;
var money = startingMoney;
var currentRound = 0;
var currentRoundMultiplier = 1;

var selectedDefenderType = ["",1000000000];
var roundEnded = true;
var roundGoing = false;
var roundPlaying = false;

var playSpeed = 1;

var currentMousePos = [0,0];

var gameOver = false;

var selectedDefender = null;

var gameSettings = {
    "keepTowersSelected": false,
    "showRangeOutlines": true,
    "autoStart": false
};

var settingsUI = [
    { "key": "keepTowersSelected", "text": "Keep Towers Selected", "size": [250, 50] },
    { "key": "showRangeOutlines", "text": "Show Range Outlines", "size": [250, 50] },
    { "key": "autoStart", "text": "Auto Start", "size": [250, 50] }
];

var screen = "homeScreen";

var timeCount = 0;
var currentRoundEnemies = [];
var currentRoundIndex = 0;

var statsOpen = false;

var targetingTypes = ["first", "last", "strong", "weak"];

var viewing = false;

var victory = false;

var gamemode = "normal";

var inputLoaded = false;

var changingRound = false;
var changingMoney = false;

var rect = canvas.getBoundingClientRect();

var selectedTowers = [["normal",200,"Normal"], ["sniper",350,"Sniper"], ["powerful",400,"Powerful"], ["rapidFire",700,"Rapid Fire"],["bomber",500,"Bomber"],["slower", 150,"Slower"]];

var sellValue = initialSellValue;

class Enemy {
    constructor(type, healthMultiplier){
        if(type == "basic"){
            this.width = 17;
            this.height = 17;
            this.moveSpeed = 1.5;
            this.health = 1;
            this.damage = 1;
            this.outerColor = "#ff0000";
            this.innerColor = "#cc0000";
        } else if(type == "fast"){
            this.width = 15;
            this.height = 15;
            this.moveSpeed = 3;
            this.health = 1;
            this.damage = 1;
            this.outerColor = "#0000ff";
            this.innerColor = "#0000cc";
        } else if(type == "big"){
            this.width = 18;
            this.height = 18;
            this.moveSpeed = 1.5;
            this.health = 3;
            this.damage = 3;
            this.outerColor = "#00cc00";
            this.innerColor = "#009900";
        } else if(type == "tank"){
            this.width = 22;
            this.height = 22;
            this.moveSpeed = 1;
            this.health = 10;
            this.damage = 5;
            this.outerColor = "#9e419e";
            this.innerColor = "#BF40BF";
        } else if(type == "bullet"){
            this.width = 13;
            this.height = 13;
            this.moveSpeed = 6;
            this.health = 2;
            this.damage = 2;
            this.outerColor = "#222222";
            this.innerColor = "#555555";
        } else if(type == "power"){
            this.width = 18;
            this.height = 18;
            this.moveSpeed = 3;
            this.health = 5;
            this.damage = 5;
            this.outerColor = "#28c2d3";
            this.innerColor = "#00e5ff";
        } else if(type == "heavy"){
            this.width = 25;
            this.height = 25;
            this.moveSpeed = 0.7;
            this.health = 25;
            this.damage = 10;
            this.outerColor = "#d3b928";
            this.innerColor = "#ffd900";
        } else if(type == "strong"){
            this.width = 25;
            this.height = 25;
            this.moveSpeed = 1.2;
            this.health = 50;
            this.damage = 10;
            this.outerColor = "#b96525";
            this.innerColor = "#e69513";
        } else if(type == "super"){
            this.width = 22;
            this.height = 22;
            this.moveSpeed = 2.5;
            this.health = 30;
            this.damage = 10;
            this.outerColor = "#b925a8";
            this.innerColor = "#e613cd";
        } else if(type == "beast"){
            this.width = 30;
            this.height = 30;
            this.moveSpeed = 0.5;
            this.health = 300;
            this.damage = 50;
            this.outerColor = "#971f0f";
            this.innerColor = "#b02e2e";
        } else if(type == "sonic"){
            this.width = 25;
            this.height = 25;
            this.moveSpeed = 5;
            this.health = 60;
            this.damage = 20;
            this.outerColor = "#0c6a90";
            this.innerColor = "#2fa8d7";
        } else if(type == "demon"){
            this.width = 30;
            this.height = 30;
            this.moveSpeed = 2;
            this.health = 250;
            this.damage = 50;
            this.outerColor = "#0c882b";
            this.innerColor = "#1e9f65";
        } else if(type == "god"){
            this.width = 35;
            this.height = 35;
            this.moveSpeed = 0.4;
            this.health = 2000;
            this.damage = 100;
            this.outerColor = "#4a1ea1";
            this.innerColor = "#5d2dbc";
        }
        this.money = enemyMoney[type];
        this.health = Math.round(this.health * healthMultiplier);
        this.maxHealth = this.health;
        if(map["path"][0][4] == "down"){
            this.x = map["path"][0][0] + map["path"][0][2]/2 - this.width/2;
            this.y = -this.height;
        } else if(map["path"][0][4] == "right"){
            this.x = -this.width;
            this.y = map["path"][0][1] + map["path"][0][3]/2 - this.height/2;
        }
        this.trackSegment = 0;
        this.position = 0;
        this.slowDown = {"amount": 1, "time": 0, "damage": {"amount": 0, "defender": null}}
        this.slowDownCount = 0;
    }
    dealDamage(damage,slowDownEffect){
        if(slowDownEffect){
            this.slowDown["time"] = slowDownEffect[0];
            this.slowDown["amount"] = slowDownEffect[1];
            this.slowDown["damage"]["amount"] = slowDownEffect[2];
            this.slowDown["damage"]["defender"] = slowDownEffect[3];
        }

        let prevHealth = this.health;
        this.health -= damage;

        const ratio = Math.max(0, Math.min(1, this.health / prevHealth));
        
        let hex = this.outerColor;
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        r = Math.floor(r * ratio);
        g = Math.floor(g * ratio);
        b = Math.floor(b * ratio);

        const toHex = (n) => n.toString(16).padStart(2, '0');
        this.outerColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`
        
    }
    move(){
        this.slowDownCount++;
        let trackSegment = map["path"][this.trackSegment];
        if(trackSegment[4] == "right"){
            if(this.x + this.width/2 >= trackSegment[0] + trackSegment[2]-25){
                this.trackSegment++;
            }
        } else if(trackSegment[4] == "left"){
            if(this.x + this.width/2 <= trackSegment[0]+25){
                this.trackSegment++;
            }
        } else if(trackSegment[4] == "down"){
            if(this.y + this.height/2 >= trackSegment[1] + trackSegment[3]-25){
                this.trackSegment++;
            }
        } else if(trackSegment[4] == "up"){
            if(this.y + this.height/2 <= trackSegment[1]+25){
                this.trackSegment++;
            }
        }
        if(this.trackSegment >= map["path"].length && this.x < canvas.width-towerPlacerWidth && this.x > -this.width && this.y < canvas.height && this.y > -this.height){
            this.trackSegment--;
        }
        let moveSpeed = this.moveSpeed*this.slowDown["amount"]
        if(trackSegment[4] == "right"){
            this.x += moveSpeed*playSpeed;
        } else if(trackSegment[4] == "left"){
            this.x -= moveSpeed*playSpeed;
        } else if(trackSegment[4] == "down"){
            this.y += moveSpeed*playSpeed;
        } else if(trackSegment[4] == "up"){
            this.y -= moveSpeed*playSpeed;
        }
        this.position += moveSpeed*playSpeed;

        if(this.slowDownCount % 10 == 0){
            this.slowDown["time"] -= 1;
            if(this.slowDown["time"] > 0){
                this.slowDown["damage"]["defender"].damageDelt += Math.min(this.health, this.slowDown["damage"]["amount"])
                this.dealDamage(this.slowDown["damage"]["amount"]);
                if(this.health <= 0){
                    enemies.splice(enemies.indexOf(this),1);
                }
            } else if(this.slowDown["time"] <= 0){
                this.slowDown["amount"] = 1;
                this.slowDown["damage"]["amount"] = 0;
                this.slowDown["damage"]["defender"] = null;
            }
        }
    }
}

class Defender {
    constructor(x,y,type){
        this.width = 40;
        this.height = 40;
        this.x = x- this.width/2;
        this.y = y - this.height/2;
        this.attackCooldown = 0;
        this.innerColor = towerColors[type][1];
        this.outerColor = towerColors[type][0];
        this.range = towerRanges[type];
        this.stage = 0;
        this.upgrades = towerUpgrades[type];
        this.type = type;
        this.damageDelt = 0;
        this.moneyMade = 0;
        this.target = "first";
        this.buff = {"attackSpeed": 1, "damage": 1, "range": 1};
        if(type == towerTypes[0][0]){
            this.attackSpeed = 40;
            this.damage = 1;
            this.cost = towerTypes[0][1]*difficulty[1];
            this.specialAbilities = [];
        } else if(type == towerTypes[1][0]){
            this.attackSpeed = 60;
            this.damage = 2;
            this.cost = towerTypes[1][1]*difficulty[1];
            this.specialAbilities = [];
        } else if(type == towerTypes[2][0]){
            this.attackSpeed = 80;
            this.damage = 5;
            this.cost = towerTypes[2][1]*difficulty[1];
            this.specialAbilities = [];
        } else if(type == towerTypes[3][0]){
            this.attackSpeed = 12;
            this.damage = 1;
            this.cost = towerTypes[3][1]*difficulty[1];
            this.specialAbilities = [];
        } else if(type == towerTypes[4][0]){
            this.attackSpeed = 50;
            this.damage = 2;
            this.cost = towerTypes[4][1]*difficulty[1];
            this.specialAbilities = [["splash",50]];
        } else if(type == towerTypes[5][0]){
            this.attackSpeed = 60;
            this.damage = 0;
            this.cost = towerTypes[5][1]*difficulty[1];
            this.specialAbilities = [["slowDown",1]];
        } else if(type == towerTypes[6][0]){
            this.attackSpeed = 1;
            this.damage = 0;
            this.cost = towerTypes[6][1]*difficulty[1];
            this.specialAbilities = [["moneyGen",10]];
        } else if(type == towerTypes[7][0]){
            this.attackSpeed = 80;
            this.damage = 1;
            this.cost = towerTypes[7][1]*difficulty[1];
            this.specialAbilities = [["chain",100]];
        } else if(type == towerTypes[8][0]){
            this.attackSpeed = 80;
            this.damage = 1;
            this.cost = towerTypes[8][1]*difficulty[1];
            this.specialAbilities = [["steal",1]];
        } else if(type == towerTypes[9][0]){
            this.attackSpeed = 0;
            this.damage = 0;
            this.cost = towerTypes[9][1]*difficulty[1];
            this.specialAbilities = [["buff",{"attackSpeed": 1, "damage": 1, "range": 1.1}]];
        }
    }
}

window.addEventListener('mousemove', (event) => {
    currentMousePos = getMousePosition(canvas, event);
});


canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if(screen == "gameScreen"){
        const mousePos = getMousePosition(canvas, event);
        for (let i = 0; i < defenders.length; i++) {
            let defender = defenders[i];

            let btnLeft1 = defender.x;
            let btnRight1 = defender.x + defender.width;
            let btnTop1 = defender.y;
            let btnBottom1 = defender.y + defender.height;
            if (mousePos.x > btnLeft1 && mousePos.x < btnRight1 && 
            mousePos.y > btnTop1 && mousePos.y < btnBottom1) {
                money += Math.round(defender.cost*sellValue);
                defenders.splice(i,1);
                const indexSell = defender["specialAbilities"].findIndex(sublist => sublist[0] === "sell");
                if(indexSell != -1){
                    sellValue = (sellValue - (1-defender["specialAbilities"][indexSell][1]))/defender["specialAbilities"][indexSell][1];
                }
                selectedDefender = null;
            }
        }
    }
});

canvas.addEventListener('click', function(event) {
    const mousePos = getMousePosition(canvas, event);
    
    if(screen == "gameScreen"){
        if(changingMoney){
            let btnLeft = changeMoneyBackButtonPos[0];
            let btnRight = changeMoneyBackButtonPos[0] + changeMoneyBackButtonSize[0];
            let btnTop = changeMoneyBackButtonPos[1];
            let btnBottom = changeMoneyBackButtonPos[1] + changeMoneyBackButtonSize[1];

            let btnLeft1 = changeGenerateMoneyButtonPos[0];
            let btnRight1 = changeGenerateMoneyButtonPos[0] + changeGenerateMoneyButtonSize[0];
            let btnTop1 = changeGenerateMoneyButtonPos[1];
            let btnBottom1 = changeGenerateMoneyButtonPos[1] + changeGenerateMoneyButtonSize[1];

            if(mousePos.x > btnLeft && mousePos.x < btnRight && 
            mousePos.y > btnTop && mousePos.y < btnBottom){
                changingMoney = false;
                money = parseFloat(document.getElementById("inputBox").value);
                inputLoaded = false;
                deleteInputBox();
            } else if(mousePos.x > btnLeft1 && mousePos.x < btnRight1 && 
            mousePos.y > btnTop1 && mousePos.y < btnBottom1){
                generateMoney();
            }
            return;
        } else if(changingRound){
            let btnLeft = changeRoundBackButtonPos[0];
            let btnRight = changeRoundBackButtonPos[0] + changeRoundBackButtonSize[0];
            let btnTop = changeRoundBackButtonPos[1];
            let btnBottom = changeRoundBackButtonPos[1] + changeRoundBackButtonSize[1];

            if(mousePos.x > btnLeft && mousePos.x < btnRight && 
            mousePos.y > btnTop && mousePos.y < btnBottom){
                changingRound = false;
                currentRound = document.getElementById("inputBox").value;
                inputLoaded = false;
                deleteInputBox();
            }
            return;
        }
        if(victory){
            let btnLeftContinue = victoryContinueButtonPos[0];
            let btnRightContinue = victoryContinueButtonPos[0] + gameOverButtonsSize[0];
            let btnTopContinue = victoryContinueButtonPos[1];
            let btnBottomContinue = victoryContinueButtonPos[1] + gameOverButtonsSize[1];

            let btnLeftReset = victoryResetButtonPos[0];
            let btnRightReset = victoryResetButtonPos[0] + gameOverButtonsSize[0];
            let btnTopReset = victoryResetButtonPos[1];
            let btnBottomReset = victoryResetButtonPos[1] + gameOverButtonsSize[1];

            let btnLeftHome = victoryHomeButtonPos[0];
            let btnRightHome = victoryHomeButtonPos[0] + gameOverButtonsSize[0];
            let btnTopHome = victoryHomeButtonPos[1];
            let btnBottomHome = victoryHomeButtonPos[1] + gameOverButtonsSize[1];

            if(mousePos.x > btnLeftContinue && mousePos.x < btnRightContinue && 
            mousePos.y > btnTopContinue && mousePos.y < btnBottomContinue){
                victory = false;
            } else if(mousePos.x > btnLeftReset && mousePos.x < btnRightReset && 
            mousePos.y > btnTopReset && mousePos.y < btnBottomReset){
                resetGame();
                victory = false;
                screen = "gameScreen";
            } else if(mousePos.x > btnLeftHome && mousePos.x < btnRightHome && 
            mousePos.y > btnTopHome && mousePos.y < btnBottomHome){
                resetGame();
                victory = false;
                screen = "homeScreen";
            }
            return;
        }
        if(gameOver){
            if(viewing){
                let btnLeftView = viewBackButtonPos[0];
                let btnRightView = viewBackButtonPos[0]+viewBackButtonSize[0];
                if(selectedDefender){
                    var btnTopView = viewBackButtonPos[1]-towerUpgraderHeight;
                    var btnBottomView = viewBackButtonPos[1]+viewBackButtonPos[1]-towerUpgraderHeight;
                } else {
                    var btnTopView = viewBackButtonPos[1];
                    var btnBottomView = viewBackButtonPos[1]+viewBackButtonPos[1];
                }

                if(statsOpen){
                    var btnLeftStats = statsTabOpen["x"];
                    var btnRightStats = statsTabOpen["x"] + statsTabOpen["width"];
                    var btnTopStats = statsTabOpen["y"];
                    var btnBottomStats = statsTabOpen["y"] + statsTabOpen["height"];
                } else {
                    var btnLeftStats = statsTabClosed["x"];
                    var btnRightStats = statsTabClosed["x"] + statsTabClosed["width"];
                    var btnTopStats = statsTabClosed["y"];
                    var btnBottomStats = statsTabClosed["y"] + statsTabClosed["height"];
                }

                if(mousePos.x > btnLeftView && mousePos.x < btnRightView && 
                mousePos.y > btnTopView && mousePos.y < btnBottomView){
                    viewing = false;
                } else if(mousePos.x > btnLeftStats && mousePos.x < btnRightStats && 
                mousePos.y > btnTopStats && mousePos.y < btnBottomStats){ 
                    statsOpen = !statsOpen;
                } else {
                    selectDefender(mousePos);
                }
            } else {
                let btnLeftView = gameOverViewButtonPos[0];
                let btnRightView = gameOverViewButtonPos[0] + gameOverButtonsSize[0];
                let btnTopView = gameOverViewButtonPos[1];
                let btnBottomView = gameOverViewButtonPos[1] + gameOverButtonsSize[1];

                let btnLeftReset = gameOverResetButtonPos[0];
                let btnRightReset = gameOverResetButtonPos[0] + gameOverButtonsSize[0];
                let btnTopReset = gameOverResetButtonPos[1];
                let btnBottomReset = gameOverResetButtonPos[1] + gameOverButtonsSize[1];

                let btnLeftHome = gameOverHomeButtonPos[0];
                let btnRightHome = gameOverHomeButtonPos[0] + gameOverButtonsSize[0];
                let btnTopHome = gameOverHomeButtonPos[1];
                let btnBottomHome = gameOverHomeButtonPos[1] + gameOverButtonsSize[1];

                if(mousePos.x > btnLeftView && mousePos.x < btnRightView && 
                mousePos.y > btnTopView && mousePos.y < btnBottomView){
                    viewing = true;
                } else if(mousePos.x > btnLeftReset && mousePos.x < btnRightReset && 
                mousePos.y > btnTopReset && mousePos.y < btnBottomReset){
                    resetGame();
                    screen = "gameScreen";
                } else if(mousePos.x > btnLeftHome && mousePos.x < btnRightHome && 
                mousePos.y > btnTopHome && mousePos.y < btnBottomHome){
                    resetGame();
                    screen = "homeScreen";
                }
            }
            return;
        }

        if(gamemode == "testing" && selectedDefenderType[0] == ""){
            let btnLeftMoney = moneyPos[0]-60;
            let btnRightMoney = moneyPos[0]+60;
            let btnTopMoney = moneyPos[1]-20;
            let btnBottomMoney = moneyPos[1]+20;

            let btnLeftRound = roundPos[0]-50;
            let btnRightRound = roundPos[0]+10;
            let btnTopRound = roundPos[1]-20;
            let btnBottomRound = roundPos[1]+20;   

            if(mousePos.x > btnLeftMoney && mousePos.x < btnRightMoney && 
            mousePos.y > btnTopMoney && mousePos.y < btnBottomMoney){
                changingMoney = true;
            } else if(mousePos.x > btnLeftRound && mousePos.x < btnRightRound && 
            mousePos.y > btnTopRound && mousePos.y < btnBottomRound){
                changingRound = true;
            }
        }

        let btnLeft0 = 0;
        let btnRight0 = settingsSize;
        let btnTop0 = 0;
        let btnBottom0 = settingsSize;

        if(mousePos.x > btnLeft0 && mousePos.x < btnRight0 && 
        mousePos.y > btnTop0 && mousePos.y < btnBottom0){
            screen = "settingsScreen";
            return;
        }

        let btnLeft1 = canvas.width - playButtonSize - playButtonMargin;
        let btnRight1 = canvas.width - playButtonMargin;
        let btnTop1 = canvas.height - playButtonSize - playButtonMargin;
        let btnBottom1 = canvas.height - playButtonMargin;
        
        let btnLeft2 = canvas.width - (playButtonSize + playButtonMargin)*2;
        let btnRight2 = canvas.width - playButtonMargin - playButtonMargin*2;

        let btnLeft3 = canvas.width - towerPlacerWidth;

        let btnBottom4 = canvas.height - towerUpgraderHeight

        if(statsOpen){
            var btnLeft5 = statsTabOpen["x"];
            var btnRight5 = statsTabOpen["x"] + statsTabOpen["width"];
            var btnTop5 = statsTabOpen["y"];
            var btnBottom5 = statsTabOpen["y"] + statsTabOpen["height"];
        } else {
            var btnLeft5 = statsTabClosed["x"];
            var btnRight5 = statsTabClosed["x"] + statsTabClosed["width"];
            var btnTop5 = statsTabClosed["y"];
            var btnBottom5 = statsTabClosed["y"] + statsTabClosed["height"];
        }


        if (mousePos.y > btnTop1 && mousePos.y < btnBottom1 && mousePos.x > btnLeft3 && !roundGoing) {
            if(mousePos.x > btnLeft1 && mousePos.x < btnRight1){
                currentRound++;
                playRound(currentRound,1);
            } else if(mousePos.x > btnLeft2 && mousePos.x < btnRight2){
                currentRound++;
                playRound(currentRound,2);
            }
        } else if(mousePos.x > btnLeft5 && mousePos.x < btnRight5 && 
        mousePos.y > btnTop5 && mousePos.y < btnBottom5){ 
            statsOpen = !statsOpen;
        }else if(mousePos.x > btnLeft3){
            selectDefenderType(mousePos);
        } else if(selectedDefender !== null && mousePos.y > btnBottom4){
            upgradeDefender(mousePos);
        } else if(selectedDefenderType[0] == ""){
            selectDefender(mousePos);
        } else {
            placeDefender(mousePos);
        }
    } else if(screen == "mapScreen"){
        mapNum = maps.length;
        for(let i = 0; i < mapNum; i++){
            mapDifficultyNum = maps[i].length;
            for(let t = 0; t < mapDifficultyNum; t++){
                currentMap = maps[i][t][0];

                let x = canvas.width / (mapNum+1)*(i+1) - mapBoxSize[0] / 2;
                let y = canvas.height / (mapDifficultyNum+1)*(t+1)+(20*t)-20;

                let btnLeft = x;
                let btnRight = x+mapBoxSize[0];
                let btnTop = y;
                let btnBottom = y+mapBoxSize[0];

                if (mousePos.x > btnLeft && mousePos.x < btnRight && 
                mousePos.y > btnTop && mousePos.y < btnBottom){
                    selectMap(i,t);
                }
            }
        }
    } else if(screen == "difficultyScreen"){
        let difficultyNum = difficulties.length
        for(let i = 0; i < difficultyNum; i++){
            let x = canvas.width / (difficultyNum+1)*(i+1) - difficultyBoxSize[0] / 2
            let y = canvas.height / 2 - difficultyBoxSize[1] / 2

            let btnLeft = x;
            let btnRight = x+difficultyBoxSize[0];
            let btnTop = y;
            let btnBottom = y+difficultyBoxSize[0];
            if (mousePos.x > btnLeft && mousePos.x < btnRight && 
            mousePos.y > btnTop && mousePos.y < btnBottom){
                selectDifficulty(i);
            }
        }
    } else if(screen == "settingsScreen"){
        let btnLeft1 = backButtonPos[0];
        let btnRight1 = backButtonPos[0] + settingsButtonsSize[0];
        let btnTop1 = backButtonPos[1];
        let btnBottom1 = backButtonPos[1] + settingsButtonsSize[1];

        let btnLeft2 = resetButtonPos[0];
        let btnRight2 = resetButtonPos[0] + settingsButtonsSize[0];
        let btnTop2 = resetButtonPos[1];
        let btnBottom2 = resetButtonPos[1] + settingsButtonsSize[1];

        let btnLeft3 = homeButtonPos[0];
        let btnRight3 = homeButtonPos[0] + settingsButtonsSize[0];
        let btnTop3 = homeButtonPos[1];
        let btnBottom3 = homeButtonPos[1] + settingsButtonsSize[1];

        if(mousePos.x > btnLeft1 && mousePos.x < btnRight1 && 
        mousePos.y > btnTop1 && mousePos.y < btnBottom1){
            screen = "gameScreen";
        } else if(mousePos.x > btnLeft2 && mousePos.x < btnRight2 && 
        mousePos.y > btnTop2 && mousePos.y < btnBottom2){
            resetGame();
            screen = "gameScreen";
        } else if(mousePos.x > btnLeft3 && mousePos.x < btnRight3 && 
        mousePos.y > btnTop3 && mousePos.y < btnBottom3){
            resetGame();
            screen = "homeScreen";
        } else {
            checkSettingsClick(mousePos);
        }
    } else if(screen == "modeScreen"){
        let btnLeft1 = testingPlayButtonPos[0];
        let btnRight1 = testingPlayButtonPos[0] + testingPlayButtonSize;
        let btnTop1 = testingPlayButtonPos[1];
        let btnBottom1 = testingPlayButtonPos[1] + testingPlayButtonSize;

        let btnLeft2 = normalPlayButtonPos[0];
        let btnRight2 = normalPlayButtonPos[0] + normalPlayButtonSize;
        let btnTop2 = normalPlayButtonPos[1];
        let btnBottom2 = normalPlayButtonPos[1] + normalPlayButtonSize;

        let btnLeft3 = generateMoneyButtonPos[0];
        let btnRight3 = generateMoneyButtonPos[0] + generateMoneyButtonSize;
        let btnTop3 = generateMoneyButtonPos[1];
        let btnBottom3 = generateMoneyButtonPos[1] + generateMoneyButtonSize;

        if(mousePos.x > btnLeft1 && mousePos.x < btnRight1 && 
        mousePos.y > btnTop1 && mousePos.y < btnBottom1){
            screen = "homeScreen";
            gamemode = "testing";
            health = testingMaxHealth;
        } else if(mousePos.x > btnLeft2 && mousePos.x < btnRight2 && 
        mousePos.y > btnTop2 && mousePos.y < btnBottom2){
            screen = "homeScreen";
            gamemode = "normal";
            loadNormalGame();
        } else if(mousePos.x > btnLeft3 && mousePos.x < btnRight3 && 
        mousePos.y > btnTop3 && mousePos.y < btnBottom3){
            generateMoney();
        }
    } else if(screen == "homeScreen"){
        let btnLeftDifficulty = difficultySelectLocation[0];
        let btnRightDifficulty = difficultySelectLocation[0] + difficultySelectSize;
        let btnTopDifficulty = difficultySelectLocation[1];
        let btnBottomDifficulty = difficultySelectLocation[1] + difficultySelectSize;

        let btnLeftMap = mapSelectLocation[0];
        let btnRightMap = mapSelectLocation[0] + mapSelectSize;
        let btnTopMap = mapSelectLocation[1];
        let btnBottomMap = mapSelectLocation[1] + mapSelectSize;

        let btnLeftMode = modeSelectLocation[0];
        let btnRightMode = modeSelectLocation[0] + modeSelectSize;
        let btnTopMode = modeSelectLocation[1];
        let btnBottomMode = modeSelectLocation[1] + modeSelectSize;

        let btnLeftTowers = towerSelectLocation[0];
        let btnRightTowers = towerSelectLocation[0] + towerSelectSize;
        let btnTopTowers = towerSelectLocation[1];
        let btnBottomTowers = towerSelectLocation[1] + towerSelectSize;

        let btnLeftPlay = homePlayLocation[0];
        let btnRightPlay = homePlayLocation[0] + homePlaySize;
        let btnTopPlay = homePlayLocation[1];
        let btnBottomPlay = homePlayLocation[1] + homePlaySize;

        if (mousePos.x >= btnLeftDifficulty && mousePos.x <= btnRightDifficulty && 
        mousePos.y >= btnTopDifficulty && mousePos.y <= btnBottomDifficulty) {
            screen = "difficultyScreen";
        } else if (mousePos.x >= btnLeftMap && mousePos.x <= btnRightMap && 
        mousePos.y >= btnTopMap && mousePos.y <= btnBottomMap) {
            screen = "mapScreen";
        } else if (mousePos.x >= btnLeftMode && mousePos.x <= btnRightMode && 
        mousePos.y >= btnTopMode && mousePos.y <= btnBottomMode) {
            screen = "modeScreen";
        } else if (mousePos.x >= btnLeftTowers && mousePos.x <= btnRightTowers && 
        mousePos.y >= btnTopTowers && mousePos.y <= btnBottomTowers) {
            screen = "towerScreen";
        } else if (mousePos.x >= btnLeftPlay && mousePos.x <= btnRightPlay && 
        mousePos.y >= btnTopPlay && mousePos.y <= btnBottomPlay) {
            screen = "gameScreen";
        }
    } else if(screen == "towerScreen"){
        let btnLeftBack = towerBackButtonPos[0];
        let btnRightBack = towerBackButtonPos[0] + towerBackButtonSize[0];
        let btnTopBack = towerBackButtonPos[1];
        let btnBottomBack = towerBackButtonPos[1] + towerBackButtonSize[1];
        if (mousePos.x >= btnLeftBack && mousePos.x <= btnRightBack && 
        mousePos.y >= btnTopBack && mousePos.y <= btnBottomBack) {
            screen = "homeScreen";
        } else {
            selectTower(mousePos);
        }
    }
});

function getMousePosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function checkSettingsClick(mousePos){
    for(let i = 0; i < settingsUI.length; i++){
        let setting = settingsUI[i]
        let x = canvas.width/2 - setting["size"][0]/2;
        let y = canvas.height / 3.6 + (setting["size"][1]+10)*i;

        let btnLeft = x;
        let btnRight = x + setting["size"][0];
        let btnTop = y;
        let btnBottom = y + setting["size"][1];

        if(mousePos.x > btnLeft && mousePos.x < btnRight && 
            mousePos.y > btnTop && mousePos.y < btnBottom){
                gameSettings[setting["key"]] = !gameSettings[setting["key"]];
        }
    }
}

function selectDefenderType(mousePos){
    for(let i = 0; i < towerPlacerRows; i++){
        for(let t = 0; t < towerPlacerColumns; t++){
            let pos = getTowerBoxLocation(i,t);
            let btnLeft = pos[0];
            let btnRight = pos[0] + towerBoxSize;
            let btnTop = pos[1];
            let btnBottom = pos[1] + towerBoxSize;
            if (mousePos.x > btnLeft && mousePos.x < btnRight && 
            mousePos.y > btnTop && mousePos.y < btnBottom) {
                if(selectedTowers.length > i*towerPlacerColumns+t){
                    if(selectedDefenderType != selectedTowers[i*towerPlacerColumns+t] && selectedTowers[i*towerPlacerColumns+t][1]*difficulty[1] <= money){
                        selectedDefenderType = selectedTowers[i*towerPlacerColumns+t];
                    } else {
                        selectedDefenderType = ["",1000000000];
                    }
                }
            }
        }
    }
}

function upgradeDefender(mousePos){
    let btnLeft = sellButtonLocation[0];
    let btnRight = sellButtonLocation[0] + sellButtonWidth;
    let btnTop = sellButtonLocation[1];
    let btnBottom = sellButtonLocation[1] + sellButtonHieght;
    if (mousePos.x > btnLeft && mousePos.x < btnRight && 
    mousePos.y > btnTop && mousePos.y < btnBottom) {
        let index = 0;
        for(let i = 0; i < defenders.length; i++){
            if(defenders[i] === selectedDefender){
                index = i;
            }
        }
        money += Math.round(selectedDefender.cost*sellValue);
        defenders.splice(index,1);
        const indexSell = selectedDefender["specialAbilities"].findIndex(sublist => sublist[0] === "sell");
        if(indexSell != -1){
            sellValue = (sellValue - (1-selectedDefender["specialAbilities"][indexSell][1]))/selectedDefender["specialAbilities"][indexSell][1];
        }
        selectedDefender = null;
        return;
    }
    btnLeft = 100;
    btnRight = 180;
    if (mousePos.x > btnLeft && mousePos.x < btnRight) {
        for(let i = 0; i < targetingTypes.length; i++){
            btnTop = canvas.height-towerUpgraderHeight+i*30+5;
            btnBottom = canvas.height-towerUpgraderHeight+i*30+31;
            if(mousePos.y > btnTop && mousePos.y < btnBottom){
                selectedDefender.target = targetingTypes[i];
            }
        }
    }

    const allUpgradeData = towerUpgrades[selectedDefender.type];
    if (selectedDefender.stage < allUpgradeData.length) {
        upgradeData = allUpgradeData[selectedDefender.stage];
        for(let i = 0; i < upgradeData.length; i++){
            let xPos = towerUpgradeButtonCenter + (i - (allUpgradeData[selectedDefender.stage].length/2-0.5))*(towerUpgradeButtonWidth+towerUpgradeButtonMargin)

            btnLeft = xPos;
            btnRight = xPos + towerUpgradeButtonWidth;
            btnTop = canvas.height - towerUpgraderHeight + 20;
            btnBottom = canvas.height - 20;

            if (mousePos.x > btnLeft && mousePos.x < btnRight && 
                mousePos.y > btnTop && mousePos.y < btnBottom) {
                
                let cost = upgradeData[i][1]*difficulty[1];
                let statsToUpgrade = upgradeData[i][2];
                let amounts = upgradeData[i][3];
                let colors = upgradeData[i][4];
                
                if (money >= cost) {
                    for(let t = 0; t < statsToUpgrade.length; t++){
                        if(statsToUpgrade[t] == "specialAbilities"){
                            if(amounts[t][0] == "sell"){
                                sellValue = (sellValue*amounts[t][1]) + (1-amounts[t][1]);
                            }
                            if(amounts[t][0] == "buff"){
                                const index = selectedDefender["specialAbilities"].findIndex(sublist => sublist[0] === "buff");
                                if (index !== -1) {
                                    selectedDefender["specialAbilities"][index][1][amounts[t][1][0]] = Math.round((selectedDefender["specialAbilities"][index][1][amounts[t][1][0]]+amounts[t][1][1])*100)/100;
                                } else {
                                    selectedDefender["specialAbilities"].push(amounts[t]);
                                }
                            } else {
                                const index = selectedDefender["specialAbilities"].findIndex(sublist => sublist[0] === amounts[t][0]);
                                if (index !== -1) {
                                    selectedDefender["specialAbilities"][index][1] += amounts[t][1];
                                } else {
                                    selectedDefender["specialAbilities"].push(amounts[t]);
                                }
                            }
                        } else {
                            selectedDefender[statsToUpgrade[t]] += amounts[t];
                            if(statsToUpgrade[t] == "attackSpeed"){
                                selectedDefender.attackCooldown = Math.round(selectedDefender.attackSpeed * selectedDefender["buff"]["attackSpeed"]);
                            }
                        }
                    }
                    selectedDefender.outerColor = colors[0];
                    selectedDefender.innerColor =  colors[1];
                    selectedDefender.stage += 1;
                    selectedDefender.cost += cost;
                    money -= cost;
                    return;
                }
            }
        }
    }
}

function selectDefender(mousePos){
    if(selectedDefender !== null){
        selectedDefender = null;
        return;
    }
    for (let i = 0; i < defenders.length; i++) {
        let defender = defenders[i]

        let btnLeft1 = defender.x;
        let btnRight1 = defender.x + defender.width;
        let btnTop1 = defender.y;
        let btnBottom1 = defender.y + defender.height;
        if (mousePos.x > btnLeft1 && mousePos.x < btnRight1 && 
        mousePos.y > btnTop1 && mousePos.y < btnBottom1) {
            selectedDefender = defender;
        }
    }
}

function placeDefender(mousePos) {
    const mouseX = mousePos.x;
    const mouseY = mousePos.y;

    if (mouseX > canvas.width - towerPlacerWidth) {
        return; 
    }

    for (let i = 0; i < map["path"].length; i++) {
        const seg = map["path"][i];
        if (mouseX > seg[0] - segWidth/2 && mouseX < seg[0] + seg[2] + segWidth/2  &&
            mouseY > seg[1] - segWidth/2 && mouseY < seg[1] + seg[3] + segWidth/2) {
            return;
        }
    }

    for (let i = 0; i < defenders.length; i++) {
        const d = defenders[i];
        
        if (mouseX > d.x - d.width/2 && mouseX < d.x + d.width*1.5 &&
            mouseY > d.y - d.width/2 && mouseY < d.y + d.width*1.5) {
            return;
        }
    }

    if (money >= selectedDefenderType[1]*difficulty[1]) {
        money -= selectedDefenderType[1]*difficulty[1];
        defenders.push(new Defender(mouseX, mouseY,selectedDefenderType[0]));
        if(!gameSettings["keepTowersSelected"]){
            selectedDefenderType = ["",1000000000];
        }
    }
}

function selectMap(difficulty,num){
    map = maps[difficulty][num][0];
    mapIndex[0] = num;
    mapIndex[1] = difficulty;
    screen = "homeScreen";
}

function selectDifficulty(num){
    difficulty = difficulties[num];
    screen = "homeScreen";
}

function generateMoney(){
    if(screen == "modeScreen"){
        let inputRound = document.getElementById("inputRound");
        if(inputRound && inputRound.value <= 100){
            let currentMoney = startingMoney;
            for(let i = 0; i < inputRound.value; i++){
                let round = rounds[i+1];
                for(let t = 0; t < round.length; t++){
                    let enemySpawn = round[t];
                    let enemyCash = enemyMoney[enemySpawn["enemyType"]];
                    currentMoney += enemyCash;
                }
                currentMoney += moneyPerRound;
            }
            let inputMoney = document.getElementById("inputMoney");
            if(inputMoney){
                inputMoney.value = currentMoney;
            }
        }
    } else {
        let inputRound = currentRound;
        if(inputRound <= 100){
            let currentMoney = startingMoney;
            for(let i = 0; i < inputRound; i++){
                let round = rounds[i+1];
                for(let t = 0; t < round.length; t++){
                    let enemySpawn = round[t];
                    let enemyCash = enemyMoney[enemySpawn["enemyType"]];
                    currentMoney += enemyCash;
                }
                currentMoney += moneyPerRound;
            }
            let inputMoney = document.getElementById("inputBox");
            if(inputMoney){
                inputMoney.value = currentMoney;
            }
        }
    }
}

function selectTower(mousePos){
    var y = towerTopMargin+towerSelectorBoxMargin[1];
    var x = towerSelectorBoxMargin[0];
    var count = 0;

    while(y+towerSelectorBoxSize < canvas.height-towerBottomMargin){
        while(x+towerSelectorBoxSize < canvas.width){
            let btnLeft = x;
            let btnRight = x + towerSelectorBoxSize;
            let btnTop = y;
            let btnBottom = y + towerSelectorBoxSize;
            if (mousePos.x >= btnLeft && mousePos.x <= btnRight && 
            mousePos.y >= btnTop && mousePos.y <= btnBottom && count < towerTypes.length) {
                if(selectedTowers.some(tower => tower[0] === towerTypes[count][0])){
                    selectedTowers.splice(selectedTowers.findIndex(tower => tower[0] === towerTypes[count][0]),1);
                } else if(selectedTowers.length < 6){
                    selectedTowers.splice(count,0,towerTypes[count]);
                }
            }
            x += towerSelectorBoxSize + towerSelectorBoxMargin[0];
            count++;
        }
        x = towerSelectorBoxMargin[0];
        y += towerSelectorBoxSize + towerSelectorBoxMargin[1];
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawTrack();
    drawSettings();
    drawHealthBar();
    drawDefenders();
    drawEnemies();
    drawAttacks();
    drawDefenderOutline();
    drawTowerUpgrader();
    drawTowerPlacer();
    drawMoney();
    drawRound();
    drawDifficultyGameText();
    drawVersionText();
    if(gamemode == "testing"){
        drawTestingText();
    }
}

function drawBackground(){
    ctx.fillStyle = map["backgroundColor"];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawTrack(){
    ctx.fillStyle = map["trackColor"];
    for(let i = 0; i < map["path"].length; i++){
        ctx.fillRect(map["path"][i][0],map["path"][i][1],map["path"][i][2],map["path"][i][3]);
    }
}

function drawSettings(){
    ctx.fillStyle = '#af855b';
    ctx.fillRect(0,0,settingsSize,settingsSize);

    drawCircle(settingsSize/2, settingsSize/2, (settingsSize-20)/2, "#b0b0b0", "#b0b0b0"); 

    drawRotatedRect(Math.round(settingsSize/2), Math.round(settingsSize/2), 42, 10, 30, "#b0b0b0");
    drawRotatedRect(Math.round(settingsSize/2), Math.round(settingsSize/2), 42, 10, 90, "#b0b0b0");
    drawRotatedRect(Math.round(settingsSize/2), Math.round(settingsSize/2), 42, 10, 150, "#b0b0b0");

    drawCircle(settingsSize/2, settingsSize/2, Math.round((settingsSize-35)/2), "#dddddd", "#dddddd"); 
}

function drawRotatedRect(x, y, width, height, degrees, color) {
      const radians = degrees * Math.PI / 180;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(radians);
      
      ctx.fillStyle = color;
      ctx.fillRect(-width / 2, -height / 2, width, height); 
      
      ctx.restore();
    }

function drawHealthBar(){
    ctx.fillStyle = '#232323';
    ctx.fillRect(settingsSize,0,healthBarSize[0], healthBarSize[1]);
    
    if(health > 0){
        ctx.fillStyle = '#00ff00';
        if(gamemode == "testing"){
            ctx.fillRect(settingsSize+10,10,Math.round(healthLength*(health/testingMaxHealth)), healthBarSize[1]-20);
        } else {
            ctx.fillRect(settingsSize+10,10,Math.round(healthLength*(health/maxHealth)), healthBarSize[1]-20);
        }
    }

    ctx.font = `bold 26px serif`;
    ctx.fillStyle = '#00ff00';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${health}`, settingsSize+healthBarSize[0]+8, healthBarSize[1]/2);
}

function drawDefenders(){
    for (let i = 0; i < defenders.length; i++) {
        let defender = defenders[i];
        let x = Math.round(defender.x);
        let y = Math.round(defender.y)
        ctx.fillStyle = defender.outerColor;
        ctx.fillRect(x, y, defender.width, defender.height);
        ctx.fillStyle = defender.innerColor;
        ctx.fillRect(x+5, y+5, defender.width-10, defender.height-10);

        if(gameSettings["showRangeOutlines"]){
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(x + defender.width/2, y + defender.height/2, Math.round(defender.range*defender["buff"]["range"]), 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
            ctx.stroke();
        }
    }
}

function drawEnemies(){
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        let borderWidth = Math.round(enemy.width*1/10+0.5);
        ctx.fillStyle = enemy.outerColor;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        ctx.fillStyle = enemy.innerColor;
        ctx.fillRect(enemy.x+borderWidth, enemy.y+borderWidth, enemy.width-borderWidth*2, enemy.height-borderWidth*2);

        if(enemy["slowDown"]["amount"] != 1){
            ctx.fillStyle = "#ffff00aa";
            ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height/3);
        }
    }
}

function drawAttacks(){
    for(let i = 0; i < attacks.length; i++){
        let attack = attacks[i];
        if (attack["type"] == "text"){
            ctx.font = `bold 20px serif`;
            ctx.fillStyle = attack["color"];
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${attack["text"]}`, attack["pos"][0],attack["pos"][1]);
        } else if(attack["type"] == "circle"){
            drawCircle(attack["x"], attack["y"], attack["size"], attack["color"], attack["color"]);
        } else {
            ctx.strokeStyle = attack.color;
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(attack["start"][0], attack["start"][1]);
            ctx.lineTo(attack["end"][0], attack["end"][1]);
            ctx.stroke();
        }
    }
}

function drawCircle(x, y, radius, fill, stroke, strokeWidth = 1) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    
    if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
    }
    
    if (stroke) {
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }
}

function drawDefenderOutline(){
    if(selectedDefenderType[0] !== ""){
        let width = 40;
        let height = 40;
        let outerColor = towerColors[selectedDefenderType[0]][0] + "88";
        let innerColor = towerColors[selectedDefenderType[0]][1] + "88";
        let range = towerRanges[selectedDefenderType[0]];

        ctx.fillStyle = outerColor;
        ctx.fillRect(currentMousePos.x - width/2, currentMousePos.y - height/2, width, height);
        ctx.fillStyle = innerColor;
        ctx.fillRect(currentMousePos.x - width/2+5, currentMousePos.y - height/2+5, width-10, height-10);

        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(currentMousePos.x, currentMousePos.y, range, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.stroke();
    }
}

function drawTowerUpgrader(){
    if(selectedDefender !== null){
        ctx.beginPath();
        ctx.arc(selectedDefender.x + selectedDefender.width/2, selectedDefender.y + selectedDefender.height/2, Math.round(selectedDefender.range*selectedDefender["buff"]["range"]), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fill();

        ctx.fillStyle = '#894d22';
        ctx.fillRect(0, canvas.height - towerUpgraderHeight, canvas.width-towerPlacerWidth, towerUpgraderHeight);

        ctx.fillStyle = selectedDefender.outerColor;
        ctx.fillRect(20, canvas.height - towerUpgraderHeight + 15, towerUpgraderHeight - 54, towerUpgraderHeight - 54);
        ctx.fillStyle = selectedDefender.innerColor;
        ctx.fillRect(29, canvas.height - towerUpgraderHeight + 24, towerUpgraderHeight - 72, towerUpgraderHeight - 72);

        ctx.fillStyle = "#991a1a";
        ctx.fillRect(sellButtonLocation[0], sellButtonLocation[1], sellButtonWidth, sellButtonHieght);
        ctx.fillStyle = "#cd1c1c";
        ctx.fillRect(sellButtonLocation[0]+5, sellButtonLocation[1]+5, sellButtonWidth-10, sellButtonHieght-10);

        ctx.font = `bold 20px serif`;
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`Sell`, sellButtonLocation[0]+sellButtonWidth/2, sellButtonLocation[1]+sellButtonHieght/3);
        ctx.fillText(`$${Math.round(selectedDefender.cost*sellValue)}`, sellButtonLocation[0]+sellButtonWidth/2, sellButtonLocation[1]+sellButtonHieght*(2/3));

        ctx.font = `bold 22px serif`;
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if(selectedDefender["specialAbilities"].findIndex(sublist => sublist[0] === "steal") != -1){
            ctx.fillText(`${selectedDefender.damageDelt}`, 20+(towerUpgraderHeight - 54)/2, canvas.height - towerUpgraderHeight + 24 + (towerUpgraderHeight - 54));
            ctx.fillText(`$${selectedDefender.moneyMade}`, 20+(towerUpgraderHeight - 54)/2, canvas.height - towerUpgraderHeight + 42 + (towerUpgraderHeight - 54));
        }else if(selectedDefender["specialAbilities"].findIndex(sublist => sublist[0] === "moneyGen") != -1){
            ctx.fillText(`$${selectedDefender.moneyMade}`, 20+(towerUpgraderHeight - 54)/2, canvas.height - towerUpgraderHeight + 32 + (towerUpgraderHeight - 54));
        } else {
            ctx.fillText(`${selectedDefender.damageDelt}`, 20+(towerUpgraderHeight - 54)/2, canvas.height - towerUpgraderHeight + 32 + (towerUpgraderHeight - 54));
        }
    
        for(let i = 0; i < targetingTypes.length; i++){
            if(selectedDefender.target == targetingTypes[i]){
                ctx.fillStyle = "#356196";
                ctx.fillRect(100, canvas.height-towerUpgraderHeight+i*30+5, 80, 26);
                ctx.fillStyle = "#5082b1";
                ctx.fillRect(104, canvas.height-towerUpgraderHeight+i*30+9, 72, 18);
            } else {
                ctx.fillStyle = "#919191";
                ctx.fillRect(100, canvas.height-towerUpgraderHeight+i*30+5, 80, 26);
                ctx.fillStyle = "#bdbdbd";
                ctx.fillRect(104, canvas.height-towerUpgraderHeight+i*30+9, 72, 18);
            }
            ctx.font = `bold 18px serif`;
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${targetingTypes[i]}`, 140, canvas.height-towerUpgraderHeight+i*30+18);
        }

        const allTowerUpgrades = towerUpgrades[selectedDefender.type];
        if(allTowerUpgrades.length > selectedDefender.stage){
            for(let i = 0; i < allTowerUpgrades[selectedDefender.stage].length; i++){
                let xPos = towerUpgradeButtonCenter + (i - (allTowerUpgrades[selectedDefender.stage].length/2-0.5))*(towerUpgradeButtonWidth+towerUpgradeButtonMargin)

                if(money >= allTowerUpgrades[selectedDefender.stage][i][1]*difficulty[1]){
                    ctx.fillStyle = "#14ba14";
                    ctx.fillRect(xPos, canvas.height - towerUpgraderHeight + 20, towerUpgradeButtonWidth, towerUpgraderHeight - 40);
                    ctx.fillStyle = "#00d300";
                    ctx.fillRect(xPos + 5, canvas.height - towerUpgraderHeight + 25, towerUpgradeButtonWidth-10, towerUpgraderHeight - 50);
                } else {
                    ctx.fillStyle = "#8e8e8e";
                    ctx.fillRect(xPos, canvas.height - towerUpgraderHeight + 20, towerUpgradeButtonWidth, towerUpgraderHeight - 40);
                    ctx.fillStyle = "#afafaf";
                    ctx.fillRect(xPos + 5, canvas.height - towerUpgraderHeight + 25, towerUpgradeButtonWidth-10, towerUpgraderHeight - 50);
                }
                
                let moneyText = "$" + allTowerUpgrades[selectedDefender.stage][i][1]*difficulty[1];
                let text = allTowerUpgrades[selectedDefender.stage][i][0];

                ctx.font = `bold 20px serif`;
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`${moneyText}`, xPos+towerUpgradeButtonWidth/2, canvas.height - (towerUpgraderHeight)/2-15);
                ctx.fillText(`${text}`, xPos+towerUpgradeButtonWidth/2, canvas.height - (towerUpgraderHeight)/2+15);
            }
        }
        drawStats();
    }
}

function drawStats(){
    if(statsOpen){
        ctx.fillStyle = "#149eba";
        ctx.fillRect(statsTabOpen["x"], statsTabOpen["y"], statsTabOpen["width"], statsTabOpen["height"]);

        let statsHeight = canvas.height - statsTabOpen["y"] - towerUpgraderHeight - statsTabOpen["height"];

        ctx.fillStyle = "#149eba";
        ctx.fillRect(0, statsTabOpen["y"]+statsTabOpen["height"], statsTabOpen["width"]+20, statsHeight);
        ctx.fillStyle = "#2dbad6";
        ctx.fillRect(5, statsTabOpen["y"]+statsTabOpen["height"]+5, statsTabOpen["width"]+10, statsHeight-5);

        ctx.fillStyle = "#2dbad6";
        ctx.fillRect(statsTabOpen["x"]+5, statsTabOpen["y"]+5, statsTabOpen["width"]-10, statsTabOpen["height"]);

        ctx.font = `bold 22px serif`;
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'midline';
        ctx.fillText(`Stats`, statsTabOpen["x"]+statsTabOpen["width"]/2, statsTabOpen["y"]+statsTabOpen["height"]/2+5);

        ctx.font = `bold 16px serif`;
        ctx.fillText(`Range:${Math.round(selectedDefender["range"] * selectedDefender["buff"]["range"])}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25);
        ctx.fillText(`Damage:${Math.round(selectedDefender["damage"] * selectedDefender["buff"]["damage"])}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 50);
        if(selectedDefender["specialAbilities"].findIndex(sublist => sublist[0] === "moneyGen") != -1){
            ctx.fillText(`Gen Speed:${Math.round(selectedDefender["attackSpeed"])}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 75);
        } else {
            ctx.fillText(`Atk Speed:${Math.round(selectedDefender["attackSpeed"] * selectedDefender["buff"]["attackSpeed"])}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 75);
        }
        for(let i = 0; i < selectedDefender.specialAbilities.length; i++){
            if(selectedDefender.specialAbilities[i][0] == "multiAttack"){
                ctx.fillText(`Attacks:${selectedDefender.specialAbilities[i][1]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(4+i));
            } else if(selectedDefender.specialAbilities[i][0] == "splash"){
                ctx.fillText(`Splash:${selectedDefender.specialAbilities[i][1]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(4+i));
            } else if(selectedDefender.specialAbilities[i][0] == "slowDown"){
                ctx.fillText(`Slow:${selectedDefender.specialAbilities[i][1]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(4+i));
            } else if(selectedDefender.specialAbilities[i][0] == "chain"){
                ctx.fillText(`Chain:${selectedDefender.specialAbilities[i][1]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(4+i));
            } else if(selectedDefender.specialAbilities[i][0] == "moneyGen"){
                ctx.fillText(`Money Gen:${selectedDefender.specialAbilities[i][1]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(4+i));
            } else if(selectedDefender.specialAbilities[i][0] == "sell"){
                ctx.fillText(`Sell Back:${1/selectedDefender.specialAbilities[i][1]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(4+i));
            } else if(selectedDefender.specialAbilities[i][0] == "steal"){
                ctx.fillText(`Steal:${selectedDefender.specialAbilities[i][1]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(4+i));
            } else if(selectedDefender.specialAbilities[i][0] == "buff"){
                ctx.fillText(`Buff:`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(4+i));
                ctx.fillText(`Range:${selectedDefender["specialAbilities"][i][1]["range"]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(5+i));
                ctx.fillText(`Damage:${selectedDefender["specialAbilities"][i][1]["damage"]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(6+i));
                ctx.fillText(`Atk Speed:${selectedDefender["specialAbilities"][i][1]["attackSpeed"]}`, (statsTabOpen["width"]+20)/2, canvas.height - towerUpgraderHeight - statsHeight + 25*(7+i));
            }
        }
    }else{
        ctx.fillStyle = "#149eba";
        ctx.fillRect(statsTabClosed["x"], statsTabClosed["y"], statsTabClosed["width"], statsTabClosed["height"]);

        ctx.fillStyle = "#2dbad6";
        ctx.fillRect(statsTabClosed["x"]+5, statsTabClosed["y"]+5, statsTabClosed["width"]-10, statsTabClosed["height"]-5);

        ctx.font = `bold 22px serif`;
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'midline';
        ctx.fillText(`Stats`, statsTabClosed["x"]+statsTabClosed["width"]/2, statsTabClosed["y"]+statsTabClosed["height"]/2+5);
    }
}

function drawTowerPlacer(){
    ctx.fillStyle = '#a45b26';
    ctx.fillRect(canvas.width - towerPlacerWidth, 0, towerPlacerWidth, canvas.height);
    for(let i = 0; i < towerPlacerRows; i++){
        for(let t = 0; t < towerPlacerColumns; t++){
            let pos = getTowerBoxLocation(i,t);
            let x = pos[0];
            let y = pos[1];

            if(i*towerPlacerColumns+t < selectedTowers.length && selectedTowers[i*towerPlacerColumns+t][0] == selectedDefenderType[0]){
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(x -5, y -5, towerBoxSize + 10, towerBoxSize + 10);
            }

            ctx.fillStyle = '#C4A484';
            ctx.fillRect(x, y, towerBoxSize, towerBoxSize);
            if (i*towerPlacerColumns+t < selectedTowers.length) {
                ctx.font = `bold 20px serif`;
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.fillText(`$${selectedTowers[i*towerPlacerColumns+t][1]*difficulty[1]}`, x+towerBoxSize/2, y-10);

                let towerName = selectedTowers[i*towerPlacerColumns+t][0];
                let colors = towerColors[towerName];
                ctx.fillStyle = colors[0];
                ctx.fillRect(x + 10, y + 10, towerBoxSize - 20, towerBoxSize - 20);
                ctx.fillStyle = colors[1];
                ctx.fillRect(x + 15, y + 15, towerBoxSize - 30, towerBoxSize - 30);

                if(selectedTowers[i*towerPlacerColumns+t][1]*difficulty[1] > money){
                    ctx.fillStyle = "#00000055";
                    ctx.fillRect(x, y, towerBoxSize, towerBoxSize);
                }
            }
        }
    }
    ctx.fillStyle = '#00ee00';
    ctx.fillRect(canvas.width - (playButtonSize + playButtonMargin)*2, canvas.height - playButtonSize - playButtonMargin, playButtonSize, playButtonSize);
    ctx.fillStyle = '#ffffff';
    drawRegularPolygon(canvas.width - (playButtonSize*1.6 + playButtonMargin*2), canvas.height - playButtonSize/2 - playButtonMargin, playButtonSize/3, 3);
    drawRegularPolygon(canvas.width - (playButtonSize*1.4 + playButtonMargin*2), canvas.height - playButtonSize/2 - playButtonMargin, playButtonSize/3, 3);
    
    ctx.fillStyle = '#00ee00';
    ctx.fillRect(canvas.width - playButtonSize - playButtonMargin, canvas.height - playButtonSize - playButtonMargin, playButtonSize, playButtonSize);
    ctx.fillStyle = '#ffffff';
    drawRegularPolygon(canvas.width - playButtonSize/2 - playButtonMargin, canvas.height - playButtonSize/2 - playButtonMargin, playButtonSize/3, 3);
}

function getTowerBoxLocation(row, col){
    let startingX = canvas.width - towerPlacerWidth + towerBoxWidthMargin;
    let x = startingX + (towerBoxSize+towerBoxWidthMargin)*col
    let y = startTowerBoxMargin + (towerBoxSize+towerBoxHeightMargin)*row;
    return [x,y];     
}

function drawMoney(){
    ctx.font = `bold ${moneySize}px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(`$${money}`, moneyPos[0], moneyPos[1]);
}

function drawRound(){
    ctx.font = `bold ${roundSize}px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right';
    ctx.fillText(`${currentRound}`, roundPos[0], roundPos[1]);
}

function drawDifficultyGameText(){
    ctx.font = `bold ${difficultySize}px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${difficulty[0]}`, difficultyPos[0], difficultyPos[1]);
}

function drawVersionText(){
    ctx.font = `bold ${versionSize}px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(`v-${version}`, versionPos[0], versionPos[1]);
}

function drawTestingText(){
    ctx.font = `bold ${testingSize}px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Testing`, testingPos[0], testingPos[1]);
}

function drawChangingRoundBox(){
    ctx.fillStyle = "#1560d9";
    ctx.fillRect(changeRoundBoxPos[0], changeRoundBoxPos[1],changeRoundBoxSize[0],changeRoundBoxSize[1]);
    ctx.fillStyle = "#3890dd";
    ctx.fillRect(changeRoundBoxPos[0]+5, changeRoundBoxPos[1]+5,changeRoundBoxSize[0]-10,changeRoundBoxSize[1]-10);

    ctx.fillStyle = "#000000";
    ctx.fillRect(changeRoundBackButtonPos[0], changeRoundBackButtonPos[1],changeRoundBackButtonSize[0],changeRoundBackButtonSize[1]);
    ctx.fillStyle = "#e62828";
    ctx.fillRect(changeRoundBackButtonPos[0]+5, changeRoundBackButtonPos[1]+5,changeRoundBackButtonSize[0]-10,changeRoundBackButtonSize[1]-10);

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Change round`, changeRoundBoxPos[0]+changeRoundBoxSize[0]/2,changeRoundBoxPos[1]+30);

    ctx.font = `bold 25px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Back`, changeRoundBackButtonPos[0]+changeRoundBackButtonSize[0]/2,changeRoundBackButtonPos[1]+changeRoundBackButtonSize[1]/2);

    if(!inputLoaded){
        createInputBox(currentRound);
        inputLoaded = true;
    }
    updateInputPosition('inputBox',[360,240]);
}

function createInputBox(value){
    let body = document.getElementById("body");
    body.insertAdjacentHTML('beforeend', `<input id='inputBox' type='number' style='position: absolute; top: ${rect.top+360}px; left: ${rect.left+240}px; width: 80px' value='0'>`);
    let input = document.getElementById("inputBox");
    input.value = value;
}

function deleteInputBox(){
    const input = document.getElementById("inputBox");
    if (input) {
        input.remove();
    }
}

function updateInputPosition(id,pos) {
    const inputBox = document.getElementById(id);
    if (!inputBox || !canvas) return;
    
    inputBox.style.top = `${rect.top + window.scrollY + pos[1]}px`;
    inputBox.style.left = `${rect.left + window.scrollX + pos[0]}px`;
}

function drawChangingMoneyBox(){
    ctx.fillStyle = "#1560d9";
    ctx.fillRect(changeMoneyBoxPos[0], changeMoneyBoxPos[1],changeMoneyBoxSize[0],changeMoneyBoxSize[1]);
    ctx.fillStyle = "#3890dd";
    ctx.fillRect(changeMoneyBoxPos[0]+5, changeMoneyBoxPos[1]+5,changeMoneyBoxSize[0]-10,changeMoneyBoxSize[1]-10);

    ctx.fillStyle = "#000000";
    ctx.fillRect(changeGenerateMoneyButtonPos[0], changeGenerateMoneyButtonPos[1],changeGenerateMoneyButtonSize[0],changeGenerateMoneyButtonSize[1]);
    ctx.fillStyle = "#38dd5e";
    ctx.fillRect(changeGenerateMoneyButtonPos[0]+4, changeGenerateMoneyButtonPos[1]+4,changeGenerateMoneyButtonSize[0]-8,changeGenerateMoneyButtonSize[1]-8);

    ctx.fillStyle = "#000000";
    ctx.fillRect(changeMoneyBackButtonPos[0], changeMoneyBackButtonPos[1],changeMoneyBackButtonSize[0],changeMoneyBackButtonSize[1]);
    ctx.fillStyle = "#e62828";
    ctx.fillRect(changeMoneyBackButtonPos[0]+5, changeMoneyBackButtonPos[1]+5,changeMoneyBackButtonSize[0]-10,changeMoneyBackButtonSize[1]-10);

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Change Money`, changeMoneyBoxPos[0]+changeMoneyBoxSize[0]/2,changeMoneyBoxPos[1]+30);

    ctx.font = `bold 25px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Back`, changeMoneyBackButtonPos[0]+changeMoneyBackButtonSize[0]/2,changeMoneyBackButtonPos[1]+changeMoneyBackButtonSize[1]/2);

    ctx.font = `bold 20px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Make $`, changeGenerateMoneyButtonPos[0]+changeGenerateMoneyButtonSize[0]/2,changeGenerateMoneyButtonPos[1]+changeGenerateMoneyButtonSize[1]/2);

    if(!inputLoaded){
        createInputBox(money);
        inputLoaded = true;
    }
    updateInputPosition('inputBox',[320,240]);
}

function checkTestingInputBox(usingRound){
    let inputBox = document.getElementById("inputBox");
    if(usingRound){
        if (document.activeElement !== inputBox && parseFloat(inputBox.value) < 0) {
            inputBox.value = 0;
        }

        if (document.activeElement !== inputBox && parseFloat(inputBox.value) > maxRound) {
            inputBox.value = maxRound;
        }

        if (document.activeElement !== inputBox && inputBox.value === "") {
            inputBox.value = 0;
        }
    } else {
        if (document.activeElement !== inputBox && parseFloat(inputBox.value) < 0) {
            inputBox.value = 0;
        }

        if (document.activeElement !== inputBox && parseFloat(inputBox.value) > maxMoney) {
            inputBox.value = maxMoney;
        }

        if (document.activeElement !== inputBox && inputBox.value === "") {
            inputBox.value = 0;
        }
    }
}

function drawVictory(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(145,140,canvas.width-290, canvas.height-290);
    ctx.fillStyle = "#964B00";
    ctx.fillRect(150,145,canvas.width-300, canvas.height-300);

    drawVictoryTitle();
    drawVictoryButtons();
    drawVictoryText();
}

function drawVictoryTitle(){
    ctx.font = `bold 50px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Victory`, canvas.width / 2, canvas.height / 2.9);
}

function drawVictoryButtons(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(victoryContinueButtonPos[0], victoryContinueButtonPos[1], victoryButtonsSize[0], victoryButtonsSize[1]);
    ctx.fillRect(victoryResetButtonPos[0], victoryResetButtonPos[1], victoryButtonsSize[0], victoryButtonsSize[1]);
    ctx.fillRect(victoryHomeButtonPos[0], victoryHomeButtonPos[1], victoryButtonsSize[0], victoryButtonsSize[1]);

    ctx.fillStyle = "#74e628";
    ctx.fillRect(victoryContinueButtonPos[0]+5, victoryContinueButtonPos[1]+5, victoryButtonsSize[0]-10, victoryButtonsSize[1]-10);
    ctx.fillRect(victoryResetButtonPos[0]+5, victoryResetButtonPos[1]+5, victoryButtonsSize[0]-10, victoryButtonsSize[1]-10);
    ctx.fillRect(victoryHomeButtonPos[0]+5, victoryHomeButtonPos[1]+5, victoryButtonsSize[0]-10, victoryButtonsSize[1]-10);

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Continue`, victoryContinueButtonPos[0]+victoryButtonsSize[0]/2, victoryContinueButtonPos[1]+victoryButtonsSize[1]/2);
    ctx.fillText(`Reset`, victoryResetButtonPos[0]+victoryButtonsSize[0]/2, victoryResetButtonPos[1]+victoryButtonsSize[1]/2);
    ctx.fillText(`Home`, victoryHomeButtonPos[0]+victoryButtonsSize[0]/2, victoryHomeButtonPos[1]+victoryButtonsSize[1]/2);
}

function drawVictoryText(){
    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Map: ${maps[mapIndex[1]][mapIndex[0]][2]}`, canvas.width / 2, canvas.height / 2.3);
    ctx.fillText(`Difficulty: ${difficulty[0]}`, canvas.width / 2, canvas.height / 2);
}

function drawMapScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMapBackground();
    drawMaps();
    drawMapHeaderText();
}

function drawMapBackground(){
    ctx.fillStyle = "#6e6565";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawMaps(){
    mapNum = maps.length;
    for(let i = 0; i < mapNum; i++){
        mapDifficultyNum = maps[i].length;
        for(let t = 0; t < mapDifficultyNum; t++){
            currentMap = maps[i][t][0];

            let x = canvas.width / (mapNum+1)*(i+1) - mapBoxSize[0] / 2;
            let y = canvas.height / (mapDifficultyNum+1)*(t+1)+(20*t)-20;

            ctx.fillStyle = "#ffffff";
            ctx.fillRect(x,y,mapBoxSize[0],mapBoxSize[1]);

            ctx.fillStyle = currentMap["backgroundColor"];
            ctx.fillRect(x+5,y+5,mapBoxSize[0]-10,mapBoxSize[1]-10);

            ctx.fillStyle = currentMap["trackColor"];
            for(let t = 0; t < currentMap["path"].length; t++){
                ctx.fillRect(currentMap["path"][t][0]/((canvas.width-towerPlacerWidth)/(mapBoxSize[0]-10))+x+5,currentMap["path"][t][1]/(canvas.height/(mapBoxSize[1]-10))+y+5,currentMap["path"][t][2]/((canvas.width-towerPlacerWidth)/(mapBoxSize[0]-10)),currentMap["path"][t][3]/(canvas.height/(mapBoxSize[1]-10)));
            }

            let textX = canvas.width / (mapNum+1)*(i+1);
            let textY = canvas.height / (mapDifficultyNum+1)*(t+1)+(20*t)-35;

            ctx.font = `bold 30px serif`;
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(`${maps[i][t][2]}`, textX, textY);

            textX = canvas.width / (mapNum+1)*(i+1);
            textY = canvas.height / (mapDifficultyNum+1)-70;

            ctx.font = `bold 40px serif`;
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(`${maps[i][t][1]}`, textX, textY);
        }
    }
}

function drawMapHeaderText(){
    ctx.font = `bold 50px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Map Select`, canvas.width / 2, canvas.height / 10);
}

function drawDifficultyScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDifficultyBackground();
    drawDifficulty();
    drawDifficultyHeaderText();
}

function drawDifficultyBackground(){
    ctx.fillStyle = "#6e6565";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawDifficulty(){
    difficultyNum = difficulties.length;
    for(let i = 0; i < difficultyNum; i++){
        let currentDifficulty = difficulties[i];

        let x = canvas.width / (difficultyNum+1)*(i+1) - difficultyBoxSize[0] / 2;
        let y = canvas.height / 2 - difficultyBoxSize[1] / 2;

        if(currentDifficulty[0] == "easy"){
            ctx.fillStyle = "#99ff99";
        } else if(currentDifficulty[0] == "medium"){
            ctx.fillStyle = "#ffff99";
        } else if(currentDifficulty[0] == "hard"){
            ctx.fillStyle = "#ff9999";
        }

        ctx.fillRect(x,y,difficultyBoxSize[0],difficultyBoxSize[1]);

        let textX = canvas.width / (difficultyNum+1)*(i+1);
        let textY = canvas.height / 2;

        ctx.font = `bold 35px serif`;
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${currentDifficulty[0]}`, textX, textY);
    }
}

function drawDifficultyHeaderText(){
    ctx.font = `bold 50px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Difficulty Select`, canvas.width / 2, canvas.height / 6);
}

function drawSettingsScreen(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(145,70,canvas.width-290, canvas.height-140);
    ctx.fillStyle = "#964B00";
    ctx.fillRect(150,75,canvas.width-300, canvas.height-150);

    drawSettingsTitle();
    drawSettingsButtons();
    drawSettingsChanges();
}

function drawSettingsTitle(){
    ctx.font = `bold 50px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Settings`, canvas.width / 2, canvas.height / 4.5);
}

function drawSettingsButtons(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(backButtonPos[0], backButtonPos[1], settingsButtonsSize[0], settingsButtonsSize[1]);
    ctx.fillRect(resetButtonPos[0], resetButtonPos[1], settingsButtonsSize[0], settingsButtonsSize[1]);
    ctx.fillRect(homeButtonPos[0], homeButtonPos[1], settingsButtonsSize[0], settingsButtonsSize[1]);

    ctx.fillStyle = "#e62828";
    ctx.fillRect(backButtonPos[0]+5, backButtonPos[1]+5, settingsButtonsSize[0]-10, settingsButtonsSize[1]-10);
    ctx.fillRect(resetButtonPos[0]+5, resetButtonPos[1]+5, settingsButtonsSize[0]-10, settingsButtonsSize[1]-10);
    ctx.fillRect(homeButtonPos[0]+5, homeButtonPos[1]+5, settingsButtonsSize[0]-10, settingsButtonsSize[1]-10);

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Back`, backButtonPos[0]+settingsButtonsSize[0]/2, backButtonPos[1]+settingsButtonsSize[1]/2);
    ctx.fillText(`Reset`, resetButtonPos[0]+settingsButtonsSize[0]/2, resetButtonPos[1]+settingsButtonsSize[1]/2);
    ctx.fillText(`Home`, homeButtonPos[0]+settingsButtonsSize[0]/2, homeButtonPos[1]+settingsButtonsSize[1]/2);
}

function drawSettingsChanges(){
    for(let i = 0; i < settingsUI.length; i++){
        let setting = settingsUI[i]
        let x = canvas.width/2 - setting["size"][0]/2;
        let y = canvas.height / 3.6 + (setting["size"][1]+10)*i;

        ctx.fillStyle = "#000000";
        ctx.fillRect(x, y, setting["size"][0], setting["size"][1]);

        if(gameSettings[setting["key"]]){
            ctx.fillStyle = "#4ee628";
        } else {
            ctx.fillStyle = "#7f7f7f";
        }
        ctx.fillRect(x+5, y+5, setting["size"][0]-10, setting["size"][1]-10);

        ctx.font = `bold 22px serif`;
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${setting["text"]}`, x+setting["size"][0]/2,y+setting["size"][1]/2);
    }
}

function drawModeScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawModeBackground();
    drawModeLines();
    drawModeHeaderText();
    drawModeSmallHeadersText();
    drawModeButtons();
}

function drawModeBackground(){
    ctx.fillStyle = "#6e6565";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawModeLines(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(canvas.width/3, 100, 5, canvas.height - 100);
    ctx.fillRect(canvas.width*(2/3), 100, 5, canvas.height - 100);
}

function drawModeHeaderText(){
    ctx.font = `bold 50px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Gamemode Select`, canvas.width / 2, canvas.height / 8);
}

function drawModeSmallHeadersText(){
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Testing`, canvas.width / 6, canvas.height / 4);
    ctx.fillText(`Normal`, canvas.width / 2, canvas.height / 4);
    ctx.fillText(`Special`, canvas.width * (5/6), canvas.height / 4);
}

function drawModeButtons(){
    ctx.fillStyle = "#0ce233";
    ctx.fillRect(testingPlayButtonPos[0],testingPlayButtonPos[1],testingPlayButtonSize,testingPlayButtonSize);
    ctx.fillStyle = '#ffffff';
    drawRegularPolygon(testingPlayButtonPos[0] + testingPlayButtonSize/2, testingPlayButtonPos[1] + testingPlayButtonSize/2, testingPlayButtonSize/3, 3);

    ctx.fillStyle = "#0ce233";
    ctx.fillRect(normalPlayButtonPos[0],normalPlayButtonPos[1],normalPlayButtonSize,normalPlayButtonSize);
    ctx.fillStyle = '#ffffff';
    drawRegularPolygon(normalPlayButtonPos[0] + normalPlayButtonSize/2, normalPlayButtonPos[1] + normalPlayButtonSize/2, normalPlayButtonSize/3, 3);
}

function drawHomeScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHomeBackground();
    drawHomeTitle();
    drawMapSelect();
    drawDifficultySelect();
    drawTowerSelect();
    drawModeSelect();
    drawHomePlay();
}

function drawHomeBackground(){
    ctx.fillStyle = "#16c5d4";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawHomeTitle(){
    ctx.font = `bold 60px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Slab Tower Defense`, canvas.width/2,canvas.height/8);
}

function drawMapSelect(){ 
    ctx.fillStyle = "#ad5700";
    ctx.fillRect(mapSelectLocation[0],mapSelectLocation[1],mapSelectSize,mapSelectSize);

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Map`, mapSelectLocation[0]+mapSelectSize/2,mapSelectLocation[1]-15);

    ctx.fillStyle = map["backgroundColor"];
    ctx.fillRect(mapSelectLocation[0]+10,mapSelectLocation[1]+10,mapSelectSize-20,mapSelectSize-20);

    ctx.fillStyle = map["trackColor"];
    for(let t = 0; t < map["path"].length; t++){
        ctx.fillRect(map["path"][t][0]/((canvas.width-towerPlacerWidth)/(mapSelectSize-20))+mapSelectLocation[0]+10,map["path"][t][1]/(canvas.height/(mapSelectSize-20))+mapSelectLocation[1]+10,map["path"][t][2]/((canvas.width-towerPlacerWidth)/(mapSelectSize-20)),map["path"][t][3]/(canvas.height/(mapSelectSize-20)));
    }
}

function drawDifficultySelect(){
    ctx.fillStyle = "#ad5700";
    ctx.fillRect(difficultySelectLocation[0],difficultySelectLocation[1],difficultySelectSize,difficultySelectSize);

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Difficulty`, difficultySelectLocation[0]+difficultySelectSize/2,difficultySelectLocation[1]-15);

    if(difficulty[0] == "easy"){
        ctx.fillStyle = "#99ff99";
    } else if(difficulty[0] == "medium"){
        ctx.fillStyle = "#ffff99";
    } else if(difficulty[0] == "hard"){
        ctx.fillStyle = "#ff9999";
    }
    ctx.fillRect(difficultySelectLocation[0]+10,difficultySelectLocation[1]+10,difficultySelectSize-20,difficultySelectSize-20);

    let textX = difficultySelectLocation[0] + difficultySelectSize/2;
    let textY = difficultySelectLocation[1] + difficultySelectSize/2;

    ctx.font = `bold 35px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${difficulty[0]}`, textX, textY);
}

function drawTowerSelect(){
    ctx.fillStyle = "#ad5700";
    ctx.fillRect(towerSelectLocation[0],towerSelectLocation[1],towerSelectSize,towerSelectSize);

    for(let i = 0; i < towerPlacerRows; i++){
        for(let t = 0; t < towerPlacerColumns; t++){
            let pos = [towerSelectLocation[0]+towerSelectSize*((2*t+1)/(towerPlacerColumns*2))-homeTowerBoxSize/2,towerSelectLocation[1]+towerSelectSize*(i/towerPlacerRows)+5];
            let x = pos[0];
            let y = pos[1];

            ctx.fillStyle = '#C4A484';
            ctx.fillRect(x, y, homeTowerBoxSize, homeTowerBoxSize);
            if (i*towerPlacerColumns+t < selectedTowers.length) {
                let towerName = selectedTowers[i*towerPlacerColumns+t][0];
                let colors = towerColors[towerName];
                ctx.fillStyle = colors[0];
                ctx.fillRect(x + 4, y + 4, homeTowerBoxSize - 8, homeTowerBoxSize - 8);
                ctx.fillStyle = colors[1];
                ctx.fillRect(x + 8, y + 8, homeTowerBoxSize - 16, homeTowerBoxSize - 16);

            }
        }
    }

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Towers`, towerSelectLocation[0]+towerSelectSize/2,towerSelectLocation[1]-15);
}

function drawModeSelect(){
    ctx.fillStyle = "#ad5700";
    ctx.fillRect(modeSelectLocation[0],modeSelectLocation[1],modeSelectSize,modeSelectSize);

    ctx.fillStyle = "#0ce233";
    ctx.fillRect(modeSelectLocation[0]+10,modeSelectLocation[1]+10,modeSelectSize-20,modeSelectSize-20);

    if(gamemode == "testing"){
        var text = "Testing";
    } else {
        var text = "Normal";
    }

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, modeSelectLocation[0]+modeSelectSize/2,modeSelectLocation[1]+modeSelectLocation[1]/2);

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Mode`, modeSelectLocation[0]+modeSelectSize/2,modeSelectLocation[1]-15);
}

function drawHomePlay(){
    ctx.fillStyle = "#0ce233";
    ctx.fillRect(homePlayLocation[0],homePlayLocation[1],homePlaySize,homePlaySize);
    ctx.fillStyle = '#ffffff';
    drawRegularPolygon(homePlayLocation[0] + homePlaySize/2, homePlayLocation[1] + homePlaySize/2, homePlaySize/3, 3);
}

function drawTowerScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTowerBackground();
    drawTowerTitle();
    drawTowerBackButton();
    drawTowerSelector();
}

function drawTowerBackground(){
    ctx.fillStyle = '#a45b26';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function  drawTowerTitle(){
    ctx.font = `bold 60px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Tower Selector`, canvas.width/2,canvas.height/12);

    ctx.font = `bold 35px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Select 6 Towers`, canvas.width/2,canvas.height/6);
}

function drawTowerSelector(){
    var y = towerTopMargin+towerSelectorBoxMargin[1];
    var x = towerSelectorBoxMargin[0];
    var count = 0;
    while(y+towerSelectorBoxSize < canvas.height-towerBottomMargin){
        while(x+towerSelectorBoxSize < canvas.width){
            if(count < towerTypes.length && selectedTowers.some(tower => tower[0] === towerTypes[count][0])){
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(x-5,y-5,towerSelectorBoxSize+10,towerSelectorBoxSize+10);
            }

            ctx.fillStyle = '#C4A484';
            ctx.fillRect(x,y,towerSelectorBoxSize,towerSelectorBoxSize);
            
            if(count < towerTypes.length){
                let tower = towerTypes[count][0];
                let towerText = towerTypes[count][2];

                ctx.fillStyle = towerColors[tower][0];
                ctx.fillRect(x+10,y+10,towerSelectorBoxSize-20,towerSelectorBoxSize-20);
                ctx.fillStyle = towerColors[tower][1];
                ctx.fillRect(x+15,y+15,towerSelectorBoxSize-30,towerSelectorBoxSize-30);

                ctx.font = `bold 20px serif`;
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillText(`${towerText}`,x+towerSelectorBoxSize/2,y-5);
            }
            x += towerSelectorBoxSize + towerSelectorBoxMargin[0];
            count++;
        }
        x = towerSelectorBoxMargin[0];
        y += towerSelectorBoxSize + towerSelectorBoxMargin[1];
    }
}

function drawTowerBackButton(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(towerBackButtonPos[0], towerBackButtonPos[1], towerBackButtonSize[0], towerBackButtonSize[1]);

    ctx.fillStyle = "#e62828";
    ctx.fillRect(towerBackButtonPos[0]+5, towerBackButtonPos[1]+5, towerBackButtonSize[0]-10, towerBackButtonSize[1]-10);

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Back`, towerBackButtonPos[0]+towerBackButtonSize[0]/2,towerBackButtonPos[1]+towerBackButtonSize[1]/2);
}

function update() {
    rect = canvas.getBoundingClientRect();
    if(screen == "gameScreen"){
        draw();
        if(victory){
            drawVictory();
        } else if(gamemode == "testing" && changingMoney){
            drawChangingMoneyBox();
            checkTestingInputBox(false);
        } else if(gamemode == "testing" && changingRound){
            drawChangingRoundBox();
            checkTestingInputBox(true);
        } else if(!gameOver){
            updateEnemies();
            updateDefenders();
            updateAttacks();
            updateRound();
        } else {
            if(!viewing){
                drawGameOver();
            } else {
                drawViewBackButton();
            }
        }
    } else if(screen == "mapScreen"){
        drawMapScreen();
    } else if(screen == "difficultyScreen"){
        drawDifficultyScreen();
    } else if(screen == "settingsScreen"){
        drawSettingsScreen();
    } else if(screen == "modeScreen"){
        drawModeScreen();
    } else if(screen == "homeScreen"){
        drawHomeScreen();
    } else if(screen == "towerScreen"){
        drawTowerScreen();
    }
    requestAnimationFrame(update);
}

function updateEnemies(){
    for(let i = 0; i < enemies.length; i++){
        let enemy = enemies[i];
        enemy.move();
        if(enemy.trackSegment >= map["path"].length){
            enemies.splice(i,1);
            health -= enemy.damage;
            i--;
            if(health <= 0){
                gameOver = true;
            }
        }
    }
}

function updateDefenders() {
    for (let i = 0; i < defenders.length; i++) {
        defenders[i].buff = {"attackSpeed": 1, "damage": 1, "range": 1};
    }
    for (let i = 0; i < defenders.length; i++) {
        let buff = defenders[i]["specialAbilities"].find(sublist => sublist[0] === "buff"); 
        let buffAmount = buff ? buff[1] : null;
        if(buffAmount){
            runBuff(defenders[i],buffAmount);
        }
    }
    enemies.sort((a, b) => b.position - a.position);
    lastEnemies = enemies.toSorted((a, b) => a.position - b.position);
    strongEnemies = enemies.toSorted((a, b) => b.maxHealth - a.maxHealth);
    weakEnemies = enemies.toSorted((a, b) => a.maxHealth - b.maxHealth);

    for (let i = 0; i < defenders.length; i++) {
        let defender = defenders[i];
        let abilities = defender["specialAbilities"];
        const moneyGen = abilities.find(sublist => sublist[0] === "moneyGen"); 
        let buff = abilities.find(sublist => sublist[0] === "buff"); 
        let buffAmount = buff ? buff[1] : null;
        if(moneyGen || buffAmount != null){
            if(i+1 < defenders.length){
                continue;
            } else {
                break;
            }
        }
        const splash = abilities.find(sublist => sublist[0] === "splash");
        const splashSize = splash ? splash[1] : null;
        const chain = abilities.find(sublist => sublist[0] === "chain");
        const chainSize = chain ? chain[1] : null;
        const multiAttackData = abilities.find(sublist => sublist[0] === "multiAttack");
        const maxTargets = multiAttackData ? multiAttackData[1] : 1;       
        const slowDown = abilities.find(sublist => sublist[0] === "slowDown"); 
        const slowDownAmount = slowDown ? slowDown[1] : null;
        const steal = abilities.find(sublist => sublist[0] === "steal"); 
        const stealAmount = steal ? steal[1] : null;

        let attackCount = 0;
        let coolDownSet = false;

        if (defender.attackCooldown > 0) {
            defender.attackCooldown -= playSpeed;
        } else {
            let defCenterX = defender.x + defender.width / 2;
            let defCenterY = defender.y + defender.height / 2;

            for (let t = 0; t < enemies.length; t++) {
                if(defender.target == "first"){
                    var enemy = enemies[t];
                } else if(defender.target == "last"){
                    var enemy = lastEnemies[t];
                } else if(defender.target == "strong"){
                    var enemy = strongEnemies[t];
                } else if(defender.target == "weak"){
                    var enemy = weakEnemies[t];
                }
                
                let enemyCenterX = enemy.x + enemy.width / 2;
                let enemyCenterY = enemy.y + enemy.height / 2;

                let dx = defCenterX - enemyCenterX;
                let dy = defCenterY - enemyCenterY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance <= Math.round(defender.range*defender["buff"]["range"]) && (!slowDownAmount || enemy.slowDown["time"] <= 0)) {
                    if(stealAmount != null){
                        money += stealAmount;
                        defender.moneyMade += stealAmount;
                    }
                    let colorChange1 = Math.max(Math.round((1/((defender.damage * defender["buff"]["damage"])/8 + 7/8))*255),16).toString(16);
                    if(slowDownAmount !== null){
                        colorChange2 = "00";
                        slowDownEffect = [10/Math.sqrt(enemy.health)*slowDownAmount,0.6,Math.round(defender["damage"] * defender["buff"]["damage"]),defender]
                    } else {
                        slowDownEffect = null
                        colorChange2 = colorChange1;
                    }
                    let attackColor = "#ff" + colorChange1 + colorChange2
                    if(splashSize !== null){
                        attacks.push({"type": "circle","color": attackColor + "aa", "x": enemyCenterX, "y": enemyCenterY, "size": splashSize*0.6, "time": 12});
                    }
                    attacks.push({"type": "line","color": attackColor, "start": [defCenterX, defCenterY], "end": [enemyCenterX, enemyCenterY], "time": 12});

                    defender.damageDelt += Math.min(enemy.health, Math.round(defender.damage * defender["buff"]["damage"]));
                    enemy.dealDamage(Math.round(defender.damage*defender["buff"]["damage"]), slowDownEffect);

                    let offset = 0;
                    if (enemy.health <= 0) {
                        money += enemy.money;
                        enemies.splice(enemies.indexOf(enemy), 1);
                        t--;
                    }
                    if(splashSize !== null){
                        runSplash(enemy, defender, t, splashSize,slowDownEffect)
                    }
                    if(chainSize !== null){
                        runChain(enemy, defender, t, chainSize,slowDownEffect)
                    }
                    if(!coolDownSet){
                        defender.attackCooldown += Math.round(defender.attackSpeed * defender["buff"]["attackSpeed"]);
                        coolDownSet = true;
                    }
                    attackCount++;
                    if(attackCount >= maxTargets){
                        break;
                    }
                }
            }
        }
    }
    if(enemies.length == 0 && !roundEnded && !roundPlaying){
        if(!gameOver){
            roundEnd();
            if(currentRound == 100){
                victory = true;
            }
            if(gameSettings["autoStart"]){
                currentRound++;
                playRound(currentRound, playSpeed);
            }
        }
    }
}

function runBuff(buffDefender,buff){
    const buffRange = buffDefender.range*buffDefender["buff"]["range"];
    for(let i = 0; i < defenders.length; i++){
        defender = defenders[i];
        if(defender != buffDefender){
            let distance = (((buffDefender.x+(buffDefender.width/2))-(defender.x+(defender.width/2)))**2 + ((buffDefender.y+(buffDefender.height/2))-(defender.y+(defender.height/2)))**2)**0.5;
            if(distance < buffRange && !defenders[i]["specialAbilities"].find(sublist => sublist[0] === "buff")){
                defender["buff"]["range"] += buff["range"] - 1;
                defender["buff"]["damage"] += buff["damage"] - 1;
                defender["buff"]["attackSpeed"] += buff["attackSpeed"] - 1;
            }
        }
    }
}

function runSplash(currentEnemy, currentDefender, enemyIndex, splashSize, slowDownEffect) {
    const centerPos = currentEnemy.position;
    const damage = Math.round(currentDefender.damage * currentDefender["buff"]["damage"]);

    let enemiesToRemove = [];

    const checkTarget = (idx) => {
        let e = enemies[idx];
        if (e && Math.abs(e.position - centerPos) <= splashSize) {
            currentDefender.damageDelt += Math.min(e.health, damage);
            e.dealDamage(damage,slowDownEffect);
            if (e.health <= 0) {
                money += e.money;
                enemiesToRemove.push(e);
            }
            return true;
        }
        return false;
    };

    let offset = 1;
    let lookAbove = true;
    let lookBelow = true;

    while (lookAbove || lookBelow) {
        if (lookAbove) lookAbove = checkTarget(enemyIndex + offset);
        if (lookBelow) lookBelow = checkTarget(enemyIndex - offset);
        offset++;
    }

    if (enemiesToRemove.length > 0) {
        enemies = enemies.filter(e => !enemiesToRemove.includes(e));
    }
}

function runChain(currentEnemy, currentDefender, enemyIndex, chainSize, slowDownEffect) {
    const damage = Math.round(currentDefender.damage*currentDefender["buff"]["damage"]);
    const attackColor = Math.max(Math.round((1/((currentDefender.damage * currentDefender["buff"]["damage"])/8 + 7/8))*255),16).toString(16);
    const hitEnemies = new Set();

    const chain = (index, direction) => {
        const nextIndex = index + direction;
        const target = enemies[nextIndex];

        let lastEnemy;
        if(enemies[index]){
            lastEnemy = enemies[index];
        } else {
            lastEnemy = currentEnemy;
        }

        if (target && Math.abs(target.position - lastEnemy.position) <= chainSize) {
            
            currentDefender.damageDelt += Math.min(target.health, damage);
            target.dealDamage(damage, slowDownEffect);
            hitEnemies.add(target);

            startCenterX = lastEnemy.x + lastEnemy.width/2;
            startCenterY = lastEnemy.y + lastEnemy.height/2;
            endCenterX = enemies[nextIndex].x + + enemies[nextIndex].width/2;
            endCenterY = enemies[nextIndex].y + enemies[nextIndex].height/2
            attacks.push({"type": "line","color": attackColor, "start": [startCenterX, startCenterY], "end": [endCenterX, endCenterY], "time": 12});

            if (target.health <= 0) {
                money += target.money;
            }

            chain(nextIndex, direction);
        }
    };

    chain(enemyIndex, 1); 
    chain(enemyIndex, -1);
    drawMoney()

    enemies = enemies.filter(e => e.health > 0);
}


function updateAttacks() {
    for(let i = 0; i < attacks.length; i++){
        let attack = attacks[i];
        attack.time -= playSpeed;
        if(attack.time <= 0){
            attacks.splice(i,1);
            i--;
        }
    }
}

function roundEnd(){
    money += moneyPerRound;
    roundEnded = true;
    roundGoing = false;
    for(let i = 0; i < defenders.length; i++){
        defender = defenders[i];
        const indexMoneyGen = defender["specialAbilities"].findIndex(sublist => sublist[0] === "moneyGen");
        if(indexMoneyGen == -1){
            defender.attackCooldown = 0;
        } else {
            defender.attackCooldown--;
            if(defender.attackCooldown <= 0){
                defender.attackCooldown = defender.attackSpeed;
                let moneyMade = defender["specialAbilities"][indexMoneyGen][1];
                defender.moneyMade += moneyMade;
                money += moneyMade;
                attacks.push({"type": "text","text": `+${moneyMade}`,"color": "#00cb00", "pos": [defender.x+defender.width/2, defender.y-10], "time": 40});
            }
        }
    }
}

function updateRound(){
    if(currentRoundEnemies.length > currentRoundIndex){
        if(currentRoundEnemies[currentRoundIndex]["wait"] <= timeCount){
            spawnEnemy(currentRoundEnemies[currentRoundIndex]["enemyType"], currentRoundMultiplier);
            timeCount = 0;
            currentRoundIndex++;
            roundEnded = false;
        }else{
            timeCount += playSpeed;
        }
    } else {
        roundPlaying = false;
    }
}

function drawRegularPolygon(x, y, radius, sides) {
  if (sides < 3) return;
  ctx.beginPath();
  const angle = (2 * Math.PI) / sides;
  ctx.moveTo(x + radius, y);
  for (let i = 1; i <= sides; i++) {
    ctx.lineTo(x + radius * Math.cos(i * angle), y + radius * Math.sin(i * angle));
  }
  ctx.closePath();
  ctx.fill();
}

function playRound(num, speed){
    playSpeed = speed;
    roundGoing = true;
    roundPlaying = true;
    let round;
    let multiplier = 1;
    if(num <= 100){
        round = rounds[num];
    } else {
        round = generateRound(num);
        multiplier = ((num-100)**1.6)/100+1;
    }
    currentRoundEnemies = round;
    currentRoundMultiplier = multiplier;
    currentRoundIndex = 0;
}

function spawnEnemy(type,multiplier){
    enemies.push(new Enemy(type,multiplier));
}

function drawGameOver(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(145,140,canvas.width-290, canvas.height-290);
    ctx.fillStyle = "#964B00";
    ctx.fillRect(150,145,canvas.width-300, canvas.height-300);

    drawGameOverTitle();
    drawGameOverButtons();
    drawGameOverText();
}

function drawGameOverTitle(){
    ctx.font = `bold 50px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Game Over`, canvas.width / 2, canvas.height / 2.9);
}

function drawGameOverButtons(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(gameOverViewButtonPos[0], gameOverViewButtonPos[1], gameOverButtonsSize[0], gameOverButtonsSize[1]);
    ctx.fillRect(gameOverResetButtonPos[0], gameOverResetButtonPos[1], gameOverButtonsSize[0], gameOverButtonsSize[1]);
    ctx.fillRect(gameOverHomeButtonPos[0], gameOverHomeButtonPos[1], gameOverButtonsSize[0], gameOverButtonsSize[1]);

    ctx.fillStyle = "#74e628";
    ctx.fillRect(gameOverViewButtonPos[0]+5, gameOverViewButtonPos[1]+5, gameOverButtonsSize[0]-10, gameOverButtonsSize[1]-10);
    ctx.fillRect(gameOverResetButtonPos[0]+5, gameOverResetButtonPos[1]+5, gameOverButtonsSize[0]-10, gameOverButtonsSize[1]-10);
    ctx.fillRect(gameOverHomeButtonPos[0]+5, gameOverHomeButtonPos[1]+5, gameOverButtonsSize[0]-10, gameOverButtonsSize[1]-10);

    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`View`, gameOverViewButtonPos[0]+gameOverButtonsSize[0]/2, gameOverViewButtonPos[1]+gameOverButtonsSize[1]/2);
    ctx.fillText(`Reset`, gameOverResetButtonPos[0]+gameOverButtonsSize[0]/2, gameOverResetButtonPos[1]+gameOverButtonsSize[1]/2);
    ctx.fillText(`Home`, gameOverHomeButtonPos[0]+gameOverButtonsSize[0]/2, gameOverHomeButtonPos[1]+gameOverButtonsSize[1]/2);
}

function drawGameOverText(){
    ctx.font = `bold 30px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Round: ${currentRound}`, canvas.width / 2, canvas.height / 2.1);
}

function drawViewBackButton(){
    let y = 0;
    if(selectedDefender){
        y = viewBackButtonPos[1] - towerUpgraderHeight;
    } else {
        y = viewBackButtonPos[1];
    }
    ctx.fillStyle = "#000000";
    ctx.fillRect(viewBackButtonPos[0], y, viewBackButtonSize[0], viewBackButtonSize[1]);

    ctx.fillStyle = "#e62828";
    ctx.fillRect(viewBackButtonPos[0]+5, y+5, viewBackButtonSize[0]-10, viewBackButtonSize[1]-10);

    ctx.font = `bold 25px serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Back`, viewBackButtonPos[0]+viewBackButtonSize[0]/2,y+viewBackButtonSize[1]/2);
}

function generateRound(round) {
    let wave = [];

    let strength = Math.max(1, Math.floor(round / 20)); 
    if(round > 100){
        strength += Math.floor((round - 100)/2)
    }

    for (let i = 0; i < Math.round(strength/2); i++) {
        let randomNum = Math.random();
        let randomPower = Math.random() + 0.5;
        let randomSpeed = Math.random() + 0.5;

        let type = "";
        let waitTime = 0;
        let count = 0;

        if (randomNum < 0.33) {
            type = "sonic";
            count = Math.round(1 * strength * randomPower);
            waitTime = (150 * randomSpeed) / strength;
        } else if (randomNum < 0.66) {
            type = "demon";
            count = Math.round(0.5 * strength * randomPower);
            waitTime = (250 * randomSpeed) / strength;
        } else {
            type = "god";
            count = Math.round(0.25 * strength * randomPower);
            waitTime = (400 * randomSpeed) / strength;
        }

        for (let j = 0; j < Math.max(1, count); j++) {
            wave.push({ enemyType: type, wait: waitTime });
        }
    }
    return wave;
}

function resetGame(){
    enemies = [];
    defenders = [];
    attacks = [];
    if(gamemode == "testing"){
        health = testingMaxHealth;
    } else {
        health = maxHealth;
    }
    money = startingMoney;
    currentRound = 0;
    currentRoundMultiplier = 1;

    selectedDefenderType = ["",1000000000];
    roundEnded = true;
    roundGoing = false;
    roundPlaying = false;

    playSpeed = 1;

    gameOver = false;

    selectedDefender = null;

    timeCount = 0;
    currentRoundEnemies = [];
    currentRoundIndex = 0;
}

function loadNormalGame(){
    health = maxHealth;
    gamemode = "normal";
    money = startingMoney;
    currentRound = 0;
}

update();