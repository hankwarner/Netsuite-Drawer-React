import React, { useState, useEffect } from 'react';


function Cart(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    
    useEffect(() => {
        setIsLoading(true);

        var customerEmail = props.getCustomerEmail();

        var query = "?email=" + customerEmail;
        var url = `https://service-cart.supply.com/GetCartByEmailAddress${query}`;
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(cartData => {
                setProducts(cartData.lineitems);

                setIsLoading(false);
            })
            .catch((err) => {
                console.log('Error fetching data: ' + err);
                setIsLoading(false);
            });
    }, []);

    return (
        <div id="recently-viewed">
            <div className="component-title">
                Customer Cart
            </div>

            {isLoading && 
                <div id="spinner"> </div> }

            {products && 
                products.map((p, i) => 
                    <div>
                        <a 
                            key={p.displayName} 
                            target="_blank"
                            href={"https://www.supply.com"+p.URL}
                        >
                            <div className="product-container">
                                <div className="product-image-container">
                                    <img 
                                        className="product-image"
                                        src={"https://assets.supply.com/"+p.imageURL+";width=300;height=300;bgcolor=White;quality=65;scale=both"}
                                    />
                                </div>
                                <div className="product-info-container">
                                    <div id="product-info-table">
                                        <span className="product-name">{p.displayName}</span>
                                        <span className="pro-price">Price: {formatter.format(p.discountedPrice)}</span>
                                        {/* <span className="d2c-price">D2C Price: ${p.basePrice}</span> */}
                                        <span className="viewed-time">Quantity: {p.quantity}</span>
                                    </div>
                                </div>
                                <div style={{clear: 'both'}}></div>
                            </div>
                        </a>
                        {/* Add separator unless last product in list */}
                        {i != products.length - 1 &&
                            <hr className="product-separator" />}
                    </div>
                )
            }
        </div>
    );
}

export default Cart;
