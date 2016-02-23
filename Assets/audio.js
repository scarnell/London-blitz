#pragma strict

function Start () {
if (transform.parent == null)
 {
 Debug.Log("hello");
	var audio: AudioSource = GetComponent.<AudioSource>();
	audio.Play();
}
}

function Update () {


}