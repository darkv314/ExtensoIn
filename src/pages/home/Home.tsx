import Description from "../../components/text/description/Description";
import Title from "../../components/text/tittle/Title";
import "./Home.css";
import banner from "../../assets/banner-1.jpg";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
