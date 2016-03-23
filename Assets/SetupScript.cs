using UnityEngine;
using System.Collections;

public class SetupScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
		KnowledgeManager.learnedIntro = false;
		KnowledgeManager.learnedFood = false;
		KnowledgeManager.learnedClothing = false;
		KnowledgeManager.learnedPetrol = false;
		KnowledgeManager.learnedBlackout = false;
		KnowledgeManager.learnedFire = false;
		KnowledgeManager.learnedTube = false;

		KnowledgeManager.foodSet = false;
		KnowledgeManager.clothingSet = false;
		KnowledgeManager.petrolSet = false;
		KnowledgeManager.blackoutSet = false;
		KnowledgeManager.fireSet = false;
		KnowledgeManager.tubeSet = false;
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
