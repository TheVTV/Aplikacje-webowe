import React, { useState } from "react";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarz: React.FC<KomentarzProps> = ({
  id,
  body,
  postId,
  likes,
  user,
}) => {
  const [likeCount, setLikeCount] = useState<number>(likes);

  const handleLike = () => setLikeCount((prev) => prev + 1);
  const handleDislike = () => setLikeCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div
      style={{
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "8px",
        position: "relative",
        width: "100%",
        maxWidth: "600px",
        margin: "40px auto",
        background:
          "linear-gradient(167deg, rgba(87,87,87,1) 0%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "16px",
          fontSize: "12px",
          color: "#666",
        }}
      >
        Post ID: {postId} | Comment ID: {id}
      </div>

      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#ccc",
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#999",
              position: "absolute",
              top: "8px",
            }}
          ></div>
          <div
            style={{
              width: "24px",
              height: "15px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "20px",
              borderBottomLeftRadius: "20px",
              backgroundColor: "#999",
              position: "absolute",
              top: "24px",
            }}
          ></div>
        </div>
        <div>
          <strong>{user.fullName}</strong> (@{user.username})
        </div>
      </div>

      <div style={{ marginBottom: "12px", textAlign: "left" }}>
        <p>{body}</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          justifyContent: "flex-end",
          fontSize: "14px",
        }}
      >
        <span style={{ marginLeft: "8px" }}>Liczba polubień: {likeCount}</span>
        <button
          onClick={handleLike}
          style={{
            padding: "4px 8px",
            fontSize: "12px",
            cursor: "pointer",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          👍
        </button>
        <button
          onClick={handleDislike}
          style={{
            padding: "4px 8px",
            fontSize: "12px",
            cursor: "pointer",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          👎
        </button>
      </div>
    </div>
  );
};

export default Komentarz;
