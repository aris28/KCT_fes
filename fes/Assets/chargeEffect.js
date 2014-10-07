#pragma strict

var maxhuge:double;
var minhuge:double;

function Start () {

}

function Update () {
	
	if(Input.GetKey("z"))
	{
		if(maxhuge < 10)
		{
			this.transform.localScale.y += 0.1;
			this.transform.localScale.z += 0.1;
			maxhuge += 1;
		}
	}
	
	if(Input.GetKeyUp("z"))
	{
		maxhuge = 0;
		this.transform.localScale.y = 1;
		this.transform.localScale.z = 1;
	}

}