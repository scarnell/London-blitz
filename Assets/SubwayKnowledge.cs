using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.SceneManagement;

public class SubwayKnowledge : MonoBehaviour {

	public GameObject knowledgeCanvas;
	public GameObject knowledgeText;

	public GameObject KM;
	public KnowledgeManager kmm;

	bool clickButton = false;

	// Use this for initialization
	void Start () {
		KnowledgeManager.learnedIntro = true;
		KnowledgeManager.foodSet = false;
		KnowledgeManager.clothingSet = false;
		KnowledgeManager.petrolSet = false;
		KnowledgeManager.blackoutSet = false;
		KnowledgeManager.fireSet = false;
		KnowledgeManager.tubeSet = false;




		Debug.Log ("in subway!");
	
	}

	// Update is called once per frame
	void Update () {
		if (!KnowledgeManager.learnedTube ) {
			//Debug.Log ("not learned tube");
			knowledgeCanvas.SetActive (true);
			knowledgeText.GetComponent<UnityEngine.UI.Text>().fontSize = 20;
			knowledgeText.GetComponent<Text>().text = KnowledgeManager.tubeText;
			KnowledgeManager.showingKnowledge = true;
			dismissCanvas ();
		}

		if (KnowledgeManager.learnedTube) {
			Invoke ("Restart", 4);
		}



	
	}

	void dismissCanvas(){
		if (Input.GetButton ("Fire1")) {
			KnowledgeManager.learnedTube = true;
			knowledgeCanvas.SetActive (false);
			KnowledgeManager.showingKnowledge = false;
			//Debug.Log ("showingKnowledge" + KnowledgeManager.showingKnowledge);
		}
	}

	void Restart(){
		SceneManager.LoadScene  (0);
	}
}
