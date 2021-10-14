import Product from "./productCards";

const MainSection = ({ products, setCart }) => {
  const callSetCart = (data, product) => {
    setCart(data, product);
  };

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product, index) => {
              return (
                <div key={index} className="col mb-5">
                  <Product details={product} setCart={callSetCart} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
