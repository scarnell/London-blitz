using UnityEngine;
using System.Collections;

public class ExampleClass2 : MonoBehaviour {
	AudioSource audio;

	void Start() {
		audio = GetComponent<AudioSource>();
	}

	void Update() {
		if (Input.GetKeyDown (KeyCode.I))
		if (audio.mute) {
			//GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 150, 20), "Turn off radio");
			audio.mute = false;
		} else {
			//GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 150, 20), "Turn on radio");
			audio.mute = true;
		}
	}
}