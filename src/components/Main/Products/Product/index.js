import React from "react";
import "./Product.scss";
import {Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, useToast} from '@chakra-ui/react';
import { connect } from "react-redux";
import {setProducts, setCategory, setActiveCategory, addToCart} from '../../../../store/reducers/actions'

function Product({item, reducer1, addToCart}) {

  console.log(reducer1,'66666666666');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const showToast =()=>{
    return toast({
      title: `Item added succefully`,
      status: 'success',
      position: 'top-left',
      isClosable: true,
    });
  }

  const onClick = (item) =>{
    addToCart(item);
    showToast();
  }

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
        <button className="card-link btn btn-primary" onClick={() => onClick(item)}>Add to cart</button>
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

const mapStateToProps = (state) => {
  return {
    reducer1 : state.reducer
  };
}


const mapDispatchToProps = {
  addToCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);
