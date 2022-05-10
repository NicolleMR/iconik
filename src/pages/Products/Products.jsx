import Card from "../../components/Card";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import "./products.css";

const Products = () => (
  <div>
    <Card>
      <div className="products">
        <h2 className="products__title">Productos</h2>
        <Button>
          Añadir Ingresos <Icon height={12} color="white" name="plus"/>
        </Button>
      </div>
      <Table
        columnsName={[
          "Nombre",
          "Descripción",
          "Fecha",
        ]}
        rows={[
          ["Masglo", "Esmalte Trradicional", "Abril 21"],
          ["Organic", "Esmalte Semi-Permanente", "Abril 21"],
          ["D&H", "Esmalte Semi-Permanente", "Abril 21"],
        ]}
      />
    </Card> 
  </div>
);

export default Products;
