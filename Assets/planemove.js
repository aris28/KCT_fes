#pragma strict

var angle:double;

function Start () {
	this.transform.eulerAngles.z = 0;
}

function Update () {
	
	angle = this.transform.eulerAngles.z;
	
	if(Input.GetKey(KeyCode.RightArrow))
	{
		if((this.transform.eulerAngles.z < 25 && this.transform.eulerAngles.z >= -1) || (this.transform.eulerAngles.z < 360 && this.transform.eulerAngles.z > 340)) transform.Rotate(0,0,-1);
		
	}
	else if(Input.GetKey(KeyCode.LeftArrow))
	{
		if((this.transform.eulerAngles.z < 20 && this.transform.eulerAngles.z >= -1) || (this.transform.eulerAngles.z < 360 && this.transform.eulerAngles.z > 335))  transform.Rotate(0,0,1);
	}
	else
	{
		if((this.transform.eulerAngles.z < 25 && this.transform.eulerAngles.z >= 1)) transform.Rotate(0,0,-1);
		else if((this.transform.eulerAngles.z < 360 && this.transform.eulerAngles.z > 335)) transform.Rotate(0,0,1);
	}
	
	

}