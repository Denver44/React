import { useState, useEffect } from "react";
import { fetchComments, deletePost, updatePost } from "components/api/helper";
import { useQuery, useMutation } from "react-query";
import { Spinner, Alert } from "reactstrap";

const PostDetail = ({ post }) => {
  const [comments, setComments] = useState([]);
  // const { data, isLoading, isError, error } = useQuery(`post-${post.id}`, () =>fetchComments(post.id) );
  const { data, isLoading, isError, error } = useQuery(
    ["comments", post.id],
    () => fetchComments(post.id)
  );
  const deleteMutation = useMutation((postId) => deletePost(postId));
  const updateMutation = useMutation((postId) => updatePost(postId));

  useEffect(() => {
    if (data?.data) setComments(data.data);
  }, [data]);

  if (isLoading) {
    return <Spinner animation="border" />;
  }
  if (isError) {
    return <Alert variant={"info"}>{error.toString()}</Alert>;
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post?.title}</h3>
      <button onClick={() => deleteMutation.mutate(post?.id)}>Delete</button>
      {deleteMutation.isError && (
        <p style={{ color: "red" }}>Error Deleting the post</p>
      )}
      {deleteMutation.isLoading && (
        <p style={{ color: "blue" }}>Post Deleted on Server</p>
      )}
      {deleteMutation.isSuccess && (
        <p style={{ color: "green" }}>
          Post Deleting not Delete on Client side
        </p>
      )}
      <button onClick={() => updateMutation.mutate(post?.id)}>
        Update title
      </button>
      {updateMutation.isError && (
        <p style={{ color: "red" }}>Error Update the post</p>
      )}
      {updateMutation.isLoading && (
        <p style={{ color: "blue" }}>Post Update on Server</p>
      )}
      {updateMutation.isSuccess && (
        <p style={{ color: "green" }}>Post Updated but not on Client side</p>
      )}
      <p>{post?.body}</p>
      <h4>Comments</h4>
      {comments?.map((comment) => (
        <li key={comment?.id}>
          {comment?.email}: {comment?.body}
        </li>
      ))}
    </>
  );
};

export default PostDetail;
