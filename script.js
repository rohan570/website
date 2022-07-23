const displayProductPage = ({ name, description, price, features, image }) => {
  const containers = document.querySelector(".containers");
  const productDiv = document.querySelector("#product-div");
  features = features.map(
    (feature) => `<div class="product-feature">${feature}</div>`
  );
  let featuresHtml = "";
  features.forEach((feature) => (featuresHtml += feature));
  containers.innerHTML = "";
  productDiv.innerHTML = `
        <div class="product-div">
            <p class="product-title">${name}</p>
            <div class="product-body">
                <div class="product-image-body">
                    <img class="product-image" src="./images/${image}" alt="${name}" />
                </div>
                <div class="product-text">
                    <div class="product-description">
                        <h3>Description</h3>
                        ${description}
                    </div>
                    <div class="product-price">
                        Price: <span>${price}<span>
                    </div>
                    <div class="product-features">
                        <h3>Features</h3>
                        <div class="product-features-list">
                            ${featuresHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const displayHome = () => {
  const containers = document.querySelector(".containers");
  const productDiv = document.querySelector("#product-div");
  productDiv.innerHTML = "";
  containers.innerHTML = `
      <div class="container">
        <img class="photo" src="./images/asus-vivoBook.jpg" />
        <img class="photo" src="./images/asus-gaming.jpg" />
        <img class="photo" src="./images/dell.jpg" />
        <img class="photo" src="./images/hp.jpg" />
      </div>
      <div class="container">
        <img class="photo" src="./images/samsung55.jpg" />
        <img class="photo" src="./images/panasonic.jpg" />
        <img class="photo" src="./images/tcl.jpg" />
        <img class="photo" src="./images/tcl32.jpg" />
      </div>
      <div class="container">
        <img class="photo" src="./images/cp plus.jpg" />
        <img class="photo" src="./images/cctv.jpg" />
        <img class="photo" src="./images/hikvision.jpg" />
        <img class="photo" src="./images/honeywell.jpg" />
      </div>
      <div class="container">
        <img class="photo" src="./images/apple12.jpg" />
        <img class="photo" src="./images/oneplusnord.jpg" />
        <img class="photo" src="./images/samsung.jpg" />
        <img class="photo" src="./images/redmi.jpg" />
      </div>
      <div class="container">
        <img class="photo" src="./images/voltas.jpg" />
        <img class="photo" src="./images/lg.jpg" />
        <img class="photo" src="./images/lloyd.jpg" />
        <img class="photo" src="./images/blue-star.jpg" />
      </div>
      `;
};
