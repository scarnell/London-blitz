
var group1 : Transform;
var group2 : Transform;
var group3 : Transform;
var group4 : Transform;
var group5 : Transform;
var group6 : Transform;
var group7 : Transform;
var group8 : Transform;
var player : GameObject;
var player1 : GameObject;
var player2 : GameObject;
var player3 : GameObject;
var spawnPos : Vector3;
var bar : Vector3;


function Awake() {
spawnPos = transform.position;
}

function Update() {
    //if(Input.GetKeyDown("joystick button 19")) {
bar = transform.position;
if(Vector3.Distance (bar, spawnPos) >=20 && Vector3.Distance (bar, spawnPos) <30){
        group1.parent = null;
        group1.GetComponent.<Rigidbody>().isKinematic = false;
        group1.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio: AudioSource = group1.GetComponent.<AudioSource>();
		audio.Play();
     }
if(Vector3.Distance (bar, spawnPos) >=30 && Vector3.Distance (bar, spawnPos) <40)
        {group2.parent = null;
        group2.GetComponent.<Rigidbody>().isKinematic = false;
        group2.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio1: AudioSource = group2.GetComponent.<AudioSource>();
		audio1.Play();
        }
if(Vector3.Distance (bar, spawnPos) >= 40 && Vector3.Distance (bar, spawnPos) <50)
        {group3.parent = null;
        group3.GetComponent.<Rigidbody>().isKinematic = false;
        group3.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio2: AudioSource = group3.GetComponent.<AudioSource>();
		audio2.Play();
        }
if(Vector3.Distance (bar, spawnPos) >= 50 && Vector3.Distance (bar, spawnPos) <60)
        {group4.parent = null;
        group4.GetComponent.<Rigidbody>().isKinematic = false;
        group4.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio3: AudioSource = group4.GetComponent.<AudioSource>();
		audio3.Play();
        }
if(Vector3.Distance (bar, spawnPos) >=60 && Vector3.Distance (bar, spawnPos) <70){
        group5.parent = null;
        group5.GetComponent.<Rigidbody>().isKinematic = false;
        group5.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio4: AudioSource = group5.GetComponent.<AudioSource>();
		audio4.Play();
        }
if(Vector3.Distance (bar, spawnPos) >=70 && Vector3.Distance (bar, spawnPos) <80)
        {group6.parent = null;
        group6.GetComponent.<Rigidbody>().isKinematic = false;
        group6.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio5: AudioSource = group6.GetComponent.<AudioSource>();
		audio5.Play();
        }
if(Vector3.Distance (bar, spawnPos) >= 80 && Vector3.Distance (bar, spawnPos) <90)
        {group7.parent = null;
        group7.GetComponent.<Rigidbody>().isKinematic = false;
        group7.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio6: AudioSource = group7.GetComponent.<AudioSource>();
		audio6.Play();
        }
if(Vector3.Distance (bar, spawnPos) >= 90 && Vector3.Distance (bar, spawnPos) <100)
        {group8.parent = null;
        group8.GetComponent.<Rigidbody>().isKinematic = false;
        group8.GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity;
        var audio7: AudioSource = group8.GetComponent.<AudioSource>();
		audio7.Play();
       }
         if(Vector3.Distance (bar, spawnPos) >= 750 && Vector3.Distance (bar, spawnPos) <760)
    {
    Destroy(GameObject.Find("Group5"));
    Destroy(GameObject.Find("Group6"));
    Destroy(GameObject.Find("Group7"));
    Destroy(GameObject.Find("Group8"));
    Destroy(GameObject.Find("Group9"));
    Destroy(GameObject.Find("Group10"));
    Destroy(GameObject.Find("Group11"));
   	Destroy(GameObject.Find("Group12"));}

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
