import { useNavigate } from "react-router-dom";
import Title from "../../components/text/tittle/Title";
import PageCard from "../../views/cards/PagesCard/PagesCard";
import PostCard from "../../views/cards/PostCard/PostCard";
import ProfileCard from "../../views/cards/ProfileCard/ProfileCard";
import RecommendationWorkCard from "../../views/cards/ReccomendationWorksCard/RecommendationWorkCard";
import "./Feed.css";
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
  const navigate = useNavigate();

  return (
    <>
      <section className="grid__feed">
        <div className="feed_profile">
          <Title text="Perfil" />
          <div className="profile__card_feed" onClick={() => navigate("/profile")}>
            <ProfileCard
              name={faker.person.fullName()}
              imageSrc={faker.image.avatar()}
              imageAlt={faker.person.fullName()}
              description={faker.lorem.paragraph(3)}
            />
          </div>

          <Title text="Mis paginas" />

          <PageCard pages={pages} />
        </div>
        <div className="feed_posts">
          <Title text="Publicaciones" />
          {postList.map((post, index) => {
            return (
              <PostCard
                title={post.title}
                author={post.author}
                description={post.description}
                image={post.image}
                onCLickButton={() => {}}
                key={index}
              />
            );
          })}
        </div>
        <div className="feed_recommendations">
          <RecommendationWorkCard works={workList} />
        </div>
      </section>
    </>
  );
}

export default Feed;
