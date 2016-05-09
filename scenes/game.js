
var canvas = document.getElementById('game'),
	convergame = new Convergame(canvas), 
    mainMenu = new MainMenu();
    audioMenu = new AudioMenu();
    collisionMenu = new CollisionMenu();
    drawMenu = new DrawMenu();
    inputMenu = new InputMenu();
    sceneMenu = new SceneMenu();
    storageMenu = new StorageMenu();
    convergame.handleKeyboardEvents = false;
    convergame.init();
    convergame.scene.changeScene(mainMenu);
    convergame.startMainGameLoop();