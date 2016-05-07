
var canvas = document.getElementById('game'),
	convergame = new Convergame(canvas), 
    mainMenu = new MainMenu();
    convergame.handleKeyboardEvents = false;
    convergame.init();
    convergame.scene.changeScene(mainMenu);
    convergame.startMainGameLoop();