A small progam which shows different ways of consuming a Mobx store.
The header component is using props to render the value from store.
However, the Footer component is using the store provider by Mobx.Provider with the use of Mobx.Inject.
Footerchild5 is also using Mobx.Inject to subscribe to the store Provided by Mobx.Provider
FooterChild from 1 to 4 are just dummy components/fillers.

# Install create-react-app globally

npm install -g create-react-app

# Install yarn globally

npm install -g yarn

# Now install modules required by mobx-passingstores-around

yarn install

# Start the application

yarn start
