document.addEventListener("DOMContentLoaded", () => {
	main();
});

const creeperHead = document.getElementById("creeper-head");

function main() {
	creeperHead.addEventListener("click", () => {
		creeperHead.classList.add("exploding-animation");
		waitInterval(2);
	}
}

const waitInterval = (second) => {
	let interval;
	let count = 0; 
	interval = setInterval(
		() => {
			if (count >= second) {
				creeperHead.style.display = "None"; 
				clearInterval(interval);
			}
			count++;
		}, 1000
	)
}
