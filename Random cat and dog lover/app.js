let btn = document.querySelector("#catbutton");

btn.addEventListener("click", async () => {
	let fact = await getFacts();
	// console.log(fact);
	let p = document.querySelector("#result");
	p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
	try {
		let res = await axios.get(url);
		return res.data.fact;
	} catch (e) {
		console.log("error", e);
		return "NO fact found";
	}
}




let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#dbutton");

btn2.addEventListener("click", async () => {
	let link =await getImage();
	let img= document.querySelector("#dogresult");

	img.setAttribute ("src",link);
});


async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error", e);
        return "NO Dog image found";
    }
}
