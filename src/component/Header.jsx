import React from 'react'

function Header() {
    return (
        <div>

	<nav className="navbar navbar-expand-lg navbar-primary bg-warning fixed-top ">
		<div className="container ">
			<a className="navbar-brand" href="#f">TrouverUnToit</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">Accueil</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/annonce">Publier une annonce</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/login">Acces utilisateur</a>
					</li>
					{/* <li className="nav-item">
						<a className="nav-link" href="#f"></a>
					</li> */}
					<li className="nav-item">
						<a className="nav-link" href="#f">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

			</div>
	
    )
}

export default Header
