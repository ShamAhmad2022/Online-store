import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'
import './NavBar.scss';
import { deleteFromCart } from "../../store/reducers/actions";


function NavBAr() {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Maintain a state variable for quantities
  const [quantities, setQuantities] = useState(
    state.cart.reduce((quantitiesObj, item) => {
      quantitiesObj[item.id] = 1; // Initialize quantities to 1
      return quantitiesObj;
    }, {})
  );

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities({
      ...quantities,
      [itemId]: newQuantity,
    });
  };

  return (
    <nav
      className="navbar bg-dark border-bottom border-body fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Storefront
        </Link>

        <Button ref={btnRef} onClick={onOpen}>
          Cart({state.cart.length})
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart content: </DrawerHeader>

            <DrawerBody>
              {state.cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-flex">
                    <p>{item.title}</p>
                    <p
                      className="delete-icon"
                      onClick={() => dispatch(deleteFromCart(item.id))}
                    >
                      <DeleteIcon />
                    </p>
                  </div>
                  <NumberInput
                    bg={"white"}
                    defaultValue={quantities[item.id]}
                    min={1}
                    max={5}
                    value={quantities[item.id]}
                    onChange={(valueString) => {
                      const newQuantity = parseInt(valueString, 10);
                      handleQuantityChange(item.id, newQuantity);
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <p>
                    <b>Price:</b> {item.price * quantities[item.id]}$
                  </p>
                </div>
              ))}
              <hr className="line"></hr>
              <p>
                <b>Total: </b>
                <u>
                  {state.cart.reduce(
                    (sum, item) =>
                      sum + item.price * quantities[item.id], // Calculate total price
                    0
                  )}
                  $
                </u>
              </p>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Confirm</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     reducer1: state.reducer,
//   };
// };

// const mapDispatchToProps = {
//   deleteFromCart
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NavBAr);

export default NavBAr;
