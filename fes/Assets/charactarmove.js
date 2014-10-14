#pragma strict

var accel:double;
var maxspeed:double;
var brake:double;
var chargespeed:double;
var maxcharge:double;
var turn:double;

static var speed:double;
static var charge:double;

static var backupspeed:double;
var backupangle:double;

var move:int;

//1=床設置 0=空中
var charactarStates:int;

function Start () {
	charactarStates = 0;

}

function Update () {
	
	if(speed < maxspeed) speed += accel;
	else speed -= accel;
	
	if(Input.GetKeyDown("z"))
	{
		backupspeed = speed;
		backupangle = this.transform.eulerAngles.y;
		turn *= 2;
	}
	
	if(Input.GetKey("z"))
	{
		speed = 0;
		backupspeed -= brake;
		charge += chargespeed;
		if(charge > maxcharge) charge = maxcharge;
		if(backupspeed <= 0)
		{
			move = 0;
		}
		else 
		{
			transform.Translate(backupspeed * Mathf.Sin((backupangle - this.transform.eulerAngles.y) * Mathf.Deg2Rad),0,backupspeed * Mathf.Cos((backupangle - this.transform.eulerAngles.y) * Mathf.Deg2Rad));
			move = 1;
		}
	}
	else transform.Translate(0,0,speed);
	
	if(Input.GetKeyUp("z"))
	{
		backupspeed = 0;
		speed += charge;
		charge = 0;
		turn /= 2;
	}
	
	if(speed < 0) speed = 0;
	if(backupspeed < 0) backupspeed = 0;
	
	
	transform.Rotate(0,Input.GetAxis("Horizontal") * turn,0);
	
	//if(charactarStates == 0) transform.Translate(0,-0.1,0);

}

function OnCollisionEnter(other : Collision){
	if(info.gameObject.tag == "Floor") charactarStates = 1;
	if(info.gameObject.tag == "Wall") charactarStates = 2;
	
}