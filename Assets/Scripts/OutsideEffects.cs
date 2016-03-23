using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityStandardAssets.Vehicles.Aeroplane;

public class OutsideEffects : MonoBehaviour {

	public GameObject knowledgeCanvas;
	public GameObject knowledgeText;
	public GameObject progressCanvas;

	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetButton ("Fire1")) {
			knowledgeCanvas.SetActive (false);
			KnowledgeManager.showingKnowledge = false;
		}
	
	}

	void OnTriggerEnter(Collider player){
		//Debug.Log ("collision");
		KnowledgeManager.showingKnowledge = true;
		knowledgeText.GetComponent<Text> ().text = "Follow Princess St. to the tube stop.";
		knowledgeCanvas.SetActive (true);
		AeroplaneUserControl2Axis.userOutside = true;
		
	}
}
