import PropTypes from 'prop-types'

export default  function User(props) {

  const { firstName, lastName, age, hobbies } = props;
  return(
    <div>
      <h2>Nom complet : {firstName} {lastName}</h2>
      <p>Âge : {age}</p>
      <h3>Hobbies :</h3>
      <ul>
        <li>
          {hobbies}
        </li>
      </ul>
    </div>
  )
}
User.propTypes = {
  firstName: PropTypes.string.isRequired, 
  lastName: PropTypes.string.isRequired,  
  age: PropTypes.number.isRequired,    
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired
};
  