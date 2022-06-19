import React  from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sociallink({ href, title, icon }) {
  return (
    <>
      <a
        href={href}
        data-toggle="tooltip"
        data-placement="top"
        title={title}
      >
        <FontAwesomeIcon icon={icon}/>
      </a>
    </>
  );
}
