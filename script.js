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
                    <img class="product-image" src="${image}" alt="${name}" />
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
        <img class="photo" src="asus VivoBook.jpg" />
        <img class="photo" src="asus gaming.jpg" />
        <img class="photo" src="dell.jpg" />
        <img class="photo" src="hp.jpg" />
      </div>
      <div class="container">
        <img class="photo" src="samsung55.jpg" />
        <img class="photo" src="panasonic.jpg" />
        <img class="photo" src="tcl.jpg" />
        <img class="photo" src="tcl32.jpg" />
      </div>
      <div class="container">
        <img class="photo" src="cp plus.jpg" />
        <img class="photo" src="cctv.jpg" />
        <img class="photo" src="hikvision.jpg" />
        <img class="photo" src="honeywell.jpg" />
      </div>
      <div class="container">
        <img class="photo" src="apple12.jpg" />
        <img class="photo" src="oneplusnord.jpg" />
        <img class="photo" src="samsung.jpg" />
        <img class="photo" src="redmi.jpg" />
      </div>
      <div class="container">
        <img class="photo" src="voltas.jpg" />
        <img class="photo" src="lg.jpg" />
        <img class="photo" src="lloyd.jpg" />
        <img class="photo" src="blue-star.jpg" />
      </div>
      <div class="main">
      </div>
        <div class="information">
          <div class="circle"></div>
            <div class="features"></div>
            <div class="features"></div>
            <div class="features"></div>
            <div class="features"></div>
          </div>
        </div>
      </div>
      `;
};