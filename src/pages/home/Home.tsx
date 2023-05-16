import Description from "../../components/text/description/Description";
import Title from "../../components/text/tittle/Title";
import "./Home.css";
import banner from "../../assets/banner-1.jpg";
import MainButton from "../../components/buttons/MainButton";

function Home() {
  return (
    <>
      <div className="background">
        <section className="first__section">
          <div className="div__left">
            <Title text="InExperto" />
            <Description
              title="Donde la pasión supera a la experiencia"
              content="Conecta a empleadores dispuestos a brindar oportunidades de crecimiento con buscadores de empleo ambiciosos y motivados. InExperto se enfoca en el potencial, las habilidades transferibles y la pasión de cada individuo, proporcionándoles una plataforma segura para crear perfiles y presentar sus habilidades. Es un lugar donde la experiencia no es un requisito, y donde se promueve la diversidad, la inclusión y el desarrollo profesional."
            />
          </div>
          <div className="div__right">
            <img width={400} src={banner} />
          </div>
        </section>
        <section className="second__section">
          <Title text="¿Cómo funciona?" />
          <div className="second__section__content">
            <div className="second__section__content__item">
              <h3>1. Crea tu perfil</h3>
              <p>
                Crea tu perfil y destaca tus habilidades, experiencia y
                conocimientos.
              </p>
            </div>
            <div className="second__section__content__item">
              <h3>2. Busca empleo</h3>
              <p>
                Explora las ofertas de empleo y aplica a las que más se ajusten
                a tus intereses.
              </p>
            </div>
            <div className="second__section__content__item">
              <h3>3. ¡Listo!</h3>
              <p>
                Espera a que los empleadores se contacten contigo para una
                entrevista.
              </p>
            </div>
          </div>
        </section>
        <section className="third__section">
          <div className="div__left">
            <Title text="Publica un trabajo" />
            <Description
              title="¿Buscas empleados?"
              content="Publica un trabajo y encuentra a la persona ideal para tu empresa. InExperto te permite encontrar a personas con habilidades y conocimientos que se ajusten a tus necesidades. ¡Publica un trabajo y encuentra a tu próximo empleado!"
            />
          </div>
          <div className="div__right">
            <MainButton onClick={() => {}} text="PUBLICAR TRABAJO" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
