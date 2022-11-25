const dataAraay = [
	{
		userId: 1,
		userName: "სახელი 1",
		userLastName: "გვარი 1",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 20,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 2,
		userName: "სახელი 2",
		userLastName: "გვარი 2",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 30,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 3,
		userName: "სახელი 3",
		userLastName: "გვარი 3",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 35,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 4,
		userName: "სახელი 4",
		userLastName: "გვარი 4",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 29,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 5,
		userName: "სახელი 5",
		userLastName: "გვარი 5",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 49,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 6,
		userName: "სახელი 6",
		userLastName: "გვარი 6",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 31,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 7,
		userName: "სახელი 7",
		userLastName: "გვარი 7",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 31,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
];

const container = document.getElementById("container");

function render() {
	let renderHtml = "";
	dataAraay.forEach((card) => {
		renderHtml += `<div class="card" id="card">
        <p class="user-id">${card.userId}</p>
        <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            class="user-img"
        />
        <p class="user-name">${card.userName}</p>
        <p class="user-lastName">${card.userLastName}</p>
        <p class="user-age">${card.userAge}</p>
        <p class="user-adresses">${card.userAddresses}</p>
    </div>`;
	});

	return renderHtml;
}

container.innerHTML = render();

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
	card.addEventListener("click", (e) => {
		if (e.target.parentNode.id === "card") {
			const targetCard = e.target.parentNode;
			targetCard.classList.toggle("active");
		}
	});
});
