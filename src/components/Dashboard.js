import React, { useState, useEffect } from 'react';


function Dashboard(props){

    function shopAsCustomer(){
        var customerEmail = props.getCustomerEmail();

        // Get the User ID
        var url = "https://service-headerdata.supply.com/UserId?email=" + customerEmail;

        var userId;

        fetch(url)
            .then(response => response.json())
            .then(userData => {
                console.log('finished fetching');
                console.log(userData);

                // parse the userId from the response
                userId = userData;
            })
            .catch((err) => {
                console.log('Error fetching data: ' + err);
                setIsLoading(false);
            });

        // Generate a new window as customer
        var browseUrl = 'https://www.supply.com/responsive/pages/cart.aspx?uid=' + userId;
        window.open(browseUrl, '_blank');
    }
    
    return (
        <div id="dashboard-container">
            <div class="dashboard-links">
                <button 
                    id="recentlyViewedProducts" 
                    class="dashboard-button" 
                    onClick={(e) => props.handleActiveComponentChange(e.target.id)}
                >
                    Recently Viewed Products
                </button>

                <button 
                    id="cart" 
                    class="dashboard-button" 
                    onClick={(e) => props.handleActiveComponentChange(e.target.id)}
                >
                    Customer Cart
                </button>

                <button 
                    class="dashboard-button" 
                    onClick={() => shopAsCustomer()}
                >
                    Shop as Customer
                </button>
            </div>
        </div>
    )
}

export default Dashboard;
