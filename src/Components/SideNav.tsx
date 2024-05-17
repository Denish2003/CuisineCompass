import ListGroup from "./ListGroup";
import "./SideNav.css";

interface Category {
  heading: string;
  items: string[];
}

interface SideNavProps {
  data: Category[];
}

function SideNav({ data }: SideNavProps) {
  return (
    <div className="sidenav">
      {data.map((category, index) => (
        <ListGroup key={index} items={category.items} heading={category.heading} />
      ))}
    </div>
  );
}

export default SideNav;
