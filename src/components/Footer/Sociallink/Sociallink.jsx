import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sociallink({ href, toggle, placement, title, icon }) {
  return (
    <>
      <a
        href={href}
        data-toggle={toggle}
        data-placement={placement}
        title={title}
      ></a>
      <FontAwesomeIcon icon={icon} />
    </>
  );
}
