import React, { useState } from 'react';
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
            <DropdownItem>Find matching internships</DropdownItem>
            <DropdownItem>Hire right talent</DropdownItem>
            <DropdownItem>Work from Home</DropdownItem>
        </DropdownMenu>
    </Dropdown>
  );
}

export default DropD;