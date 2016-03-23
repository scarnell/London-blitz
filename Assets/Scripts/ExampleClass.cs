using UnityEngine;
using System.Collections;

public class ExampleClass : MonoBehaviour {
	AudioSource audio;

	void Start() {
		audio = GetComponent<AudioSource>();
	}

	void Update() {
		if (Input.GetKeyDown (KeyCode.O))
		if (audio.mute) {
			//GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 150, 20), "Turn off radio");
			audio.mute = false;
		} else {
			//GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 150, 20), "Turn on radio");
			audio.mute = true;
		}
	}
}