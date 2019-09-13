import React, { Component } from "react";
import Link from "next/link";

// Menu does routing between the two pages - notice that Link is used
export class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/speakers">
                <a className="nav-link">Speakers</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
