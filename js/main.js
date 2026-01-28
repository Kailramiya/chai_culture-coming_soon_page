(() => {
	const form = document.querySelector(".signup__form");
	const emailInput = document.querySelector("#email");

	if (!form) return;

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		if (emailInput instanceof HTMLInputElement) {
			const isValid = emailInput.checkValidity();
			if (!isValid) {
				emailInput.focus();
				return;
			}
			emailInput.value = "";
		}

		alert("Thanks for joining! We'll notify you soon.");
	});
})();
