
var group1 : Transform;
var group2 : Transform;
var group3 : Transform;
var group4 : Transform;

function Update() {
    if(Input.GetKeyDown("space")) {
        group1.parent = null;
        group1.GetComponent.<Rigidbody>().isKinematic = false;
        group1.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        group2.parent = null;
        group2.GetComponent.<Rigidbody>().isKinematic = false;
        group2.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        group3.parent = null;
        group3.GetComponent.<Rigidbody>().isKinematic = false;
        group3.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        group4.parent = null;
        group4.GetComponent.<Rigidbody>().isKinematic = false;
        group4.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
    }
}

function FixedUpdate () {
    GetComponent.<Rigidbody>().AddForce(Vector3.forward);
}
