const Product = ({ details, setCart }) => {
  const addToCart = (e, data) => {
    e.preventDefault();
    setCart(data, details);
  };

  return (
    <>
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        <div className="badge bg-dark text-white position-absolute m-2">
          Sale
        </div>
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{details.name}</h5>
            {/* <!-- Product reviews--> */}
            <div className="d-flex justify-content-center small text-warning mb-2">
              {details.rating.map((rating, index) => {
                return (
                  <div key={index} className="bi-star-fill">
                    {rating}
                  </div>
                );
              })}
            </div>
            {/* <!-- Product price--> */}
            <span className="text-muted text-decoration-line-through">
              $20.00{" "}
            </span>
            ${details.price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a
              className={`btn ${
                details.cart ? "btn-outline-danger" : "btn-outline-dark"
              } mt-auto`}
              href="/"
              onClick={(e) =>
                details.cart ? addToCart(e, false) : addToCart(e, true)
              }
            >
              {details.cart ? "Remove from cart" : "Add to cart"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
