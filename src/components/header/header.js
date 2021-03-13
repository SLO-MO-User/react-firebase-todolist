import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleNightMode } from "../../redux/night-mode/night-mode.actions";
import { selectIsNightMode } from "../../redux/night-mode/night-mode.selectors";

function Header({ isNightMode, toggleIsNightMode }) {
  return (
    <ul className="nav justify-content-center p-1 border-bottom">
      <li className="nav-item">
        <span
          className={` h4 nav-link active ${
            isNightMode ? "text-secondary" : ""
          }`}
        >
          To Do
        </span>
      </li>
      <li className="nav-item">
        <span className="h4 nav-link active">
          <i
            className={`fa ${isNightMode ? "fa-sun-o" : "fa-moon-o"}`}
            onClick={toggleIsNightMode}
          ></i>
        </span>
      </li>
    </ul>
  );
}

const mapStateToProps = createStructuredSelector({
  isNightMode: selectIsNightMode,
});

const mapDispatchToProps = (dispatch) => ({
  toggleIsNightMode: () => dispatch(toggleNightMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
