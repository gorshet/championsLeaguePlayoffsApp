import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/pickteam.scss";

export class juventusGame extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="tarjetas">
					<img
						className="d-block"
						src="https://vignette.wikia.nocookie.net/logopedia/images/5/50/600px-Juventusstemma.png/revision/latest?cb=20120107135132"
						alt="First slide"
						width="225"
						height="228"
					/>
					<div className="container">
						<div className="row">
							<Context.Consumer>
								{({ store, actions }) => {
									return store.player.map((item, index) => {
										return (
											<div key={index} className="col-2">
												<div className="card text-center">
													<div className="card-header">{item.name}</div>
													<img src={item.image} alt="Smiley face" height="75" width="75" />
													<div className="card-body">
														<div>{item.position}</div>
														<div>{item.attack}</div>
														<div>{item.defense}</div>
													</div>
													<div className="card-footer">{item.season}</div>
												</div>
											</div>
										);
									});
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
