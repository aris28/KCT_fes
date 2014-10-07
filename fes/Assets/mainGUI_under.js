#pragma strict

var undertexture: Texture;

var meterspeed:double;

var pivotpoint : Vector2;
var angle : double;
var changeangle : double;


var sw : int;
var sh : int;

	
function Start () {
}

function Update(){
}

function FixedUpdate() {
	angle -= 1;
	pivotpoint = Vector2(sw-((sw/5)*1.162379) + sw/10, sh-(sw/5) + sw/10);
	changeangle =  180 + charactarmove.charge / (0.8 / 180 );
}

function OnGUI(){
	sw = Screen.width;
	sh = Screen.height;
	if(Input.GetKey("z")) GUIUtility.RotateAroundPivot(changeangle, pivotpoint);
	else GUIUtility.RotateAroundPivot(180, pivotpoint);
	GUI.DrawTexture( Rect(sw-((sw/5)*1.162379), sh-(sw/5), sw/5, sw/5),undertexture);
}