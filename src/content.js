import React from 'react';
import ReactDOM from 'react-dom';
import "./css/cartDrawer.css";
import App from './components/App';


loadConcentragon();

addFontStyles();


function addFontStyles(){
    var font = document.createElement('link');	
    font.rel = 'stylesheet';
    font.href = "https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap";
    document.head.appendChild(font);
}


function loadConcentragon() {
    // Adds the cover to the DOM
    var coverNode = document.createElement('div');
    coverNode.id = 'drawerCover';

    var bodyNode = document.body;
    bodyNode.insertBefore(coverNode, bodyNode.childNodes[0]);

    // Adds the concentragon the open click
    var centragonNode = document.createElement('div');
    centragonNode.id = "ns-drawer";
    centragonNode.className = 'ns-drawer';
    centragonNode.innerHTML =
        '<span id="supply-logo">\
            <img src="https://inside.supply.com/wp-content/uploads/2015/01/Concentragon-80x80.png" alt="" width="40px">\
        </span>';

    var headerNode = document.getElementById('ns_header');
    headerNode.insertBefore(centragonNode, headerNode.childNodes[10]);

    document.getElementById("supply-logo").addEventListener('click', openDrawer);
}


function openDrawer(){
    // Create a node to attach React app to
    var rootNode = document.createElement('div');
    rootNode.id = "root";
    
    // Append the root node to the NetSuite page container
    var pageContainerNode = document.getElementById("pageContainer");
    pageContainerNode.appendChild(rootNode);

    ReactDOM.render(<App />, rootNode);

    // This is the cover that hides the Netsuite page
    document.getElementById("drawerCover").style.width = "100vw";

    // Sets the width of the drawer
    document.getElementById("slideNavDiv").style.width = "35%";
}
