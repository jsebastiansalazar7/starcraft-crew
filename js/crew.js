let id = 0;

let crew = {
	"members": [
		{
			"id": 1,
			"image": "images/crew/chewbacca.jpg",
			"name": "Chewbacca",
			"role": "Captain",
			"description": "A simple guy, legendary wookie warrior, shampoo lover and space-travel enthusiast.",
			"skills": "Blasters, lasers, and hand-to-hand combat"
		},
		{
			"id": 2,
			"image": "images/crew/yoda.jpg",
			"name": "Yoda",
			"role": "Master",
			"description": "The Grand Master of the Jedi Order.  Let the force be with us.",
			"skills": "The force, acrobatic combat, lightsword fighting, remote communication & more"
		}, 
		{
			"id": 3,
			"image": "images/crew/bb8.jpg",
			"name": "BB8",
			"role": "Droid",
			"description": "A fun, smart and loyal companion who is full of surprices.",
			"skills": "Free rolling, multiple panel tool & port configurations"
		}
	]
};

function previousCrewMember() {
	id--;
	id = validateId(id);
	getCrewMemberInfo(id);
}

function nextCrewMember() {
	id++;
	id = validateId(id);
	getCrewMemberInfo(id);
}

function getCrewMemberInfo(crewMemberId) {
	id = crewMemberId;
	if  (crew.members[crewMemberId].id != 'undefined') {
		document.getElementById("image").src = crew.members[crewMemberId].image;
		document.getElementById("name").innerHTML = crew.members[crewMemberId].name;
		document.getElementById("role").innerHTML = crew.members[crewMemberId].role;
		document.getElementById("description").innerHTML = crew.members[crewMemberId].description;
		document.getElementById("skills").innerHTML = crew.members[crewMemberId].skills;
	}
}

function validateId(id) {
	if (id == Object.keys(crew.members).length) {
		id = 0;
	} else if (id == -1) {
		id = Object.keys(crew.members).length - 1;
	}
	return id;
}
