import Accordion from "react-bootstrap/Accordion";
function Accordian({ item }) {
  return (
    <div className="border border-dark mt-1 rounded rounded-2">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={item}>
          <Accordion.Header>Step #{item}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Accordian;
