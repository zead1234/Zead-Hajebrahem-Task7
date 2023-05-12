import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Title } from "./shared/StyledComponents";
import { Link } from "react-router-dom";
import DeleteProduct from "../pages/DeleteProduct";



function CardComponent({ data }) {
  const id= data.id;
  return (
    
    <Card className="mt-5">
      {data?.images ? <Card.Img variant="top" src={data?.images[0]} /> : null}

      <Card.Body>
        <Title>{data.title}</Title>
        <Card.Text>{data.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button onClick={()=>DeleteProduct(id)}  className="mx-2" variant="danger">Delete</Button>
        <Link className="mx-2" to="/update-prodcuts" state={{ id:{id}}}>
  <Button variant="light">Update</Button>
</Link>



      </Card.Body>
    </Card>
  );
}

export default CardComponent;
