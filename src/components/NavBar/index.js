import React from "react";
import { connect } from "react-redux";
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

function NavBAr(props) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
          Cart({props.reducer1.cart.length})
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
              {props.reducer1.cart.map((item) => (
                <div className="cart-item">
                  <div className="cart-flex">
                    <p>{item.title}</p>
                    <p className="delete-icon" onClick={() => props.deleteFromCart(item.id)}><DeleteIcon /></p>
                  </div>
                  {
                    <NumberInput bg={"white"} defaultValue={1} min={1} max={5}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  }
                  <p><b>Price:</b>{item.price}$</p>
                </div>
              ))}
              <hr className="line"></hr>
              <p><b>Total: </b> <u>{props.reducer1.cart.reduce((sum, item) => sum + item.price, 0)}$</u></p>
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

const mapStateToProps = (state) => {
  return {
    reducer1: state.reducer,
  };
};

const mapDispatchToProps = {
  deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBAr);
