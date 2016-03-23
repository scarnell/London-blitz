using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class KnowledgeManager : MonoBehaviour {
	public static bool learnedIntro;
	public static bool learnedFood;
	public static bool learnedClothing;
	public static bool learnedPetrol;
	public static bool learnedBlackout;
	public static bool learnedTube;
	public static bool learnedFire;

	public static bool foodSet;
	public static bool clothingSet;
	public static bool petrolSet;
	public static bool blackoutSet;
	public static bool tubeSet;
	public static bool fireSet;


	public static bool showingKnowledge = false;



	public static string foodText = "Food Rationing\n" +
		"Food was severely rationed during the war. " +
		"England did not have the resources to raise cattle or fruit and so relied on importation for many of these goods, " +
		"but German blockades made importing difficult.";
	public static string clothingText = "Clothing Rationing\n" +
		"Almost all spare cloth was sent to the battlefront, leaving very little left for Londoners to buy. " +
		"What was left was expensive: a family could usually only afford one set of clothes per year with their rationing book.";
	public static string petrolText = "Petrol Rationing \n" +
		"Because every tank and airplane needed petrol to run, those back home were often forced to due without. " +
		" Public transportation became even more important, but even the government facilities suffered from the rationing. Buses were often" +
		" late because they lacked the necessary petrol to run.";
	public static string blackoutText = "Blackouts\n" +
		"After the Germans switched to nighttime bombings, Londoners were required to turn all lights off at night. " +
		" This strategy meant to confuse the Germans, thereby causing them to miss their urban target, " +
		"but it instead resulted in a decrease in morale amongst the city dwellers.";
	public static string tubeText = "Sleeping in the Tube\n" +
		"Some Londoners didn't have access to a bomb shelter at home, so they turned instead to nearby Underground stations." +
		" These spaces, while considered safe, were often overcrowded. People often arrived early in the day to reserve spots for that night.";
	public static string fireText = "The Second Great Fire of London\n" +
		"Fire was a constant threat during the London Blitz. The city commissioned an auxiliary fire service of 28,000 individuals before the Blitz" +
		" started. Firemen would work 48-hour shifts and often spent their free time working in factories that produced war goods.";
 	
}
