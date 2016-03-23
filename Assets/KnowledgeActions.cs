using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class KnowledgeActions : MonoBehaviour {

	GameObject foodCheck, clothingCheck, petrolCheck, blackoutCheck, fireCheck, tubeCheck;

	public GameObject progress;

	public GameObject hand;

	public Canvas intro;
	public GameObject knowledge;

	public  Sprite learnStar;


	// Use this for initialization
	void Start () {
		progress.SetActive (false);
		knowledge.SetActive (false);

		foodCheck = GameObject.Find ("Environment/FPSController/FirstPersonCharacter/UI/Progress/Rationing/FoodCheck");
		clothingCheck = GameObject.Find ("Environment/FPSController/FirstPersonCharacter/UI/Progress/Rationing/ClothingCheck");
		petrolCheck = GameObject.Find ("Environment/FPSController/FirstPersonCharacter/UI/Progress/Rationing/PetrolCheck");
		blackoutCheck = GameObject.Find ("Environment/FPSController/FirstPersonCharacter/UI/Progress/NighttimeChanges/BlackoutCheck");
		fireCheck = GameObject.Find ("Environment/FPSController/FirstPersonCharacter/UI/Progress/FireThreat/FireCheck");

		tubeCheck = GameObject.Find ("Environment/FPSController/FirstPersonCharacter/UI/Progress/NighttimeChanges/TubeCheck");

	}

	// Update is called once per frame
	void Update () {

		if (KnowledgeManager.showingKnowledge) {
			progress.SetActive (false);
			hand.SetActive (false);
		} else if (!KnowledgeManager.learnedIntro ) {
			progress.SetActive (false);
			hand.SetActive (false);

		} else{
			progress.SetActive (true);
			hand.SetActive (true);
		}


		UpdateProgress ();
	}

	void UpdateProgress(){
		if (!KnowledgeManager.foodSet && KnowledgeManager.learnedFood) {
			foodCheck.gameObject.GetComponent<Image> ().sprite = learnStar;
			KnowledgeManager.foodSet = true;
		}
		if (!KnowledgeManager.clothingSet && KnowledgeManager.learnedClothing) {
			clothingCheck.gameObject.GetComponent<Image> ().sprite = learnStar;
			KnowledgeManager.clothingSet = true;
		}
		if (!KnowledgeManager.petrolSet && KnowledgeManager.learnedPetrol) {
			Debug.Log ("reached here");
			petrolCheck.gameObject.GetComponent<Image> ().sprite = learnStar;
			KnowledgeManager.petrolSet = true;
		} 
		if (!KnowledgeManager.blackoutSet && KnowledgeManager.learnedBlackout) {
			blackoutCheck.gameObject.GetComponent<Image> ().sprite = learnStar;
			KnowledgeManager.blackoutSet = true;
		}
		if (!KnowledgeManager.fireSet && KnowledgeManager.learnedFire) {
			fireCheck.gameObject.GetComponent<Image> ().sprite = learnStar;
			KnowledgeManager.fireSet = true;
		}
		if (!KnowledgeManager.tubeSet && KnowledgeManager.learnedTube) {
			tubeCheck.gameObject.GetComponent<Image> ().sprite = learnStar;
			KnowledgeManager.tubeSet = true;
		}

	}
}
