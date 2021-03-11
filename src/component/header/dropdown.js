import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Header.css';

const DropD = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} > 
        <DropdownToggle caret>
            For you
        </DropdownToggle>
        <DropdownMenu>
          <Link to="/home"><DropdownItem>Find matching internships</DropdownItem></Link>
          <Link to="/home"><DropdownItem>Hire right talent</DropdownItem></Link>
          <Link to="/home"><DropdownItem>Work from Home</DropdownItem></Link>
        </DropdownMenu>
    </Dropdown>
  );
}

export default DropD;