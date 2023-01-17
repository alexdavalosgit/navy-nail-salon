import ListGroup from "react-bootstrap/ListGroup";

function ServiceList() {
  return (
    <ListGroup>
      <h1 className="">Services</h1>
      <ListGroup.Item className="bg-cream">Manicures</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Pedicures</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Remove Gel Nails</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Eyebrow Waxing</ListGroup.Item>
      <ListGroup.Item className="bg-cream">Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
}

export default ServiceList;
