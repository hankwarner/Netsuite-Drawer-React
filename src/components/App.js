import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import RecentlyViewedProducts from './RecentlyViewedProducts';
import Cart from './Cart';


function App(){
    const [activeComponent, setActiveComponent] = useState('dashboard');

    useEffect(() => {
        // Close drawer when clicked outside of it
        document.getElementById("drawerCover")
            .addEventListener('click', closeDrawer);

    }, []);


    function closeDrawer(){
        document.getElementById("slideNavDiv").style.width = "0";
        document.getElementById("drawerCover").style.width = "0";
    }


    function handleActiveComponentChange(componentName){
        setActiveComponent(componentName);
    }

    
    function getCustomerId(){
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);

        var customerId = urlParams.get('id');

        return customerId;
    }


    function getCustomerEmail(){
        var emailNode = document.getElementById("ext-gen6");

        return emailNode.innerText;
    }


    return (
        <div className="sidenav" id="slideNavDiv">
            <a className="closebtn" onClick={closeDrawer}>&times;</a>
            <nav className="navbar">
                <ul id="top-bar">
                    <li className="logo">
                        <img 
                            id="dashboard"
                            src="https://inside.supply.com/wp-content/uploads/2015/01/Concentragon-80x80.png" width="50px"
                            onClick={(e) => handleActiveComponentChange(e.target.id)}
                        />
                    </li>
                </ul>
            </nav>
            <div className="drawer-inner">
                <div style={{clear: 'both'}}></div>
                <div id="drawerDynamicData">

                    {/* Render the active component */}
                    {activeComponent == 'dashboard' &&
                        <Dashboard 
                            handleActiveComponentChange = {(e) => handleActiveComponentChange(e)}
                            getCustomerEmail = {() => getCustomerEmail()}
                        />}

                    {activeComponent == 'recentlyViewedProducts' &&
                        <RecentlyViewedProducts 
                            getCustomerId = {() => getCustomerId()} 
                        />}

                    {activeComponent == 'cart' &&
                        <Cart 
                            getCustomerEmail = {() => getCustomerEmail()} 
                        />}
                </div>
            </div>
        </div>
    )
}

export default App;
