function MainMenu() {

  this.convergame = null;

  this.titleText = null;

  this.timer = 0;
  this.timerLimit = 6;

  this.update = function(time) {

    this.timer += time;
    if (this.timer >= this.timerLimit) {
      this.timer = 0;
      //this.convergame.scene.changeScene(interviewScene);
    }

  };

  this.render = function() {

    this.convergame.draw.blankCanvas('#333');
    this.titleText.render();

  };

  this.init = function(convergame) {

    this.convergame = convergame;

    this.titleText = new Text();
    this.titleText.init(this.convergame, 1920 / 4, 100, 'CONVERGAME TECH DEMO');
    this.titleText.font = 'sans-serif';
    this.titleText.fontSize = 80;
    this.titleText.style = '#FEFEFE';
    this.titleText.maxWidth = 1900;
    this.titleText.lineHeight = 55;


  };

}