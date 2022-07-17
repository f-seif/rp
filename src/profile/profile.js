import PropTypes from "prop-types";



const Profile = ({data, handleName}) => {
  return (
    <>
      <image>Image</image>
      <button style={{height:"40px"}} onClick={() => handleName(data.fullName)}>Click me</button>
      <p>{data.fullName}</p>
      <p>{data.bio}</p>
      <p>{data.profession}</p>
    </>
  );
}

Profile.defaultProps = {
  data.fullName : "Ahmed",
  data.bio: "Ahmed's bio",
  data.profession: "Chef"
};

Profile.propTypes = {
 data: PropTypes.object,
 handleName: PropTypes.func,
};



export default Profile;
