import Link from "next/link";

const Dropdown = ({ subMenus }) => {
    // dethLevel = dethLevel++;
    // const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : "";
    return (
        <ul className="dropdown-menu">
            {subMenus?.map((submenu, idx) => (
                <li key={idx}>
                    <Link href={submenu?.url}>
                        <a className="dropdown-item">{submenu?.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown;