import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, PlusSquareIcon, ViewIcon, SearchIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, IconButton, MenuList, MenuItem, Icon, MenuGroup, MenuDivider } from '@chakra-ui/react';
import { VscAccount } from 'react-icons/vsc'
import React from 'react';

const NavbarMenu:React.FC = () => {
    
    return (
        <Menu>
            <MenuButton as={IconButton} aria-label='Options' variant='outline_black'>
                <Icon as={HamburgerIcon} fontSize='14pt' mb={3.5}/>
                <Icon as={VscAccount} fontSize='18pt' mt={3} ml={2}/>
            </MenuButton>

            <MenuList>
                <MenuGroup title='Profile'>
                    <MenuItem icon={<VscAccount/>}>
                        My Account
                    </MenuItem>
                    <MenuItem icon={<SearchIcon/>}>
                        Help
                    </MenuItem>
                </MenuGroup>

                <MenuDivider/>

                <MenuItem icon={<ViewIcon/>}>
                    Audio History
                </MenuItem>
                <MenuItem icon={<PlusSquareIcon/>}>
                    New Audio
                </MenuItem>

                <MenuDivider/>

                <MenuItem icon={<VscAccount/>}>
                    Sign Up / Log In
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
export default NavbarMenu;