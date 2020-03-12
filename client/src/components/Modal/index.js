function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
       {props.children}
      </Modal.Body>
    </Modal>
  );
}

function VerticalsModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

render(<VerticalsModal />);