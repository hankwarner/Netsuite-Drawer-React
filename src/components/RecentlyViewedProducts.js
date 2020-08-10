import React, { useState, useEffect } from 'react';


function RecentlyViewedProducts(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setIsLoading(true);

        var customerId = props.getCustomerId();
        var url = `https://service-crm.supply.com/v1/Snowplow?customerID=${customerId}`;

        fetch(url)
            .then(response => response.json())
            .then(productData => {
                setProducts(productData);

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
                Recently Viewed Products
            </div>
            {isLoading && 
                <div id="spinner"> </div> }
                {console.log(products)}

            {products && 
                products.map((p, i) => 
                    <div>
                        <a 
                            key={p.displayName} 
                            target="_blank"
                            href={"https://www.supply.com"+p.linkURL}
                        >
                            <div className="product-container">
                                <div className="product-image-container">
                                    <img 
                                        className="product-image"
                                        src={p.imageURL+";width=300;height=300;bgcolor=White;quality=65;scale=both"}
                                    />
                                </div>
                                <div className="product-info-container">
                                    <div id="product-info-table">
                                        <span className="product-name">{p.displayName}</span>
                                        <span className="pro-price">Pro Price: ${p.proPrice}</span>
                                        <span className="d2c-price">D2C Price: ${p.d2CPrice}</span>
                                        <span className="viewed-time">{p.viewedTime}</span>
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

export default RecentlyViewedProducts;
