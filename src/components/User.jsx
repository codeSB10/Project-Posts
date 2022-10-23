import { useNavigate } from "react-router-dom";

export const User = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="user">
      <div className="user-card" onClick={() => navigate(`/${user.id}`)}>
        <div className="user-card__container">
          <h3>{user.name}</h3>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Website:</b>
            {user.website}
          </p>
        </div>
      </div>
    </div>
  );
};
