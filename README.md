Step 1: In App.js fetch the api using and pass the value in setShipCart (Create useState hook for pass the value [cartitem,etCartItem]). call the function in useEffect (dont want to call multiple time when we do action )

Step 2:  using map method to render the values and using props to pass the value into PriceCard component.pass the value into PriceCard and get the value using propname .itemname(title,image,price).
Step 3:  And click the add cart button to pass the card value inoto CartItem componen usinge onc;ick function(in App.jsx create the state and funtion to pass the value into CartItem.jsx using additem function )

Step 4: And pass the items value to the CartItem componen and there we have total and remove funtion also have same like add item here we use in app.jsx remove funtion to remove the item first need to gind the item using id (here we find the title ).If the item find using spice method to remove the item and modify total price (using state to add the items).

Step 5:  Then we can see the cart itom show the number how much items are in the cart using cartitem.length.

Step 6: and If we click the cart icon show the cart tab using state . First the cart tab false so it hide when we click that value change to trure then show the tab .
Step 7:  close the cart same like onlick time thet satet will be false so thet card hide 
