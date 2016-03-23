using UnityEngine;
using System.Collections;

public class collisionjoystick : MonoBehaviour {

	void OnCollisonEnter(Collision col){
		if (col.gameObject.name == "FPSController"){
<<<<<<< Updated upstream
			OVRInput.SetControllerVibration (1, 1);
=======
			//OVRInput.SetControllerVibration (1, 1);
>>>>>>> Stashed changes
		}
	}

	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
	
	}

}
