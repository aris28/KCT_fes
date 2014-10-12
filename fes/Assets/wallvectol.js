#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(collider:Collider) {
    if (collider.gameObject.CompareTag('Player'))
    {
    	collider.gameObject.rigidbody.AddForce(
        Vector3.right ,
        ForceMode.Impulse
    	);
    }

}