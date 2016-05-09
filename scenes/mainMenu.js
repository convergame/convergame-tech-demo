function MainMenu()
{
    this.convergame = null;
    this.currentMenuIndex = 0;

    var font = "sans-serif",
        textSize = 96,
        textStyle = "#ecf0f1",
        width = 1920,
        height = 1080,
        boxWidth = 500,
        boxHeight = 100,
        rectangleStyle = "#ecf0f1",
        recentangleFillStyle = "#2ecc71";
    /*Button Objects */
    audioBtn = null;
    collisionBtn = null;
    drawBtn = null;
    inputBtn = null;
    sceneBtn = null;
    storageBtn = null;

    this.update = function(time)
    {
        if (this.convergame.input.controlPressed("down") && this.currentMenuIndex<5)
        {
            this.currentMenuIndex++;
        }
        
        if (this.convergame.input.controlPressed("up") && this.currentMenuIndex>0)
        {
            this.currentMenuIndex--;
        }

        //Todo: This would be more suited as a switch case.

        if (this.convergame.input.controlPressed("enter") && this.currentMenuIndex === 0)
        {
            this.convergame.scene.changeScene(audioScene);
        } else if (this.convergame.input.controlPressed("enter") && this.currentMenuIndex === 1) {
            
            this.convergame.scene.changeScene(collisionScene);
        } else if (this.convergame.input.controlPressed("enter") && this.currentMenuIndex === 2) {
            
            this.convergame.scene.changeScene(drawScene);
        } else if (this.convergame.input.controlPressed("enter") && this.currentMenuIndex === 3) {
            
            this.convergame.scene.changeScene(inputScene);
        } else if (this.convergame.input.controlPressed("enter") && this.currentMenuIndex === 4) {
            
            this.convergame.scene.changeScene(sceneScene);
        } else if (this.convergame.input.controlPressed("enter") && this.currentMenuIndex === 5) {
            
            this.convergame.scene.changeScene(storageScene);
        }

        // Mouse collision checks
        
            
        if (this.convergame.input.mouse.isPointerWithinRect(this.audioBtn.x, this.audioBtn.y, boxWidth, boxHeight))
        {
            this.currentMenuIndex = 0;
            
            if (this.convergame.input.mouse.isLeftButtonPressed())
            {
                this.convergame.input.mouse.resetButtonState();
                this.convergame.scene.changeScene(audioMenu);
            }
        }
        else if (this.convergame.input.mouse.isPointerWithinRect(this.collisionBtn.x, this.collisionBtn.y, boxWidth, boxHeight))
        {
            this.currentMenuIndex = 1;
            
            if (this.convergame.input.mouse.isLeftButtonPressed())
            {
                this.convergame.input.mouse.resetButtonState();
                this.convergame.scene.changeScene(collisionMenu);
            }
        }
        else if (this.convergame.input.mouse.isPointerWithinRect(this.drawBtn.x, this.drawBtn.y, boxWidth, boxHeight))
        {
            this.currentMenuIndex = 2;
            
            if (this.convergame.input.mouse.isLeftButtonPressed())
            {
                this.convergame.input.mouse.resetButtonState();
                this.convergame.scene.changeScene(drawMenu);
            }
        }
        else if (this.convergame.input.mouse.isPointerWithinRect(this.inputBtn.x, this.inputBtn.y, boxWidth, boxHeight))
        {
            this.currentMenuIndex = 3;
            
            if (this.convergame.input.mouse.isLeftButtonPressed())
            {
                this.convergame.input.mouse.resetButtonState();
                this.convergame.scene.changeScene(inputMenu);
            }
        }
        else if (this.convergame.input.mouse.isPointerWithinRect(this.sceneBtn.x, this.sceneBtn.y, boxWidth, boxHeight))
        {
            this.currentMenuIndex = 4;
            
            if (this.convergame.input.mouse.isLeftButtonPressed())
            {
                this.convergame.input.mouse.resetButtonState();
                this.convergame.scene.changeScene(sceneMenu);
            }
        }
        else if (this.convergame.input.mouse.isPointerWithinRect(this.storageBtn.x, this.storageBtn.y, boxWidth, boxHeight))
        {
            this.currentMenuIndex = 5;
            
            if (this.convergame.input.mouse.isLeftButtonPressed())
            {
                this.convergame.input.mouse.resetButtonState();
                this.convergame.scene.changeScene(storageMenu);
            }
        }

    };
    this.render = function()
    {
        this.convergame.draw.blankCanvas('#27ae60');
        

        this.convergame.draw.text(width / 2, 100, textStyle, textSize, font, "center", "CONVERGAME ENGINE", true, 0, 2, "#16a085", width, 1);
        this.convergame.draw.text(width / 2, 200, textStyle, 48, font, "center", "Tech Demo", true, 0, 2, "#16a085", width, 1);
        this.convergame.draw.text(width / 2, 300, textStyle, 32, font, "center", "Select a test...", true, 0, 2, "#16a085", width / 2, 32);
        
        switch(this.currentMenuIndex)
        {
            case 0:
                this.audioBtn.imagePath = 'assets/buttons/highlighted/audio.png';

                //Turn off other highlight buttons (Could do with a leaner solution, Maybe?)
                this.collisionBtn.imagePath = 'assets/buttons/collision.png';
                this.drawBtn.imagePath = 'assets/buttons/draw.png';
                this.inputBtn.imagePath = 'assets/buttons/input.png';
                this.sceneBtn.imagePath = 'assets/buttons/scene.png';
                this.storageBtn.imagePath = 'assets/buttons/storage.png';
                break;
                
            case 1:
                this.collisionBtn.imagePath = 'assets/buttons/highlighted/collision.png';

                //Turn off other highlight buttons
                this.audioBtn.imagePath = 'assets/buttons/audio.png';
                this.drawBtn.imagePath = 'assets/buttons/draw.png';
                this.inputBtn.imagePath = 'assets/buttons/input.png';
                this.sceneBtn.imagePath = 'assets/buttons/scene.png';
                this.storageBtn.imagePath = 'assets/buttons/storage.png';
                break;
            case 2:
                this.drawBtn.imagePath = 'assets/buttons/highlighted/draw.png';

                //Turn off other highlight buttons
                this.audioBtn.imagePath = 'assets/buttons/audio.png';
                this.collisionBtn.imagePath = 'assets/buttons/collision.png';
                this.inputBtn.imagePath = 'assets/buttons/input.png';
                this.sceneBtn.imagePath = 'assets/buttons/scene.png';
                this.storageBtn.imagePath = 'assets/buttons/storage.png';
                break;
            case 3:
                this.inputBtn.imagePath = 'assets/buttons/highlighted/input.png';

                //Turn off other highlight buttons
                this.audioBtn.imagePath = 'assets/buttons/audio.png';
                this.collisionBtn.imagePath = 'assets/buttons/collision.png';
                this.drawBtn.imagePath = 'assets/buttons/draw.png';
                this.sceneBtn.imagePath = 'assets/buttons/scene.png';
                this.storageBtn.imagePath = 'assets/buttons/storage.png';
                break;
            case 4:
                this.sceneBtn.imagePath = 'assets/buttons/highlighted/scene.png';

                //Turn off other highlight buttons
                this.audioBtn.imagePath = 'assets/buttons/audio.png';
                this.collisionBtn.imagePath = 'assets/buttons/collision.png';
                this.drawBtn.imagePath = 'assets/buttons/draw.png';
                this.inputBtn.imagePath = 'assets/buttons/input.png';
                this.storageBtn.imagePath = 'assets/buttons/storage.png';
                break;
            case 5:
                this.storageBtn.imagePath = 'assets/buttons/highlighted/storage.png';

                //Turn off other highlight buttons
                this.audioBtn.imagePath = 'assets/buttons/audio.png';
                this.collisionBtn.imagePath = 'assets/buttons/collision.png';
                this.drawBtn.imagePath = 'assets/buttons/draw.png';
                this.inputBtn.imagePath = 'assets/buttons/input.png';
                this.sceneBtn.imagePath = 'assets/buttons/scene.png';
                break;
        }
        this.audioBtn.render();
        this.collisionBtn.render();
        this.drawBtn.render();
        this.inputBtn.render();
        this.sceneBtn.render();
        this.storageBtn.render();
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;

        /*Init Button Objects*/
        this.audioBtn = new Sprite();
        this.audioBtn.init(this.convergame, (width / 2) - (boxWidth / 2), 400, boxWidth, boxHeight, 'assets/buttons/audio.png');

        this.collisionBtn = new Sprite();
        this.collisionBtn.init(this.convergame, (width / 2) - (boxWidth / 2), 500, boxWidth, boxHeight, 'assets/buttons/collision.png');

        this.drawBtn = new Sprite();
        this.drawBtn.init(this.convergame, (width / 2) - (boxWidth / 2), 600, boxWidth, boxHeight, 'assets/buttons/draw.png');

        this.inputBtn = new Sprite();
        this.inputBtn.init(this.convergame, (width / 2) - (boxWidth / 2), 700, boxWidth, boxHeight, 'assets/buttons/input.png');

        this.sceneBtn = new Sprite();
        this.sceneBtn.init(this.convergame, (width / 2) - (boxWidth / 2), 800, boxWidth, boxHeight, 'assets/buttons/scene.png');

        this.storageBtn = new Sprite();
        this.storageBtn.init(this.convergame, (width / 2) - (boxWidth / 2), 900, boxWidth, boxHeight, 'assets/buttons/storage.png');

    };
}