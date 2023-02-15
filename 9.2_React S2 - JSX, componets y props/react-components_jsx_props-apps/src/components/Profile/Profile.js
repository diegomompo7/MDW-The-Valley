import "./Profile.css";

const Profile = (props) => {

    return (
        <div className="profile">
            <h3 className="profile__name">{props.nombre}</h3>
            <p className="profile__description">{props.descripcion}</p>
        </div>
    );
}

export default Profile;