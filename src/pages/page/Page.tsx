import Title from "../../components/text/tittle/Title";
import PageCard from "../../views/cards/PagesCard/PagesCard";
import PostCard from "../../views/cards/PostCard/PostCard";
import PostulanteCard from "../../views/cards/PostulanteCard/PostulanteCard";
import ProfileCard from "../../views/cards/ProfileCard/ProfileCard";
import RecommendationWorkCard from "../../views/cards/ReccomendationWorksCard/RecommendationWorkCard";
import "./Page.css";
import { faker } from "@faker-js/faker";

function Feed() {
  //  make a list of posts size 10
  const postList: {
    title: string;
    author: string;
    description: string;
    id: string;
    image: string;
  }[] = Array.from(Array(10)).map((_, index) => ({
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    description: faker.lorem.paragraph(3),
    id: faker.database.mongodbObjectId(),
    image: faker.image.urlPicsumPhotos(),
  }));

  const workList = Array.from(Array(3)).map((_, index) => ({
    name: faker.lorem.words(3),
    description: faker.lorem.paragraph(3),
    imageURL: faker.image.urlPicsumPhotos(),
    postulate: faker.lorem.words(3),
  }));

  const pages = Array.from(Array(3)).map((_, index) => ({
    name: faker.lorem.words(3),
    iconURL: faker.image.avatarGitHub(),
  }));

  const postulante = Array.from(Array(4)).map((_, index) => ({
    urlImage: faker.image.avatar(),
    name: faker.person.fullName(),
    catchPhrase: faker.company.catchPhraseAdjective(),
  }));
  return (
    <>
      <section className="grid__page">
        <div className="feed_profile">
          <Title text="Perfil" />
          <ProfileCard
            name={faker.person.fullName()}
            imageSrc={faker.image.avatarGitHub()}
            imageAlt={faker.company.name()}
            description={faker.lorem.paragraph(3)}
          />
        </div>
        <div className="feed_posts">
          <Title text="Mis Publicaciones" />
          {postList.map((post, index) => {
            return (
              <PostCard
                title={post.title}
                author={post.author}
                description={post.description}
                image={post.image}
                page={true}
                onCLickButton={() => {}}
                key={index}
              />
            );
          })}
        </div>
        <div className="feed_postulantes">
          <Title text="Postulantes" />
          {postulante.map((postulante, index) => {
            return (
              <PostulanteCard
                urlImage={postulante.urlImage}
                name={postulante.name}
                catchPhrase={postulante.catchPhrase}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Feed;
