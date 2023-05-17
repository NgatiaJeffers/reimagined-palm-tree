import Link from "next/link";
import TruncatedParagraph from "../atoms/TruncatedText";
import { useRouter } from "next/router";

const Dropdown = ({ subMenus, handleDropDownSelect }) => {
  const router = useRouter();

  return (
    <div className="dropdown-menu">
      <div className="container">
        <div className="mega-content px-4">
          <div className="row">
            {subMenus.map((item, idx) => {
              const { name, subItems } = item;

              return (
                <div className="col-12 col-sm-6 col-md-6" key={idx}>
                  <div className="item-box">
                    <h3>{name}</h3>
                    <div className="content">
                      <ul>
                        {subItems.map((subMenu, subIdx) => {
                          const { url, title, description } = subMenu;

                          return (
                            <Link href={url} key={subIdx}>
                              <li
                                className="nav-item card-item-wrap"
                                onClick={() => handleDropDownSelect(url)}
                              >
                                <div className="dropdown-card-title">
                                  <span className="title">{title}</span>
                                </div>
                                <span className="summary">
                                  <TruncatedParagraph
                                    text={description}
                                    limit={50}
                                  />
                                </span>
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
