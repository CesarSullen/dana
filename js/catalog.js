document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(window.location.search);
	const category = params.get("category");

	const categoryTitles = {
		charms: "Colgantes",
		bracelets: "Pulseras",
		necklaces: "Collares",
		chokers: "Gargantillas",
	};

	//  Update the title
	document.getElementById("category-title").innerText =
		categoryTitles[category] || "Colección Completa";

	// Load Products
	fetch("./data/products.json")
		.then((response) => response.json())
		.then((data) => {
			const filteredProducts = category
				? data.filter((product) => product.category === category)
				: data;
			renderProducts(filteredProducts);
		})
		.catch((err) => console.error("Error loading products:", err));
});

function renderProducts(products) {
	const productGrid = document.getElementById("product-grid");

	if (products.length === 0) {
		productGrid.innerHTML = `<p class="empty-msg">Próximamente nuevos diseños en esta categoría.</p>`;
		return;
	}

	productGrid.innerHTML = products
		.map(
			(product) => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.img}">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price} CUP</p>
                <a href="https://wa.me/+5356826129?text=Hola! Me interesa el ${product.name}" class=" btn btn-product">Consultar</a>
            </div>
        </div>
    `
		)
		.join("");
}
