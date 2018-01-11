#pragma strict
var names : UnityEngine.UI.InputField;
function Create () {
	PlayerPrefs.SetString("Name", names.text);
	Application.LoadLevel("Create");
}

function QuitGame () {
	Debug.Log ("Game is exiting...");
	Application.Quit ();
}