import React from "react";
import { Link } from "react-router-dom";

function NavBAr() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">Storefront</Link>
        <Link className="navbar-brand" href="#">Cart(0)</Link>
      </div>
    </nav>
  );
}

export default NavBAr;
