import React from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export class LandingPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="landingPage">
					<Navbar bg="">
						<Navbar.Brand href="#home">
							<img
								src="https://vignette.wikia.nocookie.net/logopedia/images/4/4d/UEFA_Champions_League_%282012%29.svg/revision/latest/scale-to-width-down/200?cb=20180731114846"
								className="d-inline-block align-top"
								width="30"
								height="30"
								alt="React Bootstrap logo"
							/>
						</Navbar.Brand>
						<DropdownButton id="dropdown-item-button" title="Dropdown button">
							<Dropdown.Item as="button">My profile</Dropdown.Item>
							<Dropdown.Item as="button">Log out</Dropdown.Item>
						</DropdownButton>
					</Navbar>
				</div>
				<div className="container-fluid">
					<Navbar bg="">
						<Navbar.Brand href="#home">
							<img
								src="https://vignette.wikia.nocookie.net/logopedia/images/9/98/Real_Madrid.png/revision/latest/scale-to-width-down/220?cb=20161111231747"
								className="d-inline-block align-top"
								width="39"
								height="40"
								alt="React Bootstrap logo"
							/>
							<img
								src="https://vignette.wikia.nocookie.net/logopedia/images/4/47/FC_Barcelona_%28crest%29.svg/revision/latest/scale-to-width-down/200?cb=20190425113731"
								className="d-inline-block align-top"
								width="39"
								height="40"
								alt="React Bootstrap logo"
							/>
							<img
								src="https://vignette.wikia.nocookie.net/logopedia/images/4/46/Juventus_FC_logo_%28three_gold_stars%29.svg/revision/latest/scale-to-width-down/74?cb=20160618000018"
								className="d-inline-block align-top"
								width="23"
								height="40"
								alt="React Bootstrap logo"
							/>
						</Navbar.Brand>
					</Navbar>
				</div>
			</React.Fragment>
		);
	}
}
