using UnityEngine;
using System.Collections;

public class DismissCanvas : MonoBehaviour {
	string canvasName;
	// Use this for initialization
	void Start () {
		canvasName = transform.name;
	
	}
	
	// Update is called once per frame
	void Update () {

		if(Input.GetMouseButton(0) | Input.GetButton("Fire1")){
			 
			//Debug.Log (canvasName);
			switch (canvasName) {
			case "Intro":
				transform.gameObject.SetActive(false);
				KnowledgeManager.learnedIntro = true;
				break;

			}
		}
	
	}

}
