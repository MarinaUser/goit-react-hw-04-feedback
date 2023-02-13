import PropTypes from 'prop-types';
import { BtnItem, BtnList, Button } from './FeedbackOptions.styled';

 const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <BtnList>
      {options.map(option => (
        <BtnItem key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </BtnItem>
      ))}
    </BtnList>
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};