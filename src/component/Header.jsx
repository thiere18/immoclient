import React from 'react'


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-default  fixed-top ">
                <div className="container ">
                    <a className="navbar-brand" href="#f">TrouverUnToit</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon bg-dark"></span></button>
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
                                {/* <a className="nav-link" href="#f">Contact</a> */}
                                <button type="button" className="btn btn-succes " data-toggle="modal" data-target="#odal">contact</button>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Modal --> */}
            <div id="odal" className="modal fade" role="dialog">
                <div className="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            {/* <h2 className=" ">Nous contacter</h2> */}
                        </div>
                        <div className="modal-body">
                            <div className=" height">
                                <div className="card card-body bg-dark">
                                    <div className="card-title text-center text-white">
                                        <h2 className="text-capitalize">Nous contacter</h2>
                                    </div>
                                    {/* end of title */}
                                    <form  >
                                        {/* Nom d'utilisateur */}
                                        <div className="input-group my-3">
                                            <input className="form-control form-control-lg outline-danger "
                                                type="text" name="username"
                                                //   value={username}
                                                placeholder="Nom"
                                            //   onChange={(e) =>(setUsername(e.target.value))}
                                            />
                                        </div>
                                        {/* mot de passe */}
                                        <div className="input-group my-3 ">

                                            <input className="form-control form-control-lg outline-danger "
                                                type="email"
                                                name='username'
                                                //   value={password}
                                                placeholder="email" />

                                        </div>

                                        <div className="form" >
                                            <textarea className="form-control my-3" rows="5"
                                                placeholder="Tapez votre message ici"
                                            >

                                            </textarea>
                                        </div>
                                        <button type="submit"
                                            className="btn btn-outline-success btn-block text-uppercase"
                                        >Envoyer</button>
                                    </form>

                                </div>

                            </div>      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Annuler</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Header
