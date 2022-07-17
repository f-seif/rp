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

Profile.propTypes = {
 fullName: PropTypes.string,
 bio: PropTypes.string,
 profession: PropTypes.string
};



export default Profile;
