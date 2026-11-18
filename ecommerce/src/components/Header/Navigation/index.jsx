import LeftNavigation from "./leftnav";
import "./index.css";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Fashion",
    path: "/fashion",
    children: [
      { label: "Men", path: "/fashion/men" },
      { label: "Women", path: "/fashion/women" },
      { label: "Kids", path: "/fashion/kids" },
    ],
  },
  {
    label: "New Arrivals",
    path: "/new-arrivals",
    children: [
      { label: "This Week", path: "/new-arrivals/week" },
      { label: "This Month", path: "/new-arrivals/month" },
    ],
  },
  {
    label: "All Brands",
    path: "/brands",
    children: [
      { label: "Popular Brands", path: "/brands/popular" },
      { label: "A - Z", path: "/brands/a-z" },
    ],
  },
  {
    label: "More",
    path: "/more",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Help Center", path: "/help" },
    ],
  },
];

function Navigation() {
  return (
    <>
      <div className="navigation">
        <LeftNavigation />
        <div className="middle-navigation">
          {menuItems.map((item) => (
            <div className="manu-list">
              <Link to={item.path}>{item.label}</Link>
              {item.children && (
                <ul className="dropdown-manu">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link to={child.path}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="right-navigation">
          <span>Free International Delivery</span>
        </div>
      </div>
    </>
  );
}

export default Navigation;
