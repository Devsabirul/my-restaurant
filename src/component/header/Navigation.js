import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function Navigation() {
    return (
        <div>
            <Navbar color="dark" dark >
                <div className="container">
                    <NavbarBrand href="/" >My Restaurant </NavbarBrand>
                </div>
            </Navbar>
        </div>
    )
}