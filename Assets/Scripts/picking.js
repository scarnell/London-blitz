#pragma strict

var testObj : GameObject;
var testObj2 : GameObject;
var testObj3 : GameObject;
var testObj4 : GameObject;

var car : GameObject;
var building : GameObject;
var streetlamp : GameObject;

private var canHover : boolean = false;
private var canHover2 : boolean = false;
private var canHover3 : boolean = false;
private var canHover4 : boolean = false;
private var canHover5 : boolean = false;
private var canHover6 : boolean = false;
private var canHover7 : boolean = false;

var knowledgeText : GameObject;
var knowledgeCanvas : GameObject;


function Start(){
}

function Update()
{
    var fwd = transform.TransformDirection(Vector3.forward); 
    var hit : RaycastHit; 
    
    if (Physics.Raycast(transform.position, fwd, hit))
    {

        if(hit.distance <= 2.0 && hit.collider.gameObject.tag == "pickup1") 
        {
        	Debug.Log("found med kit");
            canHover = true;

            knowledgeText.GetComponent(UnityEngine.UI.Text).text = "Take Medical Kit";
            knowledgeText.GetComponent(UnityEngine.UI.Text).color = Color.black;
        	knowledgeCanvas.SetActive(true);
    		
            if(Input.GetKeyDown("y") | Input.GetButton("Fire2")) 
            {
                Destroy(testObj);
                knowledgeCanvas.SetActive(false);
                knowledgeText.GetComponent(UnityEngine.UI.Text).color = Color.white;

                //Do something! 
            }
        }

        else if(hit.distance <= 4.0 && hit.collider.gameObject.tag == "pickup2") 
        {
            canHover2 = true;

            if(KnowledgeManager.learnedIntro){
            	knowledgeText.GetComponent(UnityEngine.UI.Text).text = "Take Clothes";
        		knowledgeCanvas.SetActive(true);
    		}
            if(Input.GetKeyDown("y")| Input.GetButton("Fire2")) 
            {
                Destroy(testObj2);
                knowledgeText.GetComponent(UnityEngine.UI.Text).fontSize = 20;
                KnowledgeManager.showingKnowledge = true;
                knowledgeText.GetComponent(UnityEngine.UI.Text).text = KnowledgeManager.clothingText;
                KnowledgeManager.learnedClothing = true;
                //Do something! 
            }
        }

        else if(hit.distance <= 3.0 && hit.collider.gameObject.tag == "pickup3") 
        {
            canHover3 = true;

            	knowledgeText.GetComponent(UnityEngine.UI.Text).text = "Take Food";
        		knowledgeCanvas.SetActive(true);
        	
    		
            if(Input.GetKeyDown("y")| Input.GetButton("Fire2")) 
            {
                Destroy(testObj3);
                knowledgeText.GetComponent(UnityEngine.UI.Text).fontSize = 20;
                KnowledgeManager.showingKnowledge = true;
                knowledgeText.GetComponent(UnityEngine.UI.Text).text = KnowledgeManager.foodText;
                KnowledgeManager.learnedFood = true;

                //Do something! 
            }


        }

         else if(hit.distance <= 2.0 && hit.collider.gameObject.tag == "pickup4") 
        {
            canHover4 = true;
           	knowledgeText.GetComponent(UnityEngine.UI.Text).text = "Turn on/off radio";
            
            
        }
        else if(hit.distance <= 3.0 && hit.collider.gameObject.tag == "car") 
        {
            canHover5 = true;

            knowledgeText.GetComponent(UnityEngine.UI.Text).text = "Observe car";
        	knowledgeCanvas.SetActive(true);
    		
            if(Input.GetKeyDown("y")| Input.GetButton("Fire2")) 
            {
                Destroy(car.GetComponent(CapsuleCollider));
                Destroy(car.GetComponentInChildren(ParticleRenderer));
                knowledgeText.GetComponent(UnityEngine.UI.Text).fontSize = 20;
                KnowledgeManager.showingKnowledge = true;
                knowledgeText.GetComponent(UnityEngine.UI.Text).text = KnowledgeManager.petrolText;
                KnowledgeManager.learnedPetrol = true;

                //Do something! 
            }


        }

        else if(hit.distance <= 3.0 && hit.collider.gameObject.tag == "building") 
        {
            canHover6 = true;

            knowledgeText.GetComponent(UnityEngine.UI.Text).text = "Observe building";
        	knowledgeCanvas.SetActive(true);
    		
            if(Input.GetKeyDown("y")| Input.GetButton("Fire2")) 
            {
           	 	Destroy(building.GetComponent(BoxCollider));
           	 	Destroy(building.GetComponentInChildren(ParticleRenderer));
                knowledgeText.GetComponent(UnityEngine.UI.Text).fontSize = 20;
                KnowledgeManager.showingKnowledge = true;
                knowledgeText.GetComponent(UnityEngine.UI.Text).text = KnowledgeManager.fireText;
                KnowledgeManager.learnedFire = true;

                //Do something! 
            }


        }
        else if(hit.distance <= 3.0 && hit.collider.gameObject.tag == "streetlamp") 
        {
            canHover7 = true;

            knowledgeText.GetComponent(UnityEngine.UI.Text).text = "Observe lamp";
        	knowledgeCanvas.SetActive(true);
    		
            if(Input.GetKeyDown("y")| Input.GetButton("Fire2")) 
            {
            	Destroy(streetlamp.GetComponent(CapsuleCollider));
            	Destroy(streetlamp.GetComponentInChildren(ParticleRenderer));
                knowledgeText.GetComponent(UnityEngine.UI.Text).fontSize = 20;
                KnowledgeManager.showingKnowledge = true;
                knowledgeText.GetComponent(UnityEngine.UI.Text).text = KnowledgeManager.blackoutText;
                KnowledgeManager.learnedBlackout = true;

                //Do something! 
            }


        }



       

        else
        {
            canHover = false;
            canHover2 = false;
            canHover3 = false;
            canHover4 = false;
            canHover5 = false;
            canHover6 = false;
            canHover7 = false;
        }
    }

    removeKnowledge();

}

function removeKnowledge(){
	if(Input.GetButton("Fire1")){
		KnowledgeManager.showingKnowledge = false;
		knowledgeCanvas.SetActive(false);
    }
}

function OnGUI()
{
    /*if(canHover == true)
    {
        //GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 150, 20), "Take medical kit");
        //canHover = false;


    }

     if(canHover2 == true)
    {
        GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 150, 20), "Take Cloth");
        //canHover = false;
    }

      if(canHover3 == true)
    {
        GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 150, 20), "Take food");
        //canHover = false;
    }

    if(canHover4 == true)
    {
        GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 150, 20), "Turn on/off radio");
        //canHover = false;
    }
    */
}