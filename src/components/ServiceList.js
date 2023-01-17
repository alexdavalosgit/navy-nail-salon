import ListGroup from "react-bootstrap/ListGroup";

function ServiceList() {
  return (
    <ListGroup>
      <h1 className="">Services</h1>
      <ListGroup.Item className="bg-cream">Manicures</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Pedicures</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Full Set</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Gel Services</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Waxing Services</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Paraffin Treatment</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Deluxe Pedicures</ListGroup.Item>
      <ListGroup.Item className="bg-cream">And More ... </ListGroup.Item>
    </ListGroup>
  );
}

export default ServiceList;
