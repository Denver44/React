import { useState, useEffect } from "react";
import { fetchPosts } from "components/api/helper";
import PostDetail from "components/PostDetail/PostDetail";
import { useQuery, useQueryClient } from "react-query";

import { Spinner, Alert } from "reactstrap";

const maxPostPage = 10;

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [Data, setData] = useState([]);
  const { data, isError, error, isLoading } = useQuery(
    ["posts", currentPage],
    () => fetchPosts(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true, // To keep the data in cache if somebody goes back to the page
    }
  );

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextPage], () =>
        fetchPosts(nextPage)
      );
    }
  }, [currentPage, queryClient]);

  useEffect(() => {
    if (data?.data) setData(data.data);
  }, [data]);

  if (isLoading) {
    return <Spinner animation="border" />;
  }
  if (isError) {
    return <Alert variant={"info"}>{error.toString()}</Alert>;
  }

  return (
    <>
      <ul>
        {Data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
};

export default Posts;
