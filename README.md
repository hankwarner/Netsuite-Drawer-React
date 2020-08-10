![](https://www.dropbox.com/s/dbjigldnf3cfecg/ns%20drawer.gif?raw=1)


# Description

This project is a Google Chrome extension that allows Supply.com sales reps to access customer and item data from Netsuite ERP/CRM to Supply.com. 

Navigate to a customer record in Netsuite and click the Supply.com logo in the top right corner. Three options will be displayed:


# View Customer Cart

Displays the customer's cart on Supply.com in realtime. Includes product image, description, price and quantity.


# Recently Viewed Products

Using Snowplow data, displays the last ten items viewed by the customer. Includes product image, description, regular price, tradepro price and date/time of when the product was last viewed.


# Shop as Customer

Opens a new browser window allowing a sales rep to shop on Supply.com and add items to the cart on behalf of the customer. Any items added to a cart will be transferred to the customer's cart upon their next login.


### `npm run build`

Runs a custom webpack using `webpack --mode production` into output folder `dist`. All files in the public folder are transferred to the `dist` folder as-is.

