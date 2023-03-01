import Link from "next/link";

import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {
    return (
        <li className="nav-item dropdown">
            {items?.subMenu && items?.url ? (
                <>
                    <Link href={items?.url}>
                        <a className="nav-link">
                            {items?.title}
                        </a>
                    </Link>
                    <Dropdown subMenus={items?.subMenu} />
                </>
            ) : (
                <Link href={items?.url}>
                    <a className="nav-link">{items?.title}</a>
                </Link>
            )}
        </li>
    );
};

export default MenuItems;