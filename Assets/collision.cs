using UnityEngine;
using System.Collections;

public class collision : MonoBehaviour {

	void OnCollisonEnter (Collision col)
	{
			var exp = GetComponent<ParticleSystem> ();
			exp.Play ();

	}
}