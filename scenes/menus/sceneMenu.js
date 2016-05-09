function SceneMenu()
{
	this.convergame = null;
	var font = "sans-serif",
        textSize = 96,
        textStyle = "#ecf0f1",
        width = 1920,
        height = 1080,
        boxWidth = 500,
        boxHeight = 100,
        rectangleStyle = "#ecf0f1",
        recentangleFillStyle = "#2ecc71";
	

	this.update = function(time)
    {
    
    };
	this.render = function()
    {
        this.convergame.draw.blankCanvas('#27ae60');

        this.convergame.draw.text(width / 2, 100, textStyle, textSize, font, "center", "SCENE FUNCTIONS", true, 0, 2, "#16a085", width, 1);
    };
	this.init = function(convergame)
    {
    	this.convergame = convergame;

    };
}