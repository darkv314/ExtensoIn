import PostCard from "../../views/cards/PostCard/PostCard";
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

  return (
    <>
      <section className="grid__feed">
        <div className="feed_posts">1</div>
        <div>
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
        <div>3</div>
      </section>
    </>
  );
}

export default Feed;
