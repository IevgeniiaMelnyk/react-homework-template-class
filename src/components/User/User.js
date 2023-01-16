import PropTypes from 'prop-types'
import { NameText, EmailText, SpanText} from './User.styled';

export const User = ({ user: { name, email } }) => {
    
    const isEmailEndBiz = email.endsWith('biz');

    return (
        <>
            <NameText>Name: <SpanText>{name}</SpanText></NameText>
            <EmailText>Email: <SpanText isRed={isEmailEndBiz}>{email}</SpanText></EmailText>
        </>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired
};