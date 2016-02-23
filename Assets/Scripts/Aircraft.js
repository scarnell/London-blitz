
var group1 : Transform;
var group2 : Transform;
var group3 : Transform;
var group4 : Transform;
var spawnPos : Vector3;
var bar : Vector3;
var player : GameObject;
var player1 : GameObject;
var player2 : GameObject;
var player3 : GameObject;



function Awake() {
spawnPos = transform.position;
}

function Update() {
    //if(Input.GetKeyDown("joystick button 19")) {
bar = transform.position;
  if(Vector3.Distance (bar, spawnPos) >=20 && Vector3.Distance (bar, spawnPos) <40){
        group1.parent = null;
        group1.GetComponent.<Rigidbody>().isKinematic = false;
        group1.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio: AudioSource = group1.GetComponent.<AudioSource>();
		audio.Play();
		}
if(Vector3.Distance (bar, spawnPos) >=40 && Vector3.Distance (bar, spawnPos) <60)
        {group2.parent = null;
        group2.GetComponent.<Rigidbody>().isKinematic = false;
        group2.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio1: AudioSource = group2.GetComponent.<AudioSource>();
		audio1.Play();}
if(Vector3.Distance (bar, spawnPos) >= 60 && Vector3.Distance (bar, spawnPos) <80)
        {group3.parent = null;
        group3.GetComponent.<Rigidbody>().isKinematic = false;
        group3.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio2: AudioSource = group3.GetComponent.<AudioSource>();
		audio2.Play();}
if(Vector3.Distance (bar, spawnPos) >= 80 && Vector3.Distance (bar, spawnPos) <100)
        {group4.parent = null;
        group4.GetComponent.<Rigidbody>().isKinematic = false;
        group4.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio3: AudioSource = group4.GetComponent.<AudioSource>();
		audio3.Play();}
    if(Vector3.Distance (bar, spawnPos) >= 750 && Vector3.Distance (bar, spawnPos) <770)
    {
    Destroy(GameObject.Find("Group1"));
    Destroy(GameObject.Find("Group2"));
    Destroy(GameObject.Find("Group3"));
    Destroy(GameObject.Find("Group4"));}
    if(Vector3.Distance (bar, spawnPos) >= 1000 && Vector3.Distance (bar, spawnPos) <1020)
{
player.GetComponent.<AudioSource>().mute=true;
player1.GetComponent.<AudioSource>().mute=true;
player2.GetComponent.<AudioSource>().mute=true;
player3.GetComponent.<AudioSource>().mute=true;
}
}

function FixedUpdate () {
    GetComponent.<Rigidbody>().AddForce(Vector3.forward);
}
