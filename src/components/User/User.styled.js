import styled from "styled-components";

export const NameText = styled.p`
color: red;
&:hover{
    color: green;
}
`
export const EmailText = styled.p`
color: blue;
&:hover{
    color: yellow;
}
`
export const SpanText = styled.span`
color: brown;
background-color: ${({isRed}) => isRed ? 'red' : 'yellow'};

${NameText}:hover & {
    color: black;
}
`
