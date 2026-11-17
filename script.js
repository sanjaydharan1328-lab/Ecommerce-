let products = [
    {
        name: "BMW X5",
        price: 4500000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500"
    },
    {
        name: "iPhone 15",
        price: 60000,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
    },
    {
        name: "KTM Duke",
        price: 180000,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500"
    },
    {
        name: "Dell Laptop",
        price: 45000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        name: "Hyundai Creta",
        price: 1200000,
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500"
    },
    {
        name: "Wooden Sofa",
        price: 15000,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
    },
    {
        name: "Samsung Galaxy",
        price: 35000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
        name: "Yamaha R15",
        price: 150000,
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500"
    }
];

function displayProducts() {

    let list = document.getElementById("productList");
    let search = document.getElementById("searchInput")
                    .value.toLowerCase();

    list.innerHTML = "";

    let filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    filtered.forEach((product, index) => {

        let card = document.createElement("div");
        card.className = "product-card";

        let img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        let name = document.createElement("h3");
        name.textContent = product.name;

        let price = document.createElement("p");
        price.className = "price";
        price.textContent = "₹" +
            Number(product.price).toLocaleString("en-IN");

        let button = document.createElement("button");
        button.textContent = "View Product";
        button.onclick = () => {
            alert("Product: " + product.name +
                  "\nPrice: ₹" +
                  Number(product.price).toLocaleString("en-IN"));
        };

        card.append(img, name, price, button);
        list.appendChild(card);
    });

    document.getElementById("count").textContent =
        products.length;
}

function addProduct() {

    let name = document.getElementById("productName").value.trim();
    let price = document.getElementById("productPrice").value;
    let file = document.getElementById("productImage").files[0];

    if (!name || !price || Number(price) <= 0 || !file) {
        alert("Please enter all product details!");
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please select a valid image!");
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e) {

        products.push({
            name: name,
            price: Number(price),
            image: e.target.result
        });

        displayProducts();

        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("productImage").value = "";

        alert("Product Added Successfully!");
    };

    reader.readAsDataURL(file);
}

document.getElementById("searchInput")
    .addEventListener("input", displayProducts);

displayProducts();
