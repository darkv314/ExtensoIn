import Avvvatars from "avvvatars-react";
import Title from "../../components/text/tittle/Title";
//import PageCard from "../../views/cards/PagesCard/PagesCard";
import PostCard from "../../views/cards/PostCard/PostCard";
//import ProfileCard from "../../views/cards/ProfileCard/ProfileCard";
import RecommendationWorkCard from "../../views/cards/ReccomendationWorksCard/RecommendationWorkCard";
import "./Profile.css";
//import { faker, tr } from "@faker-js/faker";
import { faker } from "@faker-js/faker";
import Description from "../../components/text/description/Description";

function Profile() {
  const bannerImg = faker.image.urlPicsumPhotos();
  const nombre = faker.person.firstName();
  const apellido = faker.person.lastName();
  //@ts-ignore
  const postList = Array.from(Array(10)).map((_, index) => ({
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    description: faker.lorem.paragraph(3),
    id: faker.database.mongodbObjectId(),
    image: faker.image.urlPicsumPhotos(),
  }));
  //@ts-ignore
  const works = Array.from(Array(3)).map((_, index) => ({
    name: faker.lorem.words(3),
    description: faker.lorem.paragraph(3),
    imageURL: faker.image.urlPicsumPhotos(),
    postulate: faker.lorem.words(3),
    }));

  return (
    <>
      <section className="grid__profile__page">
        <div>
          <div className="profile__page_profile">
            <div
              className="profile__page-pictures"
              style={{
                backgroundImage: `url(${bannerImg})`,
              }}
            >
              <div className="profile__page-picture">
                <Avvvatars
                  border
                  size={92}
                  value="a"
                  displayValue={`${nombre} ${apellido}`}
                />
              </div>
            </div>
          </div>
          <Description title="Sobre mi" content={faker.lorem.paragraph(3)} />

          <div className="profile__expirience-list">
            <Title text="Mi experiencia" />
            {postList.map((post, index) => {
              return (
                <PostCard
                  title={post.title}
                  author={post.author}
                  description={post.description}
                  image={post.image}
                  key={index}
                  page={true}
                />
              );
            })}
          </div>
        </div>

        <div className="profile__page_recommendations">
          <RecommendationWorkCard works={works} />
        </div>
      </section>
    </>
  );
}

export default Profile;
