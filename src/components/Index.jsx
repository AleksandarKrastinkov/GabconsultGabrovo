import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/icons';
import './Css/Navbar.css'; // Correct path to your CSS file

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Learn <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              {/* Add more ListItems as needed */}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* Add more NavigationMenu.Items as needed */}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuDemo;
