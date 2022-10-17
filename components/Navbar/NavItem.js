import Link from "next/link";

const NavItem = ({ text, href, subItem, active }) => {
    return (
        <Link href={href}>
            <a className="nav-link mx-2">{text}</a>
        </Link>
    );
};

export default NavItem;