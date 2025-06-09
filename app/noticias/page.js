'use client';

export default function NoticiasPage() {
	return (
		<div id="page-wrapper" className="right-sidebar is-preload">
			<section id="header" className="wrapper">
				<div id="top-logo">
					<a href="/"><img src="/images/Logo.png" alt="Logo" id="logo-jpg" /></a>
				</div>

				<div id="logo">
					<h1><a href="/">Noticias</a></h1>
					<p>Se el primero en saberlo en nuestra sección de noticias</p>
				</div>

				<nav id="nav">
					<ul>
						<li className="current"><a href="/">Inicio</a></li>
						<li><a href="#footer">Registrarse</a></li>
						<li><a href="/noticias">Noticias</a></li>
					</ul>
				</nav>
			</section>

			<section id="main" className="wrapper style2">
				<div className="title">Entérate</div>
				<div className="container">
					<div className="row gtr-150">
						<div className="col-8 col-12-medium">
							<div id="content">
								{/* Noticia 1 */}
								<article id="noticia1" className="box post noticia visible">
									<header className="style1">
										<h2>Hallan una composición inédita de Mozart</h2>
										<p>La pieza tiene una duración de doce minutos y fue hallada en Alemania.</p>
									</header>
									<a href="#" className="image featured">
										<img src="/images/mozart.avif" alt="Mozart" />
									</a>
									<p>Una pieza musical escrita por un joven <strong>Wolfgang Amadeus Mozart</strong> fue descubierta en la Biblioteca Municipal de Leipzig. Fue hallada mientras se preparaba una nueva edición del Catálogo Köchel.</p>
									<p>Ahora será incluida en el próximo catálogo como “Ganz kleine Nachtmusik”. La pieza fue interpretada por dos violinistas y un violonchelista en la Ópera de Leipzig.</p>
								</article>

								{/* Noticia 2 */}
								<article id="noticia2" className="box post noticia">
									<header className="style1">
										<h2>Brian May se negó a que un "rapero gánster" usara una canción de Queen</h2>
										<p>«No promovemos la violencia», explicó el guitarrista.</p>
									</header>
									<a href="#" className="image featured">
										<img src="/images/queen.png" alt="Queen" />
									</a>
									<p>El guitarrista <strong>Brian May</strong> dijo que rechazaron propuestas para usar sus canciones en proyectos que no representen los valores de Queen.</p>
									<p>Contó que se negaron a permitir que "Don't Stop Me Now" fuera usada en una canción de rap por promover violencia o lenguaje ofensivo.</p>
									<p>Aunque aclaró que su música puede ser usada en muchos otros contextos, siempre que haya respeto por su legado.</p>
								</article>
							</div>
						</div>

						{/* Sidebar */}
						<div className="col-4 col-12-medium">
							<div id="sidebar">
								<section className="box">
									<header>
										<h2>Otras Noticias</h2>
									</header>
									<ul className="style2">
										<li>
											<article className="box post-excerpt">
												<a href="#noticia1" className="image left"><img src="/images/mozart.avif" alt="Mozart" /></a>
												<h3><a href="#noticia1">"200 años después"</a></h3>
												<p>Nueva partitura de Mozart descubierta</p>
											</article>
										</li>
										<li>
											<article className="box post-excerpt">
												<a href="#noticia2" className="image left"><img src="/images/queen.png" alt="Queen" /></a>
												<h3><a href="#noticia2">No promovemos la violencia</a></h3>
												<p>Queen rechaza uso de sus canciones para rap violento</p>
											</article>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Sitios recomendados */}
			<section id="highlights" className="wrapper style3">
				<div className="title">Portales informativos</div>
				<div className="container">
					<div className="row aln-center">
						<div className="col-4 col-12-medium">
							<section className="highlight">
								<a href="https://garajedelrock.com/" className="image featured"><img src="/images/gdr.png" alt="Garaje del Rock" /></a>
								<h3><a href="https://garajedelrock.com/">Garaje del Rock</a></h3>
								<p>Las mejores noticias sobre el mundo del Rock</p>
								<ul className="actions">
									<li><a href="https://garajedelrock.com/" className="button style1">Visitar</a></li>
								</ul>
							</section>
						</div>
						<div className="col-4 col-12-medium">
							<section className="highlight">
								<a href="https://www.classicfm.com/" className="image featured"><img src="/images/classicfm.png" alt="Classic FM" /></a>
								<h3><a href="https://www.classicfm.com/">Classic FM</a></h3>
								<p>Disfruta de noticias sobre música clásica y compositores.</p>
								<ul className="actions">
									<li><a href="https://www.classicfm.com/" className="button style1">Visitar</a></li>
								</ul>
							</section>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<section id="footer" className="wrapper">
				<div id="copyright">
					<ul>
						<li>&copy; Sonata.</li>
						<li>Design By: Andre Julian Granados 192329</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
