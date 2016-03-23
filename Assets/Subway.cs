using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class Subway : MonoBehaviour {

	public GameObject knowledgeCanvas;
	public GameObject knowledgeText;
	public GameObject particleSystem;
	bool inRange = false;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetButton("Fire2") && inRange){
			SceneManager.LoadScene (1);
			//Debug.Log("load next scene");
		}
	}

	void OnTriggerEnter(Collider player){
		Debug.Log ("collision");
		if (player.gameObject.tag == "Player") {
			Destroy(particleSystem);
			knowledgeText.GetComponent<Text> ().text = "Enter Underground.";
			knowledgeCanvas.SetActive (true);
			inRange = true;
		}

	}
}
