using UnityEngine;
using System.Collections;

public class collisionjoystick : MonoBehaviour {

	void OnCollisonEnter(Collision col){
		if (col.gameObject.name == "FPSController"){
			OVRInput.SetControllerVibration (1, 1);
		}
	}

	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
	
	}

}
