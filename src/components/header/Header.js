import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
					Привет, Добро Пожаловать на сайт! Мое имя, <em>Кирилл</em>
					</strong>
					<br />Я начинающий веб-разработчик
				</h1>
				<div className="header__text">
					<p>Здесь ты узнаешь мой путь как начинающего программиста. Также здесь приведены мои достижения в этой области и контакты чтобы со мной связаться.</p>
				</div>
				<a href="#!" className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;