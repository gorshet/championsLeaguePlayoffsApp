import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/pickteam.scss";
import "../../styles/home.scss";
import { Match } from "../component/match.js";
export class PickTeam extends React.Component {
	constructor(props) {
		super(props);

		//this will be passed as the contenxt value
		this.state = {
			currentTeamOne: null,
			currentTeamTwo: null,
			teamOne: null,
			teamTwo: null
		};
	}

	render() {
		return (
			<div className="container-fluid tarjetas">
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.teamTwo === null) {
							return (
								<React.Fragment>
									<Carousel>
										{store.teamOne !== 2 && (
											<Carousel.Item>
												<div className="carousel">
													<img
														className="d-block"
														src="https://vignette.wikia.nocookie.net/logopedia/images/5/50/600px-Juventusstemma.png/revision/latest?cb=20120107135132"
														alt="First slide"
														width="225"
														height="228"
														onClick={() => {
															actions.pickATeam(1);
														}}
													/>

													<Carousel.Caption>
														<h3 />
													</Carousel.Caption>
												</div>
											</Carousel.Item>
										)}
										{store.teamOne !== 1 && (
											<Carousel.Item>
												<div className="carousel">
													<img
														className="d-block "
														src="https://vignette.wikia.nocookie.net/logopedia/images/4/47/FC_Barcelona_%28crest%29.svg/revision/latest/scale-to-width-down/200?cb=20190425113731"
														alt="Third slide"
														width="225"
														height="228"
														onClick={() => {
															actions.pickATeam(3);
														}}
													/>

													<Carousel.Caption>
														<h3 />
													</Carousel.Caption>
												</div>
											</Carousel.Item>
										)}
										<Carousel.Item>
											<div className="carousel">
												<img
													className="d-block-real"
													src="https://vignette.wikia.nocookie.net/logopedia/images/9/98/Real_Madrid.png/revision/latest?cb=20161111231747"
													alt="Third slide"
													width="225"
													height="228"
													onClick={() => {
														actions.pickATeam(2);
													}}
												/>

												<Carousel.Caption>
													<h3>Third slide label</h3>
													<p>
														Praesent commodo cursus magna, vel scelerisque nisl consectetur.
													</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>

										<Carousel.Item>
											<div className="carousel">
												<img
													className="d-block"
													src="https://vignette.wikia.nocookie.net/logopedia/images/4/49/Liverpool_FC_logo_%28introduced_2012%29.svg/revision/latest/scale-to-width-down/130?cb=20120705223744"
													alt="Third slide"
													width="225"
													height="228"
													onClick={() => {
														actions.pickATeam(5);
													}}
												/>

												<Carousel.Caption>
													<h3>Third slide label</h3>
													<p>
														Praesent commodo cursus magna, vel scelerisque nisl consectetur.
													</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>
									</Carousel>
								</React.Fragment>
							);
						} else {
							return <Match />;
						}
					}}
				</Context.Consumer>
			</div>
		);
	}
}
