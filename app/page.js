'use client';

export default function Page() {
	return (
		<div id="page-wrapper" className="homepage is-preload">
			<section id="header" className="wrapper">
				<div id="top-logo">
					<a href="/"><img src="/images/Logo.png" alt="Logo" id="logo-jpg" /></a>
				</div>

				<div id="logo">
					<h1><a href="/">Sonata</a></h1>
					<p>Tu Sonido Ideal</p>
				</div>

				<nav id="nav">
					<ul>
						<li className="current"><a href="/">Inicio</a></li>
						<li><a href="#footer">Registrarse</a></li>
						<li><a href="/noticias">Noticias</a></li>
					</ul>
				</nav>
			</section>

			<section id="intro" className="wrapper style1">
				<div className="title">Quienes somos</div>
				<div className="container">
					<p className="style1">Esta página es un blog educativo dedicado a la:</p>
					<p className="style2">Introducción Básica Musical</p>
					<p className="style3">
						Para páginas similares visita <strong><a href="https://www.8notes.com/">8Notes.com</a></strong>,
						<strong><a href="https://www.cifraclub.com/">CifraClub.com</a></strong> y
						<strong><a href="https://pianonanny.com/">PianoNanny.com</a></strong>
					</p>
				</div>
			</section>

			<section id="main" className="wrapper style2">
				<div className="title">Introducción</div>
				<div className="container">
					<a href="#" className="image featured">
						<img src="/images/imagen-publicidad.png" alt="Publicidad" id="imagen-publicidad" />
					</a>

					<section id="features">
						<header className="style1">
							<h2>Aprende lo Básico Sobre la Música</h2>
							<p>Esta Página Tendrá las Siguientes Características:</p>
						</header>
						<div className="feature-list">
							<div className="row">
								<div className="col-6 col-12-medium">
									<section>
										<h3 className="icon solid fa-music">Información sobre partituras</h3>
										<p>Lo básico que deberías saber sobre teoría musical: escalas, acordes, ritmos y más.</p>
									</section>
								</div>
								<div className="col-6 col-12-medium">
									<section>
										<h3 className="icon solid fa-bell">Noticias y Eventos</h3>
										<p>Mantente informado sobre cualquier noticia y evento relacionados a la música.</p>
									</section>
								</div>
								<div className="col-6 col-12-medium">
									<section>
										<h3 className="icon solid fa-guitar">Biblioteca de Acordes</h3>
										<p>Una lista de los acordes más usados para guitarra y piano.</p>
									</section>
								</div>
								<div className="col-6 col-12-medium">
									<section>
										<h3 className="icon solid fa-icons">Géneros Musicales</h3>
										<p>Información sobre los géneros más famosos.</p>
									</section>
								</div>
							</div>
						</div>
						<ul className="actions special">
							<li><a href="#" className="button style1 large">Comenzar</a></li>
						</ul>
					</section>
				</div>
			</section>

			<section id="footer" className="wrapper">
				<div className="title">Usuario</div>
				<div className="container">
					<header className="style1">
						<h2>Iniciar Sesión</h2>
						<p>Si no tiene cuenta, ingrese sus datos.</p>
					</header>
					<div className="row">
						<div className="col-6 col-12-medium">
							<section>
								<form method="post" action="#" id="form">
									<div className="row gtr-50">
										<div className="col-6 col-12-small">
											<input type="text" name="name" placeholder="Nombre Completo" />
										</div>
										<div className="col-6 col-12-small">
											<input type="text" name="email" placeholder="Correo Electrónico" />
										</div>
										<div className="col-6 col-12-small">
											<select name="tipo-documento">
												<option value="">Tipo de documento</option>
												<option value="CC">Cédula de Ciudadanía</option>
												<option value="TI">Tarjeta de identidad</option>
												<option value="CE">Cédula Extranjera</option>
											</select>
										</div>
										<div className="col-6 col-12-small">
											<input type="number" name="numero-documento" placeholder="Número de documento" />
										</div>
										<div className="col-6 col-12-small">
											<input type="tel" name="telefono" placeholder="Número de teléfono" />
										</div>
										<div className="col-6 col-12-small">
											<select name="sexo">
												<option value="masculino">Masculino</option>
												<option value="femenino">Femenino</option>
												<option value="otro">Otro</option>
											</select>
										</div>
										<div className="col-6 col-12-small">
											<input type="date" name="fecha-nacimiento" />
										</div>
										<div className="col-6 col-12-small">
											<select name="pais">
												<option value="colombia">Colombia</option>
												<option value="venezuela">Venezuela</option>
												<option value="ecuador">Ecuador</option>
												<option value="peru">Perú</option>
												<option value="otro">Otro</option>
											</select>
										</div>
										<div className="col-6 col-12-small">
											<input type="text" name="departamento" placeholder="Departamento" />
										</div>
										<div className="col-6 col-12-small">
											<input type="text" name="ciudad" placeholder="Ciudad" />
										</div>
										<div className="col-12">
											<textarea name="message" placeholder="Mensaje" rows={4}></textarea>
										</div>
										<div className="col-12">
											<ul className="actions">
												<li><input type="submit" className="style1" value="Enviar" /></li>
												<li><input type="reset" className="style2" value="Limpiar" /></li>
											</ul>
										</div>
									</div>
								</form>
							</section>
						</div>
						<div className="col-6 col-12-medium">
							<section className="feature-list small">
								<div className="row">
									<div className="col-6 col-12-small">
										<section>
											<h3 className="icon solid fa-home">Dirección</h3>
											<p>Sede El Algodonal<br />Vía Acolsure, Ocaña (N.S)<br />Colombia</p>
										</section>
									</div>
									<div className="col-6 col-12-small">
										<section>
											<h3 className="icon solid fa-comment">Social</h3>
											<p><a href="https://ufpso.edu.co/">ufpso.cocm</a></p>
										</section>
									</div>
									<div className="col-6 col-12-small">
										<section>
											<h3 className="icon solid fa-envelope">Email</h3>
											<p><a href="#">ajgranadosv@ufpso.edu.co</a></p>
										</section>
									</div>
									<div className="col-6 col-12-small">
										<section>
											<h3 className="icon solid fa-phone">Teléfono</h3>
											<p>(+57) 313 467 5190</p>
										</section>
									</div>
								</div>
							</section>
						</div>
					</div>
					<div id="copyright">
						<ul>
							<li>&copy; Sonata.</li>
							<li>Design By: Andre Julian Granados 192329</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
