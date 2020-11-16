const allPosts = [
  { year: "2019", month: "09", title: "React Router v5.1 released" },
  { year: "2019", month: "09", title: "React 17.0 released" },
  { year: "2019", month: "10", title: "React Conf 2019" },
  { year: "2019", month: "10", title: "Transition of Node.js 12 to LTS" },
];

const PostList = (props) => {
  const params = props.match.params;

  const filteredPosts = allPosts.filter(
    (post) => post.year === params.year && post.month === params.month
  );
  return (
    <div>
      <h2>
        Posts for {params.month}/{params.year}
      </h2>
      {filteredPosts.map((post) => (
        <h3>{post.title}</h3>
      ))}
    </div>
  );
};

export default PostList;
