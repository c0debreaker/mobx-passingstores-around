A small progam which shows different ways of consuming a Mobx store.

The header component is using props to render the value from store.

However, the Footer component uses the store provided by Mobx.Provider with the use of Mobx.Inject.
Footerchild5 is also using Mobx.Inject to observe the store provided by Mobx.Provider.

FooterChilds from 1 to 4 are just dummy components/fillers which does not use props nor injects.

# Install create-react-app globally

npm install -g create-react-app

# Install yarn globally

npm install -g yarn

# Now install modules required by mobx-passingstores-around

yarn install

# Start the application

yarn start
