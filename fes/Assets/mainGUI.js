#pragma strict

var time : double;
var timestyle: GUIStyle;
var meterstyle: GUIStyle;
var metertexture: Texture;

var meterspeed:double;

var pivotpoint : Vector2;
var angle : double;


var sw : int;
var sh : int;
	
function Start () {
	timestyle.normal.textColor = Color.white;
	
}

function Update(){
}

function FixedUpdate() {
	time += Time.deltaTime;
	if(Input.GetKey("z"))
	{
		meterspeed = charactarmove.backupspeed * 100;
	}
	else
	{
		meterspeed = charactarmove.speed * 100;
	}
	
}

function OnGUI(){
	
	timestyle.fontSize = sw/20;
	meterstyle.fontSize = sw/15;
	sw = Screen.width;
	sh = Screen.height;
	GUI.Box(Rect(0, 0, sw/5, sw/10),"タイム");
	GUI.Label( Rect(sw/20, sw/25, 100, 100), time.ToString("f2"), timestyle);
	GUI.DrawTexture( Rect(sw-((sw/4.995)*1.162379), sh-(sw/4.945), sw/4.9*1.162379, sw/4.9),metertexture);
	GUI.Label( Rect(sw-(sw/5)+(sw/11), sh-(sw/5)+(sw/25), sw/8, sw/8), meterspeed.ToString("f0"), meterstyle);
}