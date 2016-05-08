function BlankScene()
{
	this.convergame = null;
	
	this.update = function(time)
    {
    
    };
	this.render = function()
    {
        this.convergame.draw.blankCanvas('#27ae60');
    };
	this.init = function(convergame)
    {
    	this.convergame = convergame;

    };
}