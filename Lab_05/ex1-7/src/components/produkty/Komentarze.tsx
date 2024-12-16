import React, { useEffect, useState } from "react";
import Komentarz from "./Komentarz";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
  user: User;
  likes: number;
}

const Komentarze: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => {
        const mappedComments = data.comments.map((comment: any) => ({
          id: comment.id,
          body: comment.body,
          postId: comment.postId,
          user: {
            id: comment.user.id,
            username: comment.user.username,
            fullName: comment.user.fullName,
          },
          likes: comment.likes,
        }));
        setComments(mappedComments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania komentarzy:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Ładowanie komentarzy...</p>;
  }

  return (
    <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
      <h3>Komentarze</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Komentarz
            key={comment.id}
            id={comment.id}
            body={comment.body}
            postId={comment.postId}
            likes={comment.likes}
            user={{
              id: comment.user.id,
              username: comment.user.username,
              fullName: comment.user.fullName,
            }}
          />
        ))
      ) : (
        <p>Brak komentarzy do wyświetlenia.</p>
      )}
    </div>
  );
};

export default Komentarze;
