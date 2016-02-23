
var group1 : Transform;
var group2 : Transform;
var group3 : Transform;
var group4 : Transform;
var spawnPos : Vector3;
var bar : Vector3;

function Awake() {
spawnPos = transform.position;
}

function Update() {
    //if(Input.GetKeyDown("joystick button 19")) {
bar = transform.position;
  if(Vector3.Distance (bar, spawnPos) >=20 && Vector3.Distance (bar, spawnPos) <40){
        group1.parent = null;
        group1.GetComponent.<Rigidbody>().isKinematic = false;
        group1.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;}
if(Vector3.Distance (bar, spawnPos) >=40 && Vector3.Distance (bar, spawnPos) <60)
        {group2.parent = null;
        group2.GetComponent.<Rigidbody>().isKinematic = false;
        group2.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;}
if(Vector3.Distance (bar, spawnPos) >= 60 && Vector3.Distance (bar, spawnPos) <80)
        {group3.parent = null;
        group3.GetComponent.<Rigidbody>().isKinematic = false;
        group3.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;}
if(Vector3.Distance (bar, spawnPos) >= 80 && Vector3.Distance (bar, spawnPos) <100)
        {group4.parent = null;
        group4.GetComponent.<Rigidbody>().isKinematic = false;
        group4.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;}
    
}

function FixedUpdate () {
    GetComponent.<Rigidbody>().AddForce(Vector3.forward);
}
