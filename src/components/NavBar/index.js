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
  Input
} from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'
import './NavBar.scss';
// import { deleteFromCart } from "../../store/reducers/actions";
import { deleteFromCart } from "../../store/Slicers/slicer";


function NavBAr() {
  const state = useSelector((state) => state.reducer1);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Maintain a state variable for quantities
  const [quantities, setQuantities] = useState(
    state.cart.reduce((quantitiesObj, item) => {
      quantitiesObj[item.id] = 1; 
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
                    defaultValue={1}
                    min={1}
                    max={5}
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
                    <b>Price:</b> {isNaN(item.price * quantities[item.id])? item.price : item.price * quantities[item.id]}$
                  </p>
                </div>
              ))}
              <p className="total">
                <b>Total: </b>
                <u>
                  {state.cart.reduce(
                    (sum, item) =>
                    isNaN(sum + item.price * quantities[item.id])? sum + item.price : sum + item.price * quantities[item.id], // Calculate total price
                    0
                  )}
                  $
                </u>
              </p>
              <hr className="line"></hr>

            <div>
              <form>
              <h4>Billing Adress</h4>
              <Input className="form-element" placeholder='FullName' size='md' />
              <Input className="form-element" placeholder='Adress' size='md' />
              <Input className="form-element" placeholder='City' size='md' />
              <Input className="form-element" placeholder='State' size='md' />
              <Input className="form-element" placeholder='Zip' size='md' />
              <h4>Payment details</h4>
              <Input className="form-element" placeholder='Card #' size='md' />
              <Input className="form-element" placeholder='Exp. date' size='md' />
              <Input className="form-element" placeholder='CVV' size='md' />
              </form>
            </div>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit" onClick={()=> alert('Your payment has been processed succefully')}>Confirm</Button>
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
