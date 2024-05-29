import { Link } from "react-router-dom";
import "./SideNav.css";

interface Category {
  heading: string;
  items: string[];
}

interface SideNavProps {
  data: Category[];
}

function SideNav({ data }: SideNavProps) {
  /*
  return (
    <div className="sidenav">
      {data.map((category, index) => (
        <ListGroup key={index} items={category.items} heading={category.heading} />
      ))}
    </div>
  );
  */

  return (
    <div className="sidenav">
      <a className="brand" href="\">Cuisine Compass</a>
      <a className="side-menu" href="\">Home</a>
      <a className="side-menu" href="#heading">Recipes</a>
      <a className="side-menu">Filter</a>
      <Link to={`/submission`} className="side-menu">Recipe Submission</Link>
    </div>
  )
}

export default SideNav;
