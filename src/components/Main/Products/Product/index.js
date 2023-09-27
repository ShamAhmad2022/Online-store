import React from "react";
import "./Product.scss";
import {Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, useToast} from '@chakra-ui/react';
import { connect, useDispatch, useSelector } from "react-redux";
// import {addToCart, toggleIsClicked} from '../../../../store/reducers/actions'
import {addToCart, toggleIsClicked} from '../../../../store/Slicers/slicer';

function Product({ item }) {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer1);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const showToast = () => {
    return toast({
      title: `Item added successfully`,
      status: 'success',
      position: 'top-left',
      isClosable: true,
    });
  };

  const onClick = () => {
    dispatch(addToCart(item));
    dispatch(toggleIsClicked(item.id)); // Pass the product ID to toggleIsClicked
    showToast();
  };

  return (
    <>
      <div className="card" >
        <img
          src={item.thumbnail}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          {/* <p className="card-text">{item.description}</p> */}
        </div>
        <div className="card-body">
        <button className="card-link btn btn-primary" onClick={() => onClick(item)} disabled={state.clickedItems[item.id]}>Add to cart</button>
        {/* <button className="card-link btn btn-primary">view details</button> */}
        <Button className="card-link btn btn-primary" onClick={onOpen}>view details</Button>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{item.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p><b>Description: </b>{item.description}</p>
              <p><b>Brand: </b>{item.brand}</p>
              <p><b>Price: </b>{item.price}$</p>
              <img src={item.thumbnail} className="card-img-top" alt="..." />
            </ModalBody>
  
            <ModalFooter>
              <Button  mr={3} onClick={onClose}>
                Close
              </Button>
              <Button className="card-link btn btn-primary" onClick={() =>onClick(item)}>Add to cart</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </div>
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     : state.reducer
//   };
// }


// const mapDispatchToProps = {
//   addToCart
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Product);

export default Product;
