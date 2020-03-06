import React, { Component } from 'react';
import './ShoppingCart.scss';

// let items = [
//   {
//     id: 0,
//     name: 'Apple iPad Mini 2 16GB',
//     description: 'An iPad like no other. 16GB, WiFi, 4G.',
//     price: 229.0,
//   },
//   {
//     id: 1,
//     name: 'Apple iPad Mini 2 32GB',
//     description: 'Even larger than the 16GB.',
//     price: 279.0,
//   },
//   {
//     id: 2,
//     name: 'Canon T6i',
//     description: 'DSLR camera with lots of megapixels.',
//     price: 749.99,
//   },
//   {
//     id: 3,
//     name: 'Apple Watch Sport',
//     description: 'A watch',
//     price: 249.99,
//   },
//   {
//     id: 4,
//     name: 'Apple Watch Silver',
//     description: 'A more expensive watch',
//     price: 599.99,
//   },
// ];

// let Item = ({ item, children }) => (
//   <div className="Item">
//     <div className="Item-left">
//       <div className="Item-image" />
//       <div className="Item-title">{item.name}</div>
//       <div className="Item-description">{item.description}</div>
//     </div>
//     <div className="Item-right">
//       <div className="Item-price">${item.price}</div>
//       {children}
//     </div>
//   </div>
// );

// function ItemPage({ items, onAddToCart }) {
//   return (
//     <ul className="ItemPage-items">
//       {items.map(item => (
//         <li key={item.id} className="ItemPage-item">
//           <Item item={item}>
//             <button
//               className="Item-addToCart"
//               onClick={onAddToCart.bind(null, item)}
//             >
//               Add to Cart
//             </button>
//           </Item>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function CartPage({ items, onAddOne, onRemoveOne }) {
//   return (
//     <ul className="CartPage-items">
//       {items.map(item => (
//         <li key={item.id} className="CartPage-item">
//           <Item item={item}>
//             <div className="CartItem-controls">
//               <button
//                 className="CartItem-removeOne"
//                 onClick={onRemoveOne.bind(null, item)}
//               >
//                 &ndash;
//               </button>
//               <span className="CartItem-count">{item.count}</span>
//               <button
//                 className="CartItem-addOne"
//                 onClick={onAddOne.bind(null, item)}
//               >
//                 +
//               </button>
//             </div>
//           </Item>
//         </li>
//       ))}
//     </ul>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab: 0,
//       cart: [],
//     };
//   }

//   handleTabChanged = index => {
//     this.setState({ selectedTab: index });
//   };

//   handleAddToCart = item => {
//     this.setState({
//       cart: [...this.state.cart, item.id],
//     });
//   };

//   handleRemoveOne = item => {
//     let index = this.state.cart.indexOf(item.id);
//     this.setState({
//       cart: [
//         ...this.state.cart.slice(0, index),
//         ...this.state.cart.slice(index + 1),
//       ],
//     });
//   };

//   renderContent() {
//     switch (this.state.selectedTab) {
//       default:
//       case 0:
//         return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
//       case 1:
//         return this.renderCart();
//     }
//   }

//   renderCart() {
//     // Count how many of each item is in the cart
//     let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
//       itemCounts[itemId] = itemCounts[itemId] || 0;
//       itemCounts[itemId]++;
//       return itemCounts;
//     }, {});

//     // Create an array of items
//     let cartItems = Object.keys(itemCounts).map(itemId => {
//       // Find the item by its id
//       var item = items.find(item => item.id === parseInt(itemId, 10));

//       // Create a new "item" that also has a 'count' property
//       return {
//         ...item,
//         count: itemCounts[itemId],
//       };
//     });

//     return (
//       <CartPage
//         items={cartItems}
//         onAddOne={this.handleAddToCart}
//         onRemoveOne={this.handleRemoveOne}
//       />
//     );
//   }

//   render() {
//     let { selectedTab } = this.state;
//     return (
//       <div className="App">
//         <Nav selectedTab={selectedTab} onTabChange={this.handleTabChanged} />
//         <main className="App-content">{this.renderContent()}</main>
//       </div>
//     );
//   }
// }

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <div className="cart-container">
          <h1>장바구니</h1>
          <img
            src="https://static.zara.net/static//common/images/empty-basket/empty-basket.jpg"
            alt=""
          />
        </div>
      </>
    );
  }
}

export default ShoppingCart;
